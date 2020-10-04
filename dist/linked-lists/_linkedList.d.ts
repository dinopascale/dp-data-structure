export declare class LinkedList<T> {
    private _size;
    private head;
    private tail;
    get size(): number;
    clear(): void;
    isEmpty(): boolean;
    add(element: T): void;
}
