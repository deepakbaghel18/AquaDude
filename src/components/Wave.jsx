export default function Wave() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        style={{ display: "block", width: "100%" }}
      >
        <path
          fill="#ffffff"
          d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,176C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
}