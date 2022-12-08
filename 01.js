
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts){
    let wrapped = [];
    for(let i=0; i<gifts.length;i++){
        let gift = gifts[i];
        console.log(gift);
        let giftLength = gift.length;
        let ast = "*";
        let wrapTopBottom = ast.repeat(giftLength+2);
        let wrapMiddle = `*${gift}*`;
        wrapped.push(`${wrapTopBottom}\n${wrapMiddle}\n${wrapTopBottom}`);
    }
    return wrapped;
}

console.log(wrapped);
