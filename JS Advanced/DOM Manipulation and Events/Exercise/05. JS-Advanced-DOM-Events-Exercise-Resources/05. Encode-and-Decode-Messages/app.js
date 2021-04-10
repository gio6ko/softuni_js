function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    document.getElementById('main').addEventListener('click', onClick);


    function onClick(event) {

        const elements = {
            encode: {
                text: textAreas[0],
                btn: buttons[0],
                func: encodeF(textAreas[1])
            },
            decode: {
                text: textAreas[1],
                btn: buttons[1],
                func: decodeF
            }
        }

        if (event.target.tagName !== 'BUTTON') {
            return;
        }


        const type = event.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
        console.log(type);
        elements[type].func();
    }


    function encodeF(append) {
        console.log(this,append);
        let result = '';
        for (let i = 0; i < this.text.value.length; i++) {
            result += String.fromCharCode(this.text.value.charCodeAt(i) + 1);
        }


        this.text.value = '';

      append.value = result;


    }


    function decodeF() {
        console.log(this);
        let result = '';
        // for (let i = 0; i < text.value.length; i++) {
        //     result += String.fromCharCode(text.value.charCodeAt(i) - 1);
        // }
        //
        //
        // text.value = result;
    }
}