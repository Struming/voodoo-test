// Отримуємо посилання на елементи
var buttonModalInfo = document.querySelector('.button-modal-info');
var buttonVector = buttonModalInfo.querySelector('.button-vector');
var modal = document.querySelector('.modal');

// Додаємо обробник події для кнопки зображення
buttonVector.addEventListener('click', function() {
  modal.classList.toggle('expanded');
});
