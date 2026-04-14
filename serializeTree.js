// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }

    serialize() {
        if(!this.val) return null;
        const left = this.left ? this.left.serialize() : 'null'
        const right = this.right ? this.right.serialize() : 'null'
        return `[${this.val},${left},${right}]`
    }


    static deSerialize(nodeString) {
        if (nodeString === 'null') return null;

        // strip outer [ and ]
        const inner = nodeString.slice(1, -1);

        // split on commas at depth 0 only (nested brackets contain commas too)
        const parts = [];
        let depth = 0, current = '';
        for (const ch of inner) {
            if (ch === '[') depth++;
            if (ch === ']') depth--;
            if (ch === ',' && depth === 0) {
                parts.push(current);
                current = '';
            } else {
                current += ch;
            }
        }
        parts.push(current);

        const [val, leftStr, rightStr] = parts;
        return new Node(val, Node.deSerialize(leftStr), Node.deSerialize(rightStr));
    }


}

const node = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
)

const serialized = node.serialize()
const deserialized = Node.deSerialize(serialized)


console.log(deserialized.left.left.val)
