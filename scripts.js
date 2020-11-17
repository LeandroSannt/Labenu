const modalOverlay = document.querySelector(".modal-overlay")
const card = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")
const modal2 =document.querySelector(".modal2")
const expandOverlay = document.querySelector(".expand-overlay")

for (let cards of card){
 cards.addEventListener("click",function(){
     modalOverlay.classList.add("active")
     const videoId =cards.getAttribute("id")
     modalOverlay.querySelector("iframe").src =`https://rocketseat.com.br/${videoId}`
     })

}
document.querySelector(".close-modal").addEventListener("click",function(){
    
    modalOverlay.classList.remove("active")
    modalOverlay.classList.remove("expand")
    modal2.classList.add("modal")
 
    
})
//preciso verificar se a classe expend esta ou não na tela se nao tiver adicione 
document.querySelector(".expand-overlay").addEventListener("click",function(){
    if(!modal.classList.contains("expand")){
      modal.classList.remove("modal")
      modalOverlay.classList.add("expand")
    
    }  
})



 
