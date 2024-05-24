// Находим элемент <svg> по его атрибуту viewBox
var svgElement = document.querySelector('svg[viewBox="656 380 32 32"]');

// Проверка, найден ли элемент
if (svgElement) {
  // Установка нового значение для атрибута viewBox
  svgElement.setAttribute("viewBox", "новое значение");
} else {
  console.error(
    "Элемент <svg> не найден или атрибут viewBox не соответствует ожидаемому значению."
  );
}
