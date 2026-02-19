import { siteContent } from "@/content/site";

export function StickyCTA() {
  return (
    <div className="sticky-cta" role="complementary" aria-label="Quick free estimate action">
      <a className="btn pulse" href="#estimate">
        {siteContent.ctaPrimary}
      </a>
    </div>
  );
}
