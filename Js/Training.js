document.addEventListener("DOMContentLoaded", function(){


    var buttonBlockchain =document.getElementById("buttonblockchain");
   
    var modalBlockchain= new bootstrap.Modal
    (document.getElementById("modalBlockchain"));

    buttonBlockchain.addEventListener("click",function(){
        modalBlockchain.show()

    })
   

    var buttonTrading =document.getElementById("buttonTrading");
   
    var modalTrading= new bootstrap.Modal
    (document.getElementById("modalTrading"));

    buttonTrading.addEventListener("click",function(){
        modalTrading.show()

    })
   
    var buttonLearnToEarn =document.getElementById("buttonLearnToEarn");
   
    var modalLearnToEarn= new bootstrap.Modal
    (document.getElementById("modalLearnToEarn"));

    buttonLearnToEarn.addEventListener("click",function(){
        modalLearnToEarn.show()
        
    })
})