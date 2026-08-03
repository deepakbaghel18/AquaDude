export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 50px",
      background: "#0ea5e9",
      color: "white",
      position: "sticky",
      top: 0
    }}>
      <h2>AquaDude</h2>

      <div style={{display:"flex",gap:"25px"}}>
        <a href="#about" style={{color:"white"}}>About</a>
        <a href="#products" style={{color:"white"}}>Products</a>
        <a href="#contact" style={{color:"white"}}>Contact</a>
      </div>
    </nav>
  );
}