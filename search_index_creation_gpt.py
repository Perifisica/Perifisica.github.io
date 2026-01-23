from pathlib import Path
import json
from bs4 import BeautifulSoup

HTMLS_PATH = Path("./pages")
JSON_PATH = Path("./barra_ricerca/search-index.json")


def load_soup(path: Path) -> BeautifulSoup:
    return BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")


def extract_page_data(page: Path) -> dict | None:
    if page.name == "index.html" or page.stat().st_size == 0:
        return None

    soup = load_soup(page)

    title_tag = soup.title
    article = soup.article

    if not title_tag or not article:
        return None

    # rimuovo solo gli h1 diretti figli dell'article
    for h1 in article.find_all("h1", recursive=False):
        h1.decompose()

    content = " ".join(article.stripped_strings)

    return {
        "title": title_tag.get_text(strip=True),
        "url": str(page),
        "content": content,
    }


def read_pages() -> list[dict]:
    pages_data = []

    for page in HTMLS_PATH.glob("*.html"):
        data = extract_page_data(page)
        if data:
            pages_data.append(data)

    return pages_data


def write_search_index(pages_data: list[dict]):
    new_json = json.dumps(
        pages_data,
        ensure_ascii=False,
        indent=2
    )

    if JSON_PATH.exists():
        old_json = JSON_PATH.read_text(encoding="utf-8")
        if old_json == new_json:
            print("• già aggiornato:", JSON_PATH.name)
            return

    JSON_PATH.write_text(new_json, encoding="utf-8")
    print("✔ sincronizzato:", JSON_PATH.name)


if __name__ == "__main__":
    pages_data = read_pages()
    write_search_index(pages_data)
