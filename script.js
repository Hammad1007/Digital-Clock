// SetInterval function sets the time and then inputs it on the screen
setInterval(()=> {
    const time = document.querySelector("#time");
    let date = new Date(); // new date object
    let hr = date.getHours(); // get hours
    let min = date.getMinutes(); // get minutes
    let sec = date.getSeconds(); // get seconds
    let pe = "AM"; // select day or night
    if(hr > 12) { // considering day time
        hr = hr - 12;
        pe = "PM";
    }
    if(hr < 10) { // for making the digits equal
        hr = "0" + hr;
    }
    if(min < 10) {
        min = "0" + min;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }
    // display the time on screen
    time.textContent = hr + ":" + min + ":" + sec + pe;
}) // end of the function setInterval
