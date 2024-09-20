import {Queue} from "../queue/Queue";

export class Stack<T> extends Object {
    stack: T[] = []

    constructor(s?: T[]) {
        super(s);

        if (s) {
            this.stack = s;
        } else {
            this.stack = [];
        }
    }

    override valueOf(): T[] {
        return this.stack;
    }

    isEmpty(): boolean {
        return this.stack.length === 0
    }

    peek(): T | undefined {
        return this.stack[0];
    }

    pop(): T | undefined {
        return this.stack.shift();
    }

    push(item: T): void {
        this.stack = [item, ...this.stack];
    }

    search(item: T): number {
        return this.stack.indexOf(item);
    }

    set(s: T[]): void {
        this.stack = s;
    }

    static fromQueue<T>(queue: Queue<T>): Stack<T> {
        return new Stack(queue.valueOf().reverse());
    }
}

export const example = () => {
    console.log('Ex: Stack\n');
    let s = new Stack<string>();

    s.push('hello world 1');
    s.push('hello world 2');
    s.push('hello world 3');

    while(s.peek()) {
        console.log(s.pop());
    }

    console.log('\nStack from queue:\n')

    s = Stack.fromQueue(new Queue([
        'hello world 1',
        'hello world 2',
        'hello world 3'
    ]));

    while(s.peek()) {
        console.log(s.pop());
    }
};