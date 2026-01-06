# Perifisica

## Collaborare su github
Mi dispiace aggiungere roba alle cose da imparare, ma l'inizio per collaborare è saper usare github.
date un'occhiata a questo:
https://www.aranzulla.it/come-usare-github-1519806.html

Quello che vi interessa è "Come creare un account" e "Come usare github desktop" per poter aggiungere le modifiche che fate sul vostro pc e caricarle online.

In particolare:

``` 
Per iniziare a lavorare su un progetto esistente, puoi clonare un repository dal tuo account GitHub utilizzando GitHub Desktop. Per farlo, fai clic sul pulsante Clone a Repository nella parte superiore dell'applicazione. Successivamente, verrà visualizzato un elenco dei tuoi repository GitHub. Seleziona il repository che desideri clonare e specifica la posizione in cui vuoi salvarlo sul tuo computer.
``` 

La repository da clonare è la vostra copia di Perifisica. 
Su questo link c'è la repo base:

https://github.com/Baelish03/Perifisica

In altro a destra c'è "Fork", che la copia sul vostro account, voi tramite l'app clonate la vostra copia, modificate quella e poi inviate, tramite github le modifiche alla repo base. (Se volete cercare su internet questa pratica si chiama Commit).

## Struttura attuale della repository

- include_html.js è un file javascript e serve ad include un html in un altro, in maniera simile al comando \include di latex.
Questo è stato fatto perché l'indice a sinistra va messo in tutte le pagine quindi lo creo una volta sola e poi lo includo.
 
index.html è il file della pagina principale. Il nome index è obligatorio ed è la pagina iniziale del sito. 
Questa è di youmath: https://www.youmath.it/

La mia attualmente è solo un segnaposto per il collegamento del logo. Il logo in tipi_di_incertezze.html è un link cliccabile a index.html

- indice.html è l'indice dei capitoli, è ciò su cui sto laorando ora.

- logo ha il logo in tutti i formati utili 
    
    - favicon.ico è l'icon piccolina prima del nome della scheda in alto

    - svg è il vettoriale in inkscape

    - xfc è per gimp, perché l'ho un po' modificato per la favicon. (La favicon deve essere quadrata e il logo era rettangolare)

    - il resto è del latex per scrivere il logo

- readme.md è questo file. È scritto in markdown, è un altro linguaggio di markup come latex o html

- stile_indice.css sono i comandi di stile relativi al file indice.html
(anche questo in lavoraione attuale)

- style.css è lo stile generale. Attualmente contiene font, le tre colonne, lo sfondo grigio e poche altre, la barra di ricerca mobile, le spaziature tra le cose. (insomma lo stile)

- tipi_di_incertezze.html è il file su cui sto lavorando attualmente: lo scritto è un copia-incolla degli appunti di Doro. Sistemarlo sarà la cosa successiva dopo l'indice.

## Compiti attuali

### Stile 

È una fase di sperimentazione, soprattutto con lo stile. Sto cercando di rendere le cose carine.

`IL LIMITE SONO LE IDEE`

Ho letteralmente cercato: come fare 3 colonne in css ed ho trovato tutto pronto su internet senza nemmeno usare chatgpt, quindi se pensate: "Sarebbe proprio carina questa cosa messa qui, fatelo liberamente". Io sto sistemando secondo il mio senso estetico.

### Indice

Attualmente vorrei fare un indice di tutte le pagine come se fosse un \tableofcontents di latex, quindi con indentazione di capitoli e sottoparagrafi (ovviamente senza numero della pagina e numerazione dei capitoli)

### Scrittura

Come detto in precedenza, ho solo copiato e incollato dalle dispense di Doro. Mani che scrivono sono sempre gradite. 

`QUESTO È IL COMPITO PIÙ SEMPLICE DAL PUNTO DI VISTA DELLA PROGRAMMAZIONE`

Basta solo indentare bene, avere un bello stile, ogni tanto qualche parola colorata, ogni tanto qualche immagine carina (che posso fare io)

`non prendete da internet che c'è il copyright`
