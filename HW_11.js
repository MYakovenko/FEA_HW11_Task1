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

function getPictures (url) {
    return new Promise(
        function (resolve) {
            const request = new XMLHttpRequest
            request.open("GET", url)

            request.onreadystatechange = function (event) {
                event.target.readyState === 4 ? 
                    event.target.status === 200 ? 
                    resolve ( event.target.responseText ) : 
                        reject ( event.target.statusText ) : null
            }
            request.send()
        }
    )
}

getPictures("cities.json").then(
    responce => JSON.parse(responce).forEach(
        picture => {
            var div = document.body.appendChild(document.createElement("div"))
            div.appendChild(document.createElement("img")).src = picture.ref
            div.appendChild(document.createElement("span")).innerText = picture.title
        }
    )
)

var style = document.head.appendChild(document.createElement('style'))
style.innerText = `
    div {
        margin-bottom: 30px;
    }
    img {
        height: 200px;
        padding: 10px;
        border: solid 2px #008080;
    }

    span {
        display: block;
        color: #008080;
    }
`