let riders = [EspA, Zarco, Dovi, Petrux, Miller, Pecco, Nakagami, Crutchlow, MarA, MarM, Binder, Oliveira, Mir, Rins, Vinales, Rossi, Quartararo, Morbidelli, Pol, Lecuona, Tito, Iannone];
var riderDraft, teamID, firstDraft, currentDraft, alerts, riderCard, largest;
var teampoints = [];
var teamNumInt = maxTeams = 0;
let round = 1;


$("#btn-number-teams").click(function(){
    let userInput = document.getElementById("number-teams");
    maxTeams = userInput.value;
    if (maxTeams < 2 || maxTeams > 6 || isNaN(maxTeams)){
        alert("Invalid number of teams.")
    }
    else{
        let container = document.getElementById("number-teams-container");
        container.style.display = "none";
        ShowTeamNameInput();
    }
})

function ShowTeamNameInput(){
    let container = document.getElementById("user-create-container");
    container.style.display = "block";
    $("#add-names").click(function(){createTeam();});
}


function createTeam(){
    if (teamNumInt < maxTeams){
        teamID = "team" + teamNumInt;
        
        let newTeam = document.createElement("div");
        let teamContainer = document.getElementById("team-container");
        newTeam.id = teamID;
        newTeam.className = "team";
        teamContainer.appendChild(newTeam);
        addTeamName(teamID);

        let pointsTotal = document.createElement('div');
        pointsTotal.className = "teamPoints";
        pointsTotal.id = "teampoints"+teamNumInt;
        pointsTotal.innerHTML = "";
        newTeam.appendChild(pointsTotal);

    }
    teampoints[teamNumInt] = 0;
    teamNumInt++;
    if(teamNumInt == maxTeams){
        $("#user-create-container").hide();

        let rosterContainer = document.createElement("div");
        document.body.appendChild(rosterContainer);
        rosterContainer.id = "roster-container";
        rosterContainer.innerHTML = '<button id="start-draft">Start Draft</button>';

        $("#start-draft").click(function(){startDraft();});
    }
}
function addTeamName(teamID){
    let teamName = document.createElement("div");
    let teamBox = document.getElementById(teamID);
    teamName.className = "team-title";
    teamName.innerHTML = document.getElementById("inputNames").value;
    teamBox.appendChild(teamName);
    document.getElementById("inputNames").value = '';
}
function startDraft(){
    document.getElementById("start-draft").remove();
    let rosterContainer = document.getElementById("roster-container");

    alerts = document.createElement('div');
    alerts.style.padding = "35px";
    alerts.style.width = "500px";
    alerts.id = "alerts";


    rosterContainer.appendChild(alerts);
    $(alerts).animate({height: '300px'}, 'medium');

    alerts.innerHTML = 'The first team to draft will be randomly chosen. Subsequent drafts will proceed in order from left to right.<br><br>When the draft has finished, handicaps will be awarded to teams with fewer points scored in 2019.<br><br>Some riders may be omitted to ensure each team has the same number of riders.<br><br>Click on a rider to view 2019 performance stats. <br><br><button id="accept" type="button">Begin</button>';

    $("#accept").click(function(){
        $("#alerts").remove();
        assignDraftOrder();
    });
}
function assignDraftOrder(){
    
    for(i=0; i< maxTeams; i++){
        document.getElementById("team"+i).style.opacity = "30%";
    }

    showRiders();
    let teamArray = [];
    for (i=0; i < maxTeams; i++){
        teamArray[i] = i;
    }
    
    let randTeam = Math.floor(Math.random()*maxTeams);
    currentDraft = teamArray[randTeam];
    firstDraft = document.getElementById('team'+currentDraft);
    firstDraft.style.opacity = "100%";

}

function determineRiderQuantity(){
    let maxRiders = (Math.floor(riders.length/maxTeams))*maxTeams;
    riders.splice(maxRiders,10);
}



function showRiders(){
    determineRiderQuantity();
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

        rosterContainer.appendChild(riderBox);
        $(riderBox).delay(Math.random()*500).animate({opacity: '97%'}, 'medium');

        //add event listener to rider box and allow user to open rider profile
        $(riderBox).click(function(){
            highlightRider(riderID, rider);
        });
    }
}


function highlightRider(riderID, rider){
    $(".riderBox").hide();

    //create divs for rider highlight & giv ids
    riderCard = document.createElement('div');
        riderCard.className = "riderCard";
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
    document.body.appendChild(riderCard);
    riderCard.appendChild(nameBox);
    riderCard.appendChild(picBox);
    riderCard.appendChild(statsTable);
    riderCard.appendChild(buttonArea);
    $(riderCard).animate({height: '550px'}, 'medium');

    //add rider name and image
    nameBox.innerHTML = rider.name
    picBox.innerHTML = '<img src="' + rider.pic + '" height="150px">'

    //get table elements by id to insert stats
    document.getElementById('riderteam').innerHTML = rider.team;
    document.getElementById('country').innerHTML = rider.nation;
    document.getElementById('riderpoints').innerHTML = rider.points;
    document.getElementById('wins').innerHTML = rider.wins;
    document.getElementById('secondplaces').innerHTML = rider.secondplaces;
    document.getElementById('poles').innerHTML = rider.poles;
    document.getElementById('lapsinfirstplace').innerHTML = rider.lapsinfirst;
   
    //apply stats to table
    statsTable.innerHTML = stats.innerHTML;
    
    //draft and back button
    buttonArea.innerHTML = '<button class="draft-btn" type="button">Draft</button> <button class="back-btn" type="button">Back</button>';

    
    $(".draft-btn").click(function(){
        draft(riderID,rider);
        $(".riderBox").show();
    });
    $(".back-btn").click(function(){
        $(riderCard).animate({opacity: '0%', height: '0px'}, 'slow', function(){$(".riderCard").remove()});
        $(".riderBox").show();
    });
}


function draft(riderID,rider){
    let currentTeam = document.getElementById("team"+currentDraft);

    $(riderCard).animate({top: '150%', opacity: '0%'}, 'medium', function(){$(".riderCard").remove()});
    
    let addedRider = document.createElement('div');
    addedRider.className = "drafted-rider"
    addedRider.id = riderID + "-drafted";
    addedRider.innerHTML = rider.name;
    currentTeam.appendChild(addedRider);

    document.getElementById(riderID).remove();

    $(currentTeam).animate({opacity: '30%'},"medium");
    
    //add rider points to estimated points total from 2019
    teampoints[currentDraft] += rider.points;

    document.getElementById("teampoints"+currentDraft).innerHTML = "2019 Combined Points:  " +teampoints[currentDraft];

    //move to next draft
    currentDraft++;

    if(currentDraft == maxTeams){
        currentDraft = 0;
    }
    currentTeam = document.getElementById("team"+currentDraft);
    if(document.getElementById("roster-container").innerHTML == ""){  
        $("#team-container").animate({height: '85%'}, 'slow');
        for(i = 0; i < maxTeams; i++){
             $("#team"+i).animate({opacity: '100%'}, 'fast');
        }
        applyHandicap();
    }
    else{
        $(currentTeam).animate({opacity: "100%"},'slow');
    }
}

function applyHandicap(){
    largest = Math.max.apply(Math, teampoints);

    for(let i = 0; i < teampoints.length; i++){

        hc = Math.floor(((largest - teampoints[i])/largest)*100);

        let handicapName = "handicap"+i;
        let handicap = document.createElement('div');
        handicap.className = "handicap";
        handicap.innerHTML = 'Handicap:  ' + hc + '%<br><br>Your 2020 team points will be worth ' + hc + '% more to keep teams competitive.';

        let teamNum = "team"+i;
        let team = document.getElementById(teamNum);
        team.appendChild(handicap);
    }
}