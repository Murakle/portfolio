photos = [
    'img/dogPhotos/dog_1.png',
    'img/dogPhotos/dog_2.jpg',
    'img/dogPhotos/dog_3.jpg',
    'img/dogPhotos/dog_4.jpg'
];

buttons = document.querySelectorAll('.gallery-button');
bigPhoto = document.querySelector('.big-photo');

var addButtonClickListener = function (index) {
    buttons[index].addEventListener('click', function () {
        bigPhoto.src = photos[index];
    })
}

for (let i = 0; i < buttons.length; i++) {
    addButtonClickListener(i);
}
