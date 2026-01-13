const button = document.querySelector("button");
button.addEventListener("click", changeMultipleCSS);

function changeMultipleCSS(e) {
  // Defining all our CSS styles
  const myStyles = `
    display: block;
    width: 80%;
    background-color: red;
    border: 2px;
    font-size: 5em;
    color: white;
    margin: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: 2px solid black;
  `;
  const element = document.querySelector(".demo");

  element.style.cssText = myStyles;
}