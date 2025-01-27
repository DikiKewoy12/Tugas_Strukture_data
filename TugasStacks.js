class Stack {
    constructor() {
      this.items = [];
    }
  
    // Menambahkan elemen ke stack
    push(element) {
      this.items.push(element);
    }
  
    // Menghapus elemen dari stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Melihat elemen teratas stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // checking apakah stack kosong
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Menampilkan isinya stack
    printStack() {
      return this.items.join(" ");
    }
  }
  
  // Contoh penggunaan Stack
  const stack = new Stack();
  stack.push(218);
  stack.push(345);
  stack.push(400);
  console.log("Stack: ", stack.printStack());
  console.log("Popped: ", stack.pop()); 
  console.log("Top: ", stack.peek());