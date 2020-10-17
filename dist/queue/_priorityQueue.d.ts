export interface Comparable<T> {
    compareTo: (obj: T) => number;
}
declare type priorityQueueNode<T> = string | number | Comparable<T>;
export declare class PriorityQueue<T extends priorityQueueNode<T>> {
    private heapSize;
    private heapCapacity;
    private heap;
    private map;
    constructor(values?: number | T[]);
    isEmpty(): boolean;
    clear(): void;
    size(): number;
    peek(): T;
    poll(): T;
    contains(element: T): boolean;
    add(element: T): void;
    private less;
    private swim;
    private sink;
    private swap;
    remove(element: T): boolean;
    private removeAt;
    isMinHeap(k: number): boolean;
    [Symbol.iterator](): Generator<T, void, unknown>;
    values(): Generator<T, void, unknown>;
    private clone;
    private mapAdd;
    private mapRemove;
    /**
     * return index of element in heap thanks to map
     * if element appear more than one time in heap
     * we return the highest index (arbitrary)
     * @param value
     */
    private mapGet;
    private mapSwap;
    toString(): string;
}
export {};
