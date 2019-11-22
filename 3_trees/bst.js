
const Node = (val) => {
  return {
    left: null,
    right: null,
    val,
  }
}

const BST = () => {
  return {
    root: null,
    print() {
      const printR = (node) => {
        if(node === null){ return; }
        printR(node.left);
        console.log(node.val);
        printR(node.right);
      };
      printR(this.root);
    },
    height() {
      let best = 0;
      const heightR = (node, currHeight) => {
        if(node === null){ return; }
        heightR(node.left, currHeight + 1);
        if(node.left === null && node.right === null){
          best = Math.max(best, currHeight);
        }
        heightR(node.right,  currHeight + 1);
      }
      if(this.root === null){ return 0; }
      heightR(this.root, 1);
      return best;
    },
    size() {
      let amount = 0;
      const sizeR = (node) => {
        if(node === null){ return; }
        sizeR(node.left);
        amount += 1;
        sizeR(node.right);
      }
      sizeR(this.root);
      return amount;
    },
    exists(val) {
      const existsR = (node, val) => {
        if(node === null){ return false; }
        if(node.val === val){ return true; }
        if(val < node.val){ return existsR(node.left, val); }
        if(val > node.val){ return existsR(node.right, val); }
      };
      return existsR(this.root, val);
    },
    get(val) {
      const getR = (node, val) => {
        if(node === null || node.val === val){ return node; }
        if(val < node.val){ return getR(node.left, val); }
        if(val > node.val){ return getR(node.right, val); }
      };
      return getR(this.root, val);
    },
    leaves() {
      let leafVals = [];
      const leavesR = (node) => {
        if(node === null){ return; }
        leavesR(node.left);
        if(node.left === null && node.right === null){
          leafVals.push(node.val);
        }
        leavesR(node.right);
      }
      leavesR(this.root);
      return leafVals;
    },
    asList() {
      let nodes = [];
      const asListr = (node) => {
        if(node === null){ return; }
        asListr(node.left);
        nodes.push(node.val);
        asListr(node.right);
      }
      asListr(this.root);
      return nodes;
    },
    insert(val) {
      /*
        Recursively find the correct position for the new node in the tree and
        insert it at that position. Basically, make decisions on which way to
        branch based on the comparison of the values. Note that every new node
        starts it's life as a leaf node.
      */
      const insertR = (node, val) => {
        if(val < node.val){
          /*
            If the current node.left is null, we can stop recursing and insert
            the new node there.
          */
          if(node.left === null){
            node.left = Node(val);
          } else {
            // Else we haven't reached a leaf node yet. So keep recursing.
            insertR(node.left, val);
          }
        } else if(val > node.val){
          if(node.right === null){
            node.right = Node(val);
          } else {
            insertR(node.right, val);
          }
          // This is a design choice. We could also have chosen to insert
          // duplicates to the left or right
        } else if(node.val === val) { return; }
      }

      /*
        This is a special case. The root will only ever be null if the entire
        tree is empty. As such it's easier to deal with this case outside of
        a recursive context.
      */
      if(this.root === null){
        this.root = Node(val);
      } else {
        insertR(this.root, val);
      }
    }
  }
}


 //      9
 //   /     \
 // 1         29
 //  \      /    \
 //   3   10      30
 //         \
 //          11


let bst = BST();
bst.insert(9);
bst.insert(29);
bst.insert(1);
bst.insert(10);
bst.insert(30);
bst.insert(3);
bst.insert(11);
// console.log(bst.size());
// console.log(bst.leaves());
bst.print();
// console.log(bst.height());
// console.log(bst.exists(11));
