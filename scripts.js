let teamNumInt = 1;
let round = 1;
var alerts;
let riders = ['#41 Aleix Espargaro', '#5 Johann Zarco', '#53 Tito Rabat', '#04 Andrea Dovizioso', '#9 Danilo Petrucci', '#43 Jack Miller', '#63 Francesco Bagnaia', '#30 Takaaki Nakagami', '#35 Cal Crutchlow', '#73 Alex Marquez', '#93 Marc Marquez', '#33 Brad Binder', '#27 Iker Lecuona', '#88 Miguel Oliveira', '#36 Joan Mir', '#42 Alex Rins', '#12 Maverick Vinales', '#46 Valentino Rossi', '#20 Fabio Quartararo', '#21 Franco Morbidelli', "#44 Pol Espargaro"];
var riderDraft;
var teamNumString;

document.getElementById("addNames").addEventListener("click",createTeam);


function createTeam(){
    if (teamNumInt < 5){
        let newTeam = document.createElement("div");
        teamNumString = "team" + teamNumInt;
        

        newTeam.id = teamNumString;
        newTeam.innerHTML = document.getElementById("inputNames").value + "<br>";
        document.body.appendChild(newTeam);
        document.getElementById("inputNames").value = '';
    }
    else{
        alert("You've reached the maximum number of teams.");
    }
    teamNumInt++;
    if(teamNumInt == 5){
        document.getElementById("user-create-container").remove();
        let rosterContainer = document.createElement("div");
        document.body.appendChild(rosterContainer);
        rosterContainer.id = "roster-container";
        rosterContainer.innerHTML = '<button id="start-draft" type="button" onclick="startDraft();">Start Draft</button>';
    }
}
function startDraft(){
    document.getElementById("start-draft").remove();
    let rosterContainer = document.getElementById("roster-container");
    alerts = document.createElement('div');
    rosterContainer.appendChild(alerts);
    alerts.id = "alerts";
    alerts.innerHTML = 'Teams will draft riders at random. Once all riders have been drafted, teams will have the opportunity to trade riders.<br><br><button id="accept" type="button" onclick="showRiders();">Accept</button>';
}
function draft(){
    if(teamNumInt > 4){
        teamNumInt = 1;
    }
    if (riders.length == 0) {
        alerts.innerHTML = 'All riders have been drafted.<br><br><button id="accept" type="button" onclick="clearAlerts();">Accept</button>';
    }
    else{
        riderDraft = Math.floor(Math.random() * (riders.length));
        alerts.innerHTML = 'Round ' + round + ' draft:<br><br>' + '<span style="font-size:24px;">'+ riders[riderDraft] + '</span><br><br><button id="accept" type="button" onclick="draft();">Accept</button>';

        switch (true) {
            case (teamNumInt == 1):
                document.getElementById("team1").innerHTML += '<br>' + riders[riderDraft];
                break;
            case (teamNumInt == 2):
                document.getElementById("team2").innerHTML += '<br>' + riders[riderDraft];
                break;
            case (teamNumInt == 3):
                document.getElementById("team3").innerHTML += '<br>' + riders[riderDraft];
                break;
            case (teamNumInt == 4):
                document.getElementById("team4").innerHTML += '<br>' + riders[riderDraft];
                break;
            }
        round++;
        teamNumInt++;        
        riders.splice(riderDraft, 1);
    }
}
function clearAlerts(){
    alerts.remove();
}

function showRiders(){
    var i;

    for (i = 0; i < riders.length; i++){
        var rider = riders[i];
        var riderBox = document.createElement("div");
        riderBox.innerHTML = rider;
        riderBox.className = "riderBox";
        riderBox.id = "rider" + i;
        var rosterContainer = document.getElementById("roster-container");
        alerts.remove();
        rosterContainer.appendChild(riderBox);
    }
}