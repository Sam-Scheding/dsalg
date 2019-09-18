/*
  A Stack with a wrapper class around it. This provides an interface for
*/

const Node = (val) => {
  return {
    val: val,
    next: null,
  }
}

const Stack = () => {
  return {
    stack: null,
    push(val) {
      if(this.stack === null){
        this.stack = Node(val);
        return;
      }
      let head = Node(val);
      head.next = this.stack;
      this.stack = head;
    },
    pop() {
      if(this.stack !== null){
        this.stack = this.stack.next;
      }
    },
    print(){
      let curr = this.stack;
      while(curr !== null){
        console.log(curr.val);
        curr = curr.next;
      }
    },
    length(){
      let count = 0;
      while(curr !== null){
        curr = curr.next;
        count++;
      }
      return count;
    }
  }
}


let history = Stack();
history.push('/messages');
history.push('/search');
history.push('/asklhjdfsda');
let x = history.getElementAtIndex(4);
console.log(x);
// history.print()

// This could also be a function stack
