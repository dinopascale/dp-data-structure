import {Node} from "./_node";

export class LinkedList<T> {
	private _size: number = 0;
	private head: Node<T> = null;
	private tail: Node<T> = null;

	public get size(): number {
		return this._size;
	}

	public clear(): void {
		let trav: Node<T> = this.head;
		while (trav != null) {
			let next: Node<T> = trav.next;
			trav.next = null;
			trav.data = null;
			trav = next;
		}
		this.head = this.tail = trav = null;
		this._size = 0;
	}

	public isEmpty(): boolean {
		return this.size === 0;
	}

	public add(element: T) {
		const temp = new Node(element, null);
		if (this.isEmpty()) {
			this.head = this.tail = temp;
		} else {
			this.tail.next = temp;
			this.tail = temp;
		}
		this._size++;
	}
}
