import {BinarySearchTree} from '../../binary-search-tree/_binary-search-tree';
import {ComparableC} from '../../shared/_comparable';


describe('Binary Search Tree', () => {
    let bt: BinarySearchTree<number, ComparableC<number>>

    function boxNumber (n: number) {
        return new ComparableC(n);
    }

    beforeEach(() => {
        bt = new BinarySearchTree<number, ComparableC<number>>();
    })

    test('constructor: new bst should have size equal zero', () => {
        expect(bt.size()).toBe(0);
        expect(bt.isEmpty()).toBe(true);
    })

    test('add: should add element and increase size of bst', () => {
        expect(bt.add(boxNumber(5))).toBeTruthy();
        expect(bt.size()).toBe(1);
        bt.add(boxNumber(4));
        expect(bt.size()).toBe(2);
    })

    test('contains: should return true if element is present', () => {
        expect(bt.add(boxNumber(5))).toBeTruthy();
        expect(bt.add(boxNumber(22))).toBeTruthy();
        expect(bt.add(boxNumber(33))).toBeTruthy();
        expect(bt.contains(boxNumber(33))).toBeTruthy();
        expect(bt.contains(boxNumber(75))).toBeFalsy();
    })

    test('height: should return height of binary search tree', () => {
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
        bt.add(boxNumber(3));
    })
})
