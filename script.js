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

// Funzionalità aggiuntive

// Imposta un limite minimo al contatore
const limiteMinimo = -10;

// Funzione per disabilitare il pulsante decrementa quando il contatore raggiunge il limite minimo
function disabilitaDecrementa() {
  if (contatore === limiteMinimo) {
    decrementaButton.disabled = true;
  }
}

// Funzione per abilitare il pulsante decrementa quando il contatore supera il limite minimo
function abilitaDecrementa() {
  if (contatore > limiteMinimo) {
    decrementaButton.disabled = false;
  }
}

// Imposta un limite massimo al contatore
const limiteMassimo = 100;

// Funzione per disabilitare il pulsante incrementa quando il contatore raggiunge il limite massimo
function disabilitaIncrementa() {
  if (contatore === limiteMassimo) {
    incrementaButton.disabled = true;
  }
}

// Funzione per abilitare il pulsante incrementa quando il contatore scende sotto il limite massimo
function abilitaIncrementa() {
  if (contatore < limiteMassimo) {
    incrementaButton.disabled = false;
  }
}

// Aggiunta dei controlli per i limiti
disabilitaDecrementa();

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
