import quotes, { getRandomQuote } from "./quotes.js";
import { createDialog } from "./dialogs.js";


// * Quotes in the top right
const quoteSpan = document.getElementById("quote");
quoteSpan.innerHTML = getRandomQuote();

/*
// * Dialog thing for scanlines (could potentially trigger epilepsy?)
createDialog("Enable scanline effect?", "This website displays a cool scanline effect when enabled. By default it is off incase it can trigger epilepsy.", [
    {
        text: "Yes",
        buttonFunction: () => addScanlines(),
    },

    { 
        text: "No", 
        polarity: "negative" 
    }
]);
*/

function addScanlines() {
    const scanline_div = `<div class="scanlines"></div>`;
    document.body.insertAdjacentHTML("beforeend", scanline_div);
}

addScanlines();