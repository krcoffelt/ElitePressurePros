"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { siteContent } from "@/content/site";

const AUTO_ADVANCE_MS = 3000;

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

export function Gallery() {
  const images = siteContent.galleryImages;
  const totalImages = images.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleImages = useMemo(
    () =>
      totalImages > 0
        ? [
            { slot: "left", image: images[wrapIndex(activeIndex - 1, totalImages)] },
            { slot: "center", image: images[wrapIndex(activeIndex, totalImages)] },
            { slot: "right", image: images[wrapIndex(activeIndex + 1, totalImages)] }
          ]
        : [],
    [activeIndex, images, totalImages]
  );

  useEffect(() => {
    if (totalImages < 2) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalImages);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [totalImages]);

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="shell gallery-shell">
        <h2 id="gallery-title" className="sr-only">
          Elite Pressure Bros photo gallery slideshow
        </h2>

        <div className="carousel-wrap" aria-live="polite">
          {visibleImages.map(({ slot, image }) => (
            <figure className={`carousel-slide ${slot}`} key={slot}>
              <div className="image-frame">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 700px) 33vw, (max-width: 1100px) 33vw, 30vw"
                  className="cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
