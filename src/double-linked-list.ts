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
        if(index > this.length) {
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
    }

    prepend(value: T): void {
    }

    remove(value: T): void {
    }

    removeAt(index: number): void {
    }

}

export default DoubleLinkedList