var todo = document.querySelector(".todo");
var addColumn = todo.querySelector(".todo-add-column");
var columns = [];
// var tasks = new Array(columns.length);
//todo init with start board
var columnTemplate = todo.querySelector(".todo-column-template");
var addColumnForm = todo.querySelector(".todo-column-form");

addColumnForm.onsubmit = function () {
    let baseHeader = "Column header";
    var clone = columnTemplate.content.cloneNode(true);
    clone = clone.querySelector(".todo-column");
    clone.querySelector(".todo-column-header").textContent = baseHeader;
    clone = todo.insertBefore(clone, addColumn);
    columns.push(clone);
    todo.scrollLeft = todo.scrollWidth;
    return false;
}