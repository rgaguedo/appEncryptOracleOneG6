const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const personImg = document.querySelector(".container-person");
const contenedor = document.querySelector(".container-text");
const resultado = document.querySelector(".texto-resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    const inputText = recuperarTexto();
    resultado.textContent = encriptarTexto(inputText);
}

function desencriptar(){
    ocultarAdelante();
    const inputText = recuperarTexto();
    resultado.textContent = desencriptarTexto(inputText);
}

function recuperarTexto(){
    const inputText = document.querySelector(".inputText");
    return inputText.value
}

function ocultarAdelante(){
    personImg.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    const texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] === "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] === "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] === "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] === "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    const texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] === "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] === "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] === "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] === "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
        const contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido).then(() => {});
    console.log("hola"); 
});