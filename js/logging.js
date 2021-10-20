'use strict';

const linkedList = new LinkedList(
  'item1',
  'item2',
  'item3',
  'item4',
  'item5',
  'item6'
);

console.log('linked list:', linkedList);
console.log('spread:', ...linkedList);
linkedList.push('pushItem1');
linkedList.push('pushItem2');
console.log('linked list after push:', linkedList);
console.log('spread:', ...linkedList);
console.log('poped item:', linkedList.pop());
console.log('linked list after pop:', linkedList);
console.log('spread:', ...linkedList);
