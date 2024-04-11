const container = document.querySelector(".container");
const decrementaButton = document.getElementById("decrementa");
const contatoreElement = document.getElementById("contatore");
const incrementaButton = document.getElementById("incrementa");

let contatore = 0;

// Funzione per aggiornare il valore del contatore
function aggiornaContatore() {
  contatoreElement.textContent = contatore;
}

// Funzione per incrementare il contatore
function incrementa() {
  contatore++;
  aggiornaContatore();
}

// Funzione per decrementare il contatore
function decrementa() {
  contatore--;
  aggiornaContatore();
}

// Aggiunta degli eventi click ai pulsanti
incrementaButton.addEventListener("click", incrementa);
decrementaButton.addEventListener("click", decrementa);


// Aggiornamento del contatore al caricamento della pagina
aggiornaContatore();

const azzeraButton = document.getElementById("azzera");

// Funzione per azzerare il contatore
function azzera() {
  contatore = 0;
  aggiornaContatore();
  disabilitaDecrementa();
  abilitaIncrementa();
}

// Aggiunta dell'evento click al pulsante
azzeraButton.addEventListener("click", azzera);
