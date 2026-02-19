import Image from "next/image";

import { siteContent } from "@/content/site";

export function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="shell">
        <h2 id="gallery-title">Recent Pressure Washing Results</h2>
        <p className="section-lead">
          Real project visuals from properties across the Kansas City metro area.
        </p>

        <div className="gallery-grid">
          {siteContent.galleryImages.map((image) => (
            <figure className={`gallery-item ${image.featured ? "featured" : ""}`} key={image.src}>
              <div className="image-frame">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="cover"
                />
              </div>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
