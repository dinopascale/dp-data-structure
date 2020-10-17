export declare class TreeSet<T> implements IterableIterator<T> {
    private _list;
    private _length;
    private _comparator;
    constructor(comparator?: (a: T, b: T) => number);
    size(): number;
    isEmpty(): boolean;
    first(): T;
    last(): T;
    removeLast(): T;
    removeFirst(): T;
    remove(obj: T): boolean;
    add(obj: T, comparer?: (obj: T) => boolean): void;
    contains(obj: T, comparer?: (obj: T) => boolean): boolean;
    clear(): void;
    [Symbol.iterator](): IterableIterator<T>;
    next(): IteratorResult<T, any>;
    private _binarySearch;
}
export declare class IntTreeSet extends TreeSet<number> {
    constructor();
}
