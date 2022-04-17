let dragged;
let id;
let index;
let indexDrop;
let list;
var person;

document.addEventListener("dragstart", ({ target }) => {
  dragged = target;
  id = target.id;
  list = target.parentNode.children;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === dragged) {
      index = i;
    }
  }
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", ({ target }) => {
  if (target.className == "dropzone" && target.id !== id) {
    dragged.remove(dragged);
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === target) {
        indexDrop = i;
      }
    }
    console.log(index, indexDrop);
    if (index > indexDrop) {
      target.before(dragged);
    } else {
      target.after(dragged);
    }
  }
});

const link =
  "https://stackoverflow.com/questions/12332403/html5-ul-li-draggable";
("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondrag");

function dragging(per) {
  person = per.innerText;
  console.log(per.innerText);
}

function drop(colorID) {
  let colorText = document.getElementById(colorID);
  // console.log(person + " " +colorText.innerText);
  if (!conditions(person, colorText.innerText)) alert(`Warning: ${person} should no be in ${colorID} team`)

  // console.log(conditions(person, colorText.innerText));
}

// function allowDrop(ev) {
//     ev.preventDefault();
//   }

//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }

//   function drop(ev) {
//     if(ev === "Bruce") return
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }
