"use client";

import { useState } from "react";

const options = [
  {
    n: "01",
    title: "Let Aligned do it.",
    headline: "We can be your IT.",
    text: "If you want one accountable partner, Aligned can take over your IT environment and run it with the same business-first mindset built over 20 years in IT.",
    bullets: ["Managed IT", "Cybersecurity", "Cloud & infrastructure", "Projects & strategy"],
  },
  {
    n: "02",
    title: "Find better IT.",
    headline: "We can find your IT.",
    text: "You do not have to hire the first MSP that calls you back. Aligned knows the market and can help you find, compare, and transition to the right provider for your business.",
    bullets: ["MSP selection", "Provider vetting", "Proposal comparison", "Transition management"],
  },
  {
    n: "03",
    title: "Keep your IT.",
    headline: "We can negotiate your IT.",
    text: "Like your current IT company? Great. We can work with them. We review what you are paying, what you are receiving, and where the deal can be improved.",
    bullets: ["Contract review", "Pricing negotiation", "Service review", "Vendor accountability"],
  },
];

const capabilities = [
  ["Managed IT", "Help desk, endpoints, Microsoft 365, networks, backups, and ongoing support."],
  ["Cybersecurity", "Identity, endpoint, email, MFA, security monitoring, risk reduction, and practical controls."],
  ["Cloud & Infrastructure", "Cloud, servers, networking, Wi-Fi, connectivity, migrations, and technology projects."],
  ["IT Strategy", "Technology roadmaps, budgeting, vendor management, projects, and long-term planning."],
];

const faqs = [
  ["Do I have to switch IT companies?", "No. That is one of the biggest differences with Aligned. If your current provider is good, we can work with them and negotiate a better deal. Switching is only one option."],
  ["Are you an MSP?", "Yes. Aligned can operate as your IT provider. But that is not the only thing we do. We can also help you choose an MSP or negotiate with the one you already have."],
  ["What do you negotiate?", "Anything that affects the value of the relationship: recurring fees, licenses, service scope, contracts, projects, response expectations, and the overall structure of the agreement."],
  ["Why would an MSP negotiate with you?", "Because you understand IT. You are not asking a provider to discount something you do not understand. You can evaluate the actual technology, services, and economics behind the proposal."],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [faq, setFaq] = useState<number | null>(null);

  return (
    <main id="top" className="site">
      <style>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.site{min-height:100vh;background:#f7f8f6;color:#172218;font-family:Arial,Helvetica,sans-serif;overflow-x:hidden}a{transition:.2s ease}.container{width:min(1180px,90%);margin:0 auto}
        .nav{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);border-bottom:1px solid #e3e7e3}.navin{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.navlinks{display:flex;gap:24px}.navlinks a{color:#172218;text-decoration:none;font-size:14px;font-weight:700}.navlinks a:hover{color:#c5202f}.navcta{background:#c5202f;color:#fff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:800;font-size:14px}
        .hero{background:#0b120d;color:#fff;padding:110px 0 95px;position:relative;overflow:hidden}.hero:after{content:"";position:absolute;width:520px;height:520px;right:-220px;top:-220px;border:1px solid rgba(255,255,255,.08);border-radius:50%;box-shadow:0 0 0 70px rgba(255,255,255,.025),0 0 0 140px rgba(255,255,255,.018)}.eyebrow,.kicker{color:#e21d2b;font-size:12px;font-weight:900;letter-spacing:3px;margin-bottom:16px}.hero h1{font-size:clamp(46px,7vw,88px);line-height:.98;letter-spacing:-4px;max-width:900px;margin:0 0 28px}.hero h1 span{color:#e21d2b}.hero p{max-width:760px;color:#cfd6d1;font-size:20px;line-height:1.7;margin:0 0 36px}.actions{display:flex;flex-wrap:wrap;gap:12px}.primary,.secondary{display:inline-block;padding:16px 24px;border-radius:6px;text-decoration:none;font-weight:800}.primary{background:#c5202f;color:#fff}.secondary{border:1px solid #6b746d;color:#fff}.secondary:hover{border-color:#fff}.note{margin-top:26px;color:#89948d;font-size:13px}
        .money{background:#c5202f;color:#fff;padding:18px 0}.moneyin{display:flex;justify-content:space-between;gap:20px;align-items:center}.money strong{font-size:17px}.money span{font-size:14px;opacity:.9}.section{padding:100px 0}.white{background:#fff}.dark{background:#0b120d;color:#fff}.gray{background:#eef1ee}.section h2{font-size:clamp(36px,5vw,62px);line-height:1.03;letter-spacing:-2px;margin:0 0 22px;max-width:850px}.lead{color:#59635c;max-width:760px;font-size:18px;line-height:1.75}.dark .lead{color:#b9c2bb}
        .story{display:grid;grid-template-columns:1.2fr .8fr;gap:70px}.story p{color:#59635c;font-size:18px;line-height:1.8}.storycard{background:#0b120d;color:#fff;padding:34px;border-left:4px solid #c5202f;border-radius:8px}.storycard .big{font-size:56px;font-weight:900;line-height:1;margin-bottom:10px}.storycard p{color:#b9c2bb;font-size:16px;line-height:1.65;margin:0}
        .paths{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px;margin-top:54px}.pathlist{border-top:1px solid #29332d}.pathbtn{width:100%;text-align:left;background:transparent;color:#fff;border:0;border-bottom:1px solid #29332d;padding:24px 0;cursor:pointer}.pathbtn.active{color:#e21d2b}.pathn{font-size:12px;font-weight:900;letter-spacing:2px;margin-bottom:8px}.pathtitle{font-size:25px;font-weight:800}.detail{border:1px solid #29332d;background:#111813;padding:42px;min-height:390px}.detail h3{font-size:40px;margin:0 0 16px}.detail p{color:#c3cbc5;font-size:18px;line-height:1.75}.bullets{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px}.bullet{border:1px solid #303a33;padding:14px;color:#e5e9e6;font-weight:700}
        .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:42px}.card{background:#fff;border:1px solid #e0e4e0;padding:30px;border-radius:6px;transition:.2s}.card:hover{transform:translateY(-5px);border-color:#c5202f}.num{color:#c5202f;font-size:12px;font-weight:900;letter-spacing:2px}.card h3{font-size:24px;margin:14px 0 12px}.card p,.cap p,.process p{color:#59635c;line-height:1.65;margin:0}.capgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:44px}.cap{padding:28px;border:1px solid #2a342e;background:#111813;min-height:220px}.cap h3{margin:0 0 14px;font-size:21px}.dark .cap p{color:#b9c2bb}.process{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px}.processitem{border-top:3px solid #c5202f;padding:24px 0}.processitem strong{display:block;font-size:13px;letter-spacing:1px;margin-bottom:12px}
        .faq{max-width:850px;margin-top:40px}.faqitem{border-top:1px solid #dfe3df}.faqbtn{width:100%;border:0;background:none;padding:22px 0;display:flex;justify-content:space-between;gap:20px;text-align:left;font-size:18px;font-weight:800;color:#172218;cursor:pointer}.answer{color:#59635c;line-height:1.7;padding:0 0 24px}.final{background:#c5202f;color:#fff;text-align:center;padding:100px 0}.final h2{margin-left:auto;margin-right:auto}.final p{max-width:650px;margin:0 auto 30px;color:#ffe9eb;font-size:18px;line-height:1.7}.footer{background:#070d09;color:#fff;padding:44px 0}.footerin{display:flex;justify-content:space-between;align-items:center;gap:30px}.footer a{color:#fff;text-decoration:none}.muted{color:#8f9992;font-size:13px}
        @media(max-width:900px){.navlinks{display:none}.story,.paths{grid-template-columns:1fr;gap:36px}.cards,.capgrid{grid-template-columns:1fr 1fr}.process{grid-template-columns:1fr 1fr}.hero h1{letter-spacing:-2px}}@media(max-width:620px){.container{width:90%}.hero{padding:80px 0 70px}.section{padding:72px 0}.moneyin,.footerin{flex-direction:column;align-items:flex-start}.cards,.capgrid,.process,.bullets{grid-template-columns:1fr}.detail{padding:28px}.detail h3{font-size:32px}.navcta{padding:10px 14px}}
      `}</style>

      <nav className="nav"><div className="container navin">
        <a href="#top"><img src="/Aligned%20Logo.png" alt="Aligned IT Partners" style={{width:155,display:"block"}} /></a>
        <div className="navlinks"><a href="#story">Why Aligned</a><a href="#options">Your Options</a><a href="#how">How It Works</a><a href="#capabilities">What We Do</a></div>
        <a className="navcta" href="#contact">Talk to Aligned</a>
      </div></nav>

      <section className="hero"><div className="container">
        <div className="eyebrow">IT SHOULD WORK FOR YOU</div>
        <h1>Your IT bill should not be a <span>blank check.</span></h1>
        <p>I've spent 20 years in IT. I've taken over IT environments, negotiated with MSPs, found better providers, and handed clients off when someone else was the better fit. Aligned brings that experience to your side of the table.</p>
        <div className="actions"><a className="primary" href="mailto:help@aligneditp.com?subject=IT%20Cost%20Review">Have Us Review Your IT</a><a className="secondary" href="tel:7026050000">Call (702) 605-0000</a></div>
        <div className="note">No obligation. No pressure to switch providers.</div>
      </div></section>

      <section className="money"><div className="container moneyin"><strong>We understand IT. We understand what it costs.</strong><span>Be your IT. Find your IT. Or negotiate your IT.</span></div></section>

      <section id="story" className="section white"><div className="container story">
        <div><div className="kicker">THE ALIGNED STORY</div><h2>I've been on both sides of the IT conversation.</h2>
          <p>For 20 years, I've worked in the IT world. I've sat across the table from MSPs, vendors, technology companies, and business owners. I've seen what good IT looks like—and I've seen what happens when a business pays for technology it doesn't need or gets locked into a relationship that no longer makes sense.</p>
          <p>Aligned exists to put that experience on the client's side of the table. Sometimes the answer is for us to become your IT company. Sometimes the answer is finding another provider. And sometimes the smartest move is keeping the company you have and making them give you a better deal.</p>
        </div>
        <div className="storycard"><div className="big">20</div><strong>years in the IT world</strong><p style={{marginTop:14}}>Enough experience to understand the technology, the provider, the contract, and the money behind the relationship.</p></div>
      </div></section>

      <section id="options" className="section dark"><div className="container"><div className="kicker">THREE WAYS ALIGNED CAN HELP</div><h2>You're not buying IT. You're buying the right outcome.</h2><p className="lead">We don't start with a package and try to fit your business into it. We start with your situation and determine which path makes the most sense.</p>
        <div className="paths"><div className="pathlist">{options.map((o,i)=><button key={o.n} className={`pathbtn ${active===i?"active":""}`} onClick={()=>setActive(i)}><div className="pathn">{o.n}</div><div className="pathtitle">{o.title}</div></button>)}</div>
          <div className="detail"><div className="kicker">{options[active].n}</div><h3>{options[active].headline}</h3><p>{options[active].text}</p><div className="bullets">{options[active].bullets.map(b=><div className="bullet" key={b}>{b}</div>)}</div></div>
        </div>
      </div></section>

      <section id="how" className="section gray"><div className="container"><div className="kicker">THE CONVERSATION</div><h2>Start with what you're paying today.</h2><p className="lead">Send us your current IT agreement, invoice, or provider information. We'll help you understand what you're buying and where there may be room to improve the deal.</p>
        <div className="cards"><div className="card"><div className="num">01 — REVIEW</div><h3>Show us the deal.</h3><p>We look at recurring IT costs, services, contracts, licenses, and the technology behind them.</p></div><div className="card"><div className="num">02 — COMPARE</div><h3>Find the leverage.</h3><p>We determine whether you're getting fair value and what comparable providers or solutions look like.</p></div><div className="card"><div className="num">03 — ACT</div><h3>Lower the cost.</h3><p>We negotiate, switch providers, or provide the service ourselves—whichever creates the best outcome.</p></div></div>
      </div></section>

      <section id="capabilities" className="section dark"><div className="container"><div className="kicker">WHEN ALIGNED BECOMES YOUR IT</div><h2>We know the technology behind the price.</h2><p className="lead">Negotiating IT is only useful if you understand IT. When we take the work ourselves, we can deliver the technical depth that informs our advice.</p><div className="capgrid">{capabilities.map(([t,p])=><div className="cap" key={t}><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

      <section className="section white"><div className="container"><div className="kicker">WHY THIS WORKS</div><h2>We don't need to sell you a solution to tell you the truth.</h2><div className="process"><div className="processitem"><strong>INDEPENDENT</strong><p>We can recommend ourselves, another provider, or your current provider.</p></div><div className="processitem"><strong>TECHNICAL</strong><p>We understand what the provider is actually delivering—not just what the proposal says.</p></div><div className="processitem"><strong>COMMERCIAL</strong><p>We look at recurring costs, licenses, projects, contracts, and value.</p></div><div className="processitem"><strong>ACCOUNTABLE</strong><p>You get one person in your corner who understands both technology and business.</p></div></div></div></section>

      <section className="section gray"><div className="container"><div className="kicker">QUESTIONS WE HEAR</div><h2>Still happy with your IT company?</h2><p className="lead">You don't have to leave them. That's the point.</p><div className="faq">{faqs.map(([q,a],i)=><div className="faqitem" key={q}><button className="faqbtn" onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span><span>{faq===i?"−":"+"}</span></button>{faq===i&&<div className="answer">{a}</div>}</div>)}</div></div></section>

      <section id="contact" className="final"><div className="container"><div className="kicker" style={{color:"#ffd9dd"}}>LET'S TALK ABOUT YOUR IT BILL</div><h2>Let's find out if you're getting a fair deal.</h2><p>Send us your current IT agreement, invoice, or simply tell us what you're paying. We'll start there.</p><div className="actions" style={{justifyContent:"center"}}><a className="secondary" style={{borderColor:"#fff"}} href="mailto:help@aligneditp.com?subject=IT%20Cost%20Review">Email help@aligneditp.com</a><a className="secondary" style={{borderColor:"#fff"}} href="tel:7026050000">(702) 605-0000</a></div></div></section>

      <footer className="footer"><div className="container footerin"><div><img src="/Aligned%20Logo.png" alt="Aligned IT Partners" style={{width:175,background:"#fff",padding:8,borderRadius:4}}/><div className="muted" style={{marginTop:14}}>IT strategy, provider advocacy, and technology services.</div></div><div style={{textAlign:"right"}}><div><a href="tel:7026050000">(702) 605-0000</a></div><div style={{marginTop:8}}><a href="mailto:help@aligneditp.com">help@aligneditp.com</a></div><div className="muted" style={{marginTop:14}}>© 2026 Aligned IT Partners. All rights reserved.</div></div></div></footer>
    </main>
  );
}
