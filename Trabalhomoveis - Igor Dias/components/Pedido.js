var pedido = [['Vegetariano', 28.50]]

export function getPedido(){
    return pedido;
}

export function addToPedido(name, price){
    pedido.push([name, price])
}

export function getNumberoItemsPedido(){
    return pedido.length;
}

export function getPedidoTotal(){
    let total = 0.00
    for(let i = 0; i < pedido.length; i++){
        total += pedido[i][1]
    }
    return total
}
