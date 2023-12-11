import { headerComponent } from "./components/header.js"
import { footerComponent } from "./components/footer.js"



window.onload = async () => {
    try {
        document.querySelector('#appHeader').innerHTML = headerComponent;
        const appFooter = document.getElementById('appFooter')
        appFooter.innerHTML = footerComponent
        
       feather.replace();
        const produtos = await carregarProdutos();
        console.log(produtos);
        renderizarProdutos(produtos);
        carregarProdutosStorage();
        renderizarTotal();
    } catch (error) {
        console.log("Erro ao carregar os produtos !!", error);
    }
}