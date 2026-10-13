import LinkedList from "./linked-list.js"

const list = new LinkedList()

list.append(10)
list.append(20)
list.prepend(5)

console.log(list.toString())    // 5 -> 10 -> 20

list.insertAt(15, 2)

console.log(list.toArray())     // [5,10,15,20]

list.remove(10)

console.log(list.toString())    // 5 -> 15 -> 20