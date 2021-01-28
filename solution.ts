console.log("STARTING PROJECT")
window.onload = function() {

let text:HTMLInputElement=document.querySelector("#todo-item")
let btn:HTMLInputElement=document.querySelector('#todo-save')
let todo:HTMLElement=document.querySelector("#todo-list")

    class TASK{
        public txt:string

        constructor(txt:string){
            this.txt=txt
        }

    }
let counter:number=0
    btn.addEventListener("click",function(e){
        e.preventDefault() 

        let task = new TASK (text.value)
        todo.innerHTML+=`<div id="div" class= "todo-item" >${task.txt}</div><button id="btn" style="display:inline" class="todo-ok">x</button>`
        let btn2:HTMLInputElement=document.querySelector("#btn")
        btn2.addEventListener("click",function(e){
            let tas:HTMLInputElement=document.querySelector("#div")
            tas.classList.add("done")
        })
        counter++
    })



}




