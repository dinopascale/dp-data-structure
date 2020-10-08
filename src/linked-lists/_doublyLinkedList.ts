import {DoublyLinkedNode} from './_node';
import {LinkedListErrors} from './_errors';
import isEqual from 'lodash-es/isEqual';

export class DoublyLinkedList<T> {
    private _size: number = 0;
    private head: DoublyLinkedNode<T> = null;
    private tail: DoublyLinkedNode<T> = null;
    private pointer: DoublyLinkedNode<T> = null;

    public get size() {
        return this._size;
    }

    public clear(): void {
        let trav: DoublyLinkedNode<T> = this.head;
        while (trav != null) {
            let next: DoublyLinkedNode<T> = trav.next;
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
            this.head = this.tail = new DoublyLinkedNode<T>(element, null, null)
        } else {
            this.tail.next = new DoublyLinkedNode<T>(element, null, this.tail);
            this.tail = this.tail.next;
        }
        this._size++;
    }

    public addFirst(element: T) {
        if (this.isEmpty()) {
            this.head = this.tail = new DoublyLinkedNode<T>(element, null, null);
        } else {
            const prevHead = this.head;
            this.head = new DoublyLinkedNode<T>(element, this.head, null);
            prevHead.prev = this.head;
        }
        this._size++;
    }

    public peekFirst(): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!')
        } else {
            return this.head.data;
        }
    }

    public peekLast(): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!')
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
            this.head.prev = null;
            this._size--;

            if (this.isEmpty()) {
                this.tail = null;
            }

            return removed;
        }
    }

    public removeLast(): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!');
        } else {
            const removed = this.tail.data;
            this.tail = this.tail.prev;
            this._size--;

            if (this.isEmpty()) {
                this.head = null;
            } else {
                this.tail.next = null;
            }

            return removed;
        }
    }

    private _remove(node: DoublyLinkedNode<T>): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!')
        }

        if (node.next === null) {
            return this.removeLast();
        }

        if (node.prev === null) {
            return this.removeFirst();
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        const removed = node.data;
        node.data = null;
        node = node.prev = node.next = null;
        this._size--;
        return removed;
    }

    public removeAt(index: number): T {
        if (this.isEmpty()) {
            throw new LinkedListErrors('Empty List!')
        }

        if (index < 0 || index >= this.size) {
            throw new LinkedListErrors('Illegal index passed as argument!')
        }
        let i: number;
        let trav: DoublyLinkedNode<T>;
        if (index < this.size / 2) {
            for (i = 0, trav = this.head; i !== index; i++) {
                trav = trav.next;
            }
        } else {
            for (i = this.size - 1, trav = this.tail; i !== index; i--) {
                trav = trav.prev;
            }
        }
        return this._remove(trav);
    }

    public remove(obj: T): boolean {
        let trav: DoublyLinkedNode<T>;

        if (obj == null) {
            for (trav = this.head; trav != null; trav = trav.next) {
                if (trav.data == null) {
                    this._remove(trav);
                    return true
                }
            }
        } else {
            for (trav = this.head; trav != null; trav = trav.next) {
                if (isEqual(trav.data, obj)) {
                    this._remove(trav);
                    return true
                }
            }
        }
        return false;
    }
}
