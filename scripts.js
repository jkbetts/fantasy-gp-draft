let teamNumInt = 1;
let round = 1;
var alerts;


const EspA = {
    name: ['Aleix Espargaro'],
    team: 'Aprilia',
    nation: 'Spain',
    points: 63,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/aleix.jpg",
}
const Zarco = {
    name: ['Johann Zarco'],
    team: 'Reale Avintia Ducati',
    nation: 'France',
    points: 30,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0, 
    pic: "images/riderpics/zarco.jpg",   
}
const Dovi = {
    name: ['Andrea Dovizioso'],
    team: 'Ducati Factory',    
    nation: 'Italy',
    points: 269,
    poles: 0,
    wins: 2,
    secondplaces: 3,
    lapsinfirst: 33,
    pic: "images/riderpics/dovi.jpg",
}
const Petrux = {
    name: ['Danilo Petrucci'],
    team: 'Ducati Factory',
    nation: 'Italy',
    points: 176,
    poles: 0,
    wins: 1,
    secondplaces: 0,
    lapsinfirst: 14,
    pic: "images/riderpics/petrux.jpg",
}
const Miller = {
    name: ['Jack Miller'],
    team: 'Primac Ducati',
    nation: 'Australia',
    points: 165,
    poles: 0,
    wins: 2,
    secondplaces: 0,
    lapsinfirst: 2,
    pic: "images/riderpics/miller.jpg",
}
const Pecco = {
    name: ['Francesco Bagnaia'],
    team: 'Primac Ducati',
    nation: 'Italy',
    points: 54,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/pecco.jpg",
}
const Nakagami = {
    name: ['Takaaki Nakagami'],
    team: 'LCR Honda',
    nation: 'Japan',
    points: 74,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/nakagami.jpg",
}
const Crutchlow = {
    name: ['Cal Crutchlow'],
    team: 'LCR Honda',
    nation: 'United Kingdom',
    points: 133,
    poles: 0,
    wins: 0,
    secondplaces: 1,
    lapsinfirst: 6,
    pic: "images/riderpics/crutchlow.jpg",
}
const MarA = {
    name: ['Alex Marquez'],
    team: 'Repsol Honda',
    nation: 'Spain',
    points: 0,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/alexm.jpg",
}
const MarM = {
    name: ['Marc Marquez'],
    team: 'Repsol Honda',
    nation: 'Spain',
    points: 420,
    poles: 10,
    wins: 12,
    secondplaces: 6,
    lapsinfirst: 264,
    pic: "images/riderpics/marc.jpg",
}
const Binder = {
    name: ['Brad Binder'],
    team: 'KTM Factory',
    nation: 'South Africa',
    points: 0,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/binder.jpg",
}
const Lecuona = {
    name: ['Iker Lecuona'],
    team: 'KTM Factory',
    nation: 'Spain',
    points: 0,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/lecuona.jpg",
}
const Oliveira = {
    name: ['Miguel Oliveira'],
    team: 'Tech3 KTM',
    nation: 'Portugal',
    points: 33,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/oliveira.jpg",
}
const Mir = {
    name: ['Joan Mir'],
    team: 'Suzuki Factory',
    nation: 'Spain',
    points: 92,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/mir.jpg",
}
const Rins = {
    name: ['Alex Rins'],
    team: 'Suzuki Factory',
    nation: 'Spain',
    points: 205,
    poles: 0,
    wins: 2,
    secondplaces: 1,
    lapsinfirst: 12,
    pic: "images/riderpics/rins.jpg",
}
const Vinales = {
    name: ['Maverick Vinales'],
    team: 'Yamaha Factory',
    nation: 'Spain',
    points: 211,
    poles: 3,
    wins: 2,
    secondplaces: 1,
    lapsinfirst: 49,
    pic: "images/riderpics/vinales.jpg",
}
const Rossi = {
    name: ['Valentino Rossi'],
    team: 'Yamaha Factory',
    nation: 'Italy',
    points: 174,
    poles: 0,
    wins: 0,
    secondplaces: 2,
    lapsinfirst: 11,
    pic: "images/riderpics/rossi.jpg",
}
const Morbidelli = {
    name: ['Franco Morbidelli'],
    team: 'Petronas Yamaha',
    nation: 'Italy',
    points: 115,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/morbidelli.jpg",
}
const Quartararo = {
    name: ['Fabio Quartararo'],
    team: 'Petronas Yamaha',
    nation: 'France',
    points: 192,
    poles: 6,
    wins: 0,
    secondplaces: 5,
    lapsinfirst: 73,
    pic: "images/riderpics/quartararo.jpg",
}
const Pol = {
    name: ['Pol Espargaro'],
    team: 'KTM Factory',
    nation: 'Spain',
    points: 100,
    poles: 0,
    wins: 0,
    secondplaces: 0,
    lapsinfirst: 0,
    pic: "images/riderpics/pol.jpg",
}





let riders = [EspA, Zarco, Dovi, Petrux, Miller, Pecco, Nakagami, Crutchlow, MarA, MarM, Binder, Lecuona, Oliveira, Mir, Rins, Vinales, Rossi, Quartararo, Morbidelli, Pol];
var riderDraft;
var teamNumString;
var firstDraft, currentDraft;



document.getElementById("addNames").addEventListener("click",createTeam);

function createTeam(){
    if (teamNumInt < 5){
        let newTeam = document.createElement("div");
        teamNumString = "team" + teamNumInt;
        newTeam.id = teamNumString;
        document.body.appendChild(newTeam);
        addTeamName(teamNumString);
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
function addTeamName(teamNumString){
    let teamName = document.createElement("div");
    let teamBox = document.getElementById(teamNumString);
    teamName.id = "team-title"+teamNumInt;
    teamName.innerHTML = document.getElementById("inputNames").value;
    teamBox.appendChild(teamName);
    document.getElementById("inputNames").value = '';

}
function startDraft(){
    document.getElementById("start-draft").remove();
    let rosterContainer = document.getElementById("roster-container");
    alerts = document.createElement('div');
    rosterContainer.appendChild(alerts);
    alerts.id = "alerts";
    alerts.innerHTML = 'The first team to draft will be randomly chosen.<br><br><button id="accept" type="button" onclick="assignDraftOrder();">Begin</button>';
}
function assignDraftOrder(){
    clearAlerts();
    showRiders();
    let teamArray = ['1','2','3','4']
    
    let randTeam = Math.floor(Math.random()*4);
    firstDraft = document.getElementById('team'+teamArray[randTeam]);
    currentDraft = teamArray[randTeam];

    firstDraft.style.height = "30%";
    alerts.addEventListener("click",function(){clearAlerts()});
}

function clearAlerts(){
    alerts.remove();
    document.getElementById("roster-container").style.opacity = "100%";

}

function showRiders(){
    var i;

    for (i = 0; i < riders.length; i++){
        let rider = riders[i];
        let riderBox = document.createElement("div");
        let riderID = "rider" + i;

        riderBox.innerHTML = rider.name;
        riderBox.className = "riderBox";
        riderBox.id = riderID;

        var rosterContainer = document.getElementById("roster-container");
        clearAlerts();
        rosterContainer.appendChild(riderBox);
        document.getElementById(riderID).addEventListener("click",function(){highlightRider(riderID, rider)});
    }
}


function highlightRider(riderID, rider){
    alerts = document.createElement('div');
    let rosterContainer = document.getElementById("roster-container");
    rosterContainer.style.opacity = "20%";
    document.body.appendChild(alerts);
    alerts.id = "alerts";
    alerts.style.padding = "20px";
    alerts.innerHTML = '<span style="font-size:20px;">'+rider.name+'</span><br><br>';
    alerts.innerHTML += '<img src="' + rider.pic + '" height="150px">'
    alerts.innerHTML += '<br><br>Team: ' + rider.team + '<br>Country: ' + rider.nation + '<br>2019 Points: ' + rider.points + '<br>2019 Wins: ' + rider.wins + '<br>2019 Pole Positions: ' + rider.poles + '<br>2019 Second Place Finishes: ' + rider.secondplaces + '<br>2019 Laps in First: ' + rider.lapsinfirst + '<br><br><button id="draft-btn" type="button">Draft</button> <button id="back-btn" type="button">Back</button>';

    
    document.getElementById("draft-btn").addEventListener("click", function(){draft(riderID)});
    document.getElementById("back-btn").addEventListener("click", function(){clearAlerts()});
}
function draft(riderID){
    let currentTeam = document.getElementById("team"+currentDraft);
    let addedRider = document.createElement('div');
    addedRider.className = "drafted-rider"
    addedRider.id = riderID + "-drafted";
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
    if(document.getElementById("roster-container").innerHTML == ""){
        currentTeam.style.height = "auto";
        alerts = document.createElement('div');
        document.getElementById("roster-container").appendChild(alerts);
        alerts.id = "alerts";
        alerts.innerHTML = '2020 Draft Complete! Good luck this season!';
    }
    else{
    currentTeam.style.height = "30%";
    }
}