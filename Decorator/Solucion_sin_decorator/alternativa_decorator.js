// SOLUCION SIN USAR DECORATORS

const alternativaDecorator = (currencies, items) => {
    for (let i = 0; i < items.length; i ++) {
        let conversion = items[i].currency.concat("_EUR");
        console.log(`The item ${items[i].name} costs ${items[i].currency} ${items[i].price} or EUR ${(currencies[conversion]*items[i].price).toFixed(2)}`)
    }
}

module.exports = alternativaDecorator;