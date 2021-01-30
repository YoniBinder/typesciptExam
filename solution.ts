
    console.log("STARTING PROJECT")
    let arr:Array<Task> = []
    let counter:number
    let text:HTMLInputElement=document.querySelector("#todo-item")
    let btn:HTMLInputElement=document.querySelector('#todo-save')
    let todo:HTMLElement=document.querySelector("#todo-list")
    let delAll:HTMLElement=document.querySelector("#todo-delall")
    let del:HTMLElement=document.querySelector("#todo-delcom")


    class Task{
        public txt:string
        public id:number
        public isDone:boolean

        constructor(txt:string,id:number,isDone:boolean){
            this.id=id
            this.txt=txt
            this.isDone=isDone
        }

        addNote=():void=>{ 
        }
    }
    const taskDone=(key: number): void=>{

        for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] != null) 
            if (arr[i]["id"] == key) {
            arr[i].isDone=true
            break
            }
        }
        localStorage.removeItem("tasks")
        localStorage.setItem("tasks", JSON.stringify(arr))
        location.reload()
    }
window.onload=()=>{
    arr=JSON.parse(localStorage.getItem('tasks'));
    if (arr!=null) {
        for (let note of arr) 
            if(note != null){
                    todo.innerHTML+=`<div class= "todo-row" >
                    <div id="${note.id}" class="todo-item">${note.txt}</div>
                    <button class="todo-ok" onclick="taskDone(${note.id})">V</button>
                    </div>`
                if(note.isDone==true)
                    todo.children[note.id].children[0].classList.add("done")
                else
                    todo.children[note.id].children[0].classList.remove("done")
            }
    }
}

    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        if(arr==null){
            counter=0
            arr=[]
        }
        else
            counter=arr.length
        let task = new Task (text.value,counter,false)
        arr.push(task);
        localStorage.setItem('tasks',JSON.stringify(arr))
        location.reload()
    })  

    delAll.addEventListener("click",(e)=>{
        let doDeleteAll:boolean=confirm("Delete all tasks?")
        if(doDeleteAll){
            arr=[]
            localStorage.removeItem("tasks")
            localStorage.setItem("tasks", JSON.stringify(arr))
            location.reload()
        }
    })  

    del.addEventListener("click",(e)=>{
        let doDelete:boolean=confirm("Delete completed tasks?")
        if(doDelete){
            for (let i = 0 ; i < arr.length ; i++) {
                if (arr[i] != null) 
                    if (arr[i]["isDone"] == true) {
                        arr.splice(i,1)
                    }
            }
            localStorage.removeItem("tasks")
            localStorage.setItem("tasks", JSON.stringify(arr))
            location.reload()
        }
    })  
    
export{}