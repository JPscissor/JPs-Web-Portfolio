
function goToContact() {
        window.location.href = "contact.html"; // Замените URL на нужный
    }


    // Текст для анимации
const text = "Вы можете связаться со мной здесь:";

// Получаем элемент заголовка
const animatedText = document.getElementById("animated-text");

// Начальные переменные для анимации текста
let index = 0;

// Функция для эффекта печати
function typeWriter() {
    if (index < text.length) {
        // Добавляем один символ за один шаг
        animatedText.innerHTML = text.slice(0, index + 1) + "<span class='cursor'>|</span>";
        index++;
        setTimeout(typeWriter, 100); // Скорость печати (100 мс)
    } else {
        // Оставляем курсор мигающим после окончания печати
        animatedText.innerHTML = text + "<span class='cursor'>|</span>";
    }
}

// Запускаем функцию печати при загрузке страницы
window.onload = typeWriter;
