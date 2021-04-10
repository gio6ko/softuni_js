function solve() {
    let text = Array.from(document.getElementById('text').value.split(' '));
    let convention = document.getElementById('naming-convention').value.toLowerCase();
    let result = document.getElementById('result');
    let output = '';


    function toUpper(arr){
        for (let i = 0; i < arr.length; i++) {
            let textElement = arr[i].toLowerCase();
            let upper = textElement.charAt(0).toUpperCase() + '';
            arr[i] = textElement.replace(textElement.charAt(0) + '', upper);
        }

        return arr;
    }
    if (convention === 'pascal case') {
         toUpper(text);
        output = text.join('');
    } else if (convention === 'camel case') {
        output = text.shift().toLowerCase();
        toUpper(text);
        output += text.join('');
    } else {
        output = 'Error!';
    }

    result.innerHTML = output;

}