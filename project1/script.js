//----------------Dom Project 1-------------------

//--------------- change the background color by generating rgb color by click in button

//steps

// step 1; create onload handler

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgColor = generateRGBColour();
    root.style.backgroundColor = bgColor;
  });
}
//step 2 random color gelerator function
function generateRGBColour() {
  //rgb(0,0,0) rgb(255,255,255)
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 - collect all nessararys refarances

//step 4 -  handel the click event
