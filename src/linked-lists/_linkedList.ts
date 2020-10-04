import {Node} from "./_node";
import {LinkedListErrors} from './_errors';

export class LinkedList<T> implements IterableIterator<T> {
    private _size: number = 0;
    private head: Node<T> = null;
    private tail: Node<T> = null;
    private pointer: Node<T> = null;

    public get size(): number {
        return this._size;
    }

    public clear(): void {
        let trav: Node<T> = this.head;
        while (trav != null) {
            let next: Node<T> = trav.next;
            trav.next = null;
            trav.data = null;
            trav = next;
        }
        this.head = this.tail = trav = null;
        this._size = 0;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public add(element: T) {
        this.addLast(element);
    }

    public addLast(element: T) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node<T>(element, null);
        } else {
            this.tail.next = new Node<T>(element, null);
            this.tail = this.tail.next;
        }
        this._size++;
    }

    public addFirst(element: T) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node<T>(element, null);
        } else {
            this.head = new Node<T>(element, this.head);
        }
        this._size++;
    }

    public peekFirst(): T {
        if (this.isEmpty()) {
            throw new Error('Empty List!');
        } else {
            return this.head.data;
        }
    }

    public peekLast(): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!');
        } else {
            return this.tail.data;
        }
    }

    public removeFirst(): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!');
        } else {
            const removed: T = this.head.data;
            this.head = this.head.next;
            this._size--;

            if (this.isEmpty()) {
                this.tail = null;
            }

            return removed;
        }
    }

    public removeLast(): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!')
        } else {
            let temp: Node<T> = this.head;
            while (temp.next != null && temp.next !== this.tail) {
                temp = temp.next;
            }
            const removed = this.tail.data;
            this.tail = null;
            this._size--;

            if (this.isEmpty()) {
                this.head = null;
            } else {
                temp.next = null;
                this.tail = temp;
            }
            return removed;
        }
    }

    public toString(): string {
        let string: string = '[ ';
        let trav: Node<T> = this.head;
        while (trav != null) {
            string += trav.next != null ? `${trav.data}, ` : `${trav.data}`;
            trav = trav.next;
        }
        string += ' ]';
        return string.toString();
    }

    [Symbol.iterator](): IterableIterator<T> {
        this.pointer = this.head;
        return this;
    }

    public next(): IteratorResult<T> {
        let result;
        if (this.pointer != null) {
            result = {value: this.pointer.data, done: false}
            this.pointer = this.pointer.next;
        } else {
            result = {value: null, done: true}
            this.pointer = null;
        }
        return result;
    }
}
