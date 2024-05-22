// Функция для управления скоростью аудио
function controlAudioSpeed() {
  const audio = document.querySelector("audio"); // Получаем аудио элемент
  const speedButtons = document.querySelectorAll(".speed-button"); // Получаем кнопки для выбора скорости

  // Проверяем, что элементы найдены на странице
  if (audio) {
    console.log("Аудио элемент найден:", audio);
  } else {
    console.error("Аудио элемент не найден.");
  }

  if (speedButtons.length > 0) {
    console.log("Кнопки скорости найдены:", speedButtons);
  } else {
    console.error("Кнопки скорости не найдены.");
  }

  if (audio && speedButtons.length > 0) {
    // Добавляем слушателей событий для кнопок выбора скорости
    speedButtons.forEach((button) => {
      button.addEventListener("click", () => {
        audio.playbackRate = parseFloat(button.dataset.speed); // Устанавливаем скорость воспроизведения
        console.log("Скорость изменена на:", button.dataset.speed);
      });
    });
  }
}

// Функция для вставки кнопок в HTML
function insertSpeedButtons() {
  const audioContainer = document.querySelector(".task_content__4U6P1"); // Находим контейнер, в который будем вставлять кнопки

  if (!audioContainer) {
    console.error("Контейнер для аудио не найден.");
    return;
  }

  // Создаем кнопки для выбора скорости
  const speeds = ["0.25", "0.5", "1", "1.5", "2"]; // Массив скоростей
  speeds.forEach((speed) => {
    const button = document.createElement("button"); // Создаем кнопку
    button.textContent = `${speed}x`; // Устанавливаем текст на кнопке
    button.classList.add("speed-button"); // Добавляем класс для стилизации
    button.dataset.speed = speed; // Устанавливаем скорость для кнопки
    audioContainer.appendChild(button); // Добавляем кнопку в контейнер
    console.log("Добавлена кнопка для скорости:", speed);
  });
}

// Добавляем кнопки и управление скоростью аудио при загрузке страницы
insertSpeedButtons();
controlAudioSpeed();
