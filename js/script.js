/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Jogos - Game News
Aluno; Eduarda de Almeida Miranda - RA: 249607
Turma: N2
Professor: Abimael de Oliveira
*/

// Função 1: botão de voltar ao topo usando evento de scroll e manipulação de classe CSS.
const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Função 2: destaque visual nos cards com eventos mouseenter e mouseleave.
const cards = document.querySelectorAll('.card-personalizado');

cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('card-destaque-js');
    });

    card.addEventListener('mouseleave', function () {
        card.classList.remove('card-destaque-js');
    });
});

// Função 3: filtro de cards da galeria por categoria.
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const itensGaleria = document.querySelectorAll('.item-galeria');
const contadorGaleria = document.querySelector('#contadorGaleria');

if (botoesFiltro.length > 0 && itensGaleria.length > 0) {
    botoesFiltro.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const categoriaSelecionada = botao.getAttribute('data-filtro');
            let totalVisivel = 0;

            botoesFiltro.forEach(function (item) {
                item.classList.remove('ativo');
            });

            botao.classList.add('ativo');

            itensGaleria.forEach(function (card) {
                const categoriaCard = card.getAttribute('data-categoria');

                if (categoriaSelecionada === 'todos' || categoriaSelecionada === categoriaCard) {
                    card.classList.remove('oculto');
                    totalVisivel++;
                } else {
                    card.classList.add('oculto');
                }
            });

            if (contadorGaleria) {
                if (categoriaSelecionada === 'todos') {
                    contadorGaleria.textContent = `Exibindo ${totalVisivel} cards.`;
                } else {
                    contadorGaleria.textContent = `Exibindo ${totalVisivel} card(s) da categoria ${categoriaSelecionada}.`;
                }
            }
        });
    });
}

// Função 4: validação simples do formulário de contato com preventDefault, HTML5 e DOM.
const formulario = document.querySelector('#formContato');
const mensagemFormulario = document.querySelector('#mensagemFormulario');

if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const telefone = document.querySelector('#telefone').value.trim();
        const assunto = document.querySelector('#assunto').value.trim();
        const mensagem = document.querySelector('#mensagem').value.trim();

        if (nome === '' || email === '' || telefone === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (mensagem.length < 10) {
            alert('A mensagem precisa ter pelo menos 10 caracteres.');
            return;
        }

        if (mensagemFormulario) {
            mensagemFormulario.textContent = 'Solicitação enviada com sucesso! A equipe da Game News retornará pelo contato informado.';
            mensagemFormulario.classList.add('sucesso');
        } else {
            alert('Solicitação enviada com sucesso! A equipe da Game News retornará pelo contato informado.');
        }

        formulario.reset();
    });

    formulario.addEventListener('reset', function () {
        if (mensagemFormulario) {
            mensagemFormulario.textContent = '';
            mensagemFormulario.classList.remove('sucesso');
        }
    });
}

