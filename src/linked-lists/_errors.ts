export class LinkedListErrors extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'LinkedListError'
    }
}
