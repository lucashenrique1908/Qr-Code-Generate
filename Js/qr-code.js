document.addEventListener("DOMContentLoaded", () => { //tive que certificar que o dom foi carregado efetivamente
    const container = document.querySelector(".container");
    const btnQrCode = document.querySelector("#btnQrCode");
    const imgQrCode = document.querySelector(".qr-code img");
    const CxTexto = document.querySelector(".qr-form input");

    function criarQrCode() {
        let texto = CxTexto.value;  // Pegando o valor do input corretamente
        if(!texto) return 
    
        btnQrCode.innerText = "Gerando Qr Code..."
    
        imgQrCode.src  =   `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${texto}`
    
        imgQrCode.addEventListener("load", ()=>{
        container.classList.add("active")
        btnQrCode.innerText = `${texto} carregado com sucesso!`;
        })
      
    
         
    }
    
    btnQrCode.addEventListener("click", () => {
        criarQrCode();
    });
    
    CxTexto.addEventListener("keydown", (e) => {
        if(e.code === "Enter"){
            criarQrCode()
        };
    });
    CxTexto.addEventListener("keyup", (e) => {
        container.classList.remove("active")
        btnQrCode.innerText = `Gerar Qr Code`;
    });
});
