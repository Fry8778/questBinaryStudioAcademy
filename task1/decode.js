// Функция для обновления и логирования текущего текста
function updateAndLog() {
  const pElement = document.querySelector(".binary-shift_wrapper__ABjV5 p");
  if (pElement) {
    const currentText = pElement.innerText;
    console.log("Updated text:", currentText);
  } else {
    console.log("Element not found!");
  }
}

// Функция для последовательного применения трансформаций
function applyTransformations() {
  return new Promise((resolve) => {
    console.log("Applying handleSwapEvenAndOdd");
    handleSwapEvenAndOdd();
    setTimeout(() => {
      updateAndLog();
      resolve();
    }, 500); // Ждем 500 мс для применения
  })
    .then(() => {
      return new Promise((resolve) => {
        console.log("Applying handleShiftLeft");
        handleShiftLeft();
        setTimeout(() => {
          updateAndLog();
          resolve();
        }, 500); // Ждем 500 мс для применения
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        console.log("Applying handleReverse");
        handleReverse();
        setTimeout(() => {
          updateAndLog();
          resolve();
        }, 500); // Ждем 500 мс для применения
      });
    });
}

// Вызов функции для применения трансформаций
applyTransformations();

function binaryToText(binaryString) {
  return binaryString
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}

const finalBinaryString =
  "10111001 00101011 00111001 10110001 00101011 10100011 10111110 00111001 00111111 00100011 00101011";
const decodedText = binaryToText(finalBinaryString);

console.log("Decoded text:", decodedText);
