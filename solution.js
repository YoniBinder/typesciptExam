console.log("STARTING PROJECT");
var arr = [];
var counter;
var text = document.querySelector("#todo-item");
var btn = document.querySelector('#todo-save');
var todo = document.querySelector("#todo-list");
var delAll = document.querySelector("#todo-delall");
var del = document.querySelector("#todo-delcom");
var Task = /** @class */ (function () {
    function Task(txt, id, isDone) {
        this.addNote = function () {
        };
        this.id = id;
        this.txt = txt;
        this.isDone = isDone;
    }
    return Task;
}());
var taskDone = function (key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != null)
            if (arr[i]["id"] == key) {
                arr[i].isDone = true;
                break;
            }
    }
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(arr));
    location.reload();
};
window.onload = function () {
    arr = JSON.parse(localStorage.getItem('tasks'));
    if (arr != null) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var note = arr_1[_i];
            if (note != null) {
                todo.innerHTML += "<div class= \"todo-row\" >\n                    <div id=\"" + note.id + "\" class=\"todo-item\">" + note.txt + "</div>\n                    <button class=\"todo-ok\" onclick=\"taskDone(" + note.id + ")\">V</button>\n                    </div>";
                if (note.isDone == true)
                    todo.children[note.id].children[0].classList.add("done");
                else
                    todo.children[note.id].children[0].classList.remove("done");
            }
        }
    }
};
btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (arr == null) {
        counter = 0;
        arr = [];
    }
    else
        counter = arr.length;
    var task = new Task(text.value, counter, false);
    arr.push(task);
    localStorage.setItem('tasks', JSON.stringify(arr));
    location.reload();
});
delAll.addEventListener("click", function (e) {
    var doDeleteAll = confirm("Delete all tasks?");
    if (doDeleteAll) {
        arr = [];
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify(arr));
        location.reload();
    }
});
del.addEventListener("click", function (e) {
    var doDelete = confirm("Delete completed tasks?");
    if (doDelete) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != null)
                if (arr[i]["isDone"] == true) {
                    arr.splice(i, 1);
                }
        }
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify(arr));
        location.reload();
    }
});
