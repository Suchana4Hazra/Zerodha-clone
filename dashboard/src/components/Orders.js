import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const intervalFetch = () => {
      if (!mounted) return;
      fetchOrders();
    };

    fetchOrders();
    const id = setInterval(intervalFetch, 5000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await API.get("/allOrders");  // Get user's orders only
      setOrders(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch orders");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "Invalid Date";
    }
  };

  if (loading) return <div className="orders"><p>Loading orders...</p></div>;
  if (error) return <div className="orders alert alert-danger">{error}</div>;

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders</p>
          <Link to="/" className="btn btn-primary">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td><span className={`badge ${order.mode === "BUY" ? "bg-success" : "bg-danger"}`}>{order.mode}</span></td>
                <td>{formatDate(order.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;