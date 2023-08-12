/*
Бинарное дерево - структура данных, которая имеет корень и дочерние узлы (без циклических связей).  

Если рассмотреть отдельно любой узел с дочерними элементами, то получится тоже дерево.

Узел называется внутренним, если имеет хотя бы одно поддерево. 

Cамые нижние элементы, которые не имеют дочерних элементов, называются листами или листовыми узлами.

В узлах может храниться любая информация, от примитивных типов до объектов.

Любой узел не может иметь более двух детей. Их называют просто — левый и правый потомок, или левое и правое поддерево.

Левый потомок меньше текущего узла, а правый потомок больше.


Отношение больше/меньше имеет смысл для сравниваемых объектов, например числа, строки, если в дереве содержатся сложные объекты, то для них берётся какая-нибудь процедура сравнения, и она будет отрабатывать при всех операциях работы с деревом.
*/

/**
 * Будущая структура:
 *             8 - корень
 *          7     9
 *        5          10 - внутренний узел
 *     2     6          20
 *                   11
 *        листья (2, 6, 11)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  ///add - добавляет элементы
  add(value) {
    const newNode = new Node(value);

    /// если рута нет, то присваиваем ему новую ноду
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  /*
    1. Действие с node. (через коллбек)
    2. Идем по левому поддереву
    3. Идем по правому поддереву.
  */
  preOrder(node, callback) {
    if (!node) {
      return;
    }

    if (callback) {
      callback(node);
    }

    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  /*
    1. Идем по левому поддереву в глубину.
    2. Проводим действие с node. (через коллбек)
    3. Идем по правому поддереву.
  */
  inOrder(node, callback) {
    if (!node) {
      return;
    }

    this.inOrder(node.left, callback);

    if (callback) {
      callback(node);
    }

    this.inOrder(node.right, callback);
  }

  /*
    1. Идем по левому поддереву в глубину.
    2. Идем по правому поддереву.
    3. Проводим действие с node. (через коллбек)
  */
  postOrder(node, callback) {
    if (!node) {
      return;
    }

    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);

    if (callback) {
      callback(node);
    }
  }

  /// обход в глубину
  traverseDFS(callback, method) {
    if (method === 'preOrder') {
      return this.preOrder(this.root, callback);
    }

    if (method === 'inOrder') {
      return this.inOrder(this.root, callback);
    }

    return this.postOrder(this.root, callback);
  }

  /// обход в ширину
  traverseBFS(callback) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      callback(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
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

console.log('tree:', myTree);
console.log('- - -');

myTree.traverseDFS((node) => {
  console.log('preOrder:', node.value);
}, 'preOrder'); /// 8, 7, 5, 2, 6, 9, 10, 20, 11
console.log('- - -');

myTree.traverseDFS((node) => {
  console.log('inOrder:', node.value);
}, 'inOrder'); /// 2, 5, 6, 7, 8, 9, 10, 11, 20
console.log('- - -');

myTree.traverseDFS((node) => {
  console.log('postOrder:', node.value);
}, 'postOrder'); /// 2, 6, 5, 7, 11, 20, 10, 9, 8
console.log('- - -');

myTree.traverseBFS((node) => {
  console.log('traverseBFS:', node.value);
});
