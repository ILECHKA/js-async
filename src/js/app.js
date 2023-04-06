import CreateListItem from "./listItem";
import getData from "./GetDataApi";
import { debounce } from "./dbounce";
const input = document.querySelector('.input');
const form = document.querySelector('.form');

const returnedFunction = debounce(function() {
  getWord()
  ClearList()
}, 500);
input.addEventListener("input", returnedFunction)

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function ClearList(){
  const List = document.querySelector('.list');
  List.innerHTML='';
}

async function getWord() {
  try{
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getData()}`);
    const json = await data.json();
    CreateListItem(json[0]);
  }catch(error){
    const Nothing = document.getElementById('Nothing');
    if(input.value){
       Nothing.classList.remove('hidden');
    setTimeout(() => {
       Nothing.classList.add('hidden');
    }, 1000);
  }
}
};




