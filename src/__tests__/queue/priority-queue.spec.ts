import {Comparable, PriorityQueue} from '../../queue/_priorityQueue';

interface data extends Comparable<data>{
    id: number;
    name: string;
    surname: string;
}

const mockDataHelper: (val: {id: number, name: string, surname: string}) => data = val => {
    return {
        ...val,
        compareTo: (obj: {id: number, name: string, surname: string}) => {
            return val.id - obj.id;
        }
    }
}

describe('Priority Queue', () => {

    let mockData = [
        {id: 19, name: 'Chou', surname: 'Tzuyu'},
        {id: 1, name: 'Paul', surname: 'Boo'},
        {id: 4, name: 'Yoo', surname: 'Jeongyeon'},
        {id: 7, name: 'Hirai', surname: 'Momo'},
        {id: 23, name: 'Myoui', surname: 'Mina'},
        {id: 2, name: 'Park', surname: 'Jihyo'},
        {id: 3, name: 'Im', surname: 'Nayeon'},
        {id: 12, name: 'Kim', surname: 'Dahyun'},
        {id: 9, name: 'Minatozaki', surname: 'Sana'},
    ];

    let comparableMockData = mockData.map(d => mockDataHelper(d));

    test('constructor without args should return a PriorityQueue empty', () => {
       let pq = new PriorityQueue<data>();
       expect(pq.size()).toBe(0);
       expect(pq.isEmpty()).toBe(true);
    })

    test('constructor with array arg should return a PriorityQueue already heapifed', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        expect(pq.size()).toBe(comparableMockData.length);
        expect(pq.isMinHeap(0)).toBe(true);
        expect(pq.isEmpty()).toBe(false);
    })

    test('clear: should remove all elements from PriorityQueue', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        expect(pq.size()).toBe(comparableMockData.length);
        pq.clear();
        expect(pq.size()).toBe(0);
        expect(pq.isEmpty()).toBe(true);
    })

    test('peek: return first element of PriorityQueue', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        expect(pq.peek()).toStrictEqual(comparableMockData[1]);
    })

    test('poll: should remove first element and preserve heap structure', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        expect(pq.poll()).toStrictEqual(comparableMockData[1]);
        expect(pq.size()).toBe(comparableMockData.length - 1);
        expect(pq.isMinHeap(0)).toBe(true);
    })

    test('contains: should test if element is in heap', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        const notPresent = mockDataHelper({id: 72, name: 'A', surname: 'B'})
        expect(pq.contains(notPresent)).toBe(false);
        expect(pq.contains(comparableMockData[1])).toBe(true);
    })

    test('add: should add new element in right order in the heap', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        const toAdd = mockDataHelper({id: 34, name: 'A', surname: 'B'});
        pq.add(toAdd);
        expect(pq.size()).toBe(comparableMockData.length + 1);
        expect(pq.isMinHeap(0)).toBe(true);
        expect(() => pq.add(null)).toThrow('You cannot pass null as argument')
    })

    test('remove: should remove element from heap and return boolean', () => {
        let pq = new PriorityQueue<data>(comparableMockData);
        const toRemove = comparableMockData[3];
        expect(pq.remove(toRemove)).toBe(true);
        expect(pq.size()).toBe(comparableMockData.length - 1);
        expect(pq.remove(null)).toBe(false);
        expect(pq.size()).toBe(comparableMockData.length - 1);
    })
})
