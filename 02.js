const year = 2023;

const holidays = ['01/06', '04/01', '12/25'];

function countHours(year, holidays) {
    let contadorHoras=0;
    for(let i=0; i<holidays.length;i++) {
        let diaSemana=["dom","lun","mar","mie","jue","vie","sab"];
        let diaFiesta = holidays[i];
        let mes = diaFiesta.substring(0,2);
        let dia = diaFiesta.substring(3,5);
        let fecha = new Date(`${mes}/${dia}/${year}`);
        let diaBuscado=diaSemana[fecha.getUTCDay()];

        if((diaBuscado=="lun" || diaBuscado=="mar" || diaBuscado=="mie" || diaBuscado=="jue" || diaBuscado=="vie"))
            contadorHoras+=2;
    }
    return contadorHoras;
}

console.log(countHours(year, holidays));


