import DoubleLinkedList from "../src/double-linked-list";

describe('append', () => {
    it('should append a node to the list', () => {
        const list = new DoubleLinkedList<Number>()
        list.append(1)
        expect(list.get(0)).toBe(1)
    })

    it('should append multiples nodes to the list', () => {
        const list = new DoubleLinkedList<Number>()

        list.append(1)
        list.append(2)
        list.append(3)

        expect(list.get(0)).toBe(1)
        expect(list.get(1)).toBe(2)
        expect(list.get(2)).toBe(3)
    })
})