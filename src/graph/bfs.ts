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
import {ROOT, init as initGraph} from "./GraphABC";

const bfs = (searchFor: string | undefined) => {
    initGraph();

    if (searchFor) {
        console.log(`BFS for node: ${searchFor}\n`)
    } else {
        console.log('Traverse graph Breadth-First:\n')
    }
    const q = new Queue<GraphNode<string>>([ROOT])
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
