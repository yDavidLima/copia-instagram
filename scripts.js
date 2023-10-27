    const imagem = document.getElementById("troca-img")
 




    function toggleVisibility(){
        
        if(imagem.style.opacity === "1" || imagem.style.opacity === ""){
            imagem.style.opacity = "0"

        }else {
            imagem.style.opacity = "1"

        }

    }




    setInterval(() => {
        toggleVisibility()
    }, 5000);
    
// toggleVisibility()
