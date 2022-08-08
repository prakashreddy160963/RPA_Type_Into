// intetface

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "Sonic",
    age: 23,
    speak(text: string) {
        console.log(text);
    },
    spend(amount: number) {
        console.log('I Spend ', amount)
        return amount;
    }

}

import { Invoices } from "./classes/Invoice.js"

const oneInvoice = new Invoices('Sonic', 'Working in Finance', 200);
const twoInvoice = new Invoices('Arya', 'Working in HR Dept', 400);

let invoices: Invoices[] = [];
invoices.push(oneInvoice)
invoices.push(twoInvoice)


invoices.forEach(inv => {
    console.log(inv.format())
})

const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement

const toform = document.querySelector("#toform") as HTMLInputElement

const details = document.querySelector("#details") as HTMLInputElement

const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(`Type : ${type.value} ; TO Form : ${toform.value} ; Details : ${details.value} ; Amount : ${amount.valueAsNumber}`)
})