import os
import re


def read_html_files(htmls_path):
    pages = []
    pages_name = []
    for file in os.scandir(htmls_path):
        if file.is_file():
            with open(file.path, "r") as file_input:
                if file.name == "index.html":
                    index_html = file_input.read()
                else:
                    page_name = file.name
                    page = file_input.read()
                    pages_name.append(page_name)
                    pages.append(page)
        else:
            print(file.name, " non è un file")
    return index_html, pages, pages_name


def extract_html_base(index_html):
    pattern_pre_title = r'^(.*?<title>)'
    pre_title = re.search(pattern_pre_title, index_html, re.DOTALL).group(1)
    #print(pre_title, "\n")

    pattern_post_title_to_article = r'(</title>.*?<article>)'
    post_title_to_article = re.search(pattern_post_title_to_article, index_html, re.DOTALL).group(1)
    #print(post_title_to_middle_column)

    pattern_post_article = r'(</article>.*)'
    post_article = re.search(pattern_post_article, index_html, re.DOTALL).group(1)

    return [pre_title, post_title_to_article, post_article]


def extract_middle_column(page):
    pattern_title = r'<title>(.*?)</title>'
    title = re.search(pattern_title, page, re.DOTALL).group(1)
    #print(title)

    pattern_article = r'<article>(.*?)</article>'
    article = re.search(pattern_article, page, re.DOTALL).group(1)
    #print(article)

    return [title, article]

def rewrite_all(file_path, page_name, index_parts, page_parts):
    file = file_path + page_name
    all_text = index_parts[0] + page_parts[0] + index_parts[1] + page_parts[1] + index_parts[2]
    #print(all_text)

    with open(file, "w") as file_ouput:
        file_ouput.write(all_text)

    print("Sicronizzazione eseguita su ", page_name)
    


                    


if __name__ == "__main__":
    HTMLS_PATH = r"./pages/"
    INDEX_HTML, PAGES, PAGES_NAME = read_html_files(HTMLS_PATH)
    CLEAN_INDEX = extract_html_base(INDEX_HTML)
    CLEAN_PAGES = []
    for iterator , page in enumerate(PAGES):
        #print(PAGES_NAME[iterator], "\n")
        CLEAN_PAGE = extract_middle_column(page)
        rewrite_all(HTMLS_PATH, PAGES_NAME[iterator], CLEAN_INDEX, CLEAN_PAGE)

