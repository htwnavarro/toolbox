import {ROOT, init as initGraph} from './GraphABC';
import {Stack} from "../stack/Stack";
import {GraphNode} from "./GraphNode";
export const dfs = (searchFor: string | undefined) => {
    initGraph();

    console.log(`DFS for node: ${searchFor}\n`);

    const s = new Stack<GraphNode<string>>();
    let isSearchForFound = false;

    const visitNode = (node: GraphNode<string>) => {
        const isCurrentNodeValueSearchTarget = !!searchFor && node.getValue().toUpperCase() === searchFor?.toUpperCase()
        // set the encompassing trigger to bail out of the recursion
        if (isCurrentNodeValueSearchTarget) {
            node.visit();
            s.push(node);
            isSearchForFound = true;
        }

        // this or another node was the target, exit.
        if (isSearchForFound) {
            return;
        }

        node.visit();
        s.push(node);

        for (const child of node.getChildren()) {
            visitNode(child);
        }
    }

    visitNode(ROOT);


    while (!s.isEmpty()) {
        console.log({ node: s.pop().getValue() })
    }

    if (searchFor) {
        console.log('___\nGraph has', searchFor, ':', isSearchForFound ? 1 : -1);
    }
}

dfs(process.argv[2]);