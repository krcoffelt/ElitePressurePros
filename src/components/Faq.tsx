import { siteContent } from "@/content/site";

export function Faq() {
  return (
    <section className="section section-contrast" aria-labelledby="faq-title">
      <div className="shell">
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {siteContent.faq.map((item) => (
            <details key={item.q} className="card faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
