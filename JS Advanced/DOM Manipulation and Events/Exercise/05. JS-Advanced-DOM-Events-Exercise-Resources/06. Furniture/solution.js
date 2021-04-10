function solve() {

    const textAreas = document.querySelectorAll('textarea');
    let inputTextArea = textAreas[0];
    let outputTextArea = textAreas[1];


    const buttons = document.querySelectorAll('button');
    let generateButton = buttons[0];
    let buyButton = buttons[1];


    const body = document.querySelector('tbody');


    generateButton.addEventListener('click',generateOnClick);


    buyButton.addEventListener('click',buyOnClick);



    function generateOnClick(){

        const arr = JSON.parse(inputTextArea.value);
        let rows = [];
        for (let el of arr) {
            const row = document.createElement('tr');
            const cellImage = document.createElement('td');
            const image = document.createElement('img');
            image.setAttribute('src',el.img);


            cellImage.appendChild(image);
            const cellName = document.createElement('td');

            const paragraph = document.createElement('p');
            paragraph.textContent = el.name;

            cellName.appendChild(paragraph);
            const cellPrice = document.createElement('td');
            const p = document.createElement('p');
            p.textContent = el.price;
            cellPrice.appendChild(p);

            const cellDecoration = document.createElement('td');
            const par = document.createElement('p');
            par.textContent = el.decFactor;
            cellDecoration.appendChild(par);
            const cellCheck = document.createElement('td');

            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            cellCheck.appendChild(input);


            row.appendChild(cellImage);
            row.appendChild(cellName);
            row.appendChild(cellPrice);
            row.appendChild(cellDecoration);
            row.appendChild(cellCheck);



            body.appendChild(row);
        }
    }



    function buyOnClick(){
        const furniture = body.querySelectorAll('input[type=checkbox]:checked');
        const arr = [];
        furniture.forEach(e=> arr.push(e.parentNode.parentNode));
        console.log(arr);

        let namesArr = [];
        let price = 0;
        let averageDec = 0;


        arr.forEach(el=>{
            namesArr.push(el.children[1].children[0].textContent);
            price += Number(el.children[2].children[0].textContent);
            averageDec += Number(el.children[3].children[0].textContent);
        })

        let names = namesArr.join(", ");

        outputTextArea.textContent = `Bought furniture: ${names}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${averageDec/furniture.length}`


    }
}