let burger = document.getElementById('burger'),
    nav= document.getElementById('menu');

burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

function scrollToSection() {
    var section = document.getElementById("seccionDestino");
    section.scrollIntoView({ behavior: "smooth" });
  }
  

/*Validaciones de formulario*/
let formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let nombreInput = document.getElementById('nombreInput');
    let apellidoInput = document.getElementById('apellidoInput');
    let textareaBox = document.getElementById('textareaBox');
    let mensajesError =document.getElementsByClassName('errorMessege');
  
    let isValid = true;
  
   
    if (nombreInput.value.trim() === '') {
      isValid = false;
      mensajesError[0].classList.add("active"); 
    } else {
        mensajesError[0].classList.remove("active");
    }
  
    if (apellidoInput.value.trim() === '') {
      isValid = false;
      mensajesError[1].classList.add("active"); 
    } else {
        mensajesError[1].classList.remove("active");
    }
  
    

    if (isValid) {
      
      window.location.hash = 'formulario-contacto';
      window.location.reload();
    //   this.submit();
    }

    
  });

   window.addEventListener('load', function() {
    if (window.location.hash === '#formulario-contacto') {
        
        let mensajeFormulario = document.getElementById('mensajeFormulario');
        mensajeFormulario.classList.remove("noactive");
        formulario.classList.add('enviado');
    }
});