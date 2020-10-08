import {DoublyLinkedList} from '../../linked-lists/_doublyLinkedList';

describe('Double Linked List', () => {
    let dll: DoublyLinkedList<{foo: string, bar: number}>;

    beforeEach(() => {
        dll = new DoublyLinkedList<{foo: string, bar: number}>();
    })

    test('A newly created DoubleLinkedList should be empty', () => {
        expect(dll.isEmpty()).toBe(true);
    });

    test('After add one element to empty List, size should be 1', () => {
        dll.add({foo: 'salve', bar: 10});
        expect(dll.size).toEqual(1);
    })

    test('Peek first should return data of first node', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        expect(dll.peekFirst()).toStrictEqual({foo: 'salve', bar: 10})
    })

    test('Peek last should return data of last node', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        expect(dll.peekLast()).toStrictEqual({foo: 'bonjour', bar: 20})
    })

    test('addFirst should add element to head', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.addFirst({foo: 'bonjour', bar: 20});
        expect(dll.peekFirst()).toStrictEqual({foo: 'bonjour', bar: 20});
    })

    test('removeFirst should remove element from head', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        expect(dll.removeFirst()).toStrictEqual({foo: 'salve', bar: 10});
        expect(dll.size).toBe(1);
    })

    test('removeLast should remove element from tail', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        expect(dll.removeLast()).toStrictEqual({foo: 'bonjour', bar: 20});
        expect(dll.size).toBe(1);
    })

    test('removeAt should remove element at index', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        dll.add({foo: 'hi', bar: 30});
        dll.add({foo: 'ola', bar: 40});
        expect(dll.removeAt(1)).toStrictEqual({foo: 'bonjour', bar: 20});
        expect(dll.size).toBe(3);
    })

    test('remove by data should remove first element with data', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        dll.add({foo: 'hi', bar: 30});
        dll.add(null);
        expect(dll.remove(null)).toBe(true);
        expect(dll.remove({foo: 'bonjour', bar: 20})).toBe(true);
        expect(dll.size).toBe(2);
    })

    test('remove by data should not remove element if is not found', () => {
        dll.add({foo: 'salve', bar: 10});
        dll.add({foo: 'bonjour', bar: 20});
        dll.add({foo: 'ola', bar: 40});
        expect(dll.remove({foo: 'hey', bar: 20})).toBe(false);
        expect(dll.size).toBe(3);
    })

})
