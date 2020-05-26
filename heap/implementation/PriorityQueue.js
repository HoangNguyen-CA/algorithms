class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._FRONT = 1;
    this._heap = [];
    this.size = 0;
    this._comparator = comparator;
  }

  _left(i) {
    return i * 2;
  }

  _right(i) {
    return i * 2 + 1;
  }
  _parent(i) {
    return Math.floor(i / 2);
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _swap(i, j) {
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  push(el) {
    this.size++;
    this._heap[this.size] = el;
    this._siftUp();
  }

  _siftUp() {
    let curr = this.size;

    while (curr > this._FRONT && this._compare(curr, this._parent(curr))) {
      this._swap(curr, this._parent(curr));
      curr = this._parent(curr);
    }
  }

  pop() {
    let poppedValue = this._heap[this._FRONT];
    if (this.size > this._FRONT) {
      this._swap(this._FRONT, this.size);
    }

    this._heap.pop();
    this.size--;
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let curr = this._FRONT;
    while (
      (this._left(curr) <= this.size &&
        this._compare(this._left(curr), curr)) ||
      (this._right(curr) <= this.size && this._compare(this._right(curr), curr))
    ) {
      if (
        this._right(curr) <= this.size &&
        this._compare(this._right(curr), curr)
      ) {
        this._swap(curr, this._right(curr));
        curr = this._right(curr);
      } else {
        this._swap(curr, this._left(curr));
        curr = this._left(curr);
      }
    }
  }
}

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

while (queue.size > 0) {
  console.log(queue.pop());
}

console.log('DONE!');
