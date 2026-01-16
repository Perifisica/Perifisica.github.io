function Chevron(contentId, chevronId) {
  const content = document.getElementById(contentId);
  const chevron = document.getElementById(chevronId);

  const isOpen = content.style.maxHeight;
  if (isOpen) {
    content.style.maxHeight = null;
    chevron.style.transform = "rotate(0deg) translate(0rem, 0px)";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    chevron.style.transform = "rotate(90deg) translate(+.4rem, 0px)";
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function OpenTeoria() {
  document.getElementById("teoria-content").classList.toggle("show");
  Chevron("teoria-content", "teoria-chevron");
}

function OpenEsperimenti() {
  document.getElementById("esperimenti-content").classList.toggle("show");
  Chevron("esperimenti-content", "esperimenti-chevron");
}

function OpenLatex() {
  document.getElementById("latex-content").classList.toggle("show");
  Chevron("latex-content", "latex-chevron");
}

function ColoraElementoAttuale() {
  const paginaCorrente = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".dropdown-content a").forEach(link => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === paginaCorrente) {
      link.classList.add("attivo");
    }
  });
}

export function init(root) {
  ColoraElementoAttuale();

  const teoria = root.querySelector("#teoria-button");
  teoria?.addEventListener("click", OpenTeoria);

  const esperimenti = root.querySelector("#esperimenti-button");
  esperimenti?.addEventListener("click", OpenEsperimenti);

  const latex = root.querySelector("#latex-button");
  latex?.addEventListener("click", OpenLatex);
}