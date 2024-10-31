let hexagons = document.querySelectorAll(".hexagon");

for (let i = 0; i < hexagons.length; i++) {
  let rgb = randomColor();
  hexagons[i].style.backgroundColor = rgb;

  hexagons[i].addEventListener("mouseover", function () {
    let rgb = randomColor();
    hexagons[i].style.backgroundColor = rgb;
    hexagons[i].style.scale = "0.9";
  });

  hexagons[i].addEventListener("mouseout", function () {
    hexagons[i].style.scale = "1";
  });

  hexagons[i].addEventListener("touchstart", function () {
    let rgb = randomColor();
    hexagons[i].style.backgroundColor = rgb;
    hexagons[i].style.scale = "0.9";
  });
  
  hexagons[i].addEventListener("touchend", function () {
    hexagons[i].style.scale = "1";
  });

  setTimeout(() => {
    hexagons[i].style.scale = "1";
  }, i * 50);
}

function randomColor() {
  function rand() {
    return Math.floor(Math.random() * 200);
  }

  const rgb = `rgb(${rand()},${rand()},${rand()})`;
  return rgb;
}
