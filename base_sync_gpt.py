from pathlib import Path
import os
from bs4 import BeautifulSoup
from bs4.formatter import HTMLFormatter


HTMLS_PATH = Path("./pages")
FORMATTER = HTMLFormatter(indent=2)



def load_soup(path: Path) -> BeautifulSoup:
    return BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")


def sync_pages():
    index_path = HTMLS_PATH / "index.html"
    index_html = index_path.read_text(encoding="utf-8")

    index_soup = BeautifulSoup(index_html, "html.parser") # è tutto index_html

    for page in HTMLS_PATH.glob("*.html"):
        if page.name == "index.html":
            continue

        if os.path.getsize(page) == 0:
            page.write_text(str(index_soup)) #se la pagina è vuota, mettici index.html

        page_soup = load_soup(page) # è tutto page.html

        # estrai SOLO i dati variabili
        new_title = page_soup.title.string
        new_article = page_soup.article.decode_contents()

        # copia del template
        merged = BeautifulSoup(index_html, "html.parser") # è tutto index_html

        merged.title.string = new_title # imposta il titolo di index ad essere quelo di page
        merged.article.clear() # svuota article di index
        merged.article.append(
            BeautifulSoup(new_article, "html.parser")) # riempie article con quello di page
        merged = merged.prettify(formatter=FORMATTER)

        new_html = str(merged)

        if page.read_text(encoding="utf-8") != new_html: # lo riscrive solo se trova differenze
            page.write_text(new_html, encoding="utf-8")
            print("✔ sincronizzato:", page.name)
        else:
            print("• già aggiornato:", page.name)


if __name__ == "__main__":
    sync_pages()
