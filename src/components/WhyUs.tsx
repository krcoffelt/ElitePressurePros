import { siteContent } from "@/content/site";

export function WhyUs() {
  return (
    <section id="why-us" className="section section-contrast" aria-labelledby="why-title">
      <div className="shell">
        <h2 id="why-title">Why Homeowners and Businesses Choose Elite Pressure Bros</h2>
        <div className="why-grid">
          {siteContent.whyUs.map((item) => (
            <article className="card why-card" key={item.title}>
              <span aria-hidden="true" className="icon-dot" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
