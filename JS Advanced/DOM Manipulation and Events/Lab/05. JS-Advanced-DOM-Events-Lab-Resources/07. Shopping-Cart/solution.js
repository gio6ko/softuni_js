function solve() {

    let sum = [];
    let products = [];
    let textArea = document.querySelector('textarea');
    document.querySelector('.shopping-cart').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.className === 'add-product') {
            const product = event.target.parentNode.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            sum.push(price);
            products.push(name);
            textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
        }
    })


    document.querySelector('.checkout').addEventListener('click', (event) => {

        textArea.value +=`You bought ${products.join()} for ${sum.reduce((sum, current) => sum + current,0).toFixed(2)}.`;
        event.target.stopPropagation();
    })
}