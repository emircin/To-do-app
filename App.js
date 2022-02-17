let addButton = document.querySelector("#add-button");
let toDo = document.querySelector(".to-do");
let done = document.querySelector(".done");



let text = `<div class='papernote'> \
<h2 contenteditable='true'>Enter Title Here</h2> \
<img src='./images/notpaper.png' alt='' class='notpaper'>\
<p contenteditable='true'>Add a new task.</p>\
<button class='delete-button'><img src='./images/delete.png' alt=''></button> \
<button class='done-button'><img src='./images/done.png' alt=''></button> \
</div>`


addButton.addEventListener("click", ()=>{



    toDo.innerHTML += text;



    var deleteButton = document.querySelectorAll(".delete-button");
    // var doneButton = document.querySelectorAll(".done-button");
    var paperNote = document.querySelectorAll(".papernote")


    deleteButton.forEach((item) => {

        item.addEventListener("click", ()=> {


            item.parentElement.style.display = "none";


        });

    });

    paperNote.forEach((item2) => {

        const d = new Date();

        item2.lastElementChild.addEventListener("click", ()=> {

            done.firstElementChild.innerHTML += `<p class='done-task'> <img src='./images/tick.png'> \
             ${item2.firstElementChild.textContent} </p> <p class='done-task-date'> \
             ${d.getHours()<10?'0':''}${d.getHours()}:${d.getMinutes()<10?'0':''}${d.getMinutes()} ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}</p>`

            item2.style.display = "none";

        




        });
    



 });



});







 