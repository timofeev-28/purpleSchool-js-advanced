'use strict';

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class FixedBilling extends Billing {}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.amount = amount * hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, elements) {
        super(amount);
        this.amount = amount * elements;
    }
}

const fixedBillingInstance = new FixedBilling(500);
const hourBillingInstance = new HourBilling(500, 20);
const itemBillingInstance = new ItemBilling(500, 25);

console.log(fixedBillingInstance.calculateTotal());
console.log(hourBillingInstance.calculateTotal());
console.log(itemBillingInstance.calculateTotal());
