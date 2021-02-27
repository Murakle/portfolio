let foldersContainer = document.querySelector(".folders-container");
let folders = foldersContainer.querySelectorAll(".folder");
let headers = [];
folders.forEach(element => {
  headers.push(element.querySelector(".folder-closed"));
});
let opened = 0;


function closeFolder(index, newIndex) {
  if (index < newIndex) {
    folders[index].style.justifyContent = "flex-start"; 
  } else {
    folders[index].style.justifyContent = "flex-end"; 
  }
  folders[index].classList.add("closed-folder");
  folders[index].querySelector(".folder-opened").classList.add("hidden");
  folders[index].querySelector(".folder-closed").classList.remove("hidden");
  
}
function openFolder(index) {
  folders[index].classList.remove("closed-folder");
  folders[index].querySelector(".folder-opened").classList.remove("hidden");
  folders[index].querySelector(".folder-closed").classList.add("hidden");
  
}
var addButtonClickListener = function (index) {
  headers[index].addEventListener('click', function () {
    openFolder(index);
    closeFolder(opened, index);
    opened = index;
  });
}
for (let i = 0; i < headers.length; i++) {
  addButtonClickListener(i);
}