"use client";

const choices = [
  {
    number: "01",
    title: "Keep Your IT",
    headline: "Love your current IT? Keep them.",
    text:
      "Most consultants try to replace your provider. We don't. If they're good, we'll help you negotiate better pricing, improve accountability, and make sure you're receiving everything you're paying for.",
  },
  {
    number: "02",
    title: "Replace Your IT",
    headline: "If they're not the right fit...",
    text:
      "We've spent twenty years working alongside IT companies across the country. We know who's good, who's average, and who shouldn't be trusted with your business. We'll find the right partner for you.",
  },
  {
    number: "03",
    title: "Let Us Handle Everything",
    headline: "Become one of our managed clients.",
    text:
      "If we're the best fit, we'll become your IT department. We support everyone from small businesses to large medical practices, dealerships, schools, and multi-state organizations.",
  },
];

export default function ThreeChoices() {
  return (
    <section
      style={{
        background: "#081117",
        color: "white",
        padding: "110px 8%",
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
            color: "#d22a2f",
            fontWeight: 700,
            letterSpacing: "3px",
            marginBottom: "18px",
            textTransform: "uppercase",
          }}
        >
          There isn't one answer.
        </div>

        <h2
          style={{
            fontSize: "58px",
            lineHeight: 1.05,
            marginBottom: "25px",
            maxWidth: "900px",
          }}
        >
          There are only three.
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#b8c3cd",
            maxWidth: "760px",
            lineHeight: 1.8,
            marginBottom: "70px",
          }}
        >
          Unlike every IT company you've ever talked to, we don't begin by
          selling ourselves.
          <br />
          <br />
          We begin by determining which solution makes your business the most
          money.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >
          {choices.map((choice) => (
            <div
              key={choice.number}
              style={{
                background: "#101a21",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "14px",
                padding: "40px",
                transition: ".25s",
              }}
            >
              <div
                style={{
                  color: "#d22a2f",
                  fontSize: "18px",
                  marginBottom: "30px",
                  letterSpacing: "3px",
                }}
              >
                {choice.number}
              </div>

              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "15px",
                }}
              >
                {choice.title}
              </h3>

              <h4
                style={{
                  color: "#ffffff",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                {choice.headline}
              </h4>

              <p
                style={{
                  color: "#b6c1cb",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                {choice.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
