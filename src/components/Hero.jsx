export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0284c7,#0ea5e9,#38bdf8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "60px 8%",
        color: "white",
      }}
    >
      {/* Left Side */}
      <div style={{ flex: 1, minWidth: "320px" }}>
        <h1
          style={{
            fontSize: "70px",
            lineHeight: "1.1",
            marginBottom: "20px",
          }}
        >
          Premium
          <br />
          20L Alkaline
          <br />
          Water
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "550px",
            marginBottom: "35px",
          }}
        >
          Pure • Fresh • Mineral Rich Drinking Water
          <br />
          RO + UV + UF Purified
          <br />
          Fast Home Delivery Across Delhi
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "white",
              color: "#0284c7",
              border: "none",
              padding: "16px 35px",
              borderRadius: "40px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🛒 Order Now
          </button>

          <a
            href="tel:+919911202528"
            style={{
              background: "#16a34a",
              color: "white",
              padding: "16px 35px",
              borderRadius: "40px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            📞 Call Now
          </a>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            fontSize: "18px",
          }}
        >
          <span>⭐ 5000+ Happy Customers</span>
          <span>🚚 Same Day Delivery</span>
          <span>💧 Mineral Rich</span>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          minWidth: "320px",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1564419434663-c49967363849?auto=format&fit=crop&w=700&q=80"
          alt="20L Water Bottle"
          style={{
            width: "420px",
            maxWidth: "100%",
            borderRadius: "25px",
            boxShadow: "0 20px 50px rgba(0,0,0,.3)",
          }}
        />
      </div>
    </section>
  );
}