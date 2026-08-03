import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get("https://aquadude-backend.onrender.com/api/orders");

      const orders = res.data.data;

      setTotalOrders(orders.length);

      setPendingOrders(
        orders.filter((order) => order.status === "Pending").length
      );

      setDeliveredOrders(
        orders.filter((order) => order.status === "Delivered").length
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "40px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          background: "#0284c7",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "220px",
        }}
      >
        <h3>Total Orders</h3>
        <h1>{totalOrders}</h1>
      </div>

      <div
        style={{
          background: "#16a34a",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "220px",
        }}
      >
        <h3>Delivered</h3>
        <h1>{deliveredOrders}</h1>
      </div>

      <div
        style={{
          background: "#f59e0b",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "220px",
        }}
      >
        <h3>Pending</h3>
        <h1>{pendingOrders}</h1>
      </div>
    </div>
  );
}