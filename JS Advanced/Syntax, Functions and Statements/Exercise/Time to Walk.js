function solve(steps, footprintLength, speed) {
    let distance = steps * (footprintLength / 1000);
    const rest = Math.floor(distance / 0.5) * 60;
    let time = distance / speed * 3600 + rest;
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2,"0");
    let minutes = Math.floor((time - hours*3600)/60).toFixed(0).padStart(2,"0");
    let seconds = Math.round(time % 60).toFixed(0).padStart(2,"0");

    console.log(`${hours}:${minutes}:${seconds}`);

}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);