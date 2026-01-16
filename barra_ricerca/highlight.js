export function highlight(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

export function makeSnippet(text, query) {
  const index = text.toLowerCase().indexOf(query);
  if (index === -1) return text.slice(0, 120) + "...";

  const start = Math.max(0, index - 40);
  const end = index + 80;

  const snippet = text.slice(start, end);
  return highlight("..." + snippet + "...", query);
}