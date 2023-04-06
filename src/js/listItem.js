import wordInfo from "./wordInfo";
const input = document.querySelector('.input');
export default function CreateListItem(data){
  const List = document.querySelector('.list');
  const ListItem = document.createElement('li');
  ListItem.classList.add('list__item');


  ListItem.addEventListener('click', () => {
    const wordInfoContainer = document.querySelector('.word-container');
    if(wordInfoContainer != null){
      wordInfoContainer.remove();
    }
    wordInfo(data)
    input.value = '';
  }
  );


  ListItem.innerHTML=`<h1 class="h1">${data.word}</h1>`;
  List.append(ListItem);
}

