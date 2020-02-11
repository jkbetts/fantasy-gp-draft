let teamNumInt = 1;
let round = 1;
var alerts;
let riders = ['#41 Aleix Espargaro', '#5 Johann Zarco', '#04 Andrea Dovizioso', '#9 Danilo Petrucci', '#43 Jack Miller', '#63 Pecco Bagnaia', '#30 Takaaki Nakagami', '#35 Cal Crutchlow', '#73 Alex Marquez', '#93 Marc Marquez', '#33 Brad Binder', '#27 Iker Lecuona', '#88 Miguel Oliveira', '#36 Joan Mir', '#42 Alex Rins', '#12 Maverick Vinales', '#46 Valentino Rossi', '#20 Fabio Quartararo', '#21 Franco Morbidelli', "#44 Pol Espargaro"];
var riderDraft;
var teamNumString;
var firstDraft, secondDraft, thirdDraft, fourthDraft, currentDraft;

document.getElementById("addNames").addEventListener("click",createTeam);

function createTeam(){
    if (teamNumInt < 5){
        let newTeam = document.createElement("div");
        teamNumString = "team" + teamNumInt;
        

        newTeam.id = teamNumString;
        newTeam.innerHTML = document.getElementById("inputNames").value;
        document.body.appendChild(newTeam);
        document.getElementById("inputNames").value = '';
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
    alerts.innerHTML = 'Draft order will be randomly established.<br><br><button id="accept" type="button" onclick="assignDraftOrder();">Accept</button>';
}
function assignDraftOrder(){
    clearAlerts();
    showRiders();
    let teamArray = ['1','2','3','4']
    
    let randTeam = Math.floor(Math.random()*4);
    firstDraft = document.getElementById('team'+teamArray[randTeam]);
    currentDraft = teamArray[randTeam];
    teamArray.splice(randTeam,1);

    randTeam = Math.floor(Math.random()*3);
    secondDraft = document.getElementById('team'+teamArray[randTeam]);
    teamArray.splice(randTeam,1);

    randTeam = Math.floor(Math.random()*2);
    thirdDraft = document.getElementById('team'+teamArray[randTeam]);
    teamArray.splice(randTeam,1);

    randTeam = Math.floor(Math.random()*1);
    fourthDraft = document.getElementById('team'+teamArray[randTeam]);
    teamArray.splice(randTeam,1);

    firstDraft.style.height = "30%";
    addAlert("It's time to draft!");
    alerts.addEventListener("click",function(){clearAlerts()});
}

function clearAlerts(){
    alerts.remove();
    document.getElementById("roster-container").style.opacity = "100%";

}

function addAlert(alertText){
    alerts = document.createElement('div');
    document.body.appendChild(alerts);
    alerts.id = "alerts";
    alerts.style.padding = "20px";
    alerts.innerHTML = alertText;
    alerts.addEventListener("click",function(){clearAlerts()});
}

function showRiders(){
    var i;

    for (i = 0; i < riders.length; i++){
        let rider = riders[i];
        let riderBox = document.createElement("div");
        let riderID = "rider" + i;

        riderBox.innerHTML = rider;
        riderBox.className = "riderBox";
        riderBox.id = riderID;
        var rosterContainer = document.getElementById("roster-container");
        clearAlerts();
        rosterContainer.appendChild(riderBox);
        document.getElementById(riderID).addEventListener("click",function(){highlightRider(riderID)});
    }
}


function highlightRider(riderID){
    alerts = document.createElement('div');
    let rosterContainer = document.getElementById("roster-container");
    rosterContainer.style.opacity = "20%";
    document.body.appendChild(alerts);
    alerts.id = "alerts";
    alerts.style.fontSize = "25px";
    alerts.style.lineHeight = "40px";
    alerts.style.padding = "20px";
    alerts.innerHTML = document.getElementById(riderID).innerHTML + '<br><button id="draft-btn" type="button">Draft</button> <button id="back-btn" type="button">Back</button>';
    document.getElementById("draft-btn").addEventListener("click", function(){draft(riderID)});
    document.getElementById("back-btn").addEventListener("click", function(){clearAlerts()});
}
function draft(riderID){
    let currentTeam = document.getElementById("team"+currentDraft);
    let addedRider = document.createElement('div');
    addedRider.id = currentTeam + riderID;
    addedRider.innerHTML = document.getElementById(riderID).innerHTML;
    currentTeam.appendChild(addedRider);
    clearAlerts();

    document.getElementById(riderID).remove();
    currentTeam.style.height = "auto";
    currentDraft++;
    clearAlerts();
    if(currentDraft > 4){
        currentDraft = 1;
    }
    currentTeam = document.getElementById("team"+currentDraft);
    currentTeam.style.height = "30%";
}

function addToRoster(riderID,i,teamname,team){
    let rider = document.getElementById(riderID).innerHTML;
    alert(rider);
    team.innerHTML += '<div id="'+teamname+'rider">'+rider+'</div>';
    alerts.remove();
    let rosterContainer = document.getElementById("roster-container");
    rosterContainer.style.opacity = "100%";
    
    document.getElementById("team1").style.height = "10%";
    document.getElementById("team2").style.height = "10%";
    document.getElementById("team3").style.height = "10%";
    document.getElementById("team4").style.height = "10%";

}
