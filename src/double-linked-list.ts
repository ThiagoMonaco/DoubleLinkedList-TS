import LinkedList from "./linked-list";
import Node from "./node";

class DoubleLinkedList<T> implements LinkedList<T> {
    public length: number
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
    }

    append(value: T): void {
        const newNode: Node<T> = {
            value,
        }

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return
    }

    get(index: number): T {
        if(index >= this.length) {
            return null
        }

        if(index > Math.ceil(this.length/2)) {
            let current = this.tail
            for(let i = this.length; i > index; i--) {
                current = current.prev
            }
            return current.value
        }

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current.value
    }

    insertAt(value: T, index: number): void {
        if(index >= this.length) {
            if(this.length === 0 && index === 0) {
                this.append(value)
                this.length++
                return
            }
            throw new Error("Index out of bounds")
        }

        if(index === 0) {
            this.head = {
                value,
                next: this.head
            }
            this.length++
            return
        }

        if (index === this.length - 1) {
            this.tail = {
                value,
                prev: this.tail
            }

            this.tail.prev.next = this.tail

            this.length++
            return
        }

        if(index > Math.ceil(this.length/2)) {
            let current = this.tail
            for(let i = this.length; i >= index; i--) {
                if(i === index) {
                  const oldNode:Node<T> = {
                      value: current.value,
                      next: current.next,
                      prev: current
                  }

                  current.value = value
                  current.next = oldNode
                  this.length++
                }
            }
            return
        }

        let current = this.head

        for (let i = 0; i <= index; i++) {
            if(i === index) {
                const oldNode:Node<T> = {
                    value: current.value,
                    next: current.next,
                    prev: current
                }

                current.value = value
                current.next = oldNode
                this.length++
            }
            current = current.next
        }
    }

    prepend(value: T): void {
        const newNode: Node<T> = {
            value,
        }

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return
        }
        this.head = {
            value,
            next: this.head
        }
        this.length++
        return
    }

    remove(value: T): void {
        let current = this.head

        while (current) {
            if(current.value === value) {
                if(!!current.prev) {
                    current.prev.next = current.next
                } else {
                    this.head = current.next
                }

                if(!!current.next) {
                    current.next.prev = current.prev
                } else {
                    this.tail = current.prev
                }

                this.length--
            }
            current = current.next
        }
    }

    removeAt(index: number): void {
        if(index >= this.length) {
            if(this.length === 1) {
                this.head = null
                this.tail = null
                this.length--
                return
            }
            throw new Error("Index out of bounds")
        }

        if(index === 0) {
            this.head = this.head.next
            this.head.prev = null
            this.length--
            return
        }

        if (index === this.length - 1) {
            this.tail = this.tail.prev
            this.tail.next = null

            this.length--
            return
        }

        if(index > Math.ceil(this.length/2)) {
            let current = this.tail
            for(let i = this.length; i >= index; i--) {
                if(i === index) {
                    current.prev.next = current.next
                    current.next.prev = current.prev
                    current = null
                    this.length--
                    return
                }
                current = current.prev
            }
        }

        let current = this.head

        for (let i = 0; i <= index; i++) {
            if(i === index) {
                current.prev.next = current.next
                current.next.prev = current.prev
                current = null
                this.length--
                return
            }
            current = current.next
        }
    }

}

export default DoubleLinkedList