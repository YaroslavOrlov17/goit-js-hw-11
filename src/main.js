const form = document.querySelector('.form');
const input = document.querySelector('.input');
const galleryList = document.querySelector('.gallery');

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue !== '') {
    console.log(inputValue); //временный вывод значения в консоль
  } else {
    console.log('Заполните форму!');
  }

  // Параметры поиска -----------------------

  const searchParams = new URLSearchParams({
    key: '16437496-6d56e114a2cb1088922bcb1d6',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // -------Запрос на сервер ------------

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.json())
    .then(images => {
      if (images.hits.length === 0) {
        console.log(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        console.log(images.hits);
        const murkup = images.hits
          .map(
            image =>
              `<li><img src="${image.webformatURL}" alt="${image.tags}"></li>`
          )
          .join('');

        console.log(murkup);

        galleryList.insertAdjacentHTML('beforeend', murkup);
      }
    })
    .catch(error => console.log(error));

  // -------Запрос на сервер ------------

  form.reset();
}

form.addEventListener('submit', handleSubmit);
