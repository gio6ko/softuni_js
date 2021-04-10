function createAssemblyLine() {

        function hasClima(device) {
            device['temp'] = 21;
            device['tempSetings'] = 21;
            device['adjustTemp'] = function () {
                if (device.temp > device.tempSetings) {
                    device.temp -= 1;
                } else if (device.temp < device.tempSetings) {
                }
                device.temp += 1;
            }
        }

        function hasAudio(device) {
            device['currentTrack'] = {
                name: null,
                artist: null
            }

            device['nowPlaying'] = function () {
                if (device.currentTrack !== null) {
                    console.log(`Now playing '${device.currentTrack.name}' by ${device.currentTrack.artist}`)
                }
            }
        }

        function hasParktronic(device) {
            device['checkDistance'] = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!")
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!")
                } else {
                    console.log("");
                }
            }
        }

    return {
            hasClima,
        hasAudio,
        hasParktronic
    };

}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);




assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

console.log(myCar)

