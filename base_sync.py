# import re

# BASE_FILE = "base.html"
# TARGET_FILE = "pagina.html"

# def estrai_main(html):
#     match = re.search(r"<main[\s\S]*?>[\s\S]*?</main>", html, re.IGNORECASE)
#     if not match:
#         raise ValueError("Tag <main> non trovato")
#     return match.group(0)

# def sostituisci_main(html, nuovo_main):
#     return re.sub(
#         r"<main[\s\S]*?>[\s\S]*?</main>",
#         nuovo_main,
#         html,
#         flags=re.IGNORECASE
#     )

# if __name__ == "main":
#     with open(BASE_FILE, "r", encoding="utf-8") as f:
#         base_html = f.read()

#     with open(TARGET_FILE, "r", encoding="utf-8") as f:
#         target_html = f.read()

#     main_originale = estrai_main(target_html)
#     html_finale = sostituisci_main(base_html, main_originale)

#     with open(TARGET_FILE, "w", encoding="utf-8") as f:
#         f.write(html_finale)

#     print("Sincronizzazione completata.")

import os

htmls_path = r"./pages"

for file in os.scandir(htmls_path):
    if file.is_file():
        with open(file.path, "r") as file_io:
            print("Content of", file.name, ":")
            print(file_io.read())