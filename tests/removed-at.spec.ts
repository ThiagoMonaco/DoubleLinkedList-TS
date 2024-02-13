import DoubleLinkedList from "../src/double-linked-list";

describe('removed-at', () => {
    it('should remove first element of filled list', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.removeAt(0)
        expect(list.get(0)).toBe(2)
        expect(list.length).toBe(2)
    })

    it('should remove last element of filled list', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.removeAt(2)
        expect(list.get(1)).toBe(2)
        expect(list.length).toBe(2)
    })

    it('should remove middle element of filled list', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.removeAt(1)
        expect(list.get(1)).toBe(3)
        expect(list.length).toBe(2)
    })

    it('should throw error when removing from empty list', () => {
        const list = new DoubleLinkedList<number>()
        expect(() => list.removeAt(0)).toThrowError("Index out of bounds")
    })

    it('should rest only one elemet when remove in a list with 2 numbers', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)

        list.removeAt(0)
        expect(list.get(0)).toBe(2)
    })
})