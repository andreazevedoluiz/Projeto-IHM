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