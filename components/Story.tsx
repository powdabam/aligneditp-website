"use client";

import Image from "next/image";

export default function Story() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src="/family.jpg"
            alt="Wyson Family"
            width={420}
            height={520}
            style={{
              width: "100%",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </div>

        <div>
          <div
            style={{
              color: "#d22a2f",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Meet Adam Wyson
          </div>

          <h2
            style={{
              fontSize: "52px",
              lineHeight: 1.1,
              marginBottom: "30px",
            }}
          >
            I didn't build another
            IT company.

            <br />

            I built the company I
            wished existed.
          </h2>

          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.9,
              color: "#555",
            }}
          >
            I've spent over twenty years sitting on both sides of the table.

            I've taken over failing IT departments.

            I've negotiated contracts with MSPs.

            I've replaced providers.

            I've recommended providers.

            I've watched businesses spend far too much...

            and I've watched others spend so little that it actually hurt their growth.

            <br /><br />

            Somewhere along the way I realized something.

            Technology isn't what businesses are buying.

            They're buying confidence.

            They're buying profitability.

            They're buying someone who understands both computers and business.

            That's why Aligned exists.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            <div>
              <h3 style={{ color: "#d22a2f", fontSize: "42px" }}>20+</h3>
              <p>Years in IT</p>
            </div>

            <div>
              <h3 style={{ color: "#d22a2f", fontSize: "42px" }}>38</h3>
              <p>Years obsessed with computers</p>
            </div>

            <div>
              <h3 style={{ color: "#d22a2f", fontSize: "42px" }}>100%</h3>
              <p>Clients we've saved money for</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
