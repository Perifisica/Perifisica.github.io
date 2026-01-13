/*async function loadComponent(name, containerId) {
  const base = `components/${name}/${name}`;

  const [html, css, js] = await Promise.all([
    fetch(`${base}.html`).then(r => r.text()),
    fetch(`${base}.css`).then(r => r.text()),
    import(`./${base}.js`)
  ]);

  // CSS
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // HTML
  const container = document.getElementById(containerId);
  container.innerHTML = html;

  // JS init
  js[`init${capitalize(name)}`](container);
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

loadComponent("header", "header");
loadComponent("sidebar", "sidebar");
*/

import {stocazzo} from "./barra_ricerca/search";
import {makeSnipnet} from "./barra_ricerca/highlight"
import { highlight } from ".barra_ricerca/highlight";

export function boh(root){
stocazzo();
}