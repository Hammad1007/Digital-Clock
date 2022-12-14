// updates the clock function
function updateClock() {
    var nd = new Date(); // choose the new date
    var hour = nd.getHours(), // hour
        minu = nd.getMinutes(), // minutes
        seco = nd.getSeconds(), // seconds
        tp = "AM"; // PM or AM

    // condition on hours, if they are 0 
    if(hour == 0) {
        hour = 12;
    }
    // conditions on hours if they are greater than 12
    if(hour > 12) {
        hour = hour - 12;
        tp = "PM";
    }
    Number.prototype.pad = function(digits) {
        for(var x = this.toString(); x.length < digits; x = 0 + x) {
            return x;
        }
    }
    var ids = ["hr", "min", "sec", "per"];
    var values = [hour.pad(2), minu.pad(2), seco.pad(2), tp];
    for(var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

// start clock function starts here
function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

