class MaxHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
    this._FRONT = 1;
  }
  _leftChild(i) {
    return i * 2;
  }

  _rightChild(i) {
    return i * 2 + 1;
  }
  _parent(i) {
    return Math.floor(i / 2);
  }

  _swap(i1, i2) {
    let temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  _isLeaf(pos) {
    if (this._leftChild(pos) > this.size) {
      return true;
    }
    return false;
  }

  insert(data) {
    this.size++;
    this.heap[this.size] = data;
    let curr = this.size;

    //bubble up
    while (this.heap[curr] > this.heap[this._parent(curr)]) {
      this._swap(curr, this._parent(curr));
      curr = this._parent(curr);
    }
  }

  _maxHeapify(pos) {
    if (!this._isLeaf(pos)) {
      if (
        this.heap[pos] < this.heap[this._leftChild(pos)] ||
        this.heap[pos] < this.heap[this._rightChild(pos)]
      ) {
        if (
          this._rightChild(pos) > this.size ||
          this.heap[this._leftChild(pos)] > this.heap[this._rightChild(pos)]
        ) {
          this._swap(pos, this._leftChild(pos));
          this._maxHeapify(this._leftChild(pos));
        } else {
          this._swap(pos, this._rightChild(pos));
          this._maxHeapify(this._rightChild(pos));
        }
      }
    }
  }
  //construct minheap
  maxHeap() {
    for (let i = Math.floor(this.size / 2); i >= this._FRONT; i--) {
      this._maxHeapify(i);
    }
  }

  remove() {
    let pop = this.heap[this._FRONT];
    this._swap(this.size, this._FRONT);
    this.size--;
    this._maxHeapify(this._FRONT);
    return pop;
  }
}

let maxHeap = new MaxHeap();
let arr = [1, 6, 3, 8, 1, 66, 22, 55, 1199, 733];
maxHeap.heap = arr;
maxHeap.size = arr.length - 1;
maxHeap.maxHeap();

while (maxHeap.size != 0) {
  console.log(maxHeap.remove());
}
