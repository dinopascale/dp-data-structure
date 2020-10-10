import {QueueError, StaticQueueError} from './_errors';

export class StaticQueue<T> {
    private _sealed: T[];
    private _front: number;
    private _end: number;
    private _size: number;

    constructor(maxSize: number) {
        this._front = this._end = 0;
        this._size = maxSize + 1;
        this._sealed = Object.seal(Array(this._size).fill(null));
    }

    public isEmpty(): boolean {
        return this._front === this._end;
    }

    public size(): number {
        return this._front > this._end ? this._end + this._size - this._front : this._end - this._front
    }

    public peek(): T {
        return this._sealed[this._front];
    }

    public enqueue(element: T): void {
        this._sealed[this._end] = element;
        if (++this._end == this._size) {
            this._end = 0;
        }
        if (this._end == this._front) {
            throw new StaticQueueError('Queue is too small!')
        }
    }

    public dequeue(): T {
        if (this.isEmpty()) {
            throw new QueueError('Queue is Empty!')
        }
        const removed = this._sealed[this._front];
        if (++this._front == this._size) {
            this._front = 0;
        }
        return removed;
    }
}
