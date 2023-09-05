# rifare wazzapp

## Milestone 1 (fatto)

● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse (fatto)
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

### svolgimento milestone 1

- replicare la frafica (fatto in maniere molto basica per concentrarmi sulla logica)
- visualizzare al lista dei contatti (fatto)
  -collegare le immagini dei contatti con la foto
  - sostituisco il link dell'immagine di claudia con l'avatar giusto (chiedo al designer)
  - chiamo il metodo replace per sostituire ".png" con ".jpg" considerato che si tratta dell'estensione corretta dei file che ci vengono passati

## Milestone 2 (fatto) !!!inaerire la modifica della classe in base a una variabile

● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

### svolgimento milestone 2

- distinguo il contatto attivo passando l'index della riga interessata in "activeContact". per comodità sarà sempre il primo all'apertura della pagina.
  - al click activeContact cambia con quello selezionato
  - al click la riga di riferimento nella zona di ricerca contatto rimane selezionato.
- al click di un contatto mostro la sua conversazione

## Milestone 3 (fatto)

● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

## Milestone 4 (fatto)

● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

## Milestone 5 - opzionale

● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
