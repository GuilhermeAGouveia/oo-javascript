class Counter {
  constructor(value, p) {
    this.value = value;
    this.p = p;
  }

  increment() {
    this.value += 1;
    this.p.textContent = this.value;
  }

  decrement() {
    this.value -= 1;
    this.p.textContent = this.value;
  }

  setValue(n) {
    this.value = n;
    this.p.textContent = n;
  }
}

export default Counter;