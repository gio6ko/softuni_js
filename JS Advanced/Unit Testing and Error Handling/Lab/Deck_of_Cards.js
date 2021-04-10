function solve(arr) {
    let str = '';
    arr.map(e => {
        let obj = {};

        if (e.length > 2) {
            obj = createCard(e.charAt(0) + e.charAt(1), e.charAt(2));
        } else {
            obj = createCard(e.charAt(0), e.charAt(1))
        }
        str += obj.toString() + ' ';
    });
    
    console.log(str);

    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitToString = {
            'S': '\u2660 ',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (validFaces.includes(face) === false || Object.keys(suitToString).includes(suit) === false) {
            return `Invalid card: ${face+suit}`;
        }
        return {
            face,
            suit,
            toString() {
                return `${face}${suitToString[suit]}`;
            }
        }
    }
}


solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C']);