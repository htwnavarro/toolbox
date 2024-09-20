/**
 *                    A
 *               _ _ _ _ _ _
 *             |            |
 *             B            C
 *           _ _ _         _ _ _
 *         |       |     |      |
 *         D       E     F      G
 */
import {GraphNode} from "./GraphNode";
import {Queue} from "../queue/Queue";

console.log('Constructing graph:\n')
console.log(`
 *                A
 *          _ _ _   _ _ _
 *        |               |
 *        B               C
 *      _ _ _           _ _ _
 *    |       |       |       |
 *    D       E       F       G
`)

const ROOT_NODE = 'A';
// root node
const root = new GraphNode(ROOT_NODE);

// tier 1
const B = root.add('B')
const C = root.add('C')

// tier 2
const D = B.add('D')
const E = B.add('E')
const F = C.add('F')
const G = C.add('G')

const bfs = (searchFor: string | undefined) => {
    if (searchFor) {
        console.log(`BFS for node: ${searchFor}\n`)
    } else {
        console.log('Traverse graph Bread-First:\n')
    }
    const q = new Queue<GraphNode<string>>([root])
    const vq = new Queue<GraphNode<string>>()

    let foundNode: GraphNode<string> | null = null;
    while (q.peek()) {
        const node = (q.peek() as GraphNode<string>);

        console.log({node: node?.getValue()})

        const visited = q.dequeue();
        vq.enqueue(visited);

        const hasNodeBeenFound = node?.getValue().toUpperCase() === searchFor?.toUpperCase();
        if (hasNodeBeenFound) {
            foundNode = node;
            break;
        }

        q.enqueue(visited.getChildren());
    }

    if (searchFor) {
        console.log('___\nGraph has', searchFor, ':', foundNode?.getValue() ? 1 : -1);
    }
}

bfs(process.argv[2]);
