function solve(moves) {
    let dashboard = [[false, false, false],
        [false, false, false],
        [false, false, false]];
    let player = 'X';
    for (let i = 0; i < moves.length; i++) {

        let [row, col] = moves[i].split(" ").map(Number);

        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[row][col] = player;

        for (let j = 0; j < 3; j++) {
            if (dashboard[j][0] === player &&
                dashboard[j][1] === player &&
                dashboard[j][2] === player) {
                console.log(`Player ${player} wins!`)
                printDashboard(dashboard);
                return;
            } else if (dashboard[0][j] === player &&
                dashboard[1][j] === player &&
                dashboard[2][j] === player) {
                console.log(`Player ${player} wins!`)
                printDashboard();
                return;
            }
        }

        if (dashboard[0][0] === player &&
            dashboard[1][1] === player &&
            dashboard[2][2] === player) {

            console.log(`Player ${player} wins!`)
            printDashboard();
            return;
        } else if (dashboard[0][2] === player &&
            dashboard[1][1] === player &&
            dashboard[2][0] === player) {
            console.log(`Player ${player} wins!`)
            printDashboard();
            return;
        }

        let hasFalse = false;

        for (let j = 0; j < dashboard.length; j++) {
            if(dashboard[j].includes(false)){
                hasFalse = true;
            }
        }
        if(!hasFalse){
            console.log("The game ended! Nobody wins :(");
            printDashboard();
            return;
        }


        player = player === 'X' ? 'O' : 'X';
    }
    function printDashboard() {
        for (let i of dashboard) {
            console.log(i.join('\t'));
        }
    }
}





console.log(solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
));

console.log(solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
));