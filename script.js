// ? mouse events

// click
// mousedown
// mouseup

// mouseover
// mouseleave

// mousemove
// mouseout

// const h1 = document.querySelector('h1');
// const text = document.querySelector('.text');
// const active = document.querySelector('.show');
// const nonactive = document.querySelector('.clear');
// const openmod = document.querySelector('.opening');
// const openmodal = document.querySelector('.openmodel');
// const close = document.querySelector('.close');

// active.addEventListener('click', function () {
// 	h1.style.display = 'block';
// });

// nonactive.addEventListener('click', function () {
// 	h1.style.display = 'none';
// });

// openmod.addEventListener('click', function () {
// 	openmodal.style.display = 'block';
// });

// close.addEventListener('click', function () {
// 	openmodal.style.display = 'none';
// });

// console.log(h1);

const btn = document.querySelector('.burger');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const last = document.querySelector('.last');
const menu = document.querySelector('.menu');

const home = document.querySelector('.home');
const categories = document.querySelector('.categories');
const aboutUs = document.querySelector('.aboutus');
const profile = document.querySelector('.profile');

let burger = false;

btn.addEventListener('click', function () {
	burger = !burger;

	first.style.transform = burger ? 'rotate(225deg)' : '';
	first.style.top = burger ? '14px' : '';
	first.style.background = burger ? 'white' : '';

	second.style.transform = burger ? 'scale(0) translateY(-50%)' : 'scale(1) translateY(-50%)';

	last.style.transform = burger ? 'rotate(-225deg)' : '';
	last.style.bottom = burger ? '14px' : '';
	last.style.background = burger ? 'white' : '';

	menu.style.transform = burger ? 'translateX(-730px)' : '';

	home.style.transform = burger ? 'scale(1)' : '';
	categories.style.transform = burger ? 'scale(1)' : '';
	aboutUs.style.transform = burger ? 'scale(1)' : '';
	profile.style.transform = burger ? 'scale(1)' : '';
});

btn.addEventListener('mouseover', () => {
	first.style.background = 'red';
	second.style.background = 'red';
	last.style.background = 'red';
});

btn.addEventListener('mouseout', () => {
	first.style.background = burger ? 'white' : 'black';
	second.style.background = burger ? 'white' : 'black';
	last.style.background = burger ? 'white' : 'black';
});
