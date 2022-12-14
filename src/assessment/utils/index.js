// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min + 1;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

export {
    randomRGB,
    random
};
