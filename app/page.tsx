export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0f0c",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <p
          style={{
            color: "#c5202f",
            fontWeight: "bold",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          ALIGNED IT PARTNERS
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 82px)",
            lineHeight: "1.05",
            margin: "0 0 24px",
            maxWidth: "1000px",
          }}
        >
          Technology Aligned
          <br />
          With Your Business
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#c8cec9",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          Strategic IT, cybersecurity, compliance, and technology solutions
          built around your business.
        </p>
      </div>
    </main>
  );
}
