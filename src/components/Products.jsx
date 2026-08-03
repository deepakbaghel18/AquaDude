export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "80px 40px",
        background:"rgba(255,255,255,.8)",
        backdropFilter:"blur(15px)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "40px",
          color: "#0f172a",
        }}
      >
        Our Premium Product
      </h2>

      <div
        style={{
          maxWidth: "420px",
          margin: "auto",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1564419434663-c49967363849?auto=format&fit=crop&w=700&q=80"
          alt="20L Water Bottle"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>
          <h3
            style={{
              fontSize: "28px",
              color: "#0284c7",
              marginBottom: "10px",
            }}
          >
            20L Alkaline Water Bottle
          </h3>

          <p
            style={{
              color: "#555",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            RO + UV + UF purified drinking water enriched with essential
            minerals. Freshly packed in food-grade 20L bottles and delivered
            across Delhi.
          </p>

          <h2
            style={{
              color: "#16a34a",
              marginBottom: "25px",
            }}
          >
            ₹250
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#0284c7",
                color: "white",
                padding: "14px 28px",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Order Now
            </button>

            <a
              href="tel:+919911202528"
              style={{
                background: "#16a34a",
                color: "white",
                padding: "14px 28px",
                borderRadius: "30px",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}