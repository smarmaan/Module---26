const liCollection = document.getElementsByTagName("li");
for (const li of liCollection) {
  //   console.log(li.innerText);
}

document.getElementById("game-title").innerText = "Games List";

document.getElementById("movie-title").innerText = "Movie List";

document.getElementById("fruits-title").innerText = "Fruits List";

const movies = document.getElementsByClassName("movie-name");
for (const movie of movies) {
  // console.log(movie.innerText);
}

// const fruitTitle = document.getElementById("fruits-title");
// fruitTitle.style.backgroundColor = "orange";
// fruitTitle.style.borderRadius = "8px";
// fruitTitle.style.padding = "8px";
// fruitTitle.style.margin = "8px";



const fruitsUL = document.querySelector("#fruits-container ul");
const li = document.createElement("li");
li.innerText = "Banana";
fruitsUL.appendChild(li);

const input = document.querySelector("#input-container");

const header01 = document.createElement("h1");
header01.innerText = "Elements Needed";
input.appendChild(header01);

const unorderedList = document.createElement("ul");
input.appendChild(unorderedList);

const li1 = document.createElement("li");

const li2 = document.createElement("li");

const li3 = document.createElement("li");
const li4 = document.createElement("li");

li1.innerText = "khata";
li2.innerText = "kolom";
li3.innerText = "boi";
li4.innerText = "pencil";
unorderedList.appendChild(li1);
unorderedList.appendChild(li2);
unorderedList.appendChild(li3);
unorderedList.appendChild(li4);

const section02 = document.createElement("section");
section02.classList.add("peripheral");

section02.innerHTML = `<h1>Peripheral Devices</h1>`;

const bodyHolder = document.getElementById("body");
bodyHolder.appendChild(section02);
const ul02 = document.createElement("ul");
section02.appendChild(ul02);
const li01 = document.createElement("li");
li01.innerText = "keyboard";
const li02 = document.createElement("li");
li02.innerText = "mouse";
const li03 = document.createElement("li");
li03.innerText = "monitor";
const li04 = document.createElement("li");
li04.innerText = "soundbox";

ul02.appendChild(li01);
ul02.appendChild(li02);
ul02.appendChild(li03);
ul02.appendChild(li04);

// console.log(section02.innerHTML);

const newSection = document.createElement("section");
bodyHolder.appendChild(newSection);

const h02 = document.createElement("h1");
h02.innerText = "dhurroo bal";
newSection.appendChild(h02);

const newUl = document.createElement("ul");
newSection.appendChild(newUl);

const newli = document.createElement("li");
newli.innerText = "Baaaaaaaaaaaaal";

newUl.appendChild(newli)
console.log(newSection.innerHTML);
