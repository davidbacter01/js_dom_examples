console.log('hello');
// accesare dupa ID
const cardElement = document.getElementById('card');
console.log('card: ', cardElement);
console.log(`card: ${cardElement}`);

// cardElement.innerHTML = 'Altceva';

//accesare dupa class
const todos = document.getElementsByClassName('todo-item');
console.log(todos);
todos[0].id = 'new-id';

// accesare dupa name
const comment = document.getElementsByName('comment');
console.log(comment);
comment[0].value = 'Comment predefinit';

// accesare dupa nume tag
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// accesare dupa orice selector css valid
const cardParagraph = document.querySelector('#card > p');
console.log(cardParagraph);

// accesare a tuturor elementelor dupa un selector css valid
const allTodos = document.querySelectorAll('#card > ol > .todo-item');
console.log(allTodos);