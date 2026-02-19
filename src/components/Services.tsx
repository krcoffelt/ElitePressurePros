import { siteContent } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="shell">
        <h2 id="services-title">Pressure Washing Services in Kansas City Metro</h2>
        <p className="section-lead">
          Residential and commercial cleaning tailored to your surfaces, schedule, and property goals.
        </p>
        <div className="service-grid">
          {siteContent.serviceCards.map((service) => (
            <article className="card service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <p className="keyword">{service.keyword}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
