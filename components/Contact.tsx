"use client";

export default function Contact() {
  return (
    <section
      style={{
        background: "#081117",
        color: "white",
        padding: "120px 8%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            color: "#d22a2f",
            letterSpacing: "4px",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Let's Have A Conversation
        </div>

        <h2
          style={{
            fontSize: "60px",
            lineHeight: 1.1,
            marginBottom: "35px",
          }}
        >
          You don't need another
          IT sales pitch.

        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#c5d0d8",
            lineHeight: 1.8,
            marginBottom: "55px",
          }}
        >
          Bring me your current IT proposal.

          <br />

          Bring me your monthly invoice.

          <br />

          Bring me your frustrations.

          <br /><br />

          I'll tell you whether you should keep your provider,
          replace them,
          or keep them and negotiate a better deal.

          <br /><br />

          If I think your current IT is doing a great job...

          I'll tell you that too.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:7026050000"
            style={{
              background: "#d22a2f",
              color: "white",
              padding: "18px 36px",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            (702) 605-0000
          </a>

          <a
            href="mailto:help@a-itp.com"
            style={{
              border: "1px solid rgba(255,255,255,.25)",
              color: "white",
              padding: "18px 36px",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "20px",
            }}
          >
            help@a-itp.com
          </a>
        </div>

        <p
          style={{
            marginTop: "70px",
            color: "#8f9aa3",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          Computer Repair Las Vegas • Aligned IT Partners
          <br />
          Two companies. One mission.
          <br />
          Technology aligned with your business.
        </p>
      </div>
    </section>
  );
}
