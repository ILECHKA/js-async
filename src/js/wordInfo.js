export default function wordInfo(data){
  const audio = () =>{
    if(data.phonetics[0]){
      return data.phonetics[0].audio;
    }
    return ""
  } 
  const defenitions = document.createElement('div');
  const meanings = data.meanings;

  const defenition = () => {
    for(let i = 0; i < meanings.length; i++){
      const p = document.createElement('p');
      p.classList.add('word-defenitions');
      p.innerText = [i + 1 ] + ')' + ' Part Of Speech: ' + data.meanings[i].partOfSpeech + ', Defenition: ' + data.meanings[i].definitions[0].definition ;
      defenitions.append(p);
    }
    return defenitions;
  }

  const main = document.getElementById('main');
  const wordInfoContainer = document.createElement('div');
  wordInfoContainer.classList.add('container');
  wordInfoContainer.classList.add('word-container');
  wordInfoContainer.innerHTML = `
    <h1 class="h1">${data.word}</h1>
    <audio controls>
      <source src="${audio()}" type="audio/ogg">
    </audio>
  `
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Meanings';
  wordInfoContainer.append(h1);
  wordInfoContainer.append(defenition());
  main.append(wordInfoContainer);
  return main;
}

