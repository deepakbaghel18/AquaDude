
import Dashboard from "./Dashboard";
import Orders from "./Orders";

export default function Admin() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#0284c7",
        }}
      >
        AquaDude Admin Panel
      </h1>

      <Dashboard />

      <Orders />
    </div>
  );
}