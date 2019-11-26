var dateNow;
var dateSoon;
var dateDiff;

function init() {
    dateSoon = new Date();
    if (!confirm("Today? OK = Yes, Cancel = No:")) {
        dateSoon.setFullYear((prompt("Year:")), (prompt("Month:")), (prompt("Day:")));
    }
    dateSoon.setHours((prompt("Hour:")-12), (prompt("Minute:")));
    setInterval(function () {
        dateNow = new Date();
        document.getElementById('time').innerHTML = dateNow.toLocaleTimeString();
        dateDiff = new Date(dateSoon - dateNow);
        document.getElementById('count').innerHTML = (dateDiff.getHours() + "h " + dateDiff.getMinutes() + "m " + dateDiff.getSeconds() + "s " + dateDiff.getMilliseconds() + "ms");
    }, 10);
}

window.onload = init();
window.onerror = function () {
    this.alert(ev);
};