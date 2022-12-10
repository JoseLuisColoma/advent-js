
const leds = [0, 0, 1, 0, 0]

function countTime(leds) {
    let segundos=0;
    let miArray = leds.join("").split(1);
    miArray[0] += miArray.pop();
    segundos=Math.max(...miArray.map(e => e.length)) * 7;
    return segundos;
  }

console.log(countTime(leds));


