from pathlib import Path
import os
from bs4 import BeautifulSoup
from bs4.formatter import HTMLFormatter


HTMLS_PATH = Path("./pages")
JSON_PATH = Path("./barra_ricerca")
FORMATTER = HTMLFormatter(indent=2)


def load_soup(path: Path) -> BeautifulSoup:
    return BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")


def read_pages():
    path_names_list = []
    titles_list = []
    contents_list = []
    for page in HTMLS_PATH.glob("*.html"):
        if page.name == "index.html":
            continue

        if os.path.getsize(page) == 0:
            continue 

        page_soup = load_soup(page)
        
        title = page_soup.title.string
        article = page_soup.article

        #for header in article.find_all(['h1','h2','h3','h4','h5','h6'], recursive=True):
        for header in article.find_all(['h1'], recursive=False): # poi decido cosa non indicizzare
            header.decompose()

        article = article.text

        path_names_list.append(HTMLS_PATH / page.name)
        titles_list.append(title)
        contents_list.append(article)
        
    return(path_names_list, titles_list, contents_list)

def write_search_index(path_names_list, titles_list, contents_list):
    new_json = "[ \n"
    for item, name in enumerate(path_names_list):
        new_json += "{\n" + r'"title": "' + titles_list[item] + '",\n'
        new_json +=  r'"url": "' + str(name) + '",\n'
        new_json +=  r'"content": "' + contents_list[item] 
        if item == len(path_names_list) - 1:
            new_json += '" \n } \n'
        else:
            new_json += '" \n }, \n'
    new_json += "]"

    #print(new_json)


    for page in JSON_PATH.glob("*.json"):
        if page.name == "search-index.json":
            if page.read_text(encoding="utf-8") != new_json:
                page.write_text(new_json, encoding="utf-8")
                print("✔ sincronizzato:", page.name)
            else:
                print("• già aggiornato:", page.name)

if __name__ == "__main__":
    path_names_list, titles_list, contents_list = read_pages()
    write_search_index(path_names_list, titles_list, contents_list)
