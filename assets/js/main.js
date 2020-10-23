document.getElementById('style').href = '/assets/css/style.css?v=' + Math.random();

$(function () {
    $('.images').Lazy();
});

$(document).ready(function () {
    $('.dropdown-item ').on('click', function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

// profile
var btnEdit = document.getElementById('btn-edit');
var btnSave = document.getElementById('btn-save');
var card = document.querySelector('.form-user');

btnEdit.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});
