const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]


function fitsInOneBocajaA(boxes) {
    boxes.sort((cajaA, cajaB) => {
        boxes = cajaB.l + cajaB.w + cajaB.h - (cajaA.l + cajaA.w + cajaA.h);

        boxes.filter(
            (bocajaA, i) => {
                !i || (boxes[i - 1].l > bocajaA.l && boxes[i - 1].w > bocajaA.w && boxes[i - 1].h > bocajaA.h)
            });
        });
            resultado= boxes.length;

    return resultado;
}

console.log(fitsInOneBocajaA(boxes))