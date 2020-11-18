const input =document.querySelector("form input")
const demo = document.getElementById("demo")
const button = document.querySelector("form button")

const cursos=document.querySelectorAll(".cursos div")

for( curso of cursos){
    curso.addEventListener("click",function(){
        alert("pagina em andamento")

    })

}

button.addEventListener("click",event =>{

    if( input.value=="" || input.value.indexOf('@') == -1  ){
        alert("Preencha o email correntamente")
 
    }else{
    alert(`Email enviado com sucesso! Muito obrigado, entraremos em contato`);
   event.preventDefault()
    demo.innerHTML = `Damos boas vindas a: ${input.value}`

    }
})








