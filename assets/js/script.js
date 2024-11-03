// Função para adicionar nova patologia
document.getElementById('adicionar-patologia').addEventListener('click', function () {
    const novasPatologiasDiv = document.getElementById('novas-patologias');
    
    const novaPatologiaDiv = document.createElement('div');
    novaPatologiaDiv.classList.add('form-inline');
    
    novaPatologiaDiv.innerHTML = `
        <input type="text" name="patologia[]" required placeholder="Nova Patologia">
        <button type="button" class="remover">Remover</button>
    `;
    
    novasPatologiasDiv.appendChild(novaPatologiaDiv);
});

// Função para adicionar novo medicamento
document.getElementById('adicionar-medicamento').addEventListener('click', function () {
    const novosMedicamentosDiv = document.getElementById('novos-medicamentos');

    const novoMedicamentoDiv = document.createElement('div');
    novoMedicamentoDiv.classList.add('form-inline');

    novoMedicamentoDiv.innerHTML = `
        <input type="text" name="nome-medicamento[]" required placeholder="Nome do Medicamento">
        <input type="text" name="dosagem-medicamento[]" required placeholder="Dosagem (mg/ml)">
        <input type="number" name="quantidade-diaria[]" min="1" required placeholder="Quantidade Diária">
        <button type="button" class="remover">Remover</button>
    `;

    novosMedicamentosDiv.appendChild(novoMedicamentoDiv);
});

// Função para adicionar nova consulta
document.getElementById('adicionar-consulta').addEventListener('click', function () {
    const novasConsultasDiv = document.getElementById('novas-consultas');

    const novaConsultaDiv = document.createElement('div');
    novaConsultaDiv.classList.add('form-inline');

    novaConsultaDiv.innerHTML = `
        <input type="date" name="data-consulta[]" required placeholder="Data da Consulta">
        <input type="text" name="local-consulta[]" required placeholder="Local da Consulta">
        <input type="text" name="medico-consulta[]" required placeholder="Médico">
        <input type="tel" name="contato-medico[]" required placeholder="Contato do Médico">
        <button type="button" class="remover">Remover</button>
    `;

    novasConsultasDiv.appendChild(novaConsultaDiv);
});

// Remover campos dinâmicos
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remover')) {
        e.target.parentElement.remove();
    }
});

// Saída da tela inicial
function confirmarSaida() {
    const modal = document.getElementById('alert-modal');
    modal.style.display = "block"; // Mostra o modal
}

// Fecha o modal
function fecharModal() {
    const modal = document.getElementById('alert-modal');
    modal.style.display = "none"; // Oculta o modal
}

// Confirma a saída e redireciona
function confirmarRedirecionamento() {
    window.location.href = "../html/login.html"; // Redireciona para a página de login
}

// Função para abrir o modal de medicamentos
function abrirMedicamentosModal() {
    fetch('/html/medicamentos.html')  // Caminho corrigido
        .then(response => response.text())
        .then(html => {
            document.getElementById('medicamentos-container').innerHTML = html;
            document.getElementById('medicamentos-modal').style.display = 'block';
        });
}

// Função para fechar o modal de medicamentos
function fecharMedicamentosModal() {
    const modal = document.getElementById('medicamentos-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Função para carregar e exibir o conteúdo de consultas
function abrirConsultas() {
    fetch('/html/consultas.html')  // Caminho para o arquivo HTML das consultas
        .then(response => response.text())
        .then(html => {
            document.getElementById('consultas-container').innerHTML = html;
            document.getElementById('consultas-container').style.display = 'block';
            // Opcional: Esconder outros conteúdos, se necessário
            document.getElementById('medicamentos-container').style.display = 'none';
            // Fechar outros modais, se necessário
            fecharMedicamentosModal();
        });
}

// Função para fechar a seção de consultas
function fecharConsultas() {
    const consultasContainer = document.getElementById('consultas-container');
    if (consultasContainer) {
        consultasContainer.style.display = 'none';
    }
}








        function filtrarConsultas() {
            const dataFiltro = document.getElementById('data-filtro').value;
            const tabela = document.querySelector('#consultas-tbody');
            const linhas = tabela.querySelectorAll('tr');

            linhas.forEach(linha => {
                const data = linha.cells[0].textContent; // Obtém a data da linha
                if (dataFiltro) {
                    if (data === dataFiltro) {
                        linha.style.display = ''; // Mostra a linha
                    } else {
                        linha.style.display = 'none'; // Oculta a linha
                    }
                } else {
                    linha.style.display = ''; // Se não há filtro, mostra todas as linhas
                }
            });
        }