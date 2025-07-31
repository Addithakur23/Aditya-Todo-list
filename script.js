let taskTitle
let taskId=0
document.querySelector("#Add-btn").addEventListener("click", () => {
    taskId++
    let task = document.querySelector("#task_details").value
    taskTitle = document.querySelector("#task_title").value
    // localStorage.setItem("note", note)
    let li = document.createElement("li")
    li.className = "task"
    li.id = `task-${taskId}`
    li.innerHTML = ` <div class="taskTitle">
                    <input type="checkbox" name="checkbox">
                    ${taskTitle}
                    <div class="task_details">
                        ${task}


                        <span class="delete-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red"
                                viewBox="0 0 24 24">
                                <path
                                    d="M3 6h18v2H3V6zm2 3h14l-1.5 12.5a1 1 0 01-1 .5H7a1 1 0 01-1-.5L4.5 9zm5 2v8h2v-8H9zm4 0v8h2v-8h-2zM9 4V3a1 1 0 011-1h4a1 1 0 011 1v1h5v2H4V4h5z" />
                            </svg>

                        </span>
                    </div>
                </div>`

    document.querySelector("ul").append(li)

    document.querySelector("#task_details").value = ""
    document.querySelector("#task_title").value = ""

})



document.querySelector("#task-list").addEventListener("click", (e) => {
    // for Delete Button
    if (e.target.closest(".delete-icon")) {
        e.target.closest("li").remove()
        console.log(e.target.closest("li"));
        
    }

    // for checkbox
    if (e.target.type == "checkbox") {
        const li = e.target.closest("li")
        li.style.color = e.target.checked ? "grey" : "black"
        li.style.textDecoration=e.target.checked ?"line-through":"grey"
    }
})




