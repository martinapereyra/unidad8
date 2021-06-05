
let userName = document.querySelector("#user");
let password = document.querySelector("#password");
let error = document.querySelector("#error");
error.style.color= "red"



const sendForm =()=>{
     
    console.log("Enviando formulario..");
     
     let mensajesError = [];
     let signo=userName.value;

     
     if(userName.value===null|| userName.value===""){
        mensajesError.push("Ingrese su nombre de usuario");
        alert(`No puede dejarse el campo "Usario" vacío`);
     }
     
     if(password.value===null|| password.value===""){
        mensajesError.push("Ingrese su password");
        alert(`No puede dejarse el campo "Clave" vacío`);
   
     }

     if(signo.indexOf("@")===-1){
      mensajesError.push("Su nombre de usuario debe contener @"); 
      alert(`El campo "Usuario" debe tener un "@"`);
     }
     
     if(mensajesError.length>0){
      alert("No se pudo enviar el formulario");
      error.innerHTML=mensajesError.join(".<br>");
      return false
     }

     else{
      alert("Formulario envíado");
      return true;
     }

}
    
     
     
