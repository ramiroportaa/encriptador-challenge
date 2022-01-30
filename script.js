const inputTexto = document.querySelector("#input-texto");
const msg = document.querySelector("#msg");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopy = document.querySelector("#btn-copy");
const claves = {e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat"}

const regex = new RegExp("^[a-z\\s]+$");

function codificar(texto, claves, encriptarOdesencriptar){
    if (regex.test(texto)) {
        let encriptar = encriptarOdesencriptar == "encriptar";
        let codificado = texto;
        for (const key in claves) {
            if (Object.hasOwnProperty.call(claves, key)) {
                const valor = claves[key];
                const regex = new RegExp(encriptar ? key : valor, "g");
                codificado = codificado.replace(regex, encriptar ? valor : key);
            }
        };
        msg.classList.remove("error");
        return codificado;
    }else{
        msg.classList.add("error");
        return "ERROR: No se permiten MAYÚSCULAS, números, ni caracteres especiales. Tampoco se puede encriptar un texto vacio.";
    }
};

btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    var texto = inputTexto.value;
    var encriptado = codificar(texto, claves, "encriptar");
    msg.value = encriptado;
    inputTexto.focus();
});

btnDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    var texto = inputTexto.value;
    var desencriptado = codificar(texto, claves, "desencriptar");
    msg.value = desencriptado;
    inputTexto.focus();
});

btnCopy.addEventListener("click", (e)=>{
    e.preventDefault();
    msg.select();
    navigator.clipboard.writeText(msg.value);
});