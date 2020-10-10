import {Queue} from '../../queue/_queue';

describe('Queue', () => {
    let q: Queue<string>;

    beforeEach(() => {
        q = new Queue<string>();
    })

    test('newly create queue should have size equals to zero', () => {
        expect(q.isEmpty()).toBe(true);
        expect(q.size()).toBe(0)
    })

    test('enqueue: should add element to queue and increase its size', () => {
        q.enqueue('ciao');
        q.enqueue('ehi');
        expect(q.size()).toBe(2);
    })

    test('peek: should return element on front of queue', () => {
        q.enqueue('ciao');
        q.enqueue('ehi');
        q.enqueue('Hola');
        expect(q.peek()).toBe('ciao');
    })

    test('dequeue: should remove element from start and decrease its size', () => {
        q.enqueue('ciao');
        q.enqueue('hey');
        q.enqueue('hola');

        expect(q.dequeue()).toBe('ciao');
        expect(q.size()).toBe(2);
        q.dequeue();
        q.dequeue();
        expect(q.isEmpty()).toBe(true);
        expect(() => q.dequeue()).toThrow('Queue is Empty')
    })
})
