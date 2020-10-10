import {StaticQueue} from '../../queue/_staticQueue';

describe('Static Queue', () => {
    let stq: StaticQueue<number>;

    beforeEach(() => {
        stq = new StaticQueue<number>(5);
    })

    test('newly created static queue should have size equals to zero', () => {
        expect(stq.size()).toBe(0);
    })

    test('enqueue: we can push only five elements to queue', () => {
        stq.enqueue(1);
        stq.enqueue(2);
        stq.enqueue(3);
        stq.enqueue(4);
        stq.enqueue(5);
        expect(stq.size()).toBe(5)
        expect(stq.isEmpty()).toBe(false);
        expect(() => stq.enqueue(6)).toThrow('Queue is too small')
    })

    test('peek: should return first element', () => {
        stq.enqueue(1);
        stq.enqueue(2);
        stq.enqueue(3);
        expect(stq.peek()).toBe(1);
        stq.dequeue();
        expect(stq.peek()).toBe(2);
    })

    test('dequeue: we can remove elements from the queue', () => {
        stq.enqueue(1);
        stq.enqueue(2);
        stq.enqueue(3);
        stq.enqueue(4);
        stq.enqueue(5);

        expect(stq.dequeue()).toBe(1)
        expect(stq.dequeue()).toBe(2)
        expect(stq.dequeue()).toBe(3)
        expect(stq.dequeue()).toBe(4)

        expect(stq.isEmpty()).toBe(false)

        stq.enqueue(1);
        stq.enqueue(2);

        expect(stq.dequeue()).toBe(5);
        expect(stq.dequeue()).toBe(1);
        expect(stq.dequeue()).toBe(2);
        expect(stq.isEmpty()).toBe(true);
    })
})
