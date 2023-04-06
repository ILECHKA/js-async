const input = document.querySelector('.input');

export default function getData () {
  if(input.value){
    const willBe = document.getElementById('WillBe');
    willBe.classList.add('hidden');
    return input.value;
  }
  return `<>`;
}
