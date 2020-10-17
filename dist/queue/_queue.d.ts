export declare class Queue<T> {
    private _list;
    private _end;
    isEmpty(): boolean;
    size(): number;
    peek(): T;
    enqueue(element: T): void;
    dequeue(): T;
}
