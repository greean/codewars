class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let list = new Node(1, new Node(2, new Node(3)));

console.log(list);