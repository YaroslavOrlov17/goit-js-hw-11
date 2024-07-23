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

  // Запрос на сервер -----------------------

  const searchParams = new URLSearchParams({
    key: '16437496-6d56e114a2cb1088922bcb1d6',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.json())
    .then(images => console.log(images))
    .catch(error => console.log(error));

  form.reset();
}

form.addEventListener('submit', handleSubmit);
