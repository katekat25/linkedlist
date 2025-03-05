import { LinkedList } from "linkedlist.js";

const list = new LinkedList();

list.append("happy");
list.append("funny");
list.append("lucky");
list.toString();
console.log("Size:", list.getSize()); // Expected: 3
console.log("Tail:", list.getTail().value); // Expected: "lucky"

list.pop();
console.log("Size after pop:", list.getSize()); // Expected: 2
console.log("Tail after pop:", list.getTail().value); // Expected: "funny"
list.toString();