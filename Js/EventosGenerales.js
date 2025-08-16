
document.addEventListener("DOMContentLoaded",function(){


  var buttonDarkMode= document.getElementById("buttonDarkMode");
  var body= document.body;
 
  if(localStorage.getItem('dark-mode')==="true"){
      body.classList.add('dark-mode') //Si el modo oscuro esta activado, quiero cambiar el texto del boton a modo claro
      buttonDarkMode.textContent = "Bright Mode"
  }
 
  buttonDarkMode.addEventListener("click", function(){
    body.classList.toggle('dark-mode');
 
    
    if(body.classList.contains('dark-mode')){
      buttonDarkMode.textContent = "Bright Mode";
      localStorage.setItem('dark-mode','true');
    }
    else{
      buttonDarkMode.textContent= "Dark Mode";
      localStorage.setItem('dark-mode', 'false');
    }
    })
 })
