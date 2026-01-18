import { includeHTML } from "./include_html.js";
import { Search } from "/barra_ricerca/search.js";
import { init as Pulsanti } from "/colonna_destra/pulsanti.js"
import { init as Indice } from "/colonna_sinistra_indice/indice.js"
import { init as Mobile } from "/mobile/mobile.js";

await includeHTML();

Search();
Pulsanti(document);
Indice(document);
Mobile(document);
