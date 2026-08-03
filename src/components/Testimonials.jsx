export default function Testimonials() {
  return (
    <section
      style={{
        background: "#f0f9ff",
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "40px" }}>
        What Our Customers Say
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "300px",
          }}
        >
          ⭐⭐⭐⭐⭐

          <p>
            Excellent quality water and quick delivery.
          </p>

          <b>Rahul</b>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "300px",
          }}
        >
          ⭐⭐⭐⭐⭐

          <p>
            Best alkaline water service in Delhi.
          </p>

          <b>Amit</b>
        </div>
      </div>
    </section>
  );
}