import {LinkedList} from '../../linked-lists/_linkedList';

test('A newly created LinkedList should be empty', () => {
    const ll = new LinkedList();
    expect(ll.isEmpty()).toBe(true);
})

test('After add one element to empty List, size should be 1', () => {
    const ll = new LinkedList<number>();
    ll.add(1);
    expect(ll.size).toEqual(1);
})
