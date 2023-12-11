const form = document.querySelector('#my-form');
//console.log(form);

const inputs = document.querySelectorAll('.required'); //nodelist
console.log(inputs);

const spanError = document.querySelectorAll('.error-message');
//console.log(spanError);

const messages = {
    emptyfield: "Preencha o campo {field}",
    shortName: "O campo nome deve ter no mínimo 10 caracteres",
    shortApelido: "O campo apelido deve ter no mínimo 5 caracteres",
    invalidCPF: "Informe um CPF válido (formato: 555.555.555-55)",
    invalidTel: "Informe um Telefone válido (formato: (99) 99999-9999)",
    invalidDataNasc: "Informe uma data valida",
    invalidGenero: "Escolha uma opção válida",
    invalidEmail: "Informe um endereço de email válido",
    invalidSenha: "Senha muito fraca",
    invalidConfirma: "As senhas não são iguais!",
    checkTermos: "Você precisa aceitar os termos de uso"
}

function validateInput(input, spanError) {
    let error = false;
    let message;
   
    if (input.name === 'nome' && input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name)
    } else if (input.name === 'nome' && input.value.length < 10) {
        error = true;
        message = messages.shortName;
    } else if (input.name === 'apelido' && input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name)

    } else if (input.name === 'apelido' && input.value.length < 5) {
        error = true;
        message = messages.shortApelido;
    } else if(input.name === 'cpf' && !/^(\d{3}\.){2}\d{3}-\d{2}$/.test(input.value)){
        error = true;
        message = messages.invalidCPF;
    }else if(input.name === 'tel' && !/^\(\d{2}\) \d{5}-\d{4}$/.test(input.value)){
        error = true;
        message = messages.invalidTel;
    }
    else if(input.name === 'dataNasc' && !input.value || new Date (input.value).getFullYear() >= 2023){
        error = true;
        message = messages.invalidDataNasc;
    }
    else if(input.name ==='genero' && input.value === 'Escolha uma opção'){
        error = true;
        message = messages.invalidGenero;   
    }
    else if (input.name === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
        error = true;
        message = messages.invalidEmail;
    }else if(input.name ==='senha' && input.value.length < 10){
        error = true;
        message = messages.invalidSenha;
    } //else if (input.name === 'confirma' && !confereSenha()) {
        //error = true;
        //message = messages.invalidConfirma;
    //}
    else if(input.name ==='termos' && !input.checked){
        error = true;
        message = messages.checkTermos;
    }

    if (error) { //se o fomrulário contém erros
        spanError.textContent = message;
        spanError.style.display = '';
        spanError.classList.add('errofont');
        input.classList.add('erroInput');
    }
    else {
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('erroInput');
        
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(function (input, index) {
        console.log(input, index)
        const errorMessage = spanError[index];
        validateInput(input, errorMessage);
    });

   

    const cadastro = {
        nomeCompleto: document.getElementById('name').value,
        apelido: document.getElementById('apelido').value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById('tel').value,
        dataNasc: document.getElementById('dataNasc').value,
        genero: document.getElementById('genero').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cep: document.getElementById('cep').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        confirma: document.getElementById('confirma').value
    };

    guardarCadastro(cadastro);
});



inputs.forEach((input) => {
    input.addEventListener('blur', function () {
        const errorMessage = input.spanError = input.nextElementSibling;
        validateInput(input, errorMessage);
    })
})

function confereSenha(){
    const senha = document.getElementById('senha');
    const confirmaSenha = document.getElementById('confirma');

    return confirmaSenha.value === senha.value;
}
function guardarCadastro(cadastro) {
    const arrayCadastro = JSON.parse(localStorage.getItem('cadastro')) || [];
    const CadastroJaExiste = arrayCadastro.find(cad => cad.cpf === cadastro.cpf);

    if (CadastroJaExiste) {
        alert("O cadastro já existe!");
    } else {
        const CadastroSave = {
            nomeCompleto: cadastro.nomeCompleto,
            apelido: cadastro.apelido,
            cpf: cadastro.cpf,
            telefone: cadastro.telefone,
            dataNasc: cadastro.dataNasc,
            genero: cadastro.genero,
            rua: cadastro.rua,
            numero: cadastro.numero,
            bairro: cadastro.bairro,
            cidade: cadastro.cidade,
            estado: cadastro.estado,
            cep: cadastro.cep,
            email: cadastro.email,
            senha: cadastro.senha,
            confirma: cadastro.confirma
        };

        arrayCadastro.push(CadastroSave);
        localStorage.setItem('cadastro', JSON.stringify(arrayCadastro));

        
    }
}

