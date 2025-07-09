const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue}`;
  body.style.backgroundColor = color;
}

//För att få en random färg behöver i RGB spektrat behöver man ha röd, grön och blå med nummer från allt mellan 0 och 255.(255(röd), 255(grön), 255(blå) är lika med vitt, 0, 0 , 0 är lika med svart.) Math.random ger en siffra mellan 0 och 1 så om man gångrar det med 255 får man en siffra mellan 0 och 255. Men det oss en siffra med en massa decimaler så då använder man Math.round för att runda av.
