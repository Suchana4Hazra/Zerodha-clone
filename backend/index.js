require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require('./model/HoldingsModel');
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const { UsersModel } = require('./model/UsersModel'); 

const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || 'Jwt token created by suchana'

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", async(req,res)=> {

//     let HoldingList = [
    //     {
    //   name: "BHARTIARTL",
    //   qty: 2,
    //   avg: 538.05,
    //   price: 541.15,
    //   net: "+0.58%",
    //   day: "+2.99%",
    // },
    // {
    //   name: "HDFCBANK",
    //   qty: 2,
    //   avg: 1383.4,
    //   price: 1522.35,
    //   net: "+10.04%",
    //   day: "+0.11%",
    // },
    // {
    //   name: "HINDUNILVR",
    //   qty: 1,
    //   avg: 2335.85,
    //   price: 2417.4,
    //   net: "+3.49%",
    //   day: "+0.21%",
    // },
    // {
    //   name: "INFY",
    //   qty: 1,
    //   avg: 1350.5,
    //   price: 1555.45,
    //   net: "+15.18%",
    //   day: "-1.60%",
    //   isLoss: true,
    // },
    // {
    //   name: "ITC",
    //   qty: 5,
    //   avg: 202.0,
    //   price: 207.9,
    //   net: "+2.92%",
    //   day: "+0.80%",
    // },
    // {
    //   name: "KPITTECH",
    //   qty: 5,
    //   avg: 250.3,
    //   price: 266.45,
    //   net: "+6.45%",
    //   day: "+3.54%",
    // },
    // {
    //   name: "M&M",
    //   qty: 2,
    //   avg: 809.9,
    //   price: 779.8,
    //   net: "-3.72%",
    //   day: "-0.01%",
    //   isLoss: true,
    // },
    // {
    //   name: "RELIANCE",
    //   qty: 1,
    //   avg: 2193.7,
    //   price: 2112.4,
    //   net: "-3.71%",
    //   day: "+1.44%",
    // },
    // {
    //   name: "SBIN",
    //   qty: 4,
    //   avg: 324.35,
    //   price: 430.2,
    //   net: "+32.63%",
    //   day: "-0.34%",
    //   isLoss: true,
    // },
    // {
    //   name: "SGBMAY29",
    //   qty: 2,
    //   avg: 4727.0,
    //   price: 4719.0,
    //   net: "-0.17%",
    //   day: "+0.15%",
    // },
    // {
    //   name: "TATAPOWER",
    //   qty: 5,
    //   avg: 104.2,
    //   price: 124.15,
    //   net: "+19.15%",
    //   day: "-0.24%",
    //   isLoss: true,
    // },
    // {
    //   name: "TCS",
    //   qty: 1,
    //   avg: 3041.7,
    //   price: 3194.8,
    //   net: "+5.03%",
    //   day: "-0.25%",
    //   isLoss: true,
    // },
    // {
    //   name: "WIPRO",
    //   qty: 4,
    //   avg: 489.3,
    //   price: 577.75,
    //   net: "+18.08%",
    //   day: "+0.32%",
    // },
    // ];

//     HoldingList.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         })
//         newHolding.save();
//     })
//     res.send("Done addHoldings")
// })

// app.get("/addPositions", async (req,res) => {

//     let tempPositions = [
    // {
    //   product: "CNC",
    //   name: "EVEREADY",
    //   qty: 2,
    //   avg: 316.27,
    //   price: 312.35,
    //   net: "+0.58%",
    //   day: "-1.24%",
    //   isLoss: true,
    // },
    // {
    //   product: "CNC",
    //   name: "JUBLFOOD",
    //   qty: 1,
    //   avg: 3124.75,
    //   price: 3082.65,
    //   net: "+10.04%",
    //   day: "-1.35%",
    //   isLoss: true,
    // },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done addPositions");
// })

const verifyToken = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({error: "No token Provided"});
    }
    try{

        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
    return next();
    } catch(err){
    return res.status(401).json({ error: "Invalid token" });
    }
}

// Register endpoint
app.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UsersModel({
      email,
      password: hashedPassword,
      name
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Find user
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Protected endpoint - get user profile
app.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await UsersModel.findById(req.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    // console.log(allHoldings);
    res.json(allHoldings);
})

app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find({});
    // console.log(allHoldings);
    res.json(allPositions);
})

app.get("/allOrders", async(req,res) => {
    try {
        let allOrders = await OrdersModel.find({});
        console.log("Orders found:", allOrders);
        res.json(allOrders);
    } catch(err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({ error: err.message });
    }
})

// Get user's orders only
app.get("/myOrders", verifyToken, async (req, res) => {
  try {
    let userOrders = await OrdersModel.find({ userId: req.userId });
    res.json(userOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: err.message });
  }
});

// app.post("/newOrder", verifyToken, async(req, res) => {
//    let newOrder = new OrdersModel({
//         name: req.body.name,
//         qty: req.body.qty,
//         price: req.body.price,
//         mode: req.body.mode,
//         userId: req.userId,
//         date: new Date()
//    });
//    await newOrder.save();
//    res.send("Order Saved!")
// })

app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      userId: req.userId   
    });

    await newOrder.save();
    res.status(201).json({ message: "Order Saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User clicks BUY
//       ↓
// React sends data using axios.post()
//       ↓
// Express receives request at /newOrder
//       ↓
// req.body parses incoming JSON
//       ↓
// Mongoose creates new document
//       ↓
// MongoDB stores the data
//       ↓
// Server sends "Order Saved!" response


// Connect to Mongo first, then start the server so connection errors are visible
mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("app started");
      console.log("db-connected");
      console.log("MONGO_URL=", URI);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

