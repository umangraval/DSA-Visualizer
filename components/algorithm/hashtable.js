class HashTable {
  constructor() {
    this.table = Array(11).fill("-");
  }

  hash(key) {
    return key % 11;
  }

  hash2(key) {
    return key % 7;
  }

  reset() {
    this.table = Array(11).fill("-");
  }

  put(key, type) {
    let hash = this.hash(key);

    if (this.table[hash] === "-") {
      this.table[hash] = key;
      return hash;
    } else {
      switch (type) {
        case "linear":
          while (hash < 11 && this.table[hash] !== "-") {
            hash++;
          }
          if (hash < 11) {
            this.table[hash] = key;
            return hash;
          }
          break;
        case "quadratic":
          for (let i = 0; i < 11; i++) {
            hash += i * i;
            if (hash < 11 && this.table[hash] === "-") {
              this.table[hash] = key;
              return hash;
            }
          }
          break;
        case "double":
          for (let i = 0; i < 11; i++) {
            hash += i * this.hash2(key);
            if (hash < 11 && this.table[hash] === "-") {
              this.table[hash] = key;
              return hash;
            }
          }
          break;
      }
    }
    return -1;
  }

  print() {
    return this.table;
  }
}

export default HashTable;
