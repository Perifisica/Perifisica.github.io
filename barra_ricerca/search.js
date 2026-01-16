import { highlight } from "./highlight.js";
import { makeSnippet } from "./highlight.js";


export function Search() {
  let pages = [];

  fetch("/barra_ricerca/search-index.json")
    .then(r => r.json())
    .then(data => pages = data);

  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    results.innerHTML = "";

    if (query.length < 1) {
      results.classList.remove("open"); return;
    }

    const matches = pages.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.content.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      results.classList.remove("open"); return;
    }

    matches.slice(0, 8).forEach(p => {
      const div = document.createElement("div");
      div.className = "result";
      div.innerHTML = `
      <a href="${p.url}">
        <strong>${highlight(p.title, query)}</strong><br>
        <small>${makeSnippet(p.content, query)}</small>
      </a>
    `;
      results.appendChild(div);
    });
    results.classList.add("open");
  });

  /* chiudi cliccando fuori */
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-box")) {
      results.classList.remove("open");
    }
  });

  document.addEventListener("click", e => {
    if (e.target.closest(".search-box")) {
      if (input.value.toLowerCase().length >= 1) {
        results.classList.add("open");
      }
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      results.classList.remove("open");
    }
  });
}


