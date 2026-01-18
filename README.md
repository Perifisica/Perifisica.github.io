# Perifisica

## Collaborare su github
Mi dispiace aggiungere roba alle cose da imparare, ma l'inizio per collaborare è saper usare github.
date un'occhiata a questo:
https://www.aranzulla.it/come-usare-github-1519806.html

Quello che vi interessa è "Come creare un account" e "Come usare github desktop" per poter aggiungere le modifiche che fate sul vostro pc e caricarle online.

In particolare:

``` 
Per iniziare a lavorare su un progetto esistente, puoi clonare un repository dal tuo account GitHub utilizzando GitHub Desktop. 
Per farlo, fai clic sul pulsante Clone a Repository nella parte superiore dell'applicazione. 
Successivamente, verrà visualizzato un elenco dei tuoi repository GitHub. 
Seleziona il repository che desideri clonare e specifica la posizione in cui vuoi salvarlo sul tuo computer.
``` 

La repository da clonare è la vostra copia di Perifisica. 
Su questo link c'è la repo base:

https://github.com/Baelish03/Perifisica

In altro a destra c'è "Fork", che la copia sul vostro account, voi tramite l'app clonate la vostra copia, modificate quella e poi inviate, tramite github le modifiche alla repo base. (Se volete cercare su internet questa pratica si chiama Commit).

Una volta scaricata la cartella usate visual studio code e installate l'estensione "Live server" che vi aprirà l'html completo.
Questo perché se aprirete conil browser direttamente il file html, non viene caricato il javascript e la pagina esce senza indice e barra destra.

## Struttura attuale della repository

- barra_ricerca
 
    - barra_ricerca.html è molto semplice: ha solo un oggetto input su cui scrive ed uno su cui compariranno i risultati della ricerca

    - barra_ricerca.css contiene per lo più colori, dimensioni e sistemazioni grafiche

    - search.js è la funzione di ricerca vera e propria che chiama highlight.js

    - highlight.js evidenzia durante la ricerca la porzione di testo corrispondente alla ricerca

    - search-index.json è un database, come se fosse un excel (per intenderci) e associa titolo, collegamento locale della pagina html e contenuto. search.js cerca nel contenuto ese clicchi sul risultato il collegamento locale ti spedisce sulla nuova pagina.

    Attualmente ci sono elettromagnetismo.html e meccanica.html come file segnaposto per provare il corretto funzionamento. Quando riempiremo il sito bisognerà fare uno script python per indicizzare tutte le pagine.


- colonna destra

    - colonna_destra.css e .html sono le parti legate all'accessibilità. Intendevo mettere lì anche la pubblicità ma per ora non se ne parla altrimenti serve la partita iva

    - pulsanti.js semplicemente fa funzionare i pulsanti modificando il css


- colonna sinistra indice 

    - indice.html è l'indice dei capitoli, l'ho abbozzato alla buona. Zaccaria ha preparato la lista dei capitoli, va trascritta nell'html ma verrà fatto mano a mano che le pagine vengono create

    - stile_indice.css è lo stile dell'indice

    - indice.js contiene le animazioni di apertura e chiusura delle tendine dell'indice e la colorazione automatica nell'indice del titoletto della pagina che si sta visitando 


- logo ha il logo in tutti i formati utili 
    
    - favicon.ico è l'icon piccolina prima del nome della scheda in alto

    - svg è il vettoriale in inkscape

    - xfc è per gimp, perché l'ho un po' modificato per la favicon. (La favicon deve essere quadrata e il logo era rettangolare)

    - il resto è del latex per scrivere il logo


- opendyslexic contiene il file del font (non è protetto da copyright)


- readme.md è questo file. È scritto in markdown, è un altro linguaggio di markup come latex o html


- include_html.js è un file javascript e serve ad include un html in un altro, in maniera simile al comando \include di latex.
Questo è stato fatto perché l'indice a sinistra va messo in tutte le pagine quindi lo creo una volta sola e poi lo includo.
Stessa cosa è stata fatta per la colonna di destra e la barra di ricerca


- main.js: javascript parallelizza i comandi per risparmiare tempo, questo comporta che, ad esempio, il programma che fa funzionare i pulsanti a destra venga caricato prima che i pulsanti stessi siano aggiiunti con include_html.js. main.js previene questo con await(), le altre funzioni invece vengono solo inizializzate e possono tranquillamente andare in parallelo.


- style.css è lo stile generale. Attualmente contiene font, le tre colonne, lo sfondo.

 
- index.html è il file della pagina principale. Il nome index è obligatorio ed è la pagina iniziale del sito. 
Questa è di youmath: https://www.youmath.it/ .  
    La mia attualmente è solo un segnaposto per il collegamento del logo. Il logo in tipi_di_incertezze.html è un link cliccabile a index.html

- tipi_di_incertezze.html è il file su cui sto lavorando attualmente: lo scritto è un copia-incolla degli appunti di Doro.

## Compiti attuali

### Stile 

È una fase di sperimentazione, soprattutto con lo stile. Sto cercando di rendere le cose carine.

`IL LIMITE SONO LE IDEE`

Ho letteralmente cercato: come fare 3 colonne in css ed ho trovato tutto pronto su internet senza nemmeno usare chatgpt, quindi se pensate: "Sarebbe proprio carina questa cosa messa qui, fatelo liberamente". Io sto sistemando secondo il mio senso estetico.

### Scrittura

Come detto in precedenza, ho solo copiato e incollato dalle dispense di Doro. Mani che scrivono sono sempre gradite. 

`QUESTO È IL COMPITO PIÙ SEMPLICE DAL PUNTO DI VISTA DELLA PROGRAMMAZIONE`

Basta solo indentare bene, avere un bello stile, ogni tanto qualche parola colorata, ogni tanto qualche immagine carina (che posso fare io)

`non prendete da internet che c'è il copyright`

### Altri compiti

Attualmente non ci sono altri compiti da svolgere

Telefono piccolo	480px
Telefono medio	600px
Tablet verticale	768px
Tablet orizzontale	992px
Desktop piccolo	1200px