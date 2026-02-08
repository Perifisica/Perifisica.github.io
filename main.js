import { includeHTML } from "./include_html.js";

/*import { Search } from "/barra_ricerca/search.js";
import { init as Pulsanti } from "/colonna_destra/pulsanti.js"
import { init as Indice } from "/colonna_sinistra_indice/indice.js"
import { init as Mobile } from "/mobile/mobile.js";
import { init as Allarga } from "./image_enlarge.js";
*/

await includeHTML();

const { Search }   = await import("/barra_ricerca/search.js");
const { init: Pulsanti } = await import("/colonna_destra/pulsanti.js");
const { init: Indice }   = await import("/colonna_sinistra_indice/indice.js");
const { init: Mobile }   = await import("/mobile/mobile.js");
const { init: Allarga }  = await import("./image_enlarge.js");

Search();
Pulsanti(document);
Indice(document);
Mobile(document);
Allarga();
