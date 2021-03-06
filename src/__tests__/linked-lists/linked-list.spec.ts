import {LinkedList} from '../..';

describe('Linked List', () => {
    let ll: LinkedList<number>;

    beforeEach(() => {
        ll = new LinkedList<number>();
    })

    test('A newly created LinkedList should be empty', () => {
        expect(ll.isEmpty()).toBe(true);
    })

    test('After add one element to empty List, size should be 1', () => {
        ll.add(1);
        expect(ll.size).toEqual(1);
    })

    test('Add element on first place with addFirst', () => {
        ll.add(4);
        ll.add(5);
        ll.addFirst(72);
        expect(ll.toString()).toEqual('[ 72, 4, 5 ]')
    })

    test('removeFirst should remove first element', () => {
        ll.add(43);
        ll.add(45);
        const removed = ll.removeFirst();
        expect(removed).toEqual(43);
        expect(ll.size).toEqual(1);
        expect(ll.toString()).toEqual('[ 45 ]')
    })

    test('removeLast should remove last element', () => {
        ll.add(45);
        ll.add(72);
        let removed = ll.removeLast();
        expect(removed).toEqual(72);
        expect(ll.size).toEqual(1);
        expect(ll.toString()).toEqual('[ 45 ]');
        removed = ll.removeLast();
        expect(removed).toEqual(45);
        expect(ll.isEmpty()).toBe(true);
    })

    test('indexOf should return index by passing data', () => {
        ll.add(22);
        ll.add(33);
        ll.add(76);
        expect(ll.indexOf(33)).toBe(1);
    })

    test('remove should remove target element by passing data', () => {
        ll.add(22);
        ll.add(45);
        ll.add(72);
        ll.add(33);
        expect(ll.remove(33)).toBe(true);
        expect(ll.size).toBe(3);
        expect(ll.peekLast()).toBe(72);
        expect(ll.remove(22)).toBe(true);
        expect(ll.peekFirst()).toBe(45);
    })

    test('Should print elements in order', () => {
        ll.add(42);
        ll.add(50);
        ll.add(32);
        expect(ll.toString()).toEqual('[ 42, 50, 32 ]')
    })
})
