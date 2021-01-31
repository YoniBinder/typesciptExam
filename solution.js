"use strict";
{
    console.log("STARTING PROJECT");
    let arr = [];
    let counter;
    let text = document.querySelector("#todo-item");
    let btn = document.querySelector('#todo-save');
    let todo = document.querySelector("#todo-list");
    let delAll = document.querySelector("#todo-delall");
    let del = document.querySelector("#todo-delcom");
    class Task {
        constructor(txt, id, isDone) {
            this.id = id;
            this.txt = txt;
            this.isDone = isDone;
        }
    }
    // let tasking = new Task ("good task",10,false)
    // console.log(tasking)
    // console.log(tasking.addNote())
    var taskDone = (key) => {
        arr.find((obj) => obj.id == key).isDone = true;
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify(arr));
        loadTasks();
    };
    const loadTasks = () => {
        todo.innerHTML = "";
        arr = JSON.parse(localStorage.getItem('tasks')) || [];
        for (let note of arr) {
            // console.log(note)
            // console.log(note.addNote())
            todo.innerHTML += `<div class= "todo-row" >
                    <div id="${note.id}" class="todo-item">${note.txt}</div>
                    <button class="todo-ok" onclick="taskDone(${note.id})">V</button>
                    </div>`;
            if (note.isDone)
                todo.children[note.id].children[0].classList.add("done");
            else
                todo.children[note.id].children[0].classList.remove("done");
        }
    };
    loadTasks();
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        counter = arr.length;
        let task = new Task(text.value, counter, false);
        arr.push(task);
        localStorage.setItem('tasks', JSON.stringify(arr));
        loadTasks();
    });
    delAll.addEventListener("click", (e) => {
        let doDeleteAll = confirm("Delete all tasks?");
        if (doDeleteAll) {
            arr = [];
            localStorage.removeItem("tasks");
            localStorage.setItem("tasks", JSON.stringify(arr));
            loadTasks();
        }
    });
    del.addEventListener("click", (e) => {
        let doDelete = confirm("Delete completed tasks?");
        if (doDelete) {
            for (let i = arr.length - 1; i >= 0; i--)
                if (arr[i]["isDone"])
                    arr.splice(i, 1);
            arr.map((obj, j) => obj.id = j);
            localStorage.removeItem("tasks");
            localStorage.setItem("tasks", JSON.stringify(arr));
            loadTasks();
        }
    });
}
