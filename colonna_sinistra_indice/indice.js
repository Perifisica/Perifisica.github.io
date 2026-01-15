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