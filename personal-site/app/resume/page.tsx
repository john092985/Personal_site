import Link from "next/link";
import { contactLinks, resumeDocument } from "@/data/portfolio";

export const metadata = { title: "Resume & Contact" };

export default function ResumePage() {
  const email = contactLinks.find(link => link.label === "Berkeley Email")!;
  const remaining = contactLinks.filter(link => link !== email);
  return (
    <div className="connect-page">
      <div className="connect-layout">
        <section id="contact" className="connect-details" aria-labelledby="contact-heading">
          <header className="connect-heading">
            <p className="overline">RESUME / CONTACT</p>
            <h1 id="contact-heading">Let’s <em>connect.</em></h1>
          </header>
          <Link href={email.href} className="connect-email">{email.value}<span aria-hidden="true">↗</span></Link>
          <div className="connect-links">{remaining.map((link,index) => <Link key={link.label} href={link.href} className="connect-link-row"><span className="connect-link-index">0{index+1}</span><div><span className="overline">{link.label}</span><p>{link.value}</p></div><span aria-hidden="true">↗</span></Link>)}</div>
          <Link className="connect-chat" href="/chat"><span className="connect-chat-symbol" aria-hidden="true"><svg width="27" height="27" viewBox="0 0 24 24" fill="none"><path d="M5 4.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9l-5 4v-4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="8" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="11" r="1" fill="currentColor"/><circle cx="16" cy="11" r="1" fill="currentColor"/></svg></span><div><strong>A question about my background?</strong><p>Explore my work through AI chat.</p></div><span aria-hidden="true">↗</span></Link>
        </section>
        <aside className="resume-download-card" aria-labelledby="resume-card-title">
          <div className="resume-preview" aria-hidden="true"><div className="resume-sheet"><div className="resume-sheet-name">Jingxuan Lyu</div><p>UC BERKELEY / DATA SCIENCE</p><div className="resume-sheet-rule"/><span>EDUCATION</span><i/><i className="short"/><span>EXPERIENCE</span><i/><i/><i className="short"/><span>RESEARCH</span><i/><i className="short"/></div><span className="resume-file-label">PDF DOCUMENT ↗</span></div>
          <div className="resume-card-copy"><p className="overline">A LITTLE MORE ABOUT MY WORK</p><h2 id="resume-card-title">My resume.</h2><p>Education, experience, and research<br />in one place.</p><a href={resumeDocument.href} className="solid-button" download="Jingxuan-Lyu-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a><a href={resumeDocument.href} className="resume-open-link" target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a></div>
        </aside>
      </div>
    </div>
  );
}
