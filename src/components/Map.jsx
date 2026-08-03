export default function Map() {
  return (
    <section
      style={{
        padding: "80px 40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        Delivery Across Delhi
      </h2>

      <iframe
        title="Delhi"
        src="https://www.google.com/maps?q=Delhi&output=embed"
        width="100%"
        height="450"
        style={{
          border: "0",
          borderRadius: "20px",
        }}
      ></iframe>
    </section>
  );
}