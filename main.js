class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get size() {
        return this.size;
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
            this.head = node.
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