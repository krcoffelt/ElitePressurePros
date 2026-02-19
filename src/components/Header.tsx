import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="#top" className="logo-wrap" aria-label="Elite Pressure Bros home">
          <Image
            src="/images/ElitePressureProsKC_Logo.svg"
            alt="Elite Pressure Bros logo"
            width={72}
            height={72}
            priority
            className="logo-img"
          />
          <span className="logo-text">{siteContent.brandNameDisplay}</span>
        </Link>

        <nav aria-label="Primary navigation" className="top-nav">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#why-us">Why Us</a>
          <a href="#estimate" className="btn nav-cta">
            {siteContent.ctaPrimary}
          </a>
        </nav>
      </div>
    </header>
  );
}
