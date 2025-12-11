import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: parseInt(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY",
      });
      
      console.log("Order placed successfully:", response.data);
      closeBuyWindow();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order");
      console.error("Error placing order:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0"
            />
          </fieldset>
        </div>
      </div>

      {error && <div className="alert alert-danger mt-2">{error}</div>}

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button 
            className="btn btn-blue" 
            onClick={handleBuyClick}
            disabled={loading}
          >
            {loading ? "Placing..." : "Buy"}
          </button>
          <button 
            className="btn btn-grey" 
            onClick={handleCancelClick}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;