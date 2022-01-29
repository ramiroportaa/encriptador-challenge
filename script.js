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
        msg.classList.remove("error");
        return codificado;
    }else{
        msg.classList.add("error");
        return "ERROR: No se permiten MAYÚSCULAS, números, ni caracteres especiales. Tampoco se puede encriptar un texto vacio.";
    }
};

function desencriptar(texto){
    if (regex.test(texto)) {
        let desencriptado = texto.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");

        msg.classList.remove("error");
        return desencriptado;    
    }else{
        msg.classList.add("error");
        return "ERROR: No se permiten MAYÚSCULAS, números, ni caracteres especiales. Tampoco se puede encriptar un texto vacio.";
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