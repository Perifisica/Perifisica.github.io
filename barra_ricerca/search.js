let pages = [];

fetch("/barra_ricerca/search-index.json")
  .then(r => r.json())
  .then(data => pages = data);

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  console.log(query)
  results.innerHTML = "";

  if (query.length < 2) {
    results.style.display = "none";
    return;
  }

  const matches = pages.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.content.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    results.style.display = "none";
    return;
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

  results.style.display = "block";
});

/* chiudi cliccando fuori */
document.addEventListener("click", e => {
  if (!e.target.closest(".search-box")) {
    results.style.display = "none";
  }
});
