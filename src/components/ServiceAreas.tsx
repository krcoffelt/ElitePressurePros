import { siteContent } from "@/content/site";

export function ServiceAreas() {
  return (
    <section className="section" aria-labelledby="areas-title">
      <div className="shell">
        <h2 id="areas-title">Service Areas in the Kansas City Metro</h2>
        <p className="section-lead">
          We provide professional pressure washing for homes and commercial properties throughout the metro.
        </p>
        <div className="areas-grid">
          {siteContent.serviceAreas.map((area) => (
            <article key={area} className="card area-card">
              <h3>{area}</h3>
              <p>
                Exterior cleaning for siding, concrete, decks, and storefront surfaces with scheduling that fits your
                property needs.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
