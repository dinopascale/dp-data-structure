import {DoublyLinkedList} from '../linked-lists/_doublyLinkedList';
import {StackError} from './_errors';

export class Stack<T> implements IterableIterator<T> {

    private readonly _list: DoublyLinkedList<T> = new DoublyLinkedList<T>();

    constructor(firstElement?: T) {
        if (firstElement) {
            this.push(firstElement);
        }
    }

    public size(): number {
        return this._list.size;
    }

    public isEmpty(): boolean {
        return this._list.isEmpty();
    }

    public push(element: T): void {
        this._list.addLast(element);
    }

    public pop(): T {
        if (this.isEmpty()) {
            throw new StackError('Empty Stack!');
        }
        return this._list.removeLast();
    }

    public peek(): T {
        if (this.isEmpty()) {
            throw new StackError('Empty Stack!')
        }
        return this._list.peekLast();
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this._list[Symbol.iterator]();
    }

    public next(): IteratorResult<T> {
        return this._list.next();
    }

}
