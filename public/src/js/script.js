const items = document.querySelector('#todolist ul');

// delete any item from the todo list
const itemsDel = document.querySelector('#todolist ul');
itemsDel.addEventListener('click', function(e){
    if(e.target.className == 'remove') {
        const item = e.target.parentElement;
        itemsDel.removeChild(item);
    }
});

// get values of forms
const addForm = document.forms['add-form'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create new element
    const li = document.createElement('li');
    const newTodo = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // content of elements
    newTodo.textContent = value;
    // deleteBtn.appendChild = 
    deleteBtn.textContent = 'remove';

    // add classes
    newTodo.classList.add('todo-name');
    deleteBtn.classList.add('remove');

    // append to the ul
    li.appendChild(newTodo);
    li.appendChild(deleteBtn);
    items.appendChild(li);

});

// hide the todo list

const hideTodo = document.querySelector('#hideBox');
hideTodo.addEventListener('change', function(e){
    if(hideBox.checked) {
        items.style.display = "none";
    } else {
        items.style.display = "block";
    }
});

// filter

const searchBar = document.forms['search-form'].querySelector('input');
// add keyup event
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = items.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})
