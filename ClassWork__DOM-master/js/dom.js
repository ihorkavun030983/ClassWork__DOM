// Метод document.createElement

// let element = document.createElement ("тег");//Создание элемента

// div.id = "my-div"; или // div.className = "someClass"; //додавання класів або ID

// div.innerHTML = "Some text with <b>bold text</b>"; //додавання тексту
// или
// let text = document.createTextNode("Some text");
// div.appendChild(text);

// родительский_элемент.appendChild(дочерний_элемент);//додавання дочірнього елемента в батьківський

let div = document.createElement('div');
// div.append("Hello World");
let h1 = document.createElement('h1');
// div.innerHTML = "Classwork JS"
div.appendChild(h1)

// let p = document.createElement('p');
// div.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt voluptatem placeat ex odio officiis quidem necessitatibus unde molestiae consequatur distinctio et dolore sequi delectus assumenda facere, quia harum excepturi pariatur. Dicta labore asperiores a quam corporis obcaecati vel blanditiis cum, iste quod quae aliquam odio distinctio dolorem mollitia, atque nihil optio fuga debitis pariatur suscipit deserunt. Ullam error quod neque veniam inventore, fugit vel id, ad quisquam quibusdam tempora, possimus sit unde doloremque aspernatur tenetur quas totam dignissimos voluptatibus expedita. Numquam, praesentium! Libero harum iusto omnis molestias earum. Autem hic dolor illum itaque pariatur excepturi dignissimos ab provident distinctio?"
// div.appendChild(p)

// let img = document.createElement('img');
// img.src = "/img/1.jpg";
// img.alt = "auto1"
// div.appendChild(img)

// document.body.appendChild(div);
// console.log(div)

// Вот методы для различных вариантов вставки:

// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.



  