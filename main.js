class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (this.head === null) return;
        if (this.head.nextNode === null) {
            this.head = null;
            this.size--;
            return;
        } 
        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
        this.tail = current;
        this.size--;
    }

    append(value) {
        let node = new Node(value);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }

        this.size++;
    }

    prepend(value) {
        let node = new Node(value);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }

        this.size++
    }


}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();

list.append("happy");
list.append("funny");
list.append("lucky");
console.log("Size:", list.getSize()); // Expected: 3
console.log("Tail:", list.getTail().value); // Expected: "lucky"

list.pop();
console.log("Size after pop:", list.getSize()); // Expected: 2
console.log("Tail after pop:", list.getTail().value); // Expected: "funny"