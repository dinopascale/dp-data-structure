import {UnionFind} from '../../union-find/_union-find';

describe('Union Find', () => {
    let uf: UnionFind;
    const size = 6;

    beforeEach(() => {
        uf = new UnionFind(size);
    })

    test('construction: new union find should have number of components equals to size passed', () => {
        expect(uf.size()).toBe(size);
        expect(uf.components()).toBe(size);
        expect(uf.componentSize(4)).toBe(1);
    })

    test('unify: should merge two sets in one', () => {
        uf.unify(3, 5);
        expect(uf.connected(3, 5)).toBe(true);
        expect(uf.components()).toBe(size - 1);
        expect(uf.componentSize(3)).toBe(2);
    })

    test('unify: if called on two nodes of the same set should do nothing', () => {
        uf.unify(2, 6);
        expect(uf.connected(2, 6)).toBe(true);
        const comp = uf.components();
        uf.unify(2, 6);
        expect(uf.components()).toEqual(comp);
    })

})
