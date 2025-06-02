var mergeTwoLists = function (list1, list2) {
  // Função auxiliar para converter lista ligada em array
  const listToArray = (node) => {
    const arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }

  const arr1 = listToArray(list1);
  const arr2 = listToArray(list2);
  
  // Agora que temos dois arrays, podemos concatenar e ordenar
  const newList = arr1.concat(arr2).sort((a, b) => a - b);
  
  // Agora, convertemos de volta para lista ligada
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of newList) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};
