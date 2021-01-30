
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
        arr=[]
        localStorage.removeItem("tasks")
        localStorage.setItem("tasks", JSON.stringify(arr))
        location.reload()
    })  

    del.addEventListener("click",(e)=>{
        for (let i = 0 ; i < arr.length ; i++) {
            if (arr[i] != null) 
                if (arr[i]["isDone"] == true) {
                    arr.splice(i,1)
                  }
              }
              localStorage.removeItem("tasks")
              localStorage.setItem("tasks", JSON.stringify(arr))
              location.reload()
    })  






// let arr:Array<Memo> = []
// let counter:number =0;


// let textArea:HTMLInputElement=document.querySelector("#textarea")
// let date:HTMLInputElement=document.querySelector("#dateInput")
// let time:HTMLInputElement=document.querySelector("#timeInput")


// class Memo {
    
//   public id: number
//   public date: string
//   public time: string
//   public body: string

//     constructor (id:number,body:string,date:string,time:string){
//         this.id = id;
//         this.date = date;
//         this.time = time;
//         this.body = body;
//     }
    
// }

// const createMemo=():void=>{
//     let obj = new Memo (counter,textArea.value,date.value ,time.value)
//     arr.push(obj);
//     localStorage.setItem('memos',JSON.stringify(arr))
//     location.reload()
// }

// window.onload = (): void => {
    
//     if (JSON.parse(localStorage.getItem('memos'))) {

//       arr = JSON.parse(localStorage.getItem('memos'))
//       counter = arr.length;

//       for (let memo of arr) {
        
//         if(memo != null) {
//           let containerEl= document.querySelector(".container")
//           let memoDiv= document.createElement("div")
          
//           memoDiv.classList.add("memo")
        //   memoDiv.innerHTML = `<br><button class="close" onclick="removeMemo(${memo["id"]})">X</button>
        //   <br>${memo["body"]} <br><br> ${memo["date"]} <br> ${memo["time"]}<br>`
        //   // let btn=document.querySelector(".close")
//           // btn.style.display="none";
//           // memoDiv.addEventListener("mouseover", ()=>{btn.style.display="initial"})
//           // memoDiv.addEventListener("mouseout", ()=>{btn.style.display="none"})
//           containerEl.appendChild(memoDiv)
//       }
//     }
//   }
// }

// function removeMemo(key: number): void {

//   for (let i = 0 ; i < arr.length ; i++) {
//     if (arr[i] != null) 
//       if (arr[i]["id"] == key) {
//         arr.splice(key,1)
//         break
//       }
//   }
//   console.log(arr);
//   localStorage.removeItem("memos")
//   localStorage.setItem("memos", JSON.stringify(arr))

//   location.reload()
// }


// function clear(): void {

//   textArea.value = ''
//   date.value = ''
//   time.value = ''
// }
