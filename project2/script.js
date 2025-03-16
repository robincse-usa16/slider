//----------------Dom Project 1-------------------

//--------------- change the background color by generating rgb color by click in button
//---------------also displat the hex code to a disabled input field
//steps

// step 1; create onload handler

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    const bgColor = generateHexColour();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}
//step 2 random hex color gelerator function
function generateHexColour() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// step 3 - collect all nessararys refarances

//step 4 -  handel the click event
