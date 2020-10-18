import {ComparableC} from '../shared/_comparable';
import isEqual from "lodash-es/isEqual";

class Node<U> {
    constructor(public data: U, public left: Node<U>, public right: Node<U>) {}
}

export class BinarySearchTree<U, K extends ComparableC<U>> {
    private numbNodes: number = 0;
    private root: Node<K> = null;

    public isEmpty(): boolean {
        return this.size() == 0;
    }

    public size(): number {
        return this.numbNodes
    }

    public add(element: K): boolean {
        if (this.contains(element)) {
            return false;
        } else {
            this.root = this._add(this.root, element);
            this.numbNodes++;
            return true;
        }
    }

    public contains(el: K): boolean {
        return this._contains(this.root, el)
    }

    public remove(el: K): boolean {
        if (!this.contains(el)) {
            return false;
        } else {
            this.root = this._remove(this.root, el);
            this.numbNodes--;
            return true;
        }
    }

    private _add(node: Node<K>, el: K): Node<K> {
        if (node == null) {
            node = new Node<K>(el, null, null)
        } else {
            if (el.compareTo(node.data) < 0) {
                node.left = this._add(node.left, el);
            } else {
                node.right = this._add(node.right, el);
            }
        }
        return node;
    }

    private _remove(node: Node<K>, el: K): Node<K> {
        if (node == null) {
            // leaf case
            return null;
        }

        const comparator = el.compareTo(node.data);

        // not found element to remove
        if (comparator < 0) {
            node.left = this._remove(node.left, el);
        } else if (comparator > 0) {
            node.right = this._remove(node.right, el);
        } else {
            // found element
            if (node.left == null) {
                // no left subtree switch with right node
                const rightChild = node.right;
                node.data = null;
                node = null;
                return rightChild;
            } else if (node.right == null) {
                // only left subtree is missing
                const leftChild = node.left;
                node.data = null;
                node = null;
                return leftChild;
            } else {
                // need to fin max value to left or min value to right;
                const successor = this._findMax(node.left);
                // swap data
                node.data = successor.data;
                // remove successor from its previous position
                node.left = this._remove(node.left, successor.data);
            }

        }
        return node;
    }

    private _contains(node: Node<K>, el: K): boolean {

        if (node == null) {
            return false;
        }

        const compareTo: number = el.compareTo(node.data);

        if (compareTo === 0) {
            return true;
        } else if(compareTo < 0) {
            return this._contains(node.left, el);
        } else {
            return this._contains(node.right, el);
        }
    }

    private _findMin(node: Node<K>): Node<K> {
        if (node.left != null) {
            node = this._findMin(node.left);
        }
        return node;
    }

    private _findMax(node: Node<K>): Node<K> {
        if (node.right != null) {
            node = this._findMax(node.right)
        }
        return node;
    }

    public height() {
        return this._height(this.root);
    }

    private _height(node: Node<K>): number {
        if (node == null) {
            return 0
        }
        const leftHeight = this._height(node.left);
        const rightHeight = this._height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
