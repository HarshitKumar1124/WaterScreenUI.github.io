function RuntimeL(){
    var date_and_time = new Date();
    var date = date_and_time.toLocaleDateString();
    var ctime = date_and_time.toLocaleTimeString();
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = ctime;
}
var clockLandscape = setInterval(RuntimeL, 1000);

$(".Viewport").ripples({

    peturbance: 0.01,
});


function RuntimeP() {
    var Dateportrait = new Date();
    document.getElementById("dateportrait").innerHTML = Dateportrait.toLocaleDateString();
    document.getElementById("timeportrait").innerHTML = Dateportrait.toLocaleTimeString();
}
var Clock = setInterval(RuntimeP, 1000);
