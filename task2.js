/*""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch 
для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, 
если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *
// Пример использования функции
const user = {
name: 'John Smith',
age: 30,
email: 'john@example.com'
};

saveUserData(user)
.then(() => {
console.log('User data saved successfully');
})
.catch(error => {
console.log(error.message);
});

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект 
с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, 
функция отклоняет промис с сообщени */

function saveUserData(userData) {
    // Возвращаем новый промис, который выполнится асинхронно
    return new Promise((resolve, reject) => {
        // Отправляем POST-запрос с данными о пользователе на сервер для сохранения
        fetch('https://api.example.com/users', {
            method: 'POST', // Указываем метод запроса
            headers: {
                'Content-Type': 'application/json' // Указываем тип содержимого как JSON
            },
            body: JSON.stringify(userData) // форматируем объект с данными о пользователе в JSON-строку
        })
            .then(response => {
                // Проверяем успешность запроса
                if (!response.ok) {
                    // Если запрос не успешен, отклоняем промис с сообщением об ошибке
                    throw new Error('Failed to save user data');
                }
                // Если запрос успешен, разрешаем промис
                resolve();
            })
            .catch(error => {
                // Если произошла ошибка при выполнении запроса, отклоняем промис с сообщением об ошибке
                reject(error);
            });
    });
}

// Пример использования функции
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });