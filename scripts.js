let teamNumInt = 1;
let round = 1;
var alerts;
let riders = ['Aleix Espargaro', 'Johann Zarco', 'Tito Rabat', 'Andrea Dovizioso', 'Danilo Petrucci', 'Jack Miller', 'Francesco Bagnaia', 'Takaaki Nakagami', 'Cal Crutchlow', 'Alex Marquez', 'Marc Marquez', 'Brad Binder', 'Iker Lecuona', 'Miguel Oliveira', 'Joan Mir', 'Alex Rins', 'Maverick Vinales', 'Valentino Rossi', 'Fabio Quartararo', 'Franco Morbidelli'];
var riderDraft;
var teamNumString;


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
    alerts.innerHTML = 'Teams will draft riders at random. Once all riders have been drafted, teams will have the opportunity to trade riders.<br><br><button id="accept" type="button" onclick="draft();">Accept</button>';
}
function draft(){
    if(teamNumInt > 4){
        teamNumInt = 1;
    }
    if (riders.length == 0) {
        alerts.innerHTML = "All riders have been drafted";
    }
    else{
        riderDraft = Math.floor(Math.random() * (riders.length));
        alerts.innerHTML = 'Round ' + round + ' draft:<br><br>' + riders[riderDraft] + '<br><br><button id="accept" type="button" onclick="draft();">Accept</button>';

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