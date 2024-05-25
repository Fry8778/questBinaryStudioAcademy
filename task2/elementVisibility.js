// Получаем элемент по ID
var parentElement = document.getElementById('goog-gt-tt');

// Проверяем, что элемент существует
if (parentElement) {
    // Получаем все дочерние элементы внутри указанного блока
    var childElements = parentElement.getElementsByTagName('*');
    
    // Проходим по всем дочерним элементам
    for (var i = 0; i < childElements.length; i++) {
        var element = childElements[i];
        // Устанавливаем стиль display в block
        element.style.display = 'block';
    }
    
    // Устанавливаем стиль display в block для самого родительского элемента
    parentElement.style.display = 'block';
}
