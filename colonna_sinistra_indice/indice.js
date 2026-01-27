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
function Open1() {
  document.getElementById("content1").classList.toggle("show");
  Chevron("content1", "chevron1");
}

function Open2() {
  document.getElementById("content2").classList.toggle("show");
  Chevron("content2", "chevron2");
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

  const pulsante1 = root.querySelector("#button1");
  pulsante1?.addEventListener("click", Open1);

  const pulsante2 = root.querySelector("#button2");
  pulsante2?.addEventListener("click", Open2);

  const latex = root.querySelector("#latex-button");
  latex?.addEventListener("click", OpenLatex);
}