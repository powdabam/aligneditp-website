export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#172218",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 6%",
          borderBottom: "1px solid #e8e8e8",
          background: "#ffffff",
        }}
      >
        <img
          src="/Aligned%20Logo.png"
          alt="Aligned IT Partners"
          style={{
            width: "230px",
            maxWidth: "45%",
            height: "auto",
          }}
        />

        <a
          href="tel:7026050000"
          style={{
            background: "#c51f2a",
            color: "#ffffff",
            textDecoration: "none",
            padding: "13px 22px",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "15px",
          }}
        >
          (702) 605-0000
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          background: "#0b120d",
          color: "#ffffff",
          padding: "100px 7%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d02630",
            fontWeight: 700,
            letterSpacing: "4px",
            fontSize: "13px",
            marginBottom: "22px",
          }}
        >
          ALIGNED IT PARTNERS
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.02,
            maxWidth: "950px",
            margin: "0 auto 28px",
            letterSpacing: "-2px",
          }}
        >
          Technology Aligned
          <br />
          With Your Business
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto 38px",
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#d7ddd8",
          }}
        >
          Strategic IT, cybersecurity, compliance, and technology solutions
          built around your business.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:7026050000"
            style={{
              background: "#c51f2a",
              color: "#ffffff",
              textDecoration: "none",
              padding: "16px 27px",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            Call (702) 605-00000
          </a>

          <a
            href="mailto:help@aligneditp.com"
            style={{
              border: "1px solid #ffffff",
              color: "#ffffff",
              textDecoration: "none",
              padding: "15px 27px",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            Email Our Team
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          padding: "85px 7%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              color: "#c51f2a",
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "13px",
              marginBottom: "15px",
            }}
          >
            BUSINESS TECHNOLOGY
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            IT should move your business forward.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#4e5750",
              margin: 0,
            }}
          >
            Aligned IT Partners helps organizations build secure, reliable,
            and compliant technology environments. We align technology
            decisions with your operations, risk, and long-term business
            objectives.
          </p>
        </div>

        {/* SERVICES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            [
              "Managed IT",
              "Proactive technology management, support, and strategic guidance for your organization.",
            ],
            [
              "Cybersecurity",
              "Security solutions designed to protect your systems, users, data, and business operations.",
            ],
            [
              "Compliance",
              "Technology and security practices aligned with regulatory and industry requirements.",
            ],
            [
              "Cloud & Infrastructure",
              "Reliable cloud, network, endpoint, and infrastructure solutions built for your business.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              style={{
                padding: "30px",
                border: "1px solid #e4e7e4",
                borderRadius: "8px",
                background: "#ffffff",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "4px",
                  background: "#c51f2a",
                  marginBottom: "22px",
                }}
              />

              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 14px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#5d655f",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section
        style={{
          background: "#f3f5f3",
          padding: "75px 7%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#c51f2a",
            fontWeight: 700,
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "15px",
          }}
        >
          SECURITY & COMPLIANCE
        </div>

        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            margin: "0 0 20px",
          }}
        >
          Technology built with compliance in mind.
        </h2>

        <p
          style={{
            color: "#5d655f",
            fontSize: "18px",
            maxWidth: "700px",
            lineHeight: 1.7,
            margin: "0 auto 38px",
          }}
        >
          We help businesses develop technology environments that support
          security, accountability, and regulatory requirements.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {["HIPAA", "FERPA", "CMMC", "GLBA"].map((item) => (
            <div
              key={item}
              style={{
                background: "#ffffff",
                border: "1px solid #dfe3df",
                padding: "14px 25px",
                borderRadius: "5px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#c51f2a",
          color: "#ffffff",
          padding: "75px 7%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: "0 0 18px",
          }}
        >
          Let's align your technology with your business.
        </h2>

        <p
          style={{
            fontSize: "18px",
            margin: "0 auto 30px",
            maxWidth: "650px",
            lineHeight: 1.6,
          }}
        >
          Talk with Aligned IT Partners about your IT, cybersecurity, and
          compliance needs.
        </p>

        <a
          href="tel:7026050000"
          style={{
            display: "inline-block",
            background: "#ffffff",
            color: "#172218",
            textDecoration: "none",
            padding: "16px 28px",
            borderRadius: "6px",
            fontWeight: 700,
          }}
        >
          Call (702) 605-0000
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0b120d",
          color: "#ffffff",
          padding: "42px 7%",
          textAlign: "center",
        }}
      >
        <img
          src="/Aligned%20Logo.png"
          alt="Aligned IT Partners"
          style={{
            width: "190px",
            maxWidth: "70%",
            height: "auto",
            background: "#ffffff",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "22px",
          }}
        />

        <p
          style={{
            margin: "0 0 8px",
          }}
        >
          <a
            href="tel:7026050000"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            (702) 605-0000
          </a>
          {"  •  "}
          <a
            href="mailto:help@aligneditp.com"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            help@aligneditp.com
          </a>
        </p>

        <p
          style={{
            color: "#9ba39d",
            fontSize: "13px",
            margin: "18px 0 0",
          }}
        >
          © 2026 Aligned IT Partners. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
