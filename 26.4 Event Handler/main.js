// const BtnHandler = document.getElementById("handleBtn");

function handleOnClick() {
  document.getElementById("heading01").innerText = "Yeoooooooo";
}

document.getElementById("change").addEventListener("click", function () {
  document.getElementById("heading01").innerText = "Hoinnnir putttttt";
});

document.getElementById("addMe").addEventListener("click", function () {
  const input = document.getElementById("input-field");
  const inputValue = input.value;
  const updateP = document.getElementById("input-update");
  updateP.innerText = inputValue;
});
