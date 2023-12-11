export const headerComponent =
    `
<header>
    <!--Barra de navegação-->
    <nav class="navbar navbar-expand-lg bgcb justify-content-between fixed-top">
        <div class="d-flex align-items-center">
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-list-ul text-light"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-black">
                                <li><a class="dropdown-item" href="#"><i
                                            class="bi bi-pc-display-horizontal pe-2"></i>Monte seu PC</a>
                                </li>
                                <li><a class="dropdown-item" href="#lancamentos"> <i
                                            class="bi bi-lightning-fill pe-2"></i>Lançamentos</a></li>
                                <li><a class="dropdown-item" href="#"><i
                                            class="fa-solid fa-chair pe-2"></i>Cadeiras</a></li>
                                <li><a class="dropdown-item" href="#"> <i
                                            class="class=bi bi-pc pe-2"></i>Gabinetes</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-pc-display pe-2"></i>Gabinetes
                                        Prontos</a></li>
                                <li><a class="dropdown-item" href="#"><i
                                            class="bi bi-hand-thumbs-up-fill pe-2"></i>Avaliações</a>
                                </li>
                                <li><a class="dropdown-item" href="#"> <i
                                            class="bi bi-star-half pe-2"></i>Favoritos</a></li>
                                <li><a class="dropdown-item" href="#"> <i
                                            class="bi bi-percent pe-2"></i>Promoções</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-backpack2-fill pe-2"></i>Novos
                                        Produtos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class=" text-light d-flex align-items-center">
                <div>
                    <a class="navbar-brand me-2" href="index.html">
                        <img src="/img/Logo2.png" alt="Logo" width="50" height="44"
                            class="d-inline-block align-text-top logo">
                    </a>
                </div>
                <div class="navbar-brand ">
                    <a> NinjaDrive</a>
                </div>
            </div>
        </div>
        <div class="w35">
            <div class="container-fluid">
                <form class="d-flex " role="search ">
                    <input class="form-control bgcw  " type="search" placeholder="Pesquisar" aria-label="Search">
                    <button class="btn btn-outline-light bgcw" type="submit"><i
                            class="bi bi-search text-dark"></i></button>
                </form>
            </div>
        </div>
        <div class="d-flex">
            <div class="container-fluid mb-1">
                <a class="navbar-brand text-light" href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="d-inline-block align-text-top bi bi-person-circle"></i>
                    Entrar
                </a>
            </div>
            <div class="container-fluid mt-2">
                <a class="navbar-brand text-light " href="carrinho.html">
                <i class="d-inline-block align-text-top bi bi-cart-fill position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                ${contadora()}
                <span class="visually-hidden">unread messages</span></i>
                </a>
            </div>
            <div class="container-fluid">
                <a class="navbar-brand text-light " href="#">
                    <i class="bi bi-whatsapp"></i>
                </a>
            </div>
        </div>
        
    </nav>
    
</header>

<!--Modal-->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header  bgcb text-light">
        <i class="bi bi-person-lock me-2"></i><h5 class="modal-title " id="exampleModalLabel">Fazer Login</h5>
        <button type="button" class="btn-close bgcw " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class=" mb-1 mr-2">
          <label for="">E-mail</label>
          <input type="text" name="email" id="email">
      </div>
      <div class="mb-1">
        <label for="">Senha</label>
        <input type="password" name="senha" id="senha" required class="bgcw">
    </div>
    <a href="#" class= "link-danger">Esqueci Minha senha</a>
      </div>
      <div class="modal-footer">
        <a href="cadastro.html" class="btn bgcb text-light">Cadastre-se</a>
         <button type="button" class="btn  btn-danger" data-bs-dismiss="modal">Acessar Conta</button>
      </div>
    </div>
  </div>
</div>
`