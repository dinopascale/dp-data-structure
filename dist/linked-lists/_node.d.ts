export declare class Node<T> {
    data: T;
    next: Node<T>;
    constructor(data: T, next: Node<T>);
    toString(): string;
}
