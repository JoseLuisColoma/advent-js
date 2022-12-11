size=3;

function createCube(size) {
    let lineaUno = [];
    let lineaDos = [];
    let trianguloArriba = '/\\'
    let trianguloAbajo = '\\/'
    let lineaHorPlusInclinadaIzq = '_\\'
    let lineaHorPlusInclinadaDer = '_/'
    let saltoLinea = '\n'
    let espacio = ' ';

    for (let i = 1; i <= size; i++) {
      lineaUno.push(espacio.repeat(size - i) + trianguloArriba.repeat(i) + lineaHorPlusInclinadaIzq.repeat(size));
      lineaDos.push(espacio.repeat(size - i) + trianguloAbajo.repeat(i) + lineaHorPlusInclinadaDer.repeat(size));
    }

    let cadenalineaUno = lineaUno.join(saltoLinea);
    let cadenalineaDos = lineaDos.reverse().join(saltoLinea);
    let resultado=cadenalineaUno + saltoLinea + cadenalineaDos;

    return resultado
  }

console.log(createCube(size));
