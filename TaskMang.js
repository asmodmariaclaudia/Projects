const urgentTasks = [];
const optionalTasks = [];

const taskName = document.getElementById("input-box");
const category = document.getElementById("category");
const urg = document.getElementById("urgentTasks");
const opt = document.getElementById("optionalTasks");
const listContainer = document.getElementById("task-container");

function addTask() {
    if(inputBox.value === ''){
        alert("Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskName.value && category;

        if (li.category === 'urgent'){
            let li = document.createElement("li");
            urgentTasks.push(taskName)
            urg.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        else if(li.category === 'optional'){
            optionalTasks.push(taskName)
            opt.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    for (i = 0; i < listContainer.length; ++i) {
        let li = document.createElement('li');
        li.innerText = data[i];
        listContainer.appendChild(li);}
}
showTask();