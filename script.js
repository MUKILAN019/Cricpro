let playername = document.querySelectorAll(".player");
let addImage = document.querySelectorAll(".img");

for (let j = 0; j < playername.length; j++) {
  let name = playername[j];
  let image = addImage[j];

  name.addEventListener("click", function (event) {
    event.stopPropagation(); 

    image.classList.toggle("img");
    image.style.position = "absolute";
  });
}