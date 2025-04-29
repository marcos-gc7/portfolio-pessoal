function scrollToElement(elementSelector, instance = 0){
    // Seleciona todos os elementos que correspondem ao seletor fornecido
    const elements = document.querySelectorAll(elementSelector);
    // Verifica se existem elementos que correspondem ao seletor e se a instância desejada está disponível
    if (elements.length > instance) { 
        // Rola até a instância especificada do elemento
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Rola até o segundo elemento com a classe "header"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});