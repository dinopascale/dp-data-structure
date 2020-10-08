// rome-ignore lint/js/noUnusedVariables
export class Node<T> {
    constructor(public data: T, public next: Node<T>) {
    }

    public toString(): string {
        return this.data.toString();
    }
}


export class DoublyLinkedNode<T> {
    constructor(public data: T, public next: DoublyLinkedNode<T>, public prev: DoublyLinkedNode<T>) {
    }

    public toString(): string {
        return this.data.toString();
    }
}

