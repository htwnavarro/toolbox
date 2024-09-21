import {GraphNode} from "./GraphNode";

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
export const ROOT = new GraphNode(ROOT_NODE);

export const init = () => {
    // tier 1
    const B = ROOT.add('B')
    const C = ROOT.add('C')

    // tier 2
    const D = B.add('D')
    const E = B.add('E')
    const F = C.add('F')
    const G = C.add('G')

    return {
        ROOT_NODE,
        B,
        C,
        D,
        E,
        F,
        G
    }
}