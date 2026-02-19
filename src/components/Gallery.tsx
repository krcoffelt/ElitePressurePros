"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { siteContent } from "@/content/site";

const AUTO_ADVANCE_MS = 3000;
const ANIMATION_MS = 900;

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

export function Gallery() {
  const images = Array.from(siteContent.galleryImages);
  const totalImages = images.length;
  const [centerIndex, setCenterIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slots = useMemo(() => {
    if (totalImages === 0) {
      return [];
    }

    const left = images[wrapIndex(centerIndex - 1, totalImages)];
    const center = images[wrapIndex(centerIndex, totalImages)];
    const right = images[wrapIndex(centerIndex + 1, totalImages)];
    const incoming = images[wrapIndex(centerIndex + 2, totalImages)];

    return [
      { role: "left", image: left },
      { role: "center", image: center },
      { role: "right", image: right },
      { role: "incoming", image: incoming }
    ] as const;
  }, [centerIndex, images, totalImages]);

  useEffect(() => {
    if (totalImages < 2) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIsAnimating((current) => (current ? current : true));
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [totalImages]);

  useEffect(() => {
    if (!isAnimating || totalImages < 2) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setCenterIndex((current) => wrapIndex(current + 1, totalImages));
      setIsAnimating(false);
    }, ANIMATION_MS);

    return () => clearTimeout(timer);
  }, [isAnimating, totalImages]);

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="shell gallery-shell">
        <h2 id="gallery-title" className="sr-only">
          Elite Pressure Bros photo gallery slideshow
        </h2>

        <div className={`carousel-track ${isAnimating ? "is-animating" : ""}`} aria-live="off">
          {slots.map(({ role, image }) => (
            <figure className={`carousel-slide ${role}`} key={role}>
              <div className="image-frame">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 700px) 42vw, (max-width: 1100px) 34vw, 30vw"
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
