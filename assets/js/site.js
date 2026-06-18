const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const filters = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll("[data-category]");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      item.hidden = filter !== "all" && category !== filter;
    });
  });
});

document.querySelectorAll("form[data-estimate-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Thanks. Your estimate request details are captured in this preview.";
    }
  });
});

document.querySelectorAll("[data-review-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".review-carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".review-slide"));
  const prev = carousel.querySelector("[data-review-prev]");
  const next = carousel.querySelector("[data-review-next]");
  const dotsWrap = carousel.querySelector(".review-dots");
  let current = 0;
  let timer;

  if (!track || !slides.length) return;

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show review ${index + 1}`);
    dot.addEventListener("click", () => {
      setSlide(index);
      restart();
    });
    dotsWrap?.append(dot);
    return dot;
  });

  const setSlide = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(${-current * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === current);
      slide.setAttribute("aria-hidden", String(slideIndex !== current));
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === current));
  };

  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    timer = window.setInterval(() => setSlide(current + 1), 5200);
  };
  const restart = () => start();

  prev?.addEventListener("click", () => {
    setSlide(current - 1);
    restart();
  });

  next?.addEventListener("click", () => {
    setSlide(current + 1);
    restart();
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", start);

  setSlide(0);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    start();
  }
});
