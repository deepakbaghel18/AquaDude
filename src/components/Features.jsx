export default function Features() {
  const features = [
    "RO Purified",
    "UV Sterilized",
    "UF Filtration",
    "Mineral Enriched",
    "Food Grade Bottles",
    "Same Day Delivery",
  ];

  return (
    <section
      style={{
        padding: "70px 40px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "40px", marginBottom: "40px" }}>
        Why Choose AquaDude?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {features.map((item) => (
          <div
            key={item}
            style={{
              background: "#f0f9ff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}