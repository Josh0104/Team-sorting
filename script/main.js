const youth = [
  "Aera",
  "Bruce",
  "Charles",
  "Christine",
  "Hannah",
  "Isaiah",
  "Jasper",
  "Joshua",
  "Michtam",
  "Nathalie",
  "Sarah",
  "Timothy",
  "Winlove",
  "Zazie",
];
const maxYouth = youth.length;
var chosen = [];
var blue = [];
var red = [];
var green = [];
var white = [];
var black = [];
var mixArray = true;

var arrTeams = [blue, red, green, white, black];

var strArrTeams = ["blue", "red", "green", "white", "black"];

const sorting = (again) => {
  if (again != undefined) {
    // Resets everything
    chosen = [];
    blue = [];
    red = [];
    green = [];
    white = [];
    black = [];
    mixArray = true;
    arrTeams = [blue, red, green, white, black];
    strArrTeams = ["blue", "red", "green", "white", "black"];
    for (let index = 0; index < strArrTeams.length; index++) {
      document.getElementById(strArrTeams[index]).innerHTML = "";
    }
    document.getElementById("error").innerHTML = "";
  }
  if (chosen.length === maxYouth) return;
  var num = Math.floor(Math.random() * youth.length);
  if (chosen.includes(youth[num])) {
    sorting();
    return;
  } else {
    chosen.push(youth[num]);
    // console.log(youth[num]);

    //Max of how many people in each team
    var maxTeamMembers = Math.round(youth.length / strArrTeams.length) - 1;
    if (mixArray) {
      // //Change the order of the team array. Both the string and the object array
      for (let ii = 0; ii < 3; ii++) {
        var ranNum1 = Math.floor(Math.random() * 5);
        var ranNum2 = Math.floor(Math.random() * 5);
        var element1 = arrTeams[ranNum1]; //Save the chosen element in the array
        var element2 = strArrTeams[ranNum1];
        arrTeams.splice(ranNum1, 1); //Remove the element from the array
        strArrTeams.splice(ranNum1, 1);
        arrTeams.splice(ranNum2, 0, element1); //Put the element back in a random index in the array
        strArrTeams.splice(ranNum2, 0, element2);
      }
      mixArray = false;
    }

    if (
      arrTeams[0].length <= maxTeamMembers &&
      conditions(youth[num], arrTeams[0])
    )
      teamSort(strArrTeams[0], arrTeams[0], youth[num]);
    else if (
      arrTeams[1].length <= maxTeamMembers &&
      conditions(youth[num], arrTeams[1])
    )
      teamSort(strArrTeams[1], arrTeams[1], youth[num]);
    else if (
      arrTeams[2].length <= maxTeamMembers &&
      conditions(youth[num], arrTeams[2])
    )
      teamSort(strArrTeams[2], arrTeams[2], youth[num]);
    else if (
      arrTeams[3].length <= maxTeamMembers &&
      conditions(youth[num], arrTeams[3])
    )
      teamSort(strArrTeams[3], arrTeams[3], youth[num]);
    else if (
      arrTeams[4].length <= maxTeamMembers &&
      conditions(youth[num], arrTeams[4])
    )
      teamSort(strArrTeams[4], arrTeams[4], youth[num]);
    sorting();
  }
};

function teamSort(colorStr, color, member) {
  // console.log(member + " " + colorStr)
  color.push(member);
  if (colorStr == "white")
    document.getElementById(
      "white"
    ).innerHTML += `<li class="item flex-item" style="background: white; color:black;" draggable="true" ondragstart="drag(event)">${member}</li>`;
  else
    document.getElementById(
      colorStr
    ).innerHTML += `<li id="${member}"class="item flex-item" style="background: ${colorStr}" draggable="true" ondragstart="drag(event)">${member}</li>`;
}

const conditions = (per, color) => {
  //Make two peope not be in the same team
  if (
    (per == "Jasper" && color.includes("Timothy")) ||
    (per == "Timothy" && color.includes("Jasper")) ||
    (per == "Zazie" && color.includes("Timothy")) ||
    (per == "Timothy" && color.includes("Zazie")) ||
    (per == "Winlove" && color.includes("Christine")) ||
    (per == "Christine" && color.includes("Winlove")) ||
    (per == "Hannah" && color.includes("Sarah")) ||
    (per == "Sarah" && color.includes("Hannah")) ||
    (per == "Zazie" && color.includes("Isaiah")) ||
    (per == "Isaiah" && color.includes("Zazie")) ||
    (per == "Michtam" && color.includes("Sarah")) ||
    (per == "Sarah" && color.includes("Michtam")) ||
    (per == "Joshua" && color.includes("Jasper")) ||
    (per == "Jasper" && color.includes("Joshua")) ||
    (per == "Bruce" && color.includes("Jasper")) ||
    (per == "Jasper" && color.includes("Bruce")) ||
    (per == "Bruce" && color.includes("Zazie")) ||
    (per == "Zazie" && color.includes("Bruce")) ||
    (per == "Aera" && color.includes("Timothy")) ||
    (per == "Timothy" && color.includes("Aera"))
  ) {
    if (color == arrTeams[4]) {
      let str2 =
        strArrTeams[4].charAt(0).toUpperCase() + strArrTeams[4].slice(1); //Capitalize first letter
      // document.getElementById("error").innerHTML =
      //   "Error matcing in " + str2 + " Team";
      // alert("Invalid match: " + per + " and " + color + "\nTry again ");
      // stopFunc();
      return true;
    }
    let ranNr = Math.floor(Math.random()*21)
    if(ranNr === 10) {
      console.log(ranNr)
      stopFunc(); 
      return
    }
  
    // console.log("invalid match " + color);
    return false;
  } else return true;
};

var nIntervId;
let startInterval = false;

const autoFunction = () => {
  if (!nIntervId) {
    console.log("Working");
    nIntervId = setInterval("sorting(1)", 500);
    document.getElementById("btn2").innerHTML = "Stop";
  } else {
    stopFunc();
    alert("you stopped the loop");
  }
};

for (let index = 0; index < strArrTeams.length; index++) {
  for (let ii = 0; ii < 3; ii++) {
    document.getElementById(
      strArrTeams[index]
    ).innerHTML += `<li class="item flex-item" style="background: ${strArrTeams[index]}; color: ${strArrTeams[index]}">Jesus</li>`;
  }
}

const stopFunc = () => {
  clearInterval(nIntervId);
  nIntervId = null;
  document.getElementById("btn2").innerHTML = "Auto";
};

document.getElementById("btn2").addEventListener("click", autoFunction);
// If two people needs to be together
//  if (member == "Sarah") color.push("Nicole");
// if (member == "Sarah") {
//   document.getElementById(colorStr).innerHTML += `<p class=mark>${member}</p>`;
//   document.getElementById(colorStr).innerHTML += `<p class=mark>Nicole</p>`;
// } else document.getElementById(colorStr).innerHTML += `<p>${member}</p>`;
