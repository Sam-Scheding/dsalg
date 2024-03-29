const Node = (val) => {
  return {
    val: val,
    next: null,
  }
}

const Queue = () => {
  return {
    queue: null,
    enqueue(val) {
      let node = Node(val);

      if(this.queue === null){
        this.queue = node;
        return;
      }
      let curr = this.queue;
      while(curr.next !== null){
        curr = curr.next;
      }
      curr.next = node;
    },
    recursiveEnqueue(queue, val) {
      // Base case
      if(queue.next === null){
        queue.next = Node(val);
        return;
      }
      // Recursive case
      this.recursiveEnqueue(queue.next, val);
    },
    dequeue() {
      if(this.queue === null){ return; }
      let head = this.queue;
      this.queue = this.queue.next;
      return head;
    },
    print() {
      let curr = this.queue;
      while(curr !== null){
        console.log(curr.val);
        curr = curr.next;
      }
    }
  }
}

let q = Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(9);
q.print();
console.log();
q.recursiveEnqueue(q.queue, 8);
q.print();
