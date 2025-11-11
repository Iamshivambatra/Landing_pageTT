import { useEffect } from "react";

export default function useScrollAnimations() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const items = document.querySelectorAll(".feature-item");

    // Split headings into spans (letter animation)
    // Split headings into word+letter spans, preserving spaces correctly
    headings.forEach((h) => {
      if (h.dataset.animated) return;
      h.dataset.animated = "true";

      const text = h.textContent || "";
      h.textContent = "";

      // tokens: words or whitespace chunks (preserves multiple spaces)
      const tokens = text.split(/(\s+)/);

      // a counter used only for letters so delays flow left->right across the whole heading
      let letterIndex = 0;

      tokens.forEach((tok) => {
        if (/^\s+$/.test(tok)) {
          // whitespace chunk — preserve as text node (real spaces, allow wrapping)
          h.appendChild(document.createTextNode(tok));
        } else {
          // word — create inline container so it wraps normally
          const wordSpan = document.createElement("span");
          wordSpan.className = "heading-word";
          wordSpan.style.display = "inline"; // ensure normal wrapping

          // split word into letters
          for (const ch of tok) {
            const letter = document.createElement("span");
            letter.className = "heading-letter";
            letter.textContent = ch;
            // delay only increments per letter (spaces don't take a delay slot)
            letter.style.animationDelay = `${letterIndex * 0.03}s`;
            letterIndex += 1;
            wordSpan.appendChild(letter);
          }

          h.appendChild(wordSpan);
        }
      });
    });



    let lastScrollY = window.scrollY;

    const reveal = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY >= lastScrollY;
      lastScrollY = currentScrollY;

      // Animate headings
      headings.forEach((h) => {
        if (h.classList.contains("heading-visible")) return;
        const rect = h.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && scrollingDown) {
          h.classList.add("heading-visible");
        }
      });

      // Animate feature items
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          item.classList.add("visible");
        }
      });
    };

    // Run once on load for initial visible elements
    reveal();

    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);
}
