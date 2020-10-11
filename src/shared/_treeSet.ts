/**
 * a Javascript clone of Java's TreeSet
 * - unique values
 * - always sorted in ascending order
 */
import {isEqual} from 'lodash-es';

export class TreeSet<T> implements IterableIterator<T> {

    private _list: Array<T> = [];
    private _length: number = 0;
    private _comparator: (a: T, b: T) => number = function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };

    constructor(comparator?: (a: T, b: T) => number) {
        if (comparator) {
            this._comparator = comparator;
        }
    }

    public size() {
        return this._list.length;
    }

    public isEmpty() {
        return this.size() === 0;
    }

    public first() {
        return this._list[0];
    }

    public last() {
        return this._list[this._length - 1]
    }

    public removeLast() {
        if (this.isEmpty()) {
            throw new Error('List is empty!')
        }
        this._length--;
        return this._list.splice(this._length, 1)[0]
    }

    public removeFirst() {
        if (this.isEmpty()) {
            throw new Error('List is empty!')
        }
        this._length--;
        return this._list.splice(0, 1)[0];
    }

    public remove(obj: T): boolean {
        if (isEqual(this._list[0], obj)) {
            this.removeFirst()
            return true;
        }
        if (isEqual(this._list[this._length - 1], obj)) {
            this.removeLast();
            return true;
        }
        for (let i = 0; i < this._length - 1; i++) {
            if (isEqual(obj, this._list[i])) {
                this._list.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    public add(obj: T, comparer?: (obj: T) => boolean): void {
        // first let see if value is already inserting
        if (this.contains(obj, comparer)) {
            throw new Error('Element already Present!');
        }
        let indexAt = this._binarySearch(obj);
        if (indexAt < 0) {
            indexAt = -(indexAt + 1);
        }
        this._list.splice(indexAt, 0, obj)
        this._length++;
    }

    contains(obj: T, comparer?: (obj: T) => boolean): boolean {
        for (let i = 0; i < this._length - 1; i++) {
            if (comparer ? comparer(this._list[i]) : isEqual(obj, this._list[i])) {
                return true
            }
        }
        return false
    }

    clear(): void {
        while(!this.isEmpty()) {
            this.removeFirst();
        }
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this._list[Symbol.iterator]();
    }

    next() {
        return this._list.values().next();
    }

    private _binarySearch(obj: T): number {
        let low = 0;
        let high = this.size() - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let midValue = this._list[mid];
            let comp = this._comparator(midValue, obj);
            if (comp < 0) {
                low = mid + 1;
            } else if (comp > 0) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -(low + 1);
    }
}

export class IntTreeSet extends TreeSet<number> {
    constructor() {
        super();
    }
}
