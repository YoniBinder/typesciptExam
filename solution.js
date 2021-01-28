console.log("STARTING PROJECT");
window.onload = function () {
    var text = document.querySelector("#todo-item");
    var btn = document.querySelector('#todo-save');
    var todo = document.querySelector("#todo-list");
    var TASK = /** @class */ (function () {
        function TASK(txt) {
            this.txt = txt;
        }
        return TASK;
    }());
    var counter = 0;
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        var task = new TASK(text.value);
        todo.innerHTML += "<div id=\"div\" class= \"todo-item\" >" + task.txt + "</div><button id=\"btn\" style=\"display:inline\" class=\"todo-ok\">x</button>";
        var btn2 = document.querySelector("#btn");
        btn2.addEventListener("click", function (e) {
            var tas = document.querySelector("#div");
            tas.classList.add("done");
        });
        counter++;
    });
    //     let containerEl= document.querySelector(".container")
    //     let memoDiv= document.createElement("div")
    //     memoDiv.classList.add("memo")
    //     memoDiv.innerHTML = `<br><button class="close" onclick="removeMemo(${memo["id"]})">X</button>
    //     <br>${memo["body"]} <br><br> ${memo["date"]} <br> ${memo["time"]}<br>`
    //     // let btn=document.querySelector(".close")
    //     // btn.style.display="none";
    //     // memoDiv.addEventListener("mouseover", ()=>{btn.style.display="initial"})
    //     // memoDiv.addEventListener("mouseout", ()=>{btn.style.display="none"})
    //     containerEl.appendChild(memoDiv)
    // }
};
