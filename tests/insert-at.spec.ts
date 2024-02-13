import DoubleLinkedList from "../src/double-linked-list";

describe('insertAt', () => {
    it('should insert at first position when empty', () => {
        const list = new DoubleLinkedList<Number>()
        list.insertAt(1, 0)
        expect(list.get(0)).toBe(1)
    })

    it('should insert at first position', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(2)
        list.append(3)
        list.insertAt(1, 0)
        expect(list.get(0)).toBe(1)
    })

    it('should insert at last position', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(2)
        list.append(3)
        list.insertAt(1, 1)
        expect(list.get(2)).toBe(1)
    })

    it('should insert in middle position', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 1)
        expect(list.get(1)).toBe(4)
    });


    it('should insert in middle position closer to tail', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(1)
        list.append(2)
        list.append(3)
        list.append(4)
        list.append(5)
        list.insertAt(6, 3)
        expect(list.get(3)).toBe(6)
    });

    it('should throw error when inserting out of bounds', () => {
        const list = new DoubleLinkedList<Number>()
        expect(() => list.insertAt(1, 10)).toThrowError("Index out of bounds")
    });
})