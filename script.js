// Obtener la imagen y los botones
const image = document.getElementById('image');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');

const xlargeBtn = document.getElementById('xsmallBtn');
const xsmallBtn = document.getElementById('xlargeBtn');

// Funciones para cambiar el tamaño de la imagen
smallBtn.addEventListener('click', () => {
    image.style.width = '150px';
    image.style.height = '150px';
});

mediumBtn.addEventListener('click', () => {
    image.style.width = '300px';
    image.style.height = '300px';
});

largeBtn.addEventListener('click', () => {
    image.style.width = '450px';
    image.style.height = '450px';
});


xlargeBtn.addEventListener('click', () => {
    image.style.width = '800px';
    image.style.height = '800px';
});

xsmallBtn.addEventListener('click', () => {
    image.style.width = '70px';
    image.style.height = '70px';
});