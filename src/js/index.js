// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// PASSO 1 - pegar os personagens de JS para poder verificar quando o usuário passar o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');

// PASSO 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        // se for acessado no celular:
            if(window.innerWidth < 450) {
                window.scrollTo({top: 0, behavior: 'smooth'})
            }


            // verificando se elemento tem classe, se sim, remove 
            const personagemSelecionado = document.querySelector ('.selecionado');
            personagemSelecionado.classList.remove ('selecionado')

            personagem.classList.add('selecionado');

            // OBJETIVO 1 - passar o mouse em cima, trocar imagem/nome/descrição 
            // passo 1 - pegar o elemento do personagem
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');

            // passo 2 - alterar a imagem
            const idPersonagem = personagem.attributes.id.value;
            imagemPersonagemGrande.src =  `./src/imagens/card-${idPersonagem}.png`;

            //passo 3 - alterar o nome
            const nomePersonagem = document.getElementById('nome-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');

            // passo 4 - alterar descrição
            const descricaoPersonagem = document.getElementById('descricao-personagem');

            descricaoPersonagem.innerText = personagem.getAttribute('data-description');




    })
})





