const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this._rootNode = null;
  }
  root() {
    return this._rootNode;
  }

  _addNode(node, value) {
    if(!node) return new Node(value);
    if(node.data === value) return node;

    if(node.data < value) {
      node.right = this._addNode(node.right, value);
    }
    else {
      node.left = this._addNode(node.left, value);
    }
    return node;
  }

  add(data) {
    this._rootNode = this._addNode(this._rootNode, data);
  }

  has(data) {
    return Boolean(this.find(data));
  }

  _find(node, value) {
    if(!node)  return null;

    if(node.data === value) return node;

    if(node.data < value) return this._find(node.right, value);
    else return this._find(node.left, value);
  }

  find(data) {
    return this._find(this._rootNode, data);
  }

  _removeNode(node, value) {
    if(!node)
      return null;
    if(node.data === value) {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left || !node.right) {
        if(!node.left) {
          return node.right;
        }
        if(!node.right) {
          return node.left;
        }
      }
      if(node.left && node.right) {
        let minValueNode = this._min(node.right);
        node.data = minValueNode.data;
        node.right = this._removeNode(node.right, minValueNode.data);
        return node;
      }
    }
    else {
      if(node.data > value) {
        node.left = this._removeNode(node.left, value);
        return node;
      }
      else {
        node.right = this._removeNode(node.right, value);
        return node;
      }
    }
  }

  remove(data) {
    this._rootNode = this._removeNode(this._rootNode, data);
  }

  _min(node) {
    if(!node) return null
    if(!node.left) return node;
    return this._min(node.left);
  }

  _max(node) {
    if(!node) return null;
    if(!node.right) return node;
    return this._max(node.right);
  }

  min() {
    return this._min(this.root()).data;
  }

  max() {
    return this._max(this.root()).data;
  }
}

module.exports = {
  BinarySearchTree
};