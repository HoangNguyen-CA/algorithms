let PriorityQueue = require('./PriorityQueue.js');

let queue = new PriorityQueue((a, b) => {
  return a < b;
});
queue.push(5);
queue.push(100);

queue.push(3);
queue.push(10);
queue.push(10);
queue.push(10);
queue.push(10);

queue.print();

while (queue.size > 0) {
  console.log(queue.pop());
}

console.log('DONE!');
