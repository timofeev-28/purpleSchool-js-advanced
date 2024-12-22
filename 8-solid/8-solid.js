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
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, element) {
        super(amount);
        this.element = element;
    }

    calculateTotal() {
        return this.amount * this.element;
    }
}

const fixedBillingInstance = new FixedBilling(500);
const hourBillingInstance = new HourBilling(500, 20);
const itemBillingInstance = new ItemBilling(500, 25);

console.log(fixedBillingInstance.calculateTotal());
console.log(hourBillingInstance.calculateTotal());
console.log(itemBillingInstance.calculateTotal());


