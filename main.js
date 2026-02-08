import { includeHTML } from "./include_html.js";
await includeHTML();


import { Search } from "/barra_ricerca/search.js";
import { init as Pulsanti } from "/colonna_destra/pulsanti.js"
import { init as Indice } from "/colonna_sinistra_indice/indice.js"
import { init as Mobile } from "/mobile/mobile.js";
import { init as Allarga } from "./image_enlarge.js";

Search();
Pulsanti(document);
Indice(document);
Mobile(document);
Allarga();
