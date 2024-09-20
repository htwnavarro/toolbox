export class GraphNode<T> {
    private value: T;
    private children: GraphNode<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }

    add(value: T): GraphNode<T> {
        const node = new GraphNode(value);

        this.children.push(node);

        return node;
    }

    getChildren() {
        return this.children;
    }

    getValue(): T {
        return this.value;
    }
}
