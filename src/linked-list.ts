interface LinkedList<T> {
    insertAt(value: T, index: number): void
    remove(value: T): void
    removeAt(index: number): void
    append(value: T): void
    prepend(value: T): void
    get(index: number): T
}

export default LinkedList