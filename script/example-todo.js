var todo = document.querySelector(".todo");
var columns = todo.querySelectorAll(".todo-column");
var tasks = new Array(columns.length);
for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    var taskContainer = column.querySelector(".todo-tasks-container");
    tasks[i] = taskContainer.childNodes;
    for (let j = 0; j < tasks[i].length; j++) {
        var task = tasks[i][j];
        task.onmousedown = function (event) {
            let shiftX = event.clientX - task.getBoundingClientRect().left;
            let shiftY = event.clientY - task.getBoundingClientRect().top;

            var taskCopy = task.cloneNode(true);
            taskCopy = taskContainer.insertBefore(taskCopy, task);
            task.classList.add("todo-task-moving");
            taskCopy.classList.add("todo-task-transperent");

            document.body.append(task);

            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
                task.style.left = pageX - shiftX + 'px';
                task.style.top = pageY - shiftY + 'px';
            }
            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }
            document.addEventListener('mousemove', onMouseMove);
            task.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                task.onmouseup = null;
                task = taskContainer.insertBefore(task, taskCopy);
                taskCopy.remove();
            };
        }
        task.ondragstart = function () {
            return false;
        };
    }
}
