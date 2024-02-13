import DoubleLinkedList from "../src/double-linked-list";

describe('get', () => {
    it('should return null if is higher than index', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(1)
        list.append(2)
        list.append(3)

        expect(list.get(3)).toBeNull()
        expect(list.get(4)).toBeNull()
    })

    it('should return the correct value', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(1)
        list.append(2)
        list.append(3)

        expect(list.get(0)).toBe(1)
        expect(list.get(1)).toBe(2)
        expect(list.get(2)).toBe(3)

    })
})