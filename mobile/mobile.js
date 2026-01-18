function ApriIndice() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("indice_aperto");

  document.addEventListener("click", e => {
    if (!e.target.closest("#dropdown") && !e.target.closest("#apri-indice-mobile")) {
      dropdown.classList.remove("indice_aperto");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      dropdown.classList.remove("indice_aperto");
    }
  });
}


function ApriAccessibilità() {
  const sidebar_right = document.getElementById("sidebar_right");
  sidebar_right.classList.toggle("right_aperta");

  document.addEventListener("click", e => {
    if (!e.target.closest("#sidebar_right") && !e.target.closest("#apri-accessibilità-mobile")) {
      sidebar_right.classList.remove("right_aperta");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      sidebar_right.classList.remove("right_aperta");
    }
  });
}

export function init(root) {
  const AIMbutton = root.querySelector("#apri-indice-mobile");
  AIMbutton?.addEventListener("click", ApriIndice);

  const AAMbutton = root.querySelector("#apri-accessibilità-mobile");
  AAMbutton?.addEventListener("click", ApriAccessibilità);
}