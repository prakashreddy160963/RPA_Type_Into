import { Invoices } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoices('Sonic', 'web work', 300)
// docTwo = new Invoices('arya', 'system eng', 400)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
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
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoices(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    console.log(docs);
});
