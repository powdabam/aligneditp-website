import Hero from "../components/Hero";
import Story from "../components/Story";
import ThreeChoices from "../components/ThreeChoices";
import Proof from "../components/Proof";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <section
  style={{
    background: "#ffffff",
    padding: "90px 6%",
    textAlign: "center",
    borderTop: "1px solid #efefef",
    borderBottom: "1px solid #efefef",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    <img
      src="/brand-banner.png"
      alt="Aligned IT Partners and Computer Repair Las Vegas"
      style={{
        width: "100%",
        maxWidth: "950px",
        height: "auto",
        display: "block",
        margin: "0 auto 50px",
      }}
    />

    <h2
      style={{
        fontSize: "52px",
        fontWeight: 700,
        color: "#0b0f14",
        marginBottom: "25px",
        lineHeight: 1.15,
      }}
    >
      Two companies.
      <br />
      One mission.
    </h2>

    <p
      style={{
        fontSize: "24px",
        color: "#5d6570",
        lineHeight: 1.7,
        maxWidth: "850px",
        margin: "0 auto",
      }}
    >
      Whether we're negotiating with your current IT provider,
      helping you find a better one, or becoming your IT department,
      the mission never changes:
    </p>

    <p
      style={{
        fontSize: "38px",
        fontWeight: 700,
        color: "#d52b2b",
        marginTop: "35px",
      }}
    >
      Make your business more profitable.
    </p>
  </div>
</section>
      <Story />
      <ThreeChoices />
      <Proof />
      <Contact />
    </>
  );
}
