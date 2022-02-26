function OnHover(x) {
    document.getElementById('ImageContainer').style.backgroundImage="url(../images/Callouts/"+x+".png)";
    document.getElementById('ImageContainer').style.transform = "translateX(" + (+100) + "px) translateY(" + (-200) + "px)";
    document.getElementById('ImageContainer').style.visibility = 'visible';     
}
function OffHover() {
    
    setTimeout(function () {
       //document.getElementById('ImageContainer').style.visibility = 'hidden';
    }, 5000);
}
                                


function OnHover2(x) {
    document.getElementById("MapContainer").src = "../images/Valorant/AgentMaps/"+x+"MapRadar.png";
}
function OffHover2() {
    setTimeout(function () {
        document.getElementById("MapContainer").src = "../images/Valorant/AgentMaps/AgentMapRadar.png";
        }, 3000);
    
}
        