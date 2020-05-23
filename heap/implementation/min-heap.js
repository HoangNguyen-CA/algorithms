class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
    this._FRONT = 1;
  }

  _parent(pos) {
    return Math.floor(pos / 2);
  }

  _leftchild(pos) {
    return pos * 2;
  }

  _rightchild(pos) {
    return pos * 2 + 1;
  }

  _swap(pos1, pos2) {
    let temp = this.heap[pos1];
    this.heap[pos1] = this.heap[pos2];
    this.heap[pos2] = temp;
  }

  insert(data) {
    this.size++;
    this.heap[this.size] = data;
    let curr = this.size;

    //bubble to top
    while (this.heap[curr] < this.heap[this._parent(curr)]) {
      this._swap(curr, this._parent(curr));
      curr = this._parent(curr);
    }
  }

  _isLeaf(pos) {
    if (this._leftchild(pos) > this.size) {
      return true;
    }
    return false;
  }

  _minHeapify(pos) {
    if (!this._isLeaf(pos)) {
      if (
        this.heap[pos] > this.heap[this._leftchild(pos)] ||
        this.heap[pos] > this.heap[this._rightchild(pos)]
      ) {
        if (
          this.heap[this._leftchild(pos)] < this.heap[this._rightchild(pos)] ||
          this._rightchild(pos) > this.size
        ) {
          this._swap(pos, this._leftchild(pos));
          this._minHeapify(this._leftchild(pos));
        } else {
          this._swap(pos, this._rightchild(pos));
          this._minHeapify(this._rightchild(pos));
        }
      }
    }
  }

  remove() {
    let root = this.heap[this._FRONT];
    this.heap[this._FRONT] = this.heap[this.size];
    this._minHeapify(this._FRONT);
    this.size--;
    return root;
  }

  print() {
    for (let i = 0; i <= this.size; i++) {
      console.log(
        ' PARENT : ' +
          this.heap[i] +
          ' LEFT CHILD : ' +
          this.heap[this._leftchild(i)] +
          ' RIGHT CHILD :' +
          this.heap[this._rightchild(i)]
      );
    }
  }
}

let minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(17);
minHeap.insert(10);
minHeap.insert(84);
minHeap.insert(19);
minHeap.insert(6);
minHeap.insert(22);
minHeap.insert(9);
while (minHeap.size != 0) {
  console.log(minHeap.remove());
}
