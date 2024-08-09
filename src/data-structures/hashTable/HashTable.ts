export class HashTable<K extends string, V> {
  private table: Array<[K, V] | null>;
  private size: number;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);
  }

  private hash(key: K): number {
    let hash = 0;
    const keyString = key.toString();
    // for each character in the key
    for (let i = 0; i < keyString.length; i++) {
      const charCode = keyString.charCodeAt(i);
      hash = (hash + charCode * i) % this.capacity;
    }
    return hash;
  }

  private probe(index: number): number {
    let i = index;
    while (this.table[i] !== null && this.table[i]![0] !== undefined) {
      i = (i + 1) % this.capacity;
    }
    return i;
  }

  public set(key: K, value: V) {
    if (this.size / this.capacity > 0.7) {
      this.resize();
    }
    let index = this.hash(key);
    index = this.probe(index);
    this.table[index] = [key, value];
    this.size++;
  }

  public get(key: K): V | undefined {
    let index = this.hash(key);
    const startIndex = index;
    while (this.table[index] !== null) {
      if (this.table[index]![0] === key) {
        return this.table[index]![1];
      }
      index = (index + 1) % this.capacity;
      if (index === startIndex) break; // Avoid infinite loop
    }
    return undefined;
  }

  private resize(): void {
    const oldTable = this.table;
    this.capacity *= 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;

    for (const item of oldTable) {
      if (item !== null && item[0] !== undefined) {
        this.set(item[0], item[1]);
      }
    }
  }
}
