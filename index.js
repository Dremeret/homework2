
const slider = document.querySelector('.slider');
const image = document.querySelector('.slider__image');
const input = document.querySelector('.slider__input');

input.addEventListener('input', _.debounce(() => {
const newWidth = input.value + "%"

image.style.width = newWidth;
}, 100))

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => { //entries are things that have changed
entries.forEach(entry => {
entry.target.classList.toggle('show', entry.isIntersecting);
})
console.log(entries);
}, {
threshold: 1
})
