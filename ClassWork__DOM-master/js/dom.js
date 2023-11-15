// Метод document.createElement

// const header = document.createElement("h1");        // создаем заголовок <h1>
// console.log(header);  // <h1></h1>

// const  headerText = document.createTextNode("Hello World"); // создаем текстовый узел
// console.log( headerText);  // "Hello World"

//Используем метод appendChild():

// const header = document.createElement("h1");        // создаем заголовок <h1>
// const headerText = document.createTextNode("Hello World1"); // создаем текстовый узел
// header.appendChild(headerText); // добавляем в элемент h1 текстовый узел
// console.log(header);  // <h1>Hello World</h1>

// Метод insertBefore

    // const first = document.createElement("li"); // создаем <li>
    // first.textContent = "Page Header"; // определяем текст элемента
    // // получаем первый параграф
    // const firstLi = document.body.firstElementChild;
    // // добавляем элемент li перед параграфом firstLi
    // document.body.insertBefore(first, firstLi); 

 //Метод копирования cloneNode():   

//  const article = document.getElementById("article");
//  // получаем последний li
//  const last = article.lastElementChild;
//  // клонируем элемент last
//  const newLastLi = last.cloneNode(true);
//  //міняємо текст
//  newLastLi.textContent = "Publication Date: 28/10/2023";
//  // добавляем в конец элемента article
//  article.appendChild(newLastLi);

//Замена елемента replaceChild
// const article = document.getElementById("article");
// // находим узел, который будем заменять
// // пусть это будет первый элемент
// const oldNode = article.firstElementChild;
// // создаем новый элемент
// const newNode = document.createElement("h2");
// // определяем для него текст
// newNode.textContent = "Hello World";
// // заменяем старый узел новым
// article.replaceChild(newNode, oldNode);
// console.log(oldNode)

//удаление елемента removeChild
// const article = document.getElementById("article");
// // находим узел, который будем удалять - последний параграф
// const lastLi = article.lastElementChild;
// // удаляем узел
// article.removeChild(lastLi)
// console.log(article)

//видалення всих елементів
// const article = document.getElementById("article");
// while(article.firstChild){
//     article.removeChild(article.firstChild);
// }
// console.log(article)

//Отримання атрибута

// получаем элемент
// const element = document.getElementById("home");
// получаем атрибуты элемента
// console.log(element.getAttribute("id")); або console.log(element.id);    // home
// console.log(element.getAttribute("class")); або console.log(element.className); // link
// console.log(element.getAttribute("href")); або console.log(element.href);  // index.html

// устанавливаем атрибут href
// element.setAttribute("href", "https://metanit.com");
// устанавливаем атрибут style
// element.setAttribute("style", "color:navy;");

//видалення атрибута
// const element = document.getElementById("home");
// // удаляем атрибут style
// element.removeAttribute("style")

//зміна стилів

const header = document.getElementById("header");
    // получаем значение свойства color
    console.log(header.style.color);    // пустая строка
    // изменяем значение свойства color
    header.style.color = "navy";
    // повторно получаем значение свойства color
    // console.log(header.style.color);    // navy