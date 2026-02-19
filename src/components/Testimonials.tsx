import { siteContent } from "@/content/site";

export function Testimonials() {
  return (
    <section className="section section-contrast" aria-labelledby="testimonials-title">
      <div className="shell">
        <h2 id="testimonials-title">What Clients Are Saying</h2>
        <p className="section-lead">These placeholders will be replaced with verified reviews before launch.</p>
        <div className="testimonial-grid">
          {siteContent.testimonials.map((testimonial) => (
            <blockquote className="card testimonial" key={testimonial.author}>
              <p>{testimonial.quote}</p>
              <cite>{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
