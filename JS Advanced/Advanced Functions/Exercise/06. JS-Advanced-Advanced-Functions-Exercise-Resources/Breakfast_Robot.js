function solution() {

    let protein = 0;
    let carbohydrates = 0;
    let fat = 0;
    let flavours = 0;
    let arr = [];

    return manager;

    function manager(str) {


        let output = '';


        let robot = {
            protein: [getProtein, setProtein],
            carbohydrate: [getCarbohydrates, setCarbohydrates],
            fat: [getFat, setFat],
            flavour: [getFlavours, setFlavours],
            restock,
            prepare,
            report
        }
        arr = str.split(' ');

        robot[arr[0]](arr[1], arr[2]);


        function prepare(recipe, quantity) {
            switch (recipe) {
                case 'apple':

                    if (getCarbohydrates() < 1) {
                        output = 'Error: not enough carbohydrate in stock ';
                        return output;
                    } else if (getFlavours() < 2) {
                        output = 'Error: not enough flavour in stock ';
                        return output;
                    } else {
                        output = 'Success';
                        removeIngredients(quantity,['carbohydrate','flavour'],[1,2]);
                        return output;
                    }

                case 'lemonade':

                    if (getCarbohydrates() < 10) {
                        output = 'Error: not enough carbohydrate in stock ';
                        return output;
                    } else if (getFlavours() < 20) {
                        output = 'Error: not enough flavour in stock ';
                        return output;
                    } else {
                        output = 'Success';
                        removeIngredients(quantity,['carbohydrate','flavour'],[10,20]);
                        return output;
                    }

                case 'burger':
                    if (getCarbohydrates() < 5) {
                        output = 'Error: not enough carbohydrate in stock ';
                        return output;
                    } else if (getFat() < 1) {
                        output = 'Error: not enough fat in stock ';
                        return output;
                    } else if (getFlavours() < 1) {
                        output = 'Error: not enough flavour in stock ';
                        return output;
                    } else {
                        output = 'Success';
                        removeIngredients(quantity,['carbohydrate','fat','flavour'],[5,7,3]);
                        return output;
                    }


                case 'eggs':
                    if (getProtein() < 5) {
                        output = 'Error: not enough protein in stock ';
                        return output;
                    } else if (getFat() < 1) {
                        output = 'Error: not enough fat in stock ';
                        return output;
                    } else if (getFlavours() < 1) {
                        output = 'Error: not enough flavour in stock ';
                        return output;
                    } else {
                        output = 'Success';
                        removeIngredients(quantity,['protein','fat','flavour'],[5,5,1]);
                        return output;
                    }


                case 'turkey':
                    if (getProtein() < 10) {
                        output = 'Error: not enough protein in stock ';
                        return output;
                    } else if (getCarbohydrates() < 10) {
                        output = 'Error: not enough carbohydrate in stock ';
                        return output;
                    } else if (getFat() < 10) {
                        output = 'Error: not enough fat in stock '
                        return output;
                    } else if (getFlavours() < 10) {
                        output = 'Error: not enough flavour in stock ';
                        return output;
                    } else {
                        output = 'Success'
                        removeIngredients(quantity,['protein','carbohydrate','fat','flavour'],[10,10,10,10]);
                        return output;
                    }
            }
        }

        function report() {
            output = `protein=${getProtein()} carbohydrate=${getCarbohydrates()} fat=${getFat()} flavour=${getFlavours()}`
        }

        function restock(element, quantity) {
            robot[element][1](Number(quantity));
            output = 'Success';
            return output;
        }

        function removeIngredients(quantity,tokens,values){
            while (quantity--){
                for (let i = 0; i < tokens.length; i++) {
                    robot[tokens[i]][1](robot[tokens[i]][0]() - values[i]);
                }
            }
        }

        function getProtein() {
            return protein;
        }

        function setProtein(value) {
            protein = value;
        }

        function getCarbohydrates() {
            return carbohydrates;
        }

        function setCarbohydrates(value) {
            carbohydrates = value;

        }

        function getFat() {
            return fat;
        }

        function setFat(value) {
            fat = value;
        }

        function getFlavours() {
            return flavours;
        }

        function setFlavours(value) {
            flavours = value;
        }

        return output;
    }
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));






