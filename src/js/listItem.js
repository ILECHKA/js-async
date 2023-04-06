export default function CreateListItem(data){
  const List = document.querySelector('.list');
  const ListItem = document.createElement('li');
  ListItem.classList.add('list__item');
  ListItem.innerHTML=`<h1 class="h1">${data.word}</h1>`;
  List.append(ListItem);
}

