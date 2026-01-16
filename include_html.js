export async function includeHTML() {
    const elements = document.querySelectorAll("[w3-include-html]");

    for (const el of elements) {
        const file = el.getAttribute("w3-include-html");
        if (!file) continue;

        const res = await fetch(file);
        el.innerHTML = res.ok
            ? await res.text()
            : "Page not found.";

        el.removeAttribute("w3-include-html");
    }
}