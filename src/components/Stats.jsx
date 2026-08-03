export default function Stats() {
  const stats = [
    { value: "5000+", title: "Happy Customers" },
    { value: "20L", title: "Premium Bottle" },
    { value: "24/7", title: "Customer Support" },
    { value: "100%", title: "Quality Checked" },
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#0284c7",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        AquaDude in Numbers
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              textAlign: "center",
              background: "rgba(255,255,255,.15)",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h1 style={{ fontSize: "55px" }}>{item.value}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}