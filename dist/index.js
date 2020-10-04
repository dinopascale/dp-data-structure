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
        this.pointer = null;
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
        this.addLast(element);
    };
    LinkedList.prototype.addLast = function (element) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(element, null);
        }
        else {
            this.tail.next = new Node(element, null);
            this.tail = this.tail.next;
        }
        this._size++;
    };
    LinkedList.prototype.addFirst = function (element) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(element, null);
        }
        else {
            this.head = new Node(element, this.head);
        }
        this._size++;
    };
    LinkedList.prototype.toString = function () {
        var string = '[ ';
        var trav = this.head;
        while (trav != null) {
            string += trav.next != null ? trav.data + ", " : "" + trav.data;
            trav = trav.next;
        }
        string += ' ]';
        return string.toString();
    };
    LinkedList.prototype[Symbol.iterator] = function () {
        this.pointer = this.head;
        return this;
    };
    LinkedList.prototype.next = function () {
        var result;
        if (this.pointer != null) {
            result = { value: this.pointer.data, done: false };
            this.pointer = this.pointer.next;
        }
        else {
            result = { value: null, done: true };
            this.pointer = null;
        }
        return result;
    };
    return LinkedList;
}());

exports.LinkedList = LinkedList;
