// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector(".loader")

function handleSubmit(event) {
  event.preventDefault();
  galleryList.innerHTML = '';
  loader.classList.remove("visually-hidden")
  const inputValue = input.value.trim();
  if (inputValue !== '') {
  } else {
    loader.classList.add("visually-hidden")
    return
  }

  // Параметры поиска -----------------------

  const searchParams = new URLSearchParams({
    key: '16437496-6d56e114a2cb1088922bcb1d6',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  // -------Запрос на сервер ------------

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.json())
    .then(images => {
      if (images.hits.length === 0) {
        loader.classList.add("visually-hidden")
        iziToast.error({
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'red',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        // -------Создание разметки ------------
        const murkup = images.hits
          .map(
            image =>
              `<li><a class="gallery-link" href=${image.largeImageURL}><img src="${image.webformatURL}" alt="${image.tags}">
            
            <div>
            <p><span>Likes</span>${image.likes}</p>
            <p><span>Views</span>${image.views}</p>
            <p><span>Comments</span>${image.comments}</p>
            <p><span>Downloads</span>${image.downloads}</p>
            </div>
</a>
            </li>`
          )
          .join('');

        // ------- Рендер разметки на странице ------------
        loader.classList.add("visually-hidden")

        galleryList.insertAdjacentHTML('beforeend', murkup);

        let gallerySL = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        gallerySL.refresh();
        gallerySL.on('show.simplelightbox', function () { });

      }
    })
    .catch(error => console.log(error));

  form.reset();
}

form.addEventListener('submit', handleSubmit);
