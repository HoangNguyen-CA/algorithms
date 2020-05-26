let PQ = require('./PriorityQueue');
class Node {
  constructor(id, cost) {
    this.id = id;
    this.cost = cost;
  }
}

let V = 5;
let adj = []; //adjacency list
for (let i = 0; i < V; i++) {
  adj.push([]);
}

adj[0].push(new Node(1, 9));
adj[0].push(new Node(2, 6));
adj[0].push(new Node(3, 5));
adj[0].push(new Node(4, 3));

adj[2].push(new Node(1, 2));
adj[2].push(new Node(3, 4));

function dijkstra(adj, src) {
  let visited = [];
  let dist = [];

  for (let i = 0; i < adj.length; i++) {
    dist[i] = Infinity;
  }

  dist[src] = 0;

  let pq = new PQ((a, b) => a.cost < b.cost);

  pq.push(new Node(src, 0));

  while (pq.size > 0) {
    let node = pq.pop();
    let id = node.id;

    visited[id] = true;

    let neighbors = adj[id];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];

      if (visited[neighbor.id] !== true) {
        let cost = neighbor.cost;
        let newCost = dist[id] + cost;

        if (newCost < dist[neighbor.id]) {
          dist[neighbor.id] = newCost;
        }
        pq.push(new Node(neighbor.id, dist[neighbor.id]));
      }
    }
  }

  return dist;
}

let dist = dijkstra(adj, 0);

console.log(dist); //test passed
