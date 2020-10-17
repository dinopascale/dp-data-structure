export class UnionFindError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UnionFindError';
    }
}
