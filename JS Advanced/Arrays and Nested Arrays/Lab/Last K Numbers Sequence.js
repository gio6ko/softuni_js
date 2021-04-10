function solve(n, k) {
    let arr = [1];
    while(arr.length !== n){
        let increase = 0;
        if(arr.length < k){
            for (let i = 0; i < arr.length; i++) {
                increase += arr[i];
            }
            arr[arr.length] = increase;
        }else {
            for (let i = 0; i < k ; i++) {
                increase += arr[arr.length - 1 -i];
            }
            arr[arr.length] = increase;
        }
    }



    return arr;
}

console.log(solve(9, 5).join(' '));
solve(6, 3);
solve(8, 2);