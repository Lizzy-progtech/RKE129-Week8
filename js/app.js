const images = [
    'pexels-aida-cervera-234109944-29233080.jpg',
    'pexels-goumbik-590016.jpg'
];

const targetImage = document.querySelector('.carousel img');

let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        targetImage.src = 'images/' + images[i];

        i++;

        if (i === images.length) {
            i = 0;
        }

        targetImage.style.opacity = '1';

    }, 200);

});
