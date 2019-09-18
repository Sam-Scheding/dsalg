
/*
  1. Simple Stack
*/
let head, curr;
const Node = (val, next) => {
  return {
    val: val,
    next: next, // This points to another temp object
  };
}

// Add some nodes to the stack
head = Node(9, null);
head = Node(1, head);
head = Node(6, head);


// Print out the stack
curr = head; // Assign a temp variable so we don't lose track of the head
while(curr !== null){
  // console.log(curr.val);
  curr = curr.next;
}

// What will print to the console?
// Notice that we've managed to link together a bunch of values without ever using an array.

console.log(head);

// What happens to the old head if I do the following?
head = head.next;
