import Script from "next/script";

import { EstimateForm } from "@/components/EstimateForm";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { StickyCTA } from "@/components/StickyCTA";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/content/seo";

export default function Home() {
  return (
    <>
      <Script id="local-business-jsonld" type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </Script>
      <Script id="service-jsonld" type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <EstimateForm />
        <ServiceAreas />
        <Faq />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
