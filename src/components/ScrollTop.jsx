import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        background: "#0284c7",
        color: "white",
        fontSize: "22px",
        cursor: "pointer",
      }}
    >
      ↑
    </button>
  );
}