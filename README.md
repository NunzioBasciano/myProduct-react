# myProduct

## Panoramica

L'**Applicazione di Gestione Prodotti** è un'applicazione web costruita con **React** e **React Router** che consente agli utenti di visualizzare, filtrare, aggiungere, modificare ed eliminare prodotti da un elenco centralizzato. Questa applicazione offre un'interfaccia intuitiva per gestire i dati dei prodotti, rendendo facile per gli utenti gestire l'inventario in modo efficiente.

**Nota:** L'applicazione utilizza un **backend deployato a parte**, che gestisce le operazioni relative ai prodotti. 

### Caratteristiche

- **Visualizza Prodotti**: Mostra un elenco di prodotti con dettagli come nome, marca, codice a barre, costo, prezzo e quantità.
- **Filtra Prodotti**: Filtra i prodotti in base a nome, marca o codice a barre.
- **Modifica Prodotti**: Naviga a una pagina dedicata per modificare i dettagli dei prodotti.
- **Elimina Prodotti**: Rimuovi i prodotti dall'elenco con notifiche di conferma.

## Tecnologie Utilizzate

- **React**: Per la costruzione dell'interfaccia utente.
- **React Router**: Per la navigazione tra diversi componenti/pagine.
- **React Toastify**: Per visualizzare le notifiche.
- **CSS**: Per lo stile dell'applicazione.

## Utilizzo

### Link Vercel

https://my-product-react.vercel.app/


### Funzionalità Principali

- **Visualizzazione dei Prodotti**: In home è possibile visualizzare i prodotti in database.
- **Filtri**: Usa il campo di ricerca per filtrare i prodotti.
- **Dettaglio**: Cliccando su detail sarà possibile accedere alla pagina dinamica di dettaglio del prodotto.
- **Modifica**: Cliccando su edit sarà possibile modificare una o più voci dell'articolo.
- **Elimina**: Cliccando su delete sarà possibile eliminare l'articolo.

## Integrazione con l'API

Questa applicazione interagisce con un **API backend** per la gestione dei prodotti.

### Endpoint API

- `GET /api/myproduct/GetNotes/`: Recupera l'elenco dei prodotti.
- `GET /api/myproduct/GetNote/:id`: Recupera i dettagli di un prodotto specificato dall'ID.
- `DELETE /api/myproduct/DeleteNotes/:id`: Elimina un prodotto specificato dall'ID.
- `POST /api/myproduct/AddNotes`: Aggiunge un nuovo prodotto.
- `PUT /api/myproduct/EditNote/:id`: Modifica i dettagli di un prodotto specificato dall'ID.


## Contributi

Se desideri contribuire a questo progetto, sentiti libero di aprire una issue o inviare una pull request. Ogni contributo è ben accetto!

## Licenza

Questo progetto è concesso in licenza sotto la [MIT License](LICENSE).


