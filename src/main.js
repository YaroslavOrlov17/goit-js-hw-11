const form = document.querySelector('.form');
const input = document.querySelector('.input');

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue !== '') {
    console.log(inputValue); //временный вывод значения в консоль
  } else {
    console.log('Заполните форму!');
  }

  form.reset();
}

form.addEventListener('submit', handleSubmit);
