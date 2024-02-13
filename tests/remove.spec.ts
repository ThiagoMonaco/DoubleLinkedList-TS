import DoubleLinkedList from "../src/double-linked-list";

describe('remove', () => {
    it('should remove first element', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.remove(1)
        expect(list.get(0)).toBe(2)
    })

    it('should remove last element', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.remove(3)
        expect(list.get(1)).toBe(2)
    })

    it('should remove middle element', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(3)

        list.remove(2)
        expect(list.get(1)).toBe(3)
    })

    it('should remove from list with single element', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)

        list.remove(1)

        expect(list.get(0)).toBe(null)
    })

    it('should remove from list with no elements', () => {
        const list = new DoubleLinkedList<number>()

        list.remove(1)

        expect(list.get(0)).toBe(null)
    })

    it('should remove more than one ocurrency of a value', () => {
        const list = new DoubleLinkedList<number>()
        list.append(1)
        list.append(2)
        list.append(2)
        list.append(3)

        list.remove(2)
        expect(list.get(1)).toBe(3)
    })
})