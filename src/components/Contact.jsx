import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const products = [
  {
    name: "20L Alkaline Water",
    price: 450,
  },
  {
    name: "10L Alkaline Water",
    price: 350,
  },
  {
    name: "5L Premium Water",
    price: 200,
  },
];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    product: products[0].name,
    quantity: 1,
    price: products[0].price,
  });

  const handleChange = (e) => {
    if (e.target.name === "product") {
      const selected = products.find(
        (p) => p.name === e.target.value
      );

      setForm({
        ...form,
        product: selected.name,
        price: selected.price,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const increaseQty = () => {
    setForm({
      ...form,
      quantity: form.quantity + 1,
    });
  };

  const decreaseQty = () => {
    if (form.quantity > 1) {
      setForm({
        ...form,
        quantity: form.quantity - 1,
      });
    }
  };

  const totalPrice = form.quantity * form.price;

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/orders",
        {
          ...form,
          totalPrice,
        }
      );

      alert(res.data.message);

      setForm({
        name: "",
        phone: "",
        address: "",
        product: products[0].name,
        quantity: 1,
        price: products[0].price,
      });
    } catch (err) {
      console.log(err);
      alert("Failed to Place Order");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        background: "#eef8ff",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "#fff",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 5px 20px rgba(0,0,0,.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          🛒 Place Your Order
        </h2>

        <label>Choose Product</label>

        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          style={inputStyle}
        >
          {products.map((item) => (
            <option
              key={item.name}
              value={item.name}
            >
              {item.name} - ₹{item.price}
            </option>
          ))}
        </select>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h3>Quantity</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <button
              onClick={decreaseQty}
              style={qtyBtn}
            >
              -
            </button>

            <h2>{form.quantity}</h2>

            <button
              onClick={increaseQty}
              style={qtyBtn}
            >
              +
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            background: "#f4f4f4",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Order Summary</h3>

          <p>
            <b>Product:</b> {form.product}
          </p>

          <p>
            <b>Price:</b> ₹{form.price}
          </p>

          <p>
            <b>Quantity:</b> {form.quantity}
          </p>

          <h2
            style={{
              color: "#0284c7",
            }}
          >
            Total : ₹{totalPrice}
          </h2>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          rows="4"
          placeholder="Delivery Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={buttonStyle}
        >
          Place Order • ₹{totalPrice}
        </button>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "20px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  marginTop: "25px",
  padding: "16px",
  background: "#0284c7",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const qtyBtn = {
  width: "45px",
  height: "45px",
  border: "none",
  background: "#0284c7",
  color: "#fff",
  fontSize: "22px",
  borderRadius: "50%",
  cursor: "pointer",
};