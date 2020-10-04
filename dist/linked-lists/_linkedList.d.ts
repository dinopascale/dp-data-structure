export declare class LinkedList<T> implements IterableIterator<T> {
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
    toString(): string;
    [Symbol.iterator](): IterableIterator<T>;
    next(): IteratorResult<T>;
}
