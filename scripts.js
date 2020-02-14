let teamNumInt = 1;
let round = 1;
var alerts;


const EspA = {
    name: ['# 41 Aleix Espargaro'],
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
    name: ['#5 Johann Zarco'],
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
    name: ['#04 Andrea Dovizioso'],
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
    name: ['#9 Danilo Petrucci'],
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
    name: ['#43 Jack Miller'],
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
    name: ['#63 Francesco Bagnaia'],
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
    name: ['#30 Takaaki Nakagami'],
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
    name: ['#35 Cal Crutchlow'],
    team: 'LCR Honda',
    nation: 'UK',
    points: 133,
    poles: 0,
    wins: 0,
    secondplaces: 1,
    lapsinfirst: 6,
    pic: "images/riderpics/crutchlow.jpg",
}
const MarA = {
    name: ['#73 Alex Marquez'],
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
    name: ['#93 Marc Marquez'],
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
    name: ['#33 Brad Binder'],
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
    name: ['#27 Iker Lecuona'],
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
    name: ['#88 Miguel Oliveira'],
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
    name: ['#36 Joan Mir'],
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
    name: ['#42 Alex Rins'],
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
    name: ['#12 Maverick Vinales'],
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
    name: ['#46 Valentino Rossi'],
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
    name: ['#21 Franco Morbidelli'],
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
    name: ['#20 Fabio Quartararo'],
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
    name: ['#44 Pol Espargaro'],
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
var teampoints = [0,0,0,0,0,0];



document.getElementById("addNames").addEventListener("click",createTeam);

function createTeam(){
    if (teamNumInt < 5){
        let newTeam = document.createElement("div");
        teamNumString = "team" + teamNumInt;
        newTeam.id = teamNumString;
        document.body.appendChild(newTeam);
        addTeamName(teamNumString);

        let pointsTotal = document.createElement('div');
        pointsTotal.id = "teampoints"+teamNumInt;
        pointsTotal.innerHTML = '2019 Combined Points:  0';
        newTeam.appendChild(pointsTotal);
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
    teamName.className = "teams";
    teamName.id = "team-title"+teamNumInt;
    teamName.innerHTML = document.getElementById("inputNames").value;
    teamBox.appendChild(teamName);
    document.getElementById("inputNames").value = '';

}
function startDraft(){
    document.getElementById("start-draft").remove();
    let rosterContainer = document.getElementById("roster-container");

    alerts = document.createElement('div');

    alerts.id = "alerts";

    alerts.style.padding = "35px";
    alerts.style.height = "300px";
    alerts.style.width = "400px";


    rosterContainer.appendChild(alerts);


    alerts.innerHTML = 'The first team to draft will be randomly chosen. Subsequent drafts will proceed in order from left to right.<br><br>Handicaps will be awarded to teams with fewer points scored in 2019.<br><br>Be careful with your selections! Click on a rider to view 2019 performance stats. <br><br><button id="accept" type="button" onclick="assignDraftOrder();">Begin</button>';
}
function assignDraftOrder(){
    
    for(i = 1; i<5; i++){
        document.getElementById("team"+i).style.opacity = "30%";
    }

    clearAlerts();
    showRiders();
    let teamArray = ['1','2','3','4']
    
    let randTeam = Math.floor(Math.random()*4);
    firstDraft = document.getElementById('team'+teamArray[randTeam]);
    currentDraft = teamArray[randTeam];

    // firstDraft.style.background = 'linear-gradient(180deg, rgba(67,79,89,1) 0%, rgba(33,41,47,1) 76%, rgba(21,26,31,1) 100%)';
    firstDraft.style.opacity = "100%";
    // firstDraft.style.boxShadow = '0 0 10px #bebebe79';
}

function clearAlerts(){
    alerts.remove();
    document.getElementById("roster-container").style.opacity = "100%";

}

function showRiders(){
    var i;

    for (i = 0; i < riders.length; i++){
        //call each rider individually
        let rider = riders[i];
        //create their box
        let riderBox = document.createElement("div");
        //assign numerical value to id
        let riderID = "rider" + i;

        //create container and define class / give each rider unique id
        riderBox.className = "riderBox";
        riderBox.id = riderID;
        
        //call the roster container and append rider box to it
        var rosterContainer = document.getElementById("roster-container");
        rosterContainer.appendChild(riderBox);

        //create inner contents for container including name and rider picture
        let ridername = document.createElement('div');
            ridername.id = "ridername";
            ridername.innerHTML = riders[i].name;
        let riderpic = document.createElement('div');
            riderpic.id = "riderpic";
            riderpic.innerHTML = '<img src="' + riders[i].pic + '" height="75px">';
    
        //append rider name and pic spans to rider container
        riderBox.appendChild(ridername);
        riderBox.appendChild(riderpic);

        //add event listener to rider box and allow user to open rider profile
        document.getElementById(riderID).addEventListener("click",function(){highlightRider(riderID, rider)});
    }
}


function highlightRider(riderID, rider){
    //gray out background
    let rosterContainer = document.getElementById("roster-container");
    rosterContainer.style.opacity = "0%";
   
    //create divs for rider highlight & giv ids
    alerts = document.createElement('div');
        alerts.id = "alerts";
    let nameBox = document.createElement('div');
        nameBox.id = "nameBox";
    let picBox = document.createElement('div');
        picBox.id = "picBox";
    let statsTable = document.createElement('div');
        statsTable.id = "statsTable";
    let buttonArea = document.createElement('div');
        buttonArea.id = "buttonArea"
    
    //grab table from html doc
    let stats = document.getElementById("statsTable");

    //append divs to document
    document.body.appendChild(alerts);
    alerts.appendChild(nameBox);
    alerts.appendChild(picBox);
    alerts.appendChild(statsTable);
    alerts.appendChild(buttonArea);

    //add rider name and image
    nameBox.innerHTML = rider.name
    picBox.innerHTML = '<img src="' + rider.pic + '" height="150px">'

    //get table elements by id to insert stats
    document.getElementById('country').innerHTML = rider.nation;
    document.getElementById('riderpoints').innerHTML = rider.points;
    document.getElementById('wins').innerHTML = rider.wins;
    document.getElementById('secondplaces').innerHTML = rider.secondplaces;
    document.getElementById('poles').innerHTML = rider.poles;
    document.getElementById('lapsinfirstplace').innerHTML = rider.lapsinfirst;
   
    //apply stats to table
    statsTable.innerHTML = stats.innerHTML;
    
    //draft and back button
    buttonArea.innerHTML = '<button id="draft-btn" type="button">Draft</button> <button id="back-btn" type="button">Back</button>';

    
    document.getElementById("draft-btn").addEventListener("click", function(){draft(riderID,rider)});
    document.getElementById("back-btn").addEventListener("click", function(){clearAlerts()});
}
function draft(riderID,rider){
    let currentTeam = document.getElementById("team"+currentDraft);
    let addedRider = document.createElement('div');
    addedRider.className = "drafted-rider"
    addedRider.id = riderID + "-drafted";
    addedRider.innerHTML = rider.name;
    currentTeam.appendChild(addedRider);
    clearAlerts();

    document.getElementById(riderID).remove();
    // currentTeam.style.background = 'linear-gradient(180deg, rgba(36,43,49,1) 0%, rgba(36,43,49,1) 72%, rgba(21,26,31,1) 100%)';
    // currentTeam.style.boxShadow = '0 0 10px black';
    currentTeam.style.opacity = "30%";
    
    //add rider points to estimated points total from 2019
    teampoints[currentDraft] += rider.points;
    document.getElementById("teampoints"+currentDraft).innerHTML = "2019 Combined Points:  " +teampoints[currentDraft];
    
    //move to next draft
    currentDraft++;
    clearAlerts();





    if(currentDraft > 4){
        currentDraft = 1;
    }
    currentTeam = document.getElementById("team"+currentDraft);
    if(document.getElementById("roster-container").innerHTML == ""){
       

        //need to get in here with a for loop but was having issues
            let team1 = document.getElementById("team1");
            team1.style.opacity = "100%";
            team1.style.bottom = "150px";
            team1.style.height = "409px";
            let team2 = document.getElementById("team2");
            team2.style.opacity = "100%";
            team2.style.bottom = "150px";
            team2.style.height = "409px";
            let team3 = document.getElementById("team3");
            team3.style.opacity = "100%";
            team3.style.bottom = "150px";
            team3.style.height = "409px";
            let team4 = document.getElementById("team4");
            team4.style.opacity = "100%";
            team4.style.bottom = "150px";
            team4.style.height = "409px";
        
        
        
        applyHandicap();
    }
    else{
    // currentTeam.style.background = "linear-gradient(180deg, rgba(67,79,89,1) 0%, rgba(33,41,47,1) 76%, rgba(21,26,31,1) 100%)";
    // currentTeam.style.boxShadow = "0 0 10px #bebebe79";
    currentTeam.style.opacity = "100%";
    }
}

function applyHandicap(){
    teampoints.splice(0,1);
    teampoints.splice(4,1);

    let largest = Math.max.apply(Math, teampoints);

    let hc1 = Math.floor(((largest - teampoints[0])/largest)*100);
    let hc2 = Math.floor(((largest - teampoints[1])/largest)*100);
    let hc3 = Math.floor(((largest - teampoints[2])/largest)*100);
    let hc4 = Math.floor(((largest - teampoints[3])/largest)*100);




    let handicap1 = document.createElement('div');
        handicap1.id = "handicap";
        handicap1.innerHTML = 'Handicap:  ' + hc1 + '%<br><br>Your 2020 team points will be worth ' + hc1 + '% more to keep teams competitive.';
    let handicap2 = document.createElement('div');
        handicap2.id = "handicap";
        handicap2.innerHTML = 'Handicap:  ' + hc2 + '%<br><br>Your 2020 team points will be worth ' + hc2 + '% more to keep teams competitive.';
    let handicap3 = document.createElement('div');
        handicap3.id = "handicap";
        handicap3.innerHTML = 'Handicap:  ' + hc3 + '%<br><br>Your 2020 team points will be worth ' + hc3 + '% more to keep teams competitive.';
    let handicap4 = document.createElement('div');
        handicap4.id = "handicap";
        handicap4.innerHTML = 'Handicap:  ' + hc4 + '%<br><br>Your 2020 team points will be worth ' + hc4 + '% more to keep teams competitive.';


    let team1 = document.getElementById("team1");
        team1.appendChild(handicap1);
    let team2 = document.getElementById("team2");
        team2.appendChild(handicap2);
    let team3 = document.getElementById("team3");
        team3.appendChild(handicap3);
    let team4 = document.getElementById("team4");
        team4.appendChild(handicap4);
}