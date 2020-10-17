export declare class UnionFind {
    private readonly _size;
    private readonly sizeComponents;
    private readonly groups;
    private _numbComponents;
    constructor(size: number);
    componentSize(p: number): number;
    size(): number;
    components(): number;
    connected(p: number, q: number): boolean;
    find(p: number): number;
    unify(p: number, q: number): void;
    private pathCompression;
}
