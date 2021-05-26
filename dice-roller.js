let num = process.argv.slice(2);
num = Number(num);

function rollingDice(num) {

  let diceResults = "";

  for (let i = 0; i < num; i++) {
    let resultOfEachDice = "";
    resultOfEachDice = Math.floor((Math.random() * 6) + 1);
    diceResults += resultOfEachDice
  }
 return diceResults.join(", ")
}

console.log("Rolled " + num + " dice: " + rollingDice(num));
