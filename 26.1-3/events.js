//  ~~~~~~~~~~~~~ Option 2 ~~~~~~~~~~~~~

function greenBG() {
  document.getElementById("body").style.backgroundColor = "green";
}

//  ~~~~~~~~~~~~~ Option 3~~~~~~~~~~~~~
const orange = document.getElementById("orange");
orange.onclick = orangeBG;

function orangeBG() {
  document.body.style.backgroundColor = "orange";
}

//  ~~~~~~~~~~~~~ Option 3.0 ~~~~~~~~~~~~~

const blue = document.getElementById("blue");
blue.onclick = function blueBG() {
  document.body.style.backgroundColor = "steelblue";
};

//  ~~~~~~~~~~~~~ Option 4 (Event Listener) ~~~~~~~~~~~~~

const purple = document.getElementById("purple");
purple.addEventListener("click", function purpleBG() {
  document.body.style.backgroundColor = "purple";
});

//  ~~~~~~~~~~~~~ Option 4.0 (Event Listener) ~~~~~~~~~~~~~

const Pink = document.getElementById("pink");
Pink.addEventListener("click", PinkBG);

function PinkBG() {
  document.body.style.backgroundColor = "pink";
}

//  ~~~~~~~~~~~~~ Option 5 (Event Listener) ~~~~~~~~~~~~~

document.getElementById("tomato").addEventListener("click", function () {
  document.body.style.backgroundColor = "tomato";
});
