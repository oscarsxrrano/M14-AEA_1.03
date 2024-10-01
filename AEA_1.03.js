const addTask =() => {
    const { value: taskInput } = document.getElementById( "task");
    if (taskInput.trim() === "") return;

    const taskList = document.getElementById("listTasks");
    const li = document.createElement("li");
    
    li.className = "liClass";
    li.innerHTML = `${taskInput} <button class="deleteClass">Delete</button>`;

    const deleteButton = li.querySelector(".deleteClass");
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    }; 
    
    taskList.appendChild(li);

    document.getElementById("task").value = ""; 
};
