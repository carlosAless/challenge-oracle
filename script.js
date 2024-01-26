const form = document.querySelector("#form")
const descriptografarBtn = document.querySelector("#descriptografar")
const criptografarBtn = document.querySelector("#criptografar")
const textCripto = document.querySelector("#textCripto")
const textDescripto = document.querySelector(".textDescripto p")
const img = document.querySelector(".img")
const textInfo = document.querySelector(".textInfo")
const btnCripto = document.querySelector("#btnCripto")
const paragrafoCripto = document.querySelector(".paragrafoCripto")


var texto = ''
const mapaCripto = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const mapaDescripto = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};


descriptografarBtn.addEventListener("click", () => {
    textDescripto.textContent ? texto = textDescripto.textContent : texto = '';
    console.log(texto, descriptografar(texto))
    ShowOnDisplay(descriptografar(texto))

})

criptografarBtn.addEventListener("click", (ev) => {
    ev.preventDefault()
    console.log(textCripto.value, texto, criptografar(texto))
    textCripto.value ? texto = textCripto.value : texto = '';
    if (!contemMaiuscula(texto) && !contemAcento(texto)) ShowOnDisplay(criptografar(texto))
})

const contemMaiuscula = (texto) => /[A-ZÀ-ÖØ-Ý]/.test(texto)
const contemAcento = (texto) => /[À-ÖØ-Ýà-öø-ý]/.test(texto)
const criptografar = (texto) => texto.replace(/[eioua]/g, letra => mapaCripto[letra] || letra);
const descriptografar = (texto) => texto.replace(/(enter|imes|ai|ober|ufat)/g, match => mapaDescripto[match] || match);

const ShowOnDisplay = (texto) => {
    img.classList.add('hide')
    textInfo.classList.add('hide')

    console.log("showondiplay")
    document.querySelector('.textDescripto').innerHTML = ''


    document.querySelector('.textDescripto').innerHTML = `

        <output id="paragrafoCripto">
            ${texto}
        </output>

        <button id="btnCripto" onclick="cpText()">Copiar</button>
    
        `
}

function afterSuccess() {
    console.log('Copiado com sucesso!');
}

function afterFailure(error) {
    console.error('A Cópia falhou!', error);
}



const cpText = async () =>{ 
    try {
        await window.navigator.clipboard.writeText(document.querySelector("#paragrafoCripto").textContent);
        afterSuccess();
    } catch (error) {
        afterFailure(error);
    }
}



form.addEventListener('submit', (ev) => {
    ev.preventDefault()
})