/**
 * 有向图
 * 起点-A点，权重为6
 * 起点-B点，权重为2
 * B-A，权重为3
 * B-终点，权重为5
 * A-终点，权重为1
 */

 const graph = {};
 graph.start = { a: 6, b: 2 };
 graph.a = { finish: 1 };
 graph.b = { a: 3, finish: 5 };
 graph.c = { finish: 1 };
 graph.finish = {};

 const costs = { a: 6, b: 2, c: 10000, finish: 10000 };
 const parents = { a: 'start', b: 'start', c: 'b', finish: '' };

 const processed = [];

 function getNextNode(nodeName) {
     let result = null;
    const node = graph[nodeName];
    if (node) {
        let minValue = 1100000;
        Object.keys(node).forEach(key => {
            const value = node[key];
            if (value < minValue && !processed.includes(key)) {
                minValue = value;
                result = { name: key, value };
            }
        });
    }
    return result;
 }


function getPath(nodeName) {
    const nextNode = getNextNode(nodeName);
    if (nextNode) {
        const value = costs[nodeName];
        const { name: childName, value: childValue } = nextNode;
        if (costs[childName] > value + childValue) {
            parents[childName] = name;
            costs[childName] = value + childValue;
            parents[childName] = nodeName;
        }
        processed.push(nodeName);
        getPath(childName); 
    }
}

 Object.keys(graph.start).forEach(name => {
    const childName = getNextNode('start') ? getNextNode('start').name : null;
    getPath(childName);
 });

 console.log(getPath('start'));
 console.log('parents', parents);
 console.log('processed', processed);
 console.log('costs', costs);