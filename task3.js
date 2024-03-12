/*""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время 
задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'" */

function changeStyleDelayed(elementId, delay) {
    // Запускаем таймер с задержкой delay
    setTimeout(() => {
        // Получаем элемент по его идентификатору
        const element = document.getElementById(elementId);
        // Проверяем, существует ли элемент
        if (element) {
            // Изменяем стиль элемента
            element.style.color = 'red';
            element.style.backgroundColor = 'yellow';
        }
    }, delay); // Задержка перед выполнением функции
}

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
