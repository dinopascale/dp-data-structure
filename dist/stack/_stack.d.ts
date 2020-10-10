export declare class Stack<T> implements IterableIterator<T> {
    private readonly _list;
    constructor(firstElement?: T);
    size(): number;
    isEmpty(): boolean;
    push(element: T): void;
    pop(): T;
    peek(): T;
    [Symbol.iterator](): IterableIterator<T>;
    next(): IteratorResult<T>;
}
