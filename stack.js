class Node { constructor(val) {
     this.val = val; this.next = null;
     } 
    } 
    class Stack { 
        constructor()  { 
            this.first = null;
            this.last = null; 
            this.size = null; 
        } add(value) 
        { 
            let node = new Node(value);
             if (!this.first) {
                  this.first = node; 
                  this.last = node; 
                  this.size++; 
                  return this; 
                } 
                let currentFirst = this.first; 
                this.first = node 
                node.next = currentFirst 
                this.size++; return this; } pop() { if (!this.first) { return null; } let current = this.first; if (this.size === 1) { this.first = null; this.last = null; this.size--; return current.val; } this.first = current.next; this.size--; return current.val; } } const stack = new Stack();