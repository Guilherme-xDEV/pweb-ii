/**
 * Singly Linked List implementation (sem dependências externas)
*/

export default class LinkedList {

  static Node = class {   // Node interno da lista
    constructor(value, next = null) {
      this.value = value
      this.next = next
    }
  }

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {   // Adiciona no final
    const node = new LinkedList.Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
    return this
  }

  prepend(value) {   // Adiciona no início
    const node = new LinkedList.Node(value, this.head)

    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    this.length++
    return this
  }

  insertAt(value, index) {   // Insere em posição específica
    if (index <= 0) return this.prepend(value)
    if (index >= this.length) return this.append(value)

    const node = new LinkedList.Node(value)

    let prev = this.getNode(index - 1)

    node.next = prev.next
    prev.next = node

    this.length++
    return this
  }

  getNode(index) {   // Retorna node pelo índice
    if (index < 0 || index >= this.length) return null

    let current = this.head
    let i = 0

    while (i < index) {
      current = current.next
      i++
    }

    return current
  }

  get(index) {   // Retorna valor pelo índice
    const node = this.getNode(index)
    return node ? node.value : undefined
  }

  remove(value) {   // Remove pelo valor
    if (!this.head) return null

    if (this.head.value === value) {   // remover head
      const removed = this.head
      this.head = this.head.next
      this.length--

      if (!this.head) this.tail = null

      return removed.value
    }

    let current = this.head

    while (current.next) {
      if (current.next.value === value) {
        const removed = current.next
        current.next = current.next.next

        if (removed === this.tail) {
          this.tail = current
        }

        this.length--
        return removed.value
      }

      current = current.next
    }

    return null
  }

  removeAt(index) {   // Remove pelo índice
    if (index < 0 || index >= this.length) return null

    if (index === 0) {
      const removed = this.head
      this.head = this.head.next
      this.length--

      if (this.length === 0) this.tail = null

      return removed.value
    }

    const prev = this.getNode(index - 1)
    const removed = prev.next

    prev.next = removed.next

    if (removed === this.tail) {
      this.tail = prev
    }

    this.length--
    return removed.value
  }

  find(value) {   // Procura valor
    let current = this.head

    while (current) {
      if (current.value === value) return current
      current = current.next
    }

    return null
  }

  toArray() {   // Converte para array
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.value)
      current = current.next
    }

    return arr
  }

  toString() {   // String da lista
    return this.toArray().join(" -> ")
  }

  reverse() {   // Inverte a lista
    let prev = null
    let current = this.head

    this.tail = this.head

    while (current) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev
    return this
  }

  size() {   // Tamanho
    return this.length
  }

  // Permite usar for...of
  *[Symbol.iterator]() {
    let current = this.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}