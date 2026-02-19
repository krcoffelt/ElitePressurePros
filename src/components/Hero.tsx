import Image from "next/image";

import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="hero section" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy fade-in-up">
          <p className="eyebrow">Clean Starts Here.</p>
          <h1 id="hero-title">{siteContent.tagline}</h1>
          <p className="hero-subcopy">{siteContent.heroSupport}</p>
          <ul className="badge-row" aria-label="Trust badges">
            {siteContent.trustBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
          <div className="hero-cta-row">
            <a className="btn" href="#estimate">
              {siteContent.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href={`tel:${siteContent.contact.phoneE164}`}>
              {siteContent.ctaSecondaryCall}
            </a>
            <a className="btn btn-secondary" href={`sms:${siteContent.contact.smsE164}`}>
              {siteContent.ctaSecondaryText}
            </a>
          </div>
        </div>

        <figure className="hero-image-wrap fade-in-up-delay">
          <Image
            src="/images/rooftop_1.jpg"
            alt="Elite Pressure Bros cleaning a Kansas City area home exterior"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="cover"
          />
        </figure>
      </div>
    </section>
  );
}
