import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://aquadude-backend.onrender.com/api/orders"
      );

      setOrders(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const markDelivered = async (id) => {
    try {
      await axios.put(
        `https://aquadude-backend.onrender.com/api/orders/${id}`
      );

      fetchOrders();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://aquadude-backend.onrender.com/api/orders/${id}`
      );

      fetchOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "40px", overflowX: "auto" }}>
      <h2>Customer Orders</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          minWidth: "1100px",
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
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td
                colSpan="9"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No Orders Found
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.product}</td>

                <td>{order.quantity}</td>

                <td>₹{order.price}</td>

                <td
                  style={{
                    fontWeight: "bold",
                    color: "#0284c7",
                  }}
                >
                  ₹{order.totalPrice}
                </td>

                <td>
                  <span
                    style={{
                      color:
                        order.status === "Delivered"
                          ? "green"
                          : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  {order.status === "Pending" ? (
                    <button
                      onClick={() =>
                        markDelivered(order._id)
                      }
                      style={{
                        padding: "8px 14px",
                        background: "#16a34a",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                    >
                      Deliver
                    </button>
                  ) : (
                    <span
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        marginRight: "10px",
                      }}
                    >
                      ✅ Delivered
                    </span>
                  )}

                  <button
                    onClick={() =>
                      deleteOrder(order._id)
                    }
                    style={{
                      padding: "8px 14px",
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}