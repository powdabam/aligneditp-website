"use client";

const stats = [
  ["20+", "Years in IT Leadership"],
  ["38", "Years obsessed with computers"],
  ["100%", "Clients we've saved money for"],
  ["Multi-State", "Organizations supported"],
];

const quotes = [
  "We've never taken over an environment that couldn't be improved.",
  "Every client we've worked with has either saved money or received dramatically more value for the same investment.",
  "Technology is not an expense. It's the system that determines how profitable your business becomes.",
];

export default function Proof() {
  return (
    <section
      style={{
        padding: "110px 8%",
        background: "#f7f8fa",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              color: "#d22a2f",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Why Businesses Trust Us
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            We don't sell IT.

            <br />

            We improve businesses.
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#666",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Better technology creates better employees.
            Better employees create better businesses.
            Better businesses make more money.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
            marginBottom: "80px",
          }}
        >
          {stats.map(([number, text]) => (
            <div
              key={number}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 20px 50px rgba(0,0,0,.05)",
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  color: "#d22a2f",
                  fontWeight: 800,
                }}
              >
                {number}
              </div>

              <div
                style={{
                  marginTop: "10px",
                  color: "#666",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gap: "22px",
          }}
        >
          {quotes.map((quote) => (
            <div
              key={quote}
              style={{
                background: "white",
                borderLeft: "6px solid #d22a2f",
                padding: "30px",
                fontSize: "22px",
                lineHeight: 1.8,
                borderRadius: "8px",
              }}
            >
              "{quote}"
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
