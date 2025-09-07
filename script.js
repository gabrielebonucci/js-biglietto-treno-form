// Recupero gli elementi di input
const kmInput = document.getElementById('user-km');
const ageInput = document.getElementById('user-age');
const calculateButton = document.getElementById('calculate-button');

// definisco le costanti del problema
const pricePerKm = 0.21;
const discountMinor = 0.20;
const discountSenior = 0.40;

// AL CLICK DEL BOTTONE //
// Aggiungo l'event listener al pulsante
calculateButton.addEventListener('click', function() {

    const km = parseFloat(kmInput.value);
    const age = parseInt(ageInput.value);

// Calcolo il prezzo base (senza sconti)

    let basePrice = km * pricePerKm;
    let finalPrice = basePrice;

    let discountMessage = "Nessuno sconto applicato.";

    //  Logica  per gli sconti 
    if (age < 18) {
        // Calcolo l'ammontare dello sconto
        const discountAmount = basePrice * discountMinor;
        // Sottraggo lo sconto dal prezzo base per ottenere il prezzo finale
        finalPrice = basePrice - discountAmount;
        // Aggiorno il messaggio
        discountMessage = `Sconto minorenni (20%) applicato: -${discountAmount.toFixed(2)} €`;

    } else if (age >= 65) {
        // Calcolo l'ammontare dello sconto
        const discountAmount = basePrice * discountSenior;
        // Sottraggo lo sconto dal prezzo base per ottenere il prezzo finale
        finalPrice = basePrice - discountAmount;
        // Aggiorno il messaggio
        discountMessage = `Sconto over 65 (40%) applicato: -${discountAmount.toFixed(2)} €`;
    }

// Output console

console.log("--- Calcolo Biglietto ---");
console.log(`Chilometri inseriti: ${km} km`);
console.log(`Età inserita: ${age} anni`);
console.log(`Prezzo base (senza sconti): ${basePrice.toFixed(2)} €`);
console.log(discountMessage);
console.log(`Prezzo finale: ${finalPrice.toFixed(2)} €`);
});


// Se nessuna delle condizioni è vera, il prezzo rimane quello base //


