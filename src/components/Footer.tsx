import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer section" aria-labelledby="footer-title">
      <div className="shell footer-grid">
        <div>
          <h2 id="footer-title">{siteContent.brandName}</h2>
          <p>{siteContent.tagline}</p>
          <p>
            <strong>Phone:</strong> {siteContent.contact.phoneDisplay}
          </p>
          <p>
            <strong>Email:</strong> {siteContent.contact.email}
          </p>
          <p>
            <strong>Address:</strong> {siteContent.contact.address}
          </p>
          <p className="small-note">TODO: Replace placeholder contact information before launch.</p>
        </div>

        <div className="footer-cta">
          <p className="footer-cta-title">Need a clean start?</p>
          <a className="btn pulse" href="#estimate">
            {siteContent.ctaPrimary}
          </a>
          <div className="footer-links">
            <a href={`tel:${siteContent.contact.phoneE164}`}>Call Now</a>
            <a href={`sms:${siteContent.contact.smsE164}`}>Text Us</a>
          </div>
        </div>
      </div>
      <div className="shell copyright">© {new Date().getFullYear()} {siteContent.brandName}. All rights reserved.</div>
    </footer>
  );
}
