import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://aquadude-backend.onrender.com/api/orders");
      setOrders(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const markDelivered = async (id) => {
    try {
      await axios.put(`https://aquadude-backend.onrender.com/api/orders/${id}`);

      fetchOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Customer Orders</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
        border="1"
      >
        <thead
          style={{
            background: "#0284c7",
            color: "white",
          }}
        >
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.product}</td>
              <td>₹{order.price}</td>
              <td>{order.status}</td>

              <td>
                {order.status === "Pending" ? (
                  <button
                    onClick={() => markDelivered(order._id)}
                    style={{
                      padding: "8px 15px",
                      background: "#16a34a",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Deliver
                  </button>
                ) : (
                  "✅ Delivered"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}