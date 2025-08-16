//Menu & footer//


document.addEventListener("DOMContentLoaded", function(){
    fetch("menu.html")
    .then(response =>response.text())
    .then(data =>{
        document.getElementById("menu-placeholder").innerHTML =data;
    })

    fetch("footer.html")
    .then(response =>response.text())
    .then(data =>{
        document.getElementById("Footer-placeholder").innerHTML =data;
    })

})