function contadora() {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
  let contadora = 0;
  arrayProdutos.forEach((prod) => {
    contadora += 1;
  });
  return contadora;
}

async function carregarProdutos() {
  try {
    const response = await fetch('../data/produtos.json');
    const produtos = await response.json();
    return produtos;
  } catch (error) {
    console.log("Erro ao carregar os produtos", error);
  }
}

async function renderizarProdutos() {
  const produtosContainer = document.getElementById('produtosContainer');
  const arrayProdutos = await carregarProdutos();
  arrayProdutos.forEach(prod => {
    const produtoCard = document.createElement('div');
    produtoCard.classList.add('card', 'col-lg-3', 'border-dark', 'mb-3', 'border-radius3');
    produtoCard.innerHTML =
      `
      
    <img src="${prod.imagem}" class="card-img-top" alt="...">
    <div class="card-body" style="min-height: 150px;">
        <a href="produto.html" class="card-title link text-dark fw-bolder">${prod.titulo}</a>
    </div>

    <ul class="list-group list-group-flush">
        <li class="list-group-item text-success fw-bolder"> À vista ${prod.preco}</</li>
    </ul>

    <p class="card-text c-red fw-bolder ">_____</p>

    <p class="card-text fw-bolder">
        <span class="c-red fw-bolder">${prod.aPrazo}</span><br>
        em até <span class="c-red fw-bolder">${prod.parcela}</span>x<br>
        sem juros no cartão
    </p>

    <div class="card-body">
        <button class="btAdicionar btn-dark btn w-100 position-absolute bottom-0 start-50 translate-middle-x botoes">Adicionar ao carrinho</button>
    </div>


    `;
    produtoCard.querySelector('.btAdicionar').addEventListener('click', () => {
      adicionarAoCarrinho(prod);
    })
    produtosContainer.appendChild(produtoCard);
  });
}



function renderizarTotal() {
  const divResumo = document.getElementById('divResumo');
  const total = resumo();
  const aPrazo = resumoAprazo();
  const parcela = aPrazo / 12;
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('text-light');
  totalDiv.innerHTML = `
<h5 class='text-center mt-5 text-success'>A VISTA R$ ${total.toFixed(2)} <br>COM 15% DE DESCONTO</h5>
<h5 class='text-center mt-5 text-danger'>A PRAZO: R$ ${aPrazo.toFixed(2)}</h5>
<p class='text-center mt-1 text-danger'>EM 12x DE: R$ ${parcela.toFixed(2)}</p>`
    ;
  divResumo.appendChild(totalDiv);
}


async function adicionarAoCarrinho(produto) {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
  const produtoJaExiste = arrayProdutos.find(prod => prod.id === produto.id);
  if (produtoJaExiste) {
    alert("Produto já está no carrinho!");

  }
  else {
    const produtoCarrinho = {
      id: produto.id,
      titulo: produto.titulo,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: produto.quantidade,
      aPrazo: produto.aPrazo
    };
    arrayProdutos.push(produtoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
  }

}


function novoProdutoTr(produto) {
  const novaTr = document.createElement('tr');
  const precoNumerico = parseFloat(produto.preco.replace('R$', '').replace('.', '').replace(',', '.'));

  novaTr.innerHTML =

    `
  <td><img src='${produto.imagem}' class = "w-100"></td>
  <td>${produto.titulo}</td>
  <td><input class="quantity quantidade" type="number" value="${produto.quantidade}"></td>
  <td>${produto.preco}</td>
  <td>R$ ${(precoNumerico * produto.quantidade).toFixed(2)}</td>
  <td><i class="fa fa-trash"></i></td>
  `

  return novaTr;
}

function resumo() {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
  let totalAux = 0;
  arrayProdutos.forEach((prod) => {
    const precoNumerico = parseFloat(prod.preco.replace('R$', '').replace('.', '').replace(',', '.'));
    totalAux += precoNumerico * prod.quantidade;
  });

  return totalAux;
}

function resumoAprazo() {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
  let totalAux = 0;
  arrayProdutos.forEach((prod) => {
    const precoNumerico = parseFloat(prod.aPrazo.replace('R$', '').replace('.', '').replace(',', '.'));
    totalAux += precoNumerico * prod.quantidade;
  });

  return totalAux;
}


function addProdutoTabela(produto) {
  const tableBody = document.querySelector('#tbProducts tbody');
  tableBody.appendChild(novoProdutoTr(produto));
}

function carregarProdutosStorage() {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho'));
  arrayProdutos.forEach(prod => {
    addProdutoTabela(prod);
  });
}

document.querySelector('#tbProducts tbody').addEventListener('input', function (event) {
  const target = event.target;
  if (target.classList.contains('quantity')) {
    const row = target.closest('tr');
    const titulo = row.querySelector('td:nth-child(2)').textContent;
    const novaQuantidade = parseInt(target.value, 10);
    atualizaStorage(titulo, novaQuantidade);
  }
})

function atualizaStorage(titulo, novaQuantidade) {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
  arrayProdutos.forEach((prod) => {
    if (prod.titulo === titulo) {
      prod.quantidade = novaQuantidade;
    }
  })
  resumo();
  localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
}


document.querySelector("#tbProducts tbody").addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const row = event.target.closest('tr');
    const titulo = row.querySelector('td:nth-child(2)').textContent;
    removerProdutoDaTabela(row);
    removerProdutoStorage(titulo);
  }
})

function removerProdutoDaTabela(row) {
  row.remove();
}

function removerProdutoStorage(titulo) {
  const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
  const produtoIndex = arrayProdutos.findIndex(prod => prod.titulo === titulo);

  if (produtoIndex !== -1) {
    arrayProdutos.splice(produtoIndex, 1);
    localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
  }

}
