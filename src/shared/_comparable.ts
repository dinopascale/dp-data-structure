// interface for not primitives that can be added to priority queue
export interface Comparable<T> {
    compareTo: (obj: T) => number;
}

export class ComparableC<U> {

    public readonly compareTo: (el: ComparableC<U>) => number;

    constructor(public data: U, customComparable?: (data: U) => (el: ComparableC<U>) => number) {
        if (typeof data === 'string') {
            function compareString (a: string) {
                return function (b: ComparableC<string>) {
                    return a.localeCompare(b.data);
                }
            }
            this.compareTo = compareString(data).bind(data);
        } else if (typeof data === 'number') {
            const compareNum = function (a: number) {
                return function (b: ComparableC<number>) {
                    if (a < b.data) return -1
                    else if (a > b.data) return 1
                    else return 0
                }
            }
            this.compareTo = compareNum(data).bind(data);
        } else {
            this.compareTo = customComparable(data);
        }
    }
}
