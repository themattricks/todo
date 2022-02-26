// var checkBox = document.querySelectorAll("input[type=checkbox]");
function updateTheText(index) {
    // let animationValue = getComputedStyle(document.documentElement).getPropertyValue('--animation-things').trim();
    // console.log(animationValue);
    let taskCheckBox = document.getElementById('task' + index);
    if (taskCheckBox.checked) {
        document.styleSheets[1].addRule('.task'+ index +':after','animation: '+'.5s linear 0s 1 normal forwards running strike');
        // document.documentElement.style.setProperty("--animation-things", ".5s linear 0s 1 normal forwards running strike");
    } else {
        document.styleSheets[1].addRule('.task'+ index +':after','animation: '+'.3s linear 0s 1 normal forwards running backwards-strike');
        // document.documentElement.style.setProperty("--animation-things", "none");
    }
}

if (localStorage.getItem("tasks") == null) {
    let tasksArray = ["Buy Bread", "Complete This Project", "Eat Healthy Food"];
    localStorage.setItem("tasks", tasksArray);
}
function refreshTasks() {
    let tasks = localStorage.getItem("tasks").split(',');
    // let tasks = ["Buy Bread", "Complete This Project", "Eat Healthy Food"];
    let classTasks = document.querySelector('.tasks');
    for (var i = 0; i < tasks.length; i++) {
        classTasks.innerHTML += '<div class="task"><input id="task'+ (i+1) +'" type="checkbox" onclick="updateTheText('+ (i+1) +');"><label class="task'+ (i+1) +'" for="task'+ (i+1) +'">'+ tasks[i] +'</label></div>';
    }
}
refreshTasks();

let theAddButton = document.querySelector('.modal-container i');
let theInputBox = document.querySelector('.new-task');
theAddButton.onclick = function() {
    if (theInputBox.style.display == "inline-block" && theAddButton.style.transform == "rotate(45deg)") {
        theAddButton.style.transform = "rotate(0deg)";
        theInputBox.style.animation = ".3s linear 0s 1 normal forwards running backwards-getIn";
        theInputBox.style.display = "none";
    } else {
        theAddButton.style.transform = "rotate(45deg)";
        theInputBox.style.display = "inline-block";
        theInputBox.style.animation = ".3s linear 0s 1 normal forwards running getIn";
    }
}

document.querySelector('.new-task').onkeypress = function(e) {
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        let tasksArray = localStorage.getItem("tasks").split(',');
        tasksArray.push(this.value);
        localStorage.setItem("tasks", tasksArray);
        document.querySelector('.tasks').innerHTML = "";
        refreshTasks();
        document.querySelector('.modal-container i').style.transform = "rotate(-45deg)";
        document.querySelector('.new-task').style.display = "none";
        // alert(this.value);
    }
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
