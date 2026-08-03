export default function Minerals() {
  const minerals = [
    "Calcium",
    "Magnesium",
    "Potassium",
    "Sodium",
    "Bicarbonates",
    "Silica",
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "42px" }}>
        Essential Minerals
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {minerals.map((item) => (
          <div
            key={item}
            style={{
              background: "#e0f7ff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,.1)",
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}