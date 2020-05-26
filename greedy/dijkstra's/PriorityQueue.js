//implements binary heap -> fibonacci heap will have better runtime but is more complex
class PriorityQueue {
  _FRONT = 1;

  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
    this.size = 0;
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

  _swap(i, j) {
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _siftUp() {
    // sift up last element in heap
    let curr = this.size;
    while (curr > this._FRONT && this._compare(curr, this._parent(curr))) {
      this._swap(curr, this._parent(curr));
      curr = this._parent(curr);
    }
  }

  _siftDown() {
    let curr = this._FRONT;

    while (
      (this._left(curr) <= this.size &&
        this._compare(this._left(curr), curr)) ||
      (this._right(curr) <= this.size && this._compare(this._right(curr), curr))
    ) {
      let bestChild;
      if (
        this._right(curr) <= this.size &&
        this._compare(this._right(curr), this._left(curr))
      ) {
        bestChild = this._right(curr);
      } else {
        bestChild = this._left(curr);
      }
      this._swap(curr, bestChild);
      curr = bestChild;
    }
  }

  push(el) {
    this.size++;
    this._heap[this.size] = el;
    this._siftUp();
  }

  pop() {
    let poppedValue = this._heap[this._FRONT];
    if (this.size > this._FRONT) {
      this._swap(this.size, this._FRONT);
    }

    this._heap.pop(); //remove last element
    this.size--;

    this._siftDown();
    return poppedValue;
  }

  print() {
    for (let i = 1; i <= this.size; i++) {
      console.log(
        ' PARENT : ' +
          this._heap[i] +
          ' LEFT CHILD : ' +
          this._heap[this._left(i)] +
          ' RIGHT CHILD :' +
          this._heap[this._right(i)]
      );
    }
  }
}

module.exports = PriorityQueue;
