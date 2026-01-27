function AllargaImmagine() {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: black;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const img = document.createElement("img");
  img.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  `;

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  document.querySelectorAll("img").forEach(i => {
    i.addEventListener("click", () => {
      img.src = i.src;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") overlay.style.display = "none";
  });
}

export function init() {
  AllargaImmagine();
}

