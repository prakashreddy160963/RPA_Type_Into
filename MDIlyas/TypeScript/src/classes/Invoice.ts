export class Invoices {


    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.client} ownes $${this.amount} for ${this.details}`
    }
}
