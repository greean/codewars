class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
// let list = new Node(1, new Node(2, new Node(3)));

function stringify(list) {
    return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;
    
    // let nextChain = 'list';
    // let dataChain = nextChain + '.data';
    // console.log(eval(dataChain));

    // nextChain = nextChain + '.next';
    // dataChain = nextChain + '.data';
    // console.log(eval(dataChain));

    // nextChain = nextChain + '.next';
    // dataChain = nextChain + '.data';
    // console.log(eval(nextChain));
}
stringify(new Node(1, new Node(2, new Node(3))));


console.log(stringify(new Node(1, new Node(2, new Node(3)))));