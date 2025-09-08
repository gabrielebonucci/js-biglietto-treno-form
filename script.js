// Recupero gli elementi di input
const kmInput = document.getElementById('user-km');
const ageInput = document.getElementById('user-age');
const nameInput = document.getElementById('user-name');
const calculateButton = document.getElementById('calculate-button');
const resetButton = document.getElementById('reset-button');


// recupero gli elementi di output (per milestone 2)
const ticketSection = document.getElementById('ticket-section');
const ticketNameOutput = document.getElementById('ticket-name');
const ticketOfferOutput = document.getElementById('ticket-offer');
const ticketPriceOutput = document.getElementById('ticket-price');


// definisco le costanti del problema
const pricePerKm = 0.21;
const discountMinor = 0.20;
const discountSenior = 0.40;


// AL CLICK DEL BOTTONE //
// Aggiungo l'event listener al pulsante

calculateButton.addEventListener('click', function(event) {

//Impedire il ricaricamento della pagina causato dal form
    event.preventDefault();

// Lettura input
    const km = parseFloat(kmInput.value);
    const age = parseInt(ageInput.value);
    const userName = nameInput.value;

// Calcolo il prezzo base (senza sconti)

    let basePrice = km * pricePerKm;
    let finalPrice = basePrice;
    let offerType = "Tariffa Standard";
    
    ticketOfferOutput.classList.remove('bg-success', 'bg-warning', 'bg-secondary');

    //  Logica  per gli sconti 
    if (age < 18) {
        // Calcolo l'ammontare dello sconto
        const discountAmount = basePrice * discountMinor;
        // Sottraggo lo sconto dal prezzo base per ottenere il prezzo finale
        finalPrice = basePrice - discountAmount;
        // Aggiorno il messaggio
        offerType = "Sconto Minorenni";
        ticketOfferOutput.classList.add('bg-success');

    } else if (age >= 65) {
        // Calcolo l'ammontare dello sconto
        const discountAmount = basePrice * discountSenior;
        // Sottraggo lo sconto dal prezzo base per ottenere il prezzo finale
        finalPrice = basePrice - discountAmount;
        // Aggiorno il messaggio
       offerType = "Sconto over 65";
       ticketOfferOutput.classList.add('bg-warning');

    } else {
        ticketOfferOutput.classList.add('bg-secondary');

    }
});

// Aggiungo l'event listener al pulsante "ANNULLA"

    resetButton.addEventListener('click', function() {
    // Nasconde la sezione del biglietto aggiungendo la classe Bootstrap
    ticketSection.classList.add('d-none');});

// Output console

ticketNameOutput.innerHTML = userName;
ticketOfferOutput.innerHTML = offerType;
ticketPriceOutput.innerHTML = finalPrice.toFixed(2) + "€";

ticketSection.classList.remove('d-none');