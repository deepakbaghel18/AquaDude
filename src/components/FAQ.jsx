export default function FAQ() {
  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#f0f9ff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "50px auto",
        }}
      >
        <h3>What is the price?</h3>
        <p>₹250 per 20L bottle.</p>

        <hr />

        <h3>Where do you deliver?</h3>
        <p>We deliver across Delhi.</p>

        <hr />

        <h3>How can I order?</h3>
        <p>Fill the contact form or message us on WhatsApp.</p>

        <hr />

        <h3>Payment Mode?</h3>
        <p>Cash on Delivery.</p>
      </div>
    </section>
  );
}