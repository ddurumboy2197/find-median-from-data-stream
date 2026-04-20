class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();
    }

    addNum(num) {
        if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.insert(num);
        } else {
            this.minHeap.insert(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.insert(this.maxHeap.extractMax());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.extractMin());
        }
    }

    findMedian() {
        if (this.maxHeap.size() === this.minHeap.size()) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
            return this.maxHeap.peek();
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    peek() {
        return this.heap[0];
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] > this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    peek() {
        return this.heap[0];
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}
