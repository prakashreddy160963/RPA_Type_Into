// intetface
const me = {
    name: "Sonic",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I Spend ', amount);
        return amount;
    }
};
import { Invoices } from "./classes/Invoice.js";
const oneInvoice = new Invoices('Sonic', 'Working in Finance', 200);
const twoInvoice = new Invoices('Arya', 'Working in HR Dept', 400);
let invoices = [];
invoices.push(oneInvoice);
invoices.push(twoInvoice);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toform = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Type : ${type.value} ; TO Form : ${toform.value} ; Details : ${details.value} ; Amount : ${amount.valueAsNumber}`);
});
