class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
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
        if (this.nead.nextNode === null) this.head = null;
        
        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
        this.size--;
    }

    append(value) {
        let node = new Node(value);

        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = node;
        }
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);

        if (this.head == null) {
            this.head = node;
        } else {
            let oldHead = this.head;
            this.head = node;
            this.head.nextNode = oldHead;
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
console.log(list.getSize());