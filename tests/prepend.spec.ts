import DoubleLinkedList from "../src/double-linked-list";

describe('prepend', () => {
    it('should insert at head', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.prepend(0)
        expect(list.get(0)).toBe(0)
    })

    it('should insert at head when empty', () => {
        const list = new DoubleLinkedList<number>()
        list.prepend(0)
        expect(list.get(0)).toBe(0)
    })
})