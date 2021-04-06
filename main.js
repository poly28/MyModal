'use strict'

const $open = document.getElementById('open');
const $mask = document.getElementById('mask');
const $modal = document.getElementById('modal');
const $close = document.getElementById('close');

// console.log($open);

$open.addEventListener('click',()=>{
    $mask.classList.toggle('hidden');
    $modal.classList.toggle('hidden');
});

$close.addEventListener('click',()=>{
    $mask.classList.toggle('hidden');
    $modal.classList.toggle('hidden');
});

$mask.addEventListener('click',()=>{
    $mask.classList.toggle('hidden');
    $modal.classList.toggle('hidden');
});