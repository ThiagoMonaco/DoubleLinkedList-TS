interface Node<T> {
    value: T
    next?: Node<T>
    prev?: Node<T>
}

export default Node