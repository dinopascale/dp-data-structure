// rome-ignore lint/js/noUnusedVariables
export class Node<T> {
    constructor(public data: T, public next: Node<T>) {
    }

    public toString(): string {
        return this.data.toString();
    }
}

/*
export class DoubleLinkedNode<T> extends Node<T> {
    constructor(data: T, next: Node<T>, public prev: Node<T>) {
        super(data, next);
    }
}
*/
