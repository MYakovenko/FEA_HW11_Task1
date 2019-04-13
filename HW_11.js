/*Task1
Предварительная подготовка:
Создать файл с данными в формате JSON

Это должен быть массив объектов с двумя свойствами: title и ref

title - название картинки
ref - ссылка на картинку
Задание:
Загрузить данные из JSON-файла
Распарсить данные в массив
Вывести на страницу картинки и подписи к ним*/

const promise = new Promise(
    function (resolve) {
        const request = new XMLHttpRequest
        request.open("GET", "cities.json")

        request.onreadystatechange = function (event) {
            event.target.readyState === 4 && event.target.status === 200 ? 
                resolve(event.target.responceText) : null
        }
        request.send()
    }
)

var x = promise.then(
    responce => JSON.parse(responce)
)

console.log(x)