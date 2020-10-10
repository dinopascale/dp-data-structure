export declare class DoublyLinkedList<T> implements IterableIterator<T> {
    private _size;
    private head;
    private tail;
    private pointer;
    get size(): number;
    clear(): void;
    isEmpty(): boolean;
    add(element: T): void;
    addLast(element: T): void;
    addFirst(element: T): void;
    peekFirst(): T;
    peekLast(): T;
    removeFirst(): T;
    removeLast(): T;
    private _remove;
    removeAt(index: number): T;
    remove(obj: T): boolean;
    indexOf(obj: T): number;
    contains(obj: T): boolean;
    toString(): string;
    [Symbol.iterator](): IterableIterator<T>;
    next(): IteratorResult<T>;
}
