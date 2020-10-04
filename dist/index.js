'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// rome-ignore lint/js/noUnusedVariables
var Node = /** @class */ (function () {
    function Node(data, next) {
        this.data = data;
        this.next = next;
    }
    Node.prototype.toString = function () {
        return this.data.toString();
    };
    return Node;
}());
/*
export class DoubleLinkedNode<T> extends Node<T> {
    constructor(data: T, next: Node<T>, public prev: Node<T>) {
        super(data, next);
    }
}
*/

var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    }
    Object.defineProperty(LinkedList.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.clear = function () {
        var trav = this.head;
        while (trav != null) {
            var next = trav.next;
            trav.next = null;
            trav.data = null;
            trav = next;
        }
        this.head = this.tail = trav = null;
        this._size = 0;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    LinkedList.prototype.add = function (element) {
        var temp = new Node(element, null);
        if (this.isEmpty()) {
            this.head = this.tail = temp;
        }
        else {
            this.tail.next = temp;
            this.tail = temp;
        }
        this._size++;
    };
    return LinkedList;
}());

exports.LinkedList = LinkedList;
