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

//