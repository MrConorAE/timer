var dateNow;
var dateSoon;
var dateDiff;
var countValues = [];

function init() {
    dateSoon = new Date();
    if (!confirm("Today? OK = Yes, Cancel = No:")) {
        dateSoon.setFullYear((prompt("Year:")), (prompt("Month:")), (prompt("Day:")));
    }
    dateSoon.setHours((prompt("Hour:")-12), (prompt("Minute:")));
    dateSoon.setSeconds(0);
    dateSoon.setMilliseconds(0);
    setInterval(function () {
        dateNow = new Date();
        document.getElementById('time').innerHTML = dateNow.toLocaleTimeString();
        dateDiff = new Date(dateSoon - dateNow);
        if (String(dateDiff.getHours()).length == 1) {
            countValues[0] = "0" + dateDiff.getHours();
        } else {
            countValues[0] = dateDiff.getHours();
        }
        if (String(dateDiff.getMinutes()).length == 1) {
            countValues[1] = "0" + dateDiff.getMinutes();
        } else {
            countValues[1] = dateDiff.getMinutes();
        }
        if (String(dateDiff.getSeconds()).length == 1) {
            countValues[2] = "0" + dateDiff.getSeconds();
        } else {
            countValues[2] = dateDiff.getSeconds();
        }
        if (String(dateDiff.getMilliseconds()).length == 2) {
            countValues[3] = "0" + dateDiff.getMilliseconds();
        } else if (String(dateDiff.getMilliseconds()).length == 1) {
            countValues[3] = "00" + dateDiff.getMilliseconds();
        } else {
            countValues[3] = dateDiff.getMilliseconds();
        }
        document.getElementById('count').innerHTML = countValues[0] + ":" + countValues[1] + ":" + countValues[2] + "<span>." + countValues[3] + "</span>";
    }, 1);
}

window.onload = init();
window.onerror = function () {
    this.alert(ev);
};