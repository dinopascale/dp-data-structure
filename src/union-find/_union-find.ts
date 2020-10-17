import {UnionFindError} from './_errors';

export class UnionFind {
    private readonly _size: number;

    // array for keeping track of sizes of different components, indexed by their roots
    private readonly sizeComponents: number[];

    // array for keeping track of roots of groups
    // if i = groups[i] then we have a roots of a group
    // at the star every element is a group on itself
    private readonly groups: number[];

    private _numbComponents: number;

    constructor(size: number) {
        if (size <= 0) {
            throw new UnionFindError('Union Find of size zero is not allowed')
        }

        this._size = this._numbComponents = size;
        this.groups = Array(size);
        this.sizeComponents = Array(size).fill(1);
        for (let i = 0; i < size; i++) {
            this.groups[i] = i;
        }
    }

    public componentSize(p: number): number {
        return this.sizeComponents[this.find(p)];
    }

    public size(): number {
        return this._size;
    }

    public components(): number {
        return this._numbComponents;
    }

    // method that check if due nodes are in the same component
    // comparing their roots
    public connected(p: number, q: number): boolean {
        return this.find(p) == this.find(q);
    }

    // basic operation of this data structure
    // find the root of component's passed node
    public find(p: number): number {
        let root = p;
        while (root != this.groups[root]) {
            root = this.groups[root];
        }

        this.pathCompression(p, root);

        return root;
    }

    // the second basic operation of this data structure
    // merge two set/components in one, update the size
    // of new component and reduce number of components by one
    public unify(p: number, q: number): void {
        const rootP = this.find(p);
        const rootQ = this.find(q);

        if (rootP == rootQ) return;

        // totally arbitrary: we merge smaller set into bigger one
        if (this.sizeComponents[rootP] < this.sizeComponents[rootQ]) {
            this.sizeComponents[rootQ] += this.sizeComponents[rootP];
            this.groups[rootP] = rootQ;
        } else {
            this.sizeComponents[rootP] += this.sizeComponents[rootQ];
            this.groups[rootQ] = rootP;
        }

        this._numbComponents--;
    }

    // we set all node of component to its root
    // this process is called path compression
    // and give us better time complexity on
    // basic operation of Union Find
    private pathCompression(p: number, root: number): void {
        while (p != root) {
            let next = this.groups[p];
            this.groups[p] = root;
            p = next;
        }
    }
}
