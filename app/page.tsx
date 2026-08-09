"use client";

import { useState } from "react";
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
   {/* HEADER */}
<header
style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  padding: "16px 3%",
  borderBottom: "1px solid #e8e8e8",
  background: "#ffffff",
  flexWrap: "wrap",
}}
>
  <a
    href="#top"
    style={{
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
    }}
  >
    <img
      src="/Aligned Logo.png"
      alt="Aligned IT Partners"
      style={{
       width: "155px",
        height: "auto",
        display: "block",
      }}
    />
  </a>

  <nav
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    {[
      ["Services", "#services"],
      ["Cybersecurity", "#cybersecurity"],
      ["Compliance", "#compliance"],
      ["About", "#about"],
    ].map(([label, href]) => (
      <a
        key={label}
        href={href}
        style={{
          color: "#172218",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 600,
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#c5202f";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#172218";
        }}
      >
        {label}
      </a>
    ))}
  </nav>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="mailto:help@aligneditp.com"
      style={{
        color: "#172218",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      Email Us
    </a>

    <a
      href="tel:7026050000"
      style={{
        background: "#c5202f",
        color: "#ffffff",
        textDecoration: "none",
        padding: "12px 20px",
        borderRadius: "6px",
        fontWeight: 700,
        fontSize: "14px",
        whiteSpace: "nowrap",
      }}
    >
      Get IT Support
    </a>
  </div>
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
            Call (702) 605-0000
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
{/* TRUST / CREDIBILITY STRIP */}
<section
  style={{
    background: "#ffffff",
    borderBottom: "1px solid #e8e8e8",
    padding: "28px 6%",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap",
    }}
  >
    {[
      ["BUSINESS-FIRST IT", "Technology built around how your organization operates."],
      ["SECURITY FOCUSED", "Cybersecurity built into every solution."],
      ["COMPLIANCE READY", "HIPAA • PCI DSS • NIST"],
      ["STRATEGIC IT", "Technology aligned with business goals."],
    ].map(([title, description]) => (
      <div
        key={title}
        style={{
          flex: "1 1 220px",
          textAlign: "center",
          padding: "8px 16px",
        }}
      >
        <div
          style={{
            color: "#c5202f",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            marginBottom: "7px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#4d5650",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      </div>
    ))}
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

       

{/* INTERACTIVE SERVICES */}
<section
  style={{
    background: "#0b0f0c",
    color: "#ffffff",
    padding: "90px 6%",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <p
      style={{
        color: "#e21d2b",
        fontWeight: "bold",
        letterSpacing: "3px",
        fontSize: "13px",
        marginBottom: "14px",
      }}
    >
      BUILT AROUND YOUR BUSINESS
    </p>

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 58px)",
        lineHeight: 1.05,
        margin: "0 0 18px",
      }}
    >
      What kind of IT partner
      <br />
      does your business need?
    </h2>

    <p
      style={{
        color: "#b8c0ba",
        fontSize: "18px",
        lineHeight: 1.7,
        maxWidth: "700px",
        marginBottom: "45px",
      }}
    >
      Explore the technology services Aligned IT Partners can bring together
      around your organization.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "14px",
      }}
    >
      {[
        {
          number: "01",
          title: "Managed IT",
          description:
            "Help desk • Proactive monitoring • Microsoft 365 • Networks • Backup • On-site support",
        },
        {
          number: "02",
          title: "Cybersecurity",
          description:
            "Endpoint protection • MFA • Email security • Security monitoring • Risk assessments",
        },
        {
          number: "03",
          title: "Compliance",
          description:
            "HIPAA • PCI DSS • NIST • Security policies • Audit readiness",
        },
        {
          number: "04",
          title: "IT Strategy",
          description:
            "Technology planning • Cloud • Infrastructure • Projects • vCIO guidance",
        },
      ].map((service) => (
        <div
          key={service.title}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c5202f";
            e.currentTarget.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#131a15";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          style={{
            background: "#131a15",
            border: "1px solid #283129",
            padding: "32px",
            minHeight: "260px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            {service.number}
          </span>

          <div>
            <h3
              style={{
                fontSize: "27px",
                margin: "0 0 16px",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#d5d9d6",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CYBERSECURITY */}
<section
  id="cybersecurity"
  style={{
    background: "#0b0f0c",
    color: "#ffffff",
    padding: "90px 6%",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        color: "#e21d2b",
        fontWeight: 700,
        letterSpacing: "3px",
        fontSize: "13px",
        marginBottom: "14px",
      }}
    >
      CYBERSECURITY
    </div>

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 56px)",
        lineHeight: 1.08,
        margin: "0 0 20px",
        maxWidth: "850px",
      }}
    >
      Protect your business, your data, and your people.
    </h2>

    <p
      style={{
        color: "#d5d9d6",
        fontSize: "18px",
        lineHeight: 1.7,
        maxWidth: "760px",
        margin: "0 0 42px",
      }}
    >
      Aligned IT Partners helps organizations reduce technology risk with
      practical cybersecurity solutions designed to protect users, systems,
      sensitive data, and business operations.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "18px",
      }}
    >
      {[
        [
          "Threat Protection",
          "Security controls designed to help prevent, detect, and respond to threats across your technology environment.",
        ],
        [
          "Identity and Access",
          "Protect accounts and sensitive resources with stronger authentication, access controls, and security practices.",
        ],
        [
          "Data Protection",
          "Safeguard important business information with secure systems, backups, and strategies designed around your risk.",
        ],
        [
          "Security Monitoring",
          "Improve visibility into suspicious activity and security events so potential issues can be identified and addressed.",
        ],
      ].map(([title, description]) => (
        <div
          key={title}
          style={{
            border: "1px solid #29332d",
            padding: "28px",
            background: "#111713",
            borderRadius: "6px",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#c5202f";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#29332d";
          }}
        >
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
              color: "#c7ceca",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* INDUSTRIES */}
<section
  id="industries"
  style={{
    background: "#ffffff",
    padding: "90px 6%",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        maxWidth: "760px",
        marginBottom: "48px",
      }}
    >
      <div
        style={{
          color: "#c5202f",
          fontWeight: 700,
          letterSpacing: "3px",
          fontSize: "13px",
          marginBottom: "14px",
        }}
      >
        INDUSTRIES
      </div>

      <h2
        style={{
          color: "#172218",
          fontSize: "clamp(32px, 5vw, 50px)",
          lineHeight: 1.1,
          margin: "0 0 20px",
        }}
      >
        Technology built around your industry.
      </h2>

      <p
        style={{
          color: "#4e5750",
          fontSize: "18px",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        Every organization has different technology, security, and compliance
        requirements. Aligned IT Partners designs solutions around the way your
        organization operates.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "18px",
      }}
    >
      {[
        [
          "Healthcare",
          "Secure technology environments designed around patient care, privacy, and regulatory requirements.",
        ],
        [
          "Legal",
          "Reliable systems that help protect sensitive client information and keep your team productive.",
        ],
        [
          "Financial Services",
          "Technology and security designed for organizations where trust, availability, and data protection matter.",
        ],
        [
          "Professional Services",
          "Scalable technology that supports your people, clients, and day to day operations.",
        ],
        [
          "Construction",
          "Connected systems that support teams in the office, in the field, and across multiple locations.",
        ],
        [
          "Growing Businesses",
          "Technology strategy and infrastructure designed to support expansion without creating unnecessary complexity.",
        ],
      ].map(([title, description]) => (
        <div
          key={title}
          style={{
            border: "1px solid #e5e8e6",
            padding: "30px",
            background: "#ffffff",
            borderRadius: "6px",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#c5202f";
            e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#e5e8e6";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <h3
            style={{
              color: "#172218",
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
  </div>
</section>


      
      {/* COMPLIANCE */}
     <section
  id="compliance"
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
Security and compliance built into your technology.
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
  Aligned IT Partners helps organizations strengthen cybersecurity, protect
  sensitive data, and align their technology with applicable security and
  compliance requirements.
</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
{["HIPAA", "FERPA", "CMMC", "GLBA", "PCI DSS", "NIST"].map((item) => (
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
