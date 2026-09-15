"use client";

import { useState } from "react";
import styles from "./letterhead.module.css";

export default function LetterheadPage() {
  const [date, setDate] = useState("31 August 2026");
  const [recipient, setRecipient] = useState("Name of Recipient");
  const [title, setTitle] = useState("Title / Organization");
  const [address1, setAddress1] = useState("Address Line 1");
  const [address2, setAddress2] = useState("Address Line 2");
  const [cityCountry, setCityCountry] = useState("City, Country");
  const [subject, setSubject] = useState(
    "Partnership Introduction — OSARE East Africa Safari Routes Platform"
  );

  return (
    <main className={styles.screen}>
      <div className={styles.toolbar}>
        <strong>SAFARIRoutes Letterhead</strong>
        <button onClick={() => window.print()}>Print / Save as PDF</button>
      </div>

      <section className={styles.paper}>
        <header className={styles.header}>
          <div className={styles.brand}>
           
<img
  src="/logo/safariroutes-logo.png"
  alt="OSARE — East Africa Safari Routes"
  className={styles.logoSmall}
/>

          </div>

          <div className={styles.contact}>
            <div><span className={styles.icon}>●</span><b>HQ:</b> Plaza Building, Oginga Odinga Street,<br />Kisumu, Kenya</div>
            <div><span className={styles.icon}>✉</span><b>Email:</b> info@easafariroutes.com</div>
            <div><span className={styles.icon}>☎</span><b>Tel:</b> +254 758 378 729 / +254 707 618 213</div>
            <div className={styles.motto}>DISCOVER <span>•</span> EXPLORE <span>•</span> EXPERIENCE AFRICA</div>
          </div>
        </header>

        <div className={styles.divider}>
          <span />
          <span />
        </div>

        <article className={styles.letter}>
          <label>
            Date:
            <input value={date} onChange={(e) => setDate(e.target.value)} />
          </label>

          <div className={styles.recipient}>
            <input className={styles.boldInput} value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <input value={address1} onChange={(e) => setAddress1(e.target.value)} />
            <input value={address2} onChange={(e) => setAddress2(e.target.value)} />
            <input value={cityCountry} onChange={(e) => setCityCountry(e.target.value)} />
          </div>

          <label className={styles.subject}>
            Subject:
            <input value={subject} onChange={(e) => setSubject(e.target.value)} />
          </label>

          <p>Dear Sir/Madam,</p>

          <p>
            My name is <strong>Osare Nakinson</strong>, Founder of <strong>OSARE
            (East Africa Safari Routes)</strong>, a digital platform connecting
            international and regional travelers directly with verified tourism
            operators, accommodation providers, and transport services across East Africa.
          </p>

          <p>
            Our platform (<strong>easafariroutes.com</strong>) currently lists more than
            90 verified operators across Kenya, Tanzania, and Uganda, including safari
            companies, hotels, and transport providers. Listings are currently offered
            completely free to participating businesses.
          </p>

          <p>
            Travelers can search, compare, and connect directly with operators through
            WhatsApp, without hidden fees or unnecessary middleman charges.
          </p>

          <p>
            We are writing to introduce OSARE to the Uganda Tourism Board and explore
            how we can support Uganda&apos;s tourism sector by:
          </p>

          <ul>
            <li>Providing free visibility for registered Ugandan tour operators, lodges, hotels, and transport providers.</li>
            <li>Directing traveler interest toward verified and legitimate Ugandan tourism businesses.</li>
            <li>Supporting the promotion of <strong>Uganda</strong> as a safari, wildlife, cultural, and adventure travel destination alongside Kenya and Tanzania.</li>
          </ul>

          <p>
            I would welcome the opportunity to discuss how OSARE could complement your
            efforts to promote Uganda&apos;s tourism industry. I would also be pleased to
            provide any additional information about our platform.
          </p>

          <p>
            I can be reached directly at <strong>+254 758 378 729</strong> or by email at
            <strong> info@easafariroutes.com</strong>.
          </p>

          <p>Thank you for your time and consideration.</p>

          <p className={styles.signoff}>Sincerely,</p>

          <div className={styles.signature}>Osare Nakinson</div>
          <div className={styles.name}>Osare Nakinson</div>
          <div>Chief Executive Officer</div>
          <div>EA SafariRoutes</div>
          <div>Plaza Building, Oginga Odinga Street, Kisumu 40100, Kenya</div>
        </article>

        <footer className={styles.footer}>
  <div className={styles.footerWebsite}>◎ &nbsp; easafariroutes.com</div>
  <div className={styles.footerContact}>info@easafariroutes.com &nbsp;•&nbsp; +254 758 378 729</div>
</footer>
      </section>
    </main>
  );
}
