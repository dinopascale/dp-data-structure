import {Stack} from '../../stack/_stack';

describe('Stack Tests', () => {
    let st: Stack<number>;
    let stWithArgs: Stack<number>

    beforeEach(() => {
        st = new Stack<number>();
    })

    test('construct without args: should return an empty stack', () => {
        expect(st.size()).toBe(0);
    })
    test('construct with one arg: should return a stack with size equals 1', () => {
        stWithArgs = new Stack<number>(3);
        expect(stWithArgs.size()).toBe(1)
    })

    test('push: should increase size of stack by one', () => {
        st.push(5);
        st.push(4);
        expect(st.size()).toBe(2);
    })

    test('pop: should remove top element on stack', () => {
        st.push(4);
        st.push(3);
        const r = st.pop();
        expect(r).toEqual(3);
        expect(st.size()).toBe(1);
    })

    test('peek: should return top element on stack', () => {
        st.push(4);
        st.push(2);
        st.push(3);
        expect(st.peek()).toEqual(3);
    })

    test('stack should be iterable', () => {
        st.push(4);
        st.push(3);
        st.push(2);
        let sum = 0;
        for (let el of st) {
            sum += el;
        }
        expect(sum).toBe(9)
    })

})
