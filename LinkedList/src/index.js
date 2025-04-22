import LinkedList from './LinkedList.js'

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

const list2 = new LinkedList();

console.log(list.toString());

console.log(list2.toString());
