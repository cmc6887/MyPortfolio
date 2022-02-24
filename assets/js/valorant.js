function OnHover(x) {
    document.getElementById('ImageContainer').style.backgroundImage="url(../images/Callouts/"+x+".png)";
    document.getElementById('ImageContainer').style.transform = "translateX(" + (+100) + "px) translateY(" + (-200) + "px)";
    document.getElementById('ImageContainer').style.visibility = 'visible';     
}
function OffHover() {
    document.getElementById('ImageContainer').style.visibility = 'hidden';
}
                                


function OnHover2(x) {
    document.getElementById("MapContainer").src = "../images/Valorant/AgentMaps/"+x+"MapRadar.png";
}
function OffHover2() {
    //document.getElementById("MapContainer").src = "../images/Valorant/ValorantMapRadar.png";
}
        