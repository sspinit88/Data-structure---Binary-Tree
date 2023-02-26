/**
 *             8
 *          7     9
 *        5          10
 *     2     6          20
 *                   11 
 * 
*/


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(){
    this.root = null;
  }

  add(value) {

  }

}

const myTree = new BinaryTree();

myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);


console.log(myTree)
