// updates the clock function
function updateClock() {
    var nd = new Date();     // choose the new date
    var hr = nd.getHours();  // hour
    var minu = nd.getMinutes();  // minutes
    var seco = nd.getSeconds();  // seconds
    var tp = "AM";   // PM or AM

    // condition on hours, if they are 0 
    if(hr == 0) {
        hr = 12;
    }
    // conditions on hours if they are greater than 12
    // then subtract them from 12
    if(hr > 12) {
        hr = hr - 12;
        tp = "PM"; // since after noon starts
    }
    
    Number.prototype.pad = function(digits) {
        for(var n = this.toString(); n.length < digits; n = 0 + n) {
            return n;
        }
    }
    var ids = ["hour", "minute", "second", "period"];
    var values = [hr.pad(2), minu.pad(2), seco.pad(2), tp];
    for(var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

// start clock function starts here
function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

