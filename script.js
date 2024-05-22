document.addEventListener("DOMContentLoaded", function() {
    var popup = document.querySelector(".popup-box");
    var overlay = document.querySelector(".popup-overlay");
    var button = document.getElementById("add-popup-button");
    var closebutton = document.getElementById("close-popup");

    button.addEventListener("click", function() {
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    closebutton.addEventListener("click", function(event) {
        event.preventDefault(); 
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    //select add-popup,book-title-input,book-author-input,short-description

    var container = document.querySelector(".container")
    var addpopup = document.getElementById("add-popup")
    var booktitle = document.getElementById("book-title-input")
    var bookauthor = document.getElementById("book-author-input")
    var description = document.getElementById("short-description")
    var delbutton = document.getElementById("del")


    addpopup.addEventListener("click",function(event){
        event.preventDefault()
        var div = document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p>
        <button onclick='del(event)'>Delete</button>`
        container.append(div)
        popup.style.display = "none";
        overlay.style.display = "none";

    })

    


});

function del(event)
    {
        event.target.parentElement.remove()
    }
