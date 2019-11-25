var dateNow;
var dateSoon;
var dateDiff;

function init() {
    dateSoon = new Date(prompt("Enter date to count to (-12hrs):"));
    setInterval(function () {
        dateNow = new Date();
        document.getElementById('time').innerHTML = dateNow.toLocaleTimeString();
        dateDiff = new Date(dateSoon - dateNow);
        document.getElementById('count').innerHTML = dateDiff.toLocaleTimeString();
    }, 100);
}

window.onload = init();
window.onerror = function () {
    this.alert(ev);
}