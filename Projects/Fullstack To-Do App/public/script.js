const addBtn = document.querySelector('#addBtn')
const newTask = document.querySelector('#newTask')
const list = document.querySelector('.list')

function addToList(todos){
    list.innerText = '';
    todos.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML= `
            <span class="taskName">${element.name}</span>
            <span class="buttons">
                <button class="upBtn" atrId=${element.id}>⬆️</button>
                <button class="downBtn" atrId=${element.id}>⬇️</button>
                <button class="delBtn" atrId=${element.id}>❌</button>
            </span>
        `
        list.appendChild(li);
    });
}

axios.get('/gettodos')
    .then((res)=>{
        let todos = res.data;
        addToList(todos)
    })
    .catch((err)=>{
        console.log(err);
    })


addBtn.addEventListener('click',(e)=>{
    e.preventDefault(); //it will stop working of form
    if(newTask.value=='') return;
    axios.post('/addtodo',{name: newTask.value})
        .then((res)=>{
            let todos = res.data;
            addToList(todos); 
            newTask.value = ''; 
        })
        .catch((err)=>{
            console.log(err);
        })
});

function deleteToDo(atrId){
    axios.post('/deletetodo',{id:atrId})
        .then((res)=>{
            let todos = res.data;
            console.log(todos);
            addToList(todos);
        })
        .catch((err)=>{
            console.log(err);
        })
}

function increasePriority(atrId){
    axios.get(`/increase?id=${atrId}`)
        .then((res)=>{
            let todos = res.data;
            addToList(todos);
        })
        .catch((err)=>{
            console.log(err);
        })
}

function decreasePriority(atrId){
    axios.get(`/decrease?id=${atrId}`)
        .then((res)=>{
            let todos = res.data;
            addToList(todos);
        })
        .catch((err)=>{
            console.log(err);
        })
}

list.addEventListener('click',(ev)=>{
    // console.log(ev.target)
    let atrId = ev.target.getAttribute('atrId');
    let btnName = ev.target.className;
    // console.log(atrId);
    // console.log(btnClass);

    if(btnName === 'delBtn'){
        deleteToDo(atrId);
    }
    else if(btnName === 'upBtn'){
        increasePriority(atrId);
    }
    else if(btnName === 'downBtn'){
        decreasePriority(atrId);
    }
})
