class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }


    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    get budget(){
        return this._budget;
    }

    shopping([name,priceOfProduct]) {

        let price = Number(priceOfProduct);

        if (this.budget - price < 0) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(name);
        this.budget = this.budget - price;
        return `You have successfully bought ${name}!`
    }

    recipes({recipeName, productsList}){


        if(productsList.some(e=>this.products.includes(e) === false)){
            throw new Error("We do not have this product");
        }

        this.dishes.push({recipeName,
        productsList});

        return `${recipeName} has been successfully cooked!`
    }


    inviteGuests(name,dish){
        if(this.dishes.some(e=>e.recipeName === dish) === false){
            throw new Error('We do not have this dish');
        }

        if(this.guests.hasOwnProperty(name)){
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }


    showAttendance(){
        let result = '';

        for (let guest in this.guests) {
            result +=
                `${guest} will eat ${this.guests[guest]}, which consists of ${this.dishes.find(d=>d.recipeName === this.guests[guest]).productsList.join(', ')}\n`;
        }

        return result.trim();
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.dishes);
console.log(dinner.guests);

//console.log(dinner.showAttendance());
