function* simpleGenerator() {
  let i = 100;
  while (true) {
    i++;
    yield i;
  }
}

let sG = simpleGenerator();

function getNewId() {
  document.getElementById("newId").innerText = sG.next().value;
}
