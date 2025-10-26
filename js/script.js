function resetFormulario (){
    const form = document.querySelector("form");

    if(form){
        form.reset();
        console.log("Formulario limpiado");
    }
};

window.addEventListener("pageshow", function(event){
    if (event.persisted){
        resetFormulario();
    }
})