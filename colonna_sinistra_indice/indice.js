/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function OpenTeoria() {
  document.getElementById("teoria").classList.toggle("show");
}

function OpenEsperimenti() {
  document.getElementById("esperimenti").classList.toggle("show");
}

function OpenLatex() {
  document.getElementById("latex").classList.toggle("show");
}

/*
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  */

document.querySelectorAll(".accordion").forEach(accordion => {
  const button = accordion.querySelector(".dropbutton");
  const content = accordion.querySelector(".dropdown-content");
  const chevron = accordion.querySelector(".chevron");

  button.addEventListener("click", () => {
    const isOpen = content.style.maxHeight;
    if (isOpen) {
      content.style.maxHeight = null;
      chevron.style.transform = "rotate(0deg)";
      chevron.style.setProperty("padding-left", "0rem");

    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      chevron.style.transform = "rotate(90deg)";
      chevron.style.setProperty("padding-left", ".5rem");    }
  });
});
