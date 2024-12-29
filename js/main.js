// Start Header Home Section
document.getElementById("Turn on").onclick = function(){
    document.getElementById("Lamp").src = "img/pic_bulbon.gif"
}
document.getElementById("Turn off").onclick = function(){
    document.getElementById("Lamp").src = "img/pic_bulboff.gif"
}

// End Header Home Section
// Start Media Home Section
document.getElementById("Demo").onclick = function(){
    document.getElementById("History").innerHTML = Date();
}
// End Media Home Section