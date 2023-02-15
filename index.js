'use strict';

for (let i = 1; i > 0; i++) {
  const list = document.querySelector('.list');
  const listString = prompt('Введите строку', '').trim();
  const listItem = document.createElement('li');
  if (listString === null || listString === 'exit') {
    break;
  }
  if (listString === '') {
    continue;
  }
  if (listString === 'del') {
    list.lastElementChild.remove()
    continue;
  }
  if (listString === 'clear') {
    list.innerHTML = '';
    break;
  }
  listItem.textContent = listString;
  list.append(listItem);
}



