const inputTexto = document.querySelector("#input-texto");
const msg = document.querySelector("#msg");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopy = document.querySelector("#btn-copy");

const regex = new RegExp("^[a-z\\s]+$");

function encriptar(texto){
    if (regex.test(texto)) {
        let codificado = "";
        for (let i=0; i<texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    codificado += "ai"
                    break;
                case "e":
                    codificado += "enter"
                    break;
                case "i":
                    codificado += "imes"
                    break;
                case "o":
                    codificado += "ober"
                    break;
                case "u":
                    codificado += "ufat"
                    break;
                default:
                    codificado += texto[i]
                    break;
            };
        };
        return codificado;
    }else{
        return "ERROR: No se permiten MAYÚSCULAS, números, ni caracteres especiales";
    }
};

function desencriptar(texto){
    if (regex.test(texto)) {
        let desencriptado = texto.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
        return desencriptado;    
    }else{
        return "ERROR: No se permiten MAYÚSCULAS, números, ni caracteres especiales";
    };
};

btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    var texto = inputTexto.value;
    var encriptado = encriptar(texto);
    msg.value = encriptado;
});

btnDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    var texto = inputTexto.value;
    var desencriptado = desencriptar(texto);
    msg.value = desencriptado;
});

btnCopy.addEventListener("click", (e)=>{
    e.preventDefault();
    msg.select();
    navigator.clipboard.writeText(msg.value);
});