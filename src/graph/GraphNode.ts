export class GraphNode<T> {
    private value: T;
    private root: GraphNode<T> | null = null;
    private children: GraphNode<T>[] = [];
    private visited = false

    constructor(value: T, root: GraphNode<T> | null = null) {
        this.value = value;
        this.root = root;
    }

    add(value: T): GraphNode<T> {
        const node = new GraphNode(value, this);

        this.children.push(node);

        return node;
    }

    getChildren() {
        return this.children;
    }

    getValue(): T {
        return this.value;
    }

    visit() {
        this.visited = true;
    }

    isVisited() {
        return this.visited;
    }
}
