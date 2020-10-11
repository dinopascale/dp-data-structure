import {IntTreeSet} from '../shared/_treeSet';
import {isEqual} from 'lodash-es';

// interface for not primitives that can be added to priority queue
export interface Comparable<T> {
    compareTo: (obj: T) => number;
}

type priorityQueueNode<T> = string | number | Comparable<T>;

// type guards for priorityQueueNode
function isComparable<T>(c: priorityQueueNode<T>): c is Comparable<T> {
    return (c as Comparable<T>).compareTo !== undefined;
}

function isString<T>(c: priorityQueueNode<T>): c is string {
    return (c as string).localeCompare !== undefined;
}

export class PriorityQueue<T extends priorityQueueNode<T>> {

    private heapSize: number = 0;
    private heapCapacity: number = 0;
    private heap: T[] = null;
    private map: Map<T, IntTreeSet> = new Map<T, IntTreeSet>();


    constructor(values?: number | T[]) {
        if (!values) {
            this.heap = Array(1);

        } else if (typeof values === 'number') {
            this.heap = Array(values);
        } else {
            /**
             * heapify process O(n) for building heap
             * starting from an array of comparable
             * objects
             */
            this.heapSize = this.heapCapacity = values.length;
            this.heap = Array(this.heapCapacity);
            for (let i = 0; i < this.heapSize; i++) {
                this.mapAdd(values[i], i);
                this.heap[i] = values[i];
            }

            for (let i = Math.max(0, Math.floor((this.heapSize / 2) - 1)); i >= 0; i--) {
                this.sink(i);
            }
        }
    }

    public isEmpty(): boolean {
        return this.heapSize === 0;
    }

    public clear(): void {
        for (let i = 0; i < this.heapCapacity; i++) {
            this.heap[i] = null;
        }
        this.heapSize = 0;
        this.map.clear();
    }

    public size(): number {
        return this.heapSize;
    }

    public peek(): T {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    }

    // time complexity of O(log(n))
    public poll(): T {
        return this.removeAt(0);
    }

    // test if elements is in heap, O(1)
    public contains(element: T): boolean {
        if (element == null) {
            return false;
        }
        return this.map.has(element);
    }

    public add(element: T): void {
        if (element == null) {
            throw new Error('You cannot pass null as argument')
        }
        if (this.heapSize < this.heapCapacity) {
            this.heap[this.heapSize] = element;
        } else {
            this.heap.push(element);
            this.heapCapacity++;
        }

        this.mapAdd(element, this.heapSize);
        this.swim(this.heapSize);
        this.heapSize++;
    }

    private less(i: number, j: number): boolean {
        const node1 = this.heap[i];
        const node2 = this.heap[j];
        let sorter: number;
        if (isComparable(node1)) {
            sorter = node1.compareTo(node2)
        } else if (isString(node1) && isString(node2)) {
            sorter = node1.localeCompare(node2)
        } else {
            sorter = (node1 as number) - (node2 as number);
        }
        return sorter <= 0;
    }

    private swim(k: number): void {
        let parent = Math.floor((k - 1) / 2);

        while (k > 0 && this.less(k, parent)) {
            // we need to swap position between node and parent in heap
            // and we need to update position into map
            this.swap(k, parent);

            //update k and parent
            k = parent;
            parent = (k - 1) / 2
        }
    }

    private sink(k: number): void {
        while (true) {
            // get left child node
            let left = (2 * k) + 1;
            // get right child node
            let right = (2 * k) + 2;
            // just assume the smallest is left
            let smallest = left;

            // check if right node is smallest
            if (right < this.heapSize && this.less(right, left)) {
                smallest = right;
            }

            // let break the loop if we are out of boundary or next node is smallest of actual one
            if (left >= this.heapSize || this.less(k, smallest)) {
                break;
            }

            // continue to move down to the tree
            this.swap(smallest, k);
            k = smallest;
        }
    }

    private swap(i: number, j: number): void {
        let iValue = this.heap[i];
        let jValue = this.heap[j];
        this.heap[i] = jValue;
        this.heap[j] = iValue;
        this.mapSwap(iValue, jValue, i, j);
    }

    public remove(element: T): boolean {
        if (element == null) {
            return false;
        }
        const index = this.mapGet(element);
        if (index != null) this.removeAt(index);
        return index != null;
    }

    private removeAt(i: number): T {
        if (this.isEmpty()) {
            return null;
        }
        this.heapSize--;
        const removedData = this.heap[i];
        this.swap(i, this.heapSize);

        this.heap[this.heapSize] = null;
        this.mapRemove(removedData, this.heapSize);

        if (i == this.heapSize) {
            return removedData;
        }

        let element = this.heap[i];

        // we try sinking
        this.sink(i);
        if (isEqual(this.heap[i], element)) {
            this.swim(i);
        }

        return removedData;
    }

    public isMinHeap(k: number): boolean {
        if (k >= this.heapSize) {
            return true
        }

        let left = (2 * k) + 1;
        let right = (2 * k) + 2;

        if (left < this.heapSize && !this.less(k, left)) {
            return false;
        }
        if (right < this.heapSize && !this.less(k, right)) {
            return false;
        }

        return this.isMinHeap(left) && this.isMinHeap(right);
    }

    [Symbol.iterator]() {
        return this.values();
    }

    *values() {
        const cloned = this.clone();
        for(let i = 0; i < this.heapSize; i++) {
            yield cloned[i];
        }
    }

    private clone(): T[] {
        return JSON.parse(JSON.stringify(this.heap));
    }

    private mapAdd(value: T, index: number): void {
        let set = this.map.get(value);
        if (set == null) {
            set = new IntTreeSet();
            set.add(index);
            this.map.set(value, set);
        } else {
            set.add(index);
        }
    }

    private mapRemove(value: T, index: number): void {
        let set = this.map.get(value);
        set.remove(index);
        if (set.size() === 0) {
            this.map.delete(value);
        }
    }

    /**
     * return index of element in heap thanks to map
     * if element appear more than one time in heap
     * we return the highest index (arbitrary)
     * @param value
     */
    private mapGet(value: T): number {
        const set = this.map.get(value);
        if (set != null) {
            return set.last();
        }
        return null;
    }

    private mapSwap(val1: T, val2: T, val1Index: number, val2Index: number): void {
        const set1 = this.map.get(val1);
        const set2 = this.map.get(val2);

        set1.remove(val1Index);
        set2.remove(val2Index);

        set1.add(val2Index);
        set2.add(val1Index);
    }

    public toString() {
        return JSON.stringify(this.heap);
    }
}
