import {ComparableC} from '../../shared/_comparable';

describe('Comparable Class', () => {

    const compareLengthTitle = function (el: {author: string, title: string}) {
        return function(val: ComparableC<{author: string, title: string}>) {
            if (el.title.length < val.data.title.length) return -1
            else if (el.title.length > val.data.title.length) return 1
            else return 0
        }
    }

    const helperFactory = (obj: {author: string, title: string}) => new ComparableC(obj, compareLengthTitle);

    test('comparable of number should behave as number', () => {
        const one = new ComparableC(3);
        expect(one.compareTo(new ComparableC(4))).toBe(-1);
        expect(one.compareTo(new ComparableC(2))).toBe(1);
        expect(one.compareTo(new ComparableC(3))).toBe(0);
    })

    test('comparable of string should behave according to localeCompare', () => {
        const d = new ComparableC('d');
        expect(d.compareTo(new ComparableC('e'))).toBe(-1);
        expect(d.compareTo(new ComparableC('b'))).toBe(1);
        expect(d.compareTo(new ComparableC('d'))).toBe(0);
    })

    test('comparable object should behave according to custom compare', () => {

        const mock6 = helperFactory({author: 'Tolkien', title: 'Hobbit'});
        const mock5 = helperFactory({author: 'z', title: '12345'});
        const mock8 = helperFactory({author: 'az', title: '12345678'});
        expect(mock6.compareTo(mock8)).toBe(-1);
        expect(mock6.compareTo(mock5)).toBe(1);
        expect(mock6.compareTo(mock6)).toBe(0);

        const c =[mock8, mock6, mock5]
            .sort((a, b) => a.compareTo(b))
            .map(el => el.data.title.length);
        expect(c).toStrictEqual([5, 6, 8]);
    })

})
