export default class PriorityQueue<T> {
  
	private queue: { element: T; priority: number }[];

  constructor() {
    this.queue = [];
  }

  enqueue(element: T, priority: number) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift()?.element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
