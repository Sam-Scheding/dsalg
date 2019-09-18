
const Node = (val) => {
  return {
    val: val,
    next: null,
    prev: null,
  }
}

const LinkedList = () => {
  return {
    first: null,
    last: null,
    size: 0,
    push(val) { // Push is functionally the same as enqueue
      let node = Node(val);
      this.size++;
      // If there are no other elements in the list
      if(this.first === null){
        this.first = node;
        this.last = node;
        return;
      }
      this.first.prev = node;
      node.next = this.first;
      this.first = node;
    },
    pop() {
      if(this.first === null){ return; }
      let val = this.first.val;
      this.first = this.first.next;
      this.size--;
      return val;
    },
    append(val) {
      let node = Node(val);
      if(this.last === null){
        this.push(val);
      } else {
        this.last.next = node;
        node.prev = this.last;
      }
    },
    print() {
      let curr = this.first;
      while(curr !== null){
        console.log(curr.val);
        curr = curr.next;
      }
    },
    length(){
      return this.size;
    }
  }
}

let list = LinkedList();

console.log(list.length());

// list.print();
