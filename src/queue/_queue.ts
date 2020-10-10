import {QueueError} from './_errors';

export class Queue<T> {
    private _list: T[] = [];
    private _end: number = 0;

    public isEmpty(): boolean {
        return this._list.length == 0;
    }

    public size(): number {
        return this._list.length;
    }

    public peek(): T {
        return this._list[0];
    }

    public enqueue(element: T) {
        this._list[this._end] = element;
        ++this._end;
    }

    public dequeue(): T {
        if (this.isEmpty()) {
            throw new QueueError('Queue is Empty!');
        }
        const removed = this._list[0];
        this._list.splice(0, 1);
        --this._end;
        return removed;
    }
}


