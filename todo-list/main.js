
// import { Todos } from './src/components/todos'
// document.addEventListener("DOMcontentloaded", function(){
// new App();



// import Todos from '.src/components/todos';
// //const Todos = require('./src/components/todo');

document.addEventListener('DOMContentLoaded',function(){

    // new App();
    const $li = document.querySelectorAll('.todo');
    const $button = document.querySelector('button');

    $button.addEventListener('click',handleAddTodo);
    //$li e nodelist
    $li.forEach(function($item){
        $item.addEventListener('click',toggleCompleted);
    });

    function handleAddTodo(){
        $todoList = document.querySelector('.todos');
        $input = document.querySelector('input[name="new-todo"]')
        const newTodo = $input.value;

        $newTodo = document.createElement('li');
        $newTodo.classList.add('todo');
        $newTodo.appendChild(document.createTextNode(newTodo));
        $todoList.appendChild($newTodo);
    }

    function toggleCompleted(){
            this.classList.toggle('completed');

    }
});

/*
function handleAddTodo() {
    $newTodo = addEventListener..
}

function toggleCompleted() {
    if (this.classList.has('completed')){
        this.classList.remove('completed')
    } else {
        this.classList.add('completed')
    }
}*/