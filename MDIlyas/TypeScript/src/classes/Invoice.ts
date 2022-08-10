import { HasFormatter } from "../Interfaces/HasFormatter.js"


export class Invoices implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.client} ownes $${this.amount} for ${this.details}`
    }
}
