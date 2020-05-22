var dateNow;
var dateSoon;
var dateDiff;
var countFinished = true;

function set() {
    if (countFinished == true) {
        dateSoon = new Date();
        if (!confirm("Is the finish time today?\nOK = Yes, Cancel = No")) {
            dateSoon.setFullYear((prompt("Year:")), (prompt("Month:")), (prompt("Day:")));
        }
        dateSoon.setHours((prompt("Hour:")), (prompt("Minute:")));
        dateSoon.setSeconds(0);
        dateSoon.setMilliseconds(0);
        countFinished = false;
        document.getElementById('body').className = "running";
        document.getElementById('count').className = "";
        document.getElementById('icon').className = "fas fa-hourglass spinning";
        document.getElementById('btn-icon').className = "fas fa-stop";
    } else {
        countFinished = true;
        document.getElementById('body').className = "stopped";
        document.getElementById('count').className = "count-dim";
        document.getElementById('icon').className = "fas fa-hourglass-end count-dim";
        document.getElementById('btn-icon').className = "fas fa-play";
    }

}

function updateTime() {
    dateNow = new Date();
    var countValues = [];
    if (String(dateNow.getHours()).length == 1) {
        countValues[0] = "0" + dateNow.getHours();
    } else {
        countValues[0] = dateNow.getHours();
    }
    if (String(dateNow.getMinutes()).length == 1) {
        countValues[1] = "0" + dateNow.getMinutes();
    } else {
        countValues[1] = dateNow.getMinutes();
    }
    if (String(dateNow.getSeconds()).length == 1) {
        countValues[2] = "0" + dateNow.getSeconds();
    } else {
        countValues[2] = dateNow.getSeconds();
    }
    if (String(dateNow.getMilliseconds()).length == 2) {
        countValues[3] = "0" + dateNow.getMilliseconds();
    } else if (String(dateNow.getMilliseconds()).length == 1) {
        countValues[3] = "00" + dateNow.getMilliseconds();
    } else {
        countValues[3] = dateNow.getMilliseconds();
    }
    document.getElementById('time').innerHTML = countValues[0] + ":" + countValues[1] + ":" + countValues[2] + "<span>." + countValues[3] + "</span>";
}

function updateCount() {
    var countValues = [];
    if (countFinished == false) {
        dateDiff = new Date(dateSoon - dateNow);
        // Hours
        if (String(dateDiff.getHours() - 12) == '0') {
            countValues[0] = "00";
        } else if (String(dateDiff.getHours() - 12).length == 1) {
            countValues[0] = "0" + (dateDiff.getHours() - 12);
        } else {
            countValues[0] = (dateDiff.getHours() - 12);
        }
        // Minutes
        if (String(dateDiff.getMinutes()).length == 1) {
            countValues[1] = "0" + dateDiff.getMinutes();
        } else {
            countValues[1] = dateDiff.getMinutes();
        }
        // Seconds
        if (String(dateDiff.getSeconds()).length == 1) {
            countValues[2] = "0" + dateDiff.getSeconds();
        } else {
            countValues[2] = dateDiff.getSeconds();
        }
        // Milliseconds
        if (String(dateDiff.getMilliseconds()).length == 2) {
            countValues[3] = "0" + dateDiff.getMilliseconds();
        } else if (String(dateDiff.getMilliseconds()).length == 1) {
            countValues[3] = "00" + dateDiff.getMilliseconds();
        } else {
            countValues[3] = dateDiff.getMilliseconds();
        }
        document.getElementById('count').innerHTML = countValues[0] + ":" + countValues[1] + ":" + countValues[2] + "<span>." + countValues[3] + "</span>";
    } else {
        document.getElementById('count').innerHTML = "00:00:00<span>.000</span>";
    }
    if (countFinished == false) {
        if (dateNow.getTime() >= dateSoon.getTime()) {
            countFinished = true;
            document.getElementById('body').className = "stopped";
            document.getElementById('count').className = "count-dim";
            document.getElementById('icon').className = "fas fa-hourglass-end count-dim";
        } else {
            countFinished = false;
            document.getElementById('body').className = "running";
            document.getElementById('count').className = "";
            document.getElementById('icon').className = "fas fa-hourglass spinning";
        }
    } else {
        document.getElementById('body').className = "stopped";
        document.getElementById('count').className = "count-dim";
        document.getElementById('icon').className = "fas fa-hourglass-end count-dim";
    }
}

function init() {
    setInterval(updateTime, 10);
    setInterval(updateCount, 10);
}

window.onload = init;
window.onerror = function (ev) {
    console.log(ev);
};