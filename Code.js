//creating the start button enable/disable
function start() {
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//creating the stop button enable/disable
function stop() {
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
function getData() {
    var loadedData = loadData();
    return loadedData;
}
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ":</td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
//creating the function to play a song
function playMusic() {
    mySound = new sound("Blast off to Nowhere.Mp3");
    mySound.play();
}
//linking the sound source and setting attributes
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);


    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };

}

//Creating the function to play Craps
function playCraps() {
    //Creating the variables for die1, die2, and the sum
    var die1;
    var die2;
    var sum;
    //Random number generator, multiplied by 6 and with a ceiling
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    //Notating the sum
    sum = die1 + die2;
    //To display results
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    //Generating rules of Craps game
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You Lose!";
    }

    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles! You Win!";
    }

    else document.getElementById("crapsResults").innerHTML = "Push. Please Try Again.";
}

//Sandbox for creating loop timer
function runSandbox() {
    var count = 10;
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);

    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!";
        count--;
    }, 11000);
}
//Countdown with change order request
function countDownTimerV3() {
    var count = 10;
    for (var i = 1; i <= 10; i++) {
        if (i <= 5) setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
        else if (i == 11) setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = "Blastoff!";
            count--;
        }, 1000 * i);
        else setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = "Warning! Less than halfway to launch. Time left= " + count;
            count--;
        }, 1000 * i);

    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
        count--;
    }, 11000);
}
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCo2,
        cssSensor_TVOC,
        uv,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCo2 = cssSensor_eCo2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }


}
