export declare class Node<T> {
    data: T;
    next: Node<T>;
    constructor(data: T, next: Node<T>);
    toString(): string;
}
export declare class DoublyLinkedNode<T> {
    data: T;
    next: DoublyLinkedNode<T>;
    prev: DoublyLinkedNode<T>;
    constructor(data: T, next: DoublyLinkedNode<T>, prev: DoublyLinkedNode<T>);
    toString(): string;
}
