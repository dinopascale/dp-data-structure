export declare class StaticQueue<T> {
    private _sealed;
    private _front;
    private _end;
    private _size;
    constructor(maxSize: number);
    isEmpty(): boolean;
    size(): number;
    peek(): T;
    enqueue(element: T): void;
    dequeue(): T;
}
