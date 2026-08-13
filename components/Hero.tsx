"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#061018 0%,#0b1622 55%,#13293d 100%)",
        color: "white",
        padding: "90px 8%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        <div>

          <div
            style={{
              color: "#d22a2f",
              letterSpacing: "4px",
              fontWeight: 700,
              marginBottom: "22px",
              textTransform: "uppercase",
            }}
          >
            Two Companies. One Mission.
          </div>

          <h1
            style={{
              fontSize: "clamp(44px,6vw,72px)",
              lineHeight: 1.05,
              marginBottom: "30px",
              fontWeight: 800,
            }}
          >
            Technology isn't
            <br />
            about computers.
            <br />
            <span style={{ color: "#d22a2f" }}>
              It's about making
              more money.
            </span>
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.7,
              color: "#cfd8df",
              maxWidth: "700px",
            }}
          >
            Every company already has an IT department.
            Sometimes it's an MSP.
            Sometimes it's an employee.
            Sometimes it's the owner's son.

            <br /><br />

            Our job isn't to sell you IT.

            Our job is to determine whether you should
            keep it,
            replace it,
            or become your IT department.

            Whatever makes your business more profitable.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "45px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#d22a2f",
                color: "white",
                border: "none",
                padding: "18px 34px",
                borderRadius: "6px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Schedule a Strategy Call
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #666",
                padding: "18px 34px",
                borderRadius: "6px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              See How We Work
            </button>
          </div>

        </div>

        <div>

          <div
            style={{
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "18px",
              padding: "35px",
            }}
          >

            <h3
              style={{
                fontSize: "34px",
                marginBottom: "18px",
              }}
            >
              Why clients hire us
            </h3>

            <div style={{ marginTop: "30px" }}>

              <div style={{ marginBottom: "28px" }}>
                <strong>✓ Keep your current IT</strong>
                <br />
                Negotiate pricing and hold them accountable.
              </div>

              <div style={{ marginBottom: "28px" }}>
                <strong>✓ Replace your IT</strong>
                <br />
                We already know the best providers.
              </div>

              <div style={{ marginBottom: "28px" }}>
                <strong>✓ Become your IT</strong>
                <br />
                Managed services backed by 20 years of experience.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
