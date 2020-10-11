import {IntTreeSet} from '../../shared/_treeSet';

describe('Tree Set', () => {
    let ts: IntTreeSet;

    beforeEach(() => {
        ts = new IntTreeSet();
    })

    test('constructor: a fresh new tree set should be empty', () => {
        expect(ts.size()).toBe(0);
        expect(ts.isEmpty()).toBe(true);
    })

    test('add: should add elements in ascending order', () => {
        ts.add(2);
        ts.add(1);
        ts.add(5);
        ts.add(3);
        ts.add(4);
        let string = ''
        for(let node of ts) {
           string += `${node} `
        }
        expect(string).toBe('1 2 3 4 5 ')
    })

    test('add: shouldn\'t add element if already present', () => {
        ts.add(2);
        ts.add(3);
        expect(() => ts.add(2)).toThrow('Element already Present!')
    })

    test('first: should return first element of tree set', () => {
        ts.add(2);
        ts.add(4);
        ts.add(1);
        expect(ts.first()).toBe(1);
    })

    test('last: should return last element of tree set', () => {
        ts.add(-1);
        ts.add(-4);
        ts.add(-2);
        expect(ts.last()).toBe(-1);
    })

    test('removeFirst: should remove element on front', () => {
        ts.add(4);
        ts.add(2);
        ts.add(5);
        ts.add(0);
        expect(ts.removeFirst()).toBe(0);
        expect(ts.size()).toBe(3);
    })

    test('removeLast: should remove element on end', () => {
        ts.add(4);
        ts.add(2);
        ts.add(5);
        ts.add(0);
        expect(ts.removeLast()).toBe(5);
        expect(ts.size()).toBe(3);
    })

    test('remove: should remove element from tree set', () => {
        ts.add(2);
        ts.add(3);
        ts.add(101);
        ts.add(2405);
        expect(ts.remove(3)).toBe(true);
        expect(ts.size()).toBe(3);
        expect(ts.remove(-10)).toBe(false);
    })

    test('clear: should remove all elements from tree set', () => {
        ts.add(3);
        ts.add(2);
        expect(ts.size()).toBe(2);
        ts.clear();
        expect(ts.size()).toBe(0);
    })
})
