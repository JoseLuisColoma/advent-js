const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

function getGiftsToRefill(a1, a2, a3) {
    const almacenes = [a1,a2,a3];
    let resultado=[];
    let stock=[];

    almacenes.forEach(s => {
        stock = stock.concat(s);
    });

    resultado=stock.filter(item =>{
        a1.includes(item) + a2.includes(item) + a3.includes(item)<2;
    });

    //quitar duplicidades en resultado si las hubiera
    resultado = resultado.filter((item,index)=>{
        return resultado.indexOf(item) == index;
    });

    return resultado;
}

console.log(getGiftsToRefill(a1, a2, a3));

