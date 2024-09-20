import {Stack} from "../stack/Stack";

export class Queue<T extends unknown> {
    queue: T[] = [];

    constructor(q?: T[]) {
        if (q) {
            this.queue = q;
        } else {
            this.queue = [];
        }
    }

    valueOf(): T[] {
        return this.queue;
    }

    enqueue(item: T | T[]): void {
        if (Array.isArray(item)) {
            this.queue.push(...item);
        } else {
            this.queue.push(item);
        }
    }

    dequeue(): T {
        const item = this.queue.shift();

        if (!item) throw new Error('Out of bounds');

        return item;
    }

    peek(): T | undefined {
        return this.queue[0];
    }

    static fromStack<T>(stack: Stack<T>): Queue<T> {
        return new Queue(stack.valueOf().reverse());
    }
}

export const example = () => {
    console.log('Ex: Queue\n');
    let q = new Queue<string>();

    q.enqueue('hello world 1');
    q.enqueue('hello world 2');
    q.enqueue('hello world 3');

    while (q.peek()) {
        console.log(q.dequeue())
    }

    console.log('\nQueue from stack:\n');
    q = Queue.fromStack(new Stack(['hello world 3', 'hello world 2', 'hello world 1']));

    while (q.peek()) {
        console.log(q.dequeue())
    }
};
