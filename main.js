var gallery = document.querySelector('main');
var imageUrls = [
  'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_720,w_720/https%3A%2F%2Ffansided.com%2Ffiles%2F2019%2F11%2Ffinal_5cc08dbee053ca00147f7989_734354-1.jpg',
  'https://mamasgeeky.com/wp-content/uploads/2020/06/disney-meme-40.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwpTa7JU81wtDppyQSDccSdBwBebJVJwttw&usqp=CAU'
];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', clickButton);

function clickButton() {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
    imageUrlInput.value = '';
    updateGallery();
  }
}

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}
updateGallery();
