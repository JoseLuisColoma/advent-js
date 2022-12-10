const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {

    let pesoTotalRegalos=0;
    let pesoTotalRenos=0;
    let arrayPesoRegalo=[];
    let resultado;

    for(let i=0; i<packOfGifts.length; i++){
        let regalo = [];
        regalo = packOfGifts[i];
        let pesoRegalo = 0;
        pesoRegalo = packOfGifts[i].length;
        pesoTotalRegalos+=pesoRegalo;
        arrayPesoRegalo.push(pesoRegalo);
        arrayPesoRegalo.sort();
    }

    for (let j=0; j<reindeers.length; j++){
        let reno = "";
        reno = reindeers[j];
        let pesoRenos= (reno.length)*2;
        pesoTotalRenos+=pesoRenos;
    }
    if(pesoTotalRegalos>pesoTotalRenos){
        resultado=0;
    } else{
        resultado = Math.trunc(pesoTotalRenos / pesoTotalRegalos);
    }
        return resultado;
    }

let salida= distributeGifts(packOfGifts, reindeers)
console.log(salida);

