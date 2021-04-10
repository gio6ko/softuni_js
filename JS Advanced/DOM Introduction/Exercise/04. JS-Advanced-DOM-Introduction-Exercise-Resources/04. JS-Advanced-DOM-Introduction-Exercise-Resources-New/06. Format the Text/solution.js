function solve() {
    let text = [];
    text = document.getElementById('input').value.split('.').filter(e => e !== "");
    let str = '';
    let counter = 0;
    while (text.length){
     str += text.shift();
     counter++;
     if(counter === 3){
         counter = 0;
         document.getElementById('output').innerHTML += `<p> ${str} </p>`;
         str = '';
     }
    }

    if(str !== ''){
        document.getElementById('output').innerHTML += `<p> ${str} </p>`;
    }


}