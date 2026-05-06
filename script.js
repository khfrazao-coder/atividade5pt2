//Lista de produtos
let produtos = [
    {
        nome: "celular Google",
        preco: 9000,
        imagem: "celular1.jpg"
    },
    {
        nome: "celular Samsung",
        preco: 1500,
        imagem: "celular2.jpg"
    },
    {
        nome: "celular Iphone",
        preco: 8000,
        imagem: "celular3.jpg"
    }
];

//Carrinho
let carrinho = [];

//Mostrar produtos
function mostrarProdutos(){
    let area = document.getElementById("produtos");

    area.innerHTML = ""; // limpa antes de adicionar

    produtos.forEach((produto, index) => {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = produto.imagem;
        img.width = 100;

        let nome = document.createElement("h3");
        nome.innerText = produto.nome;

        let preco = document.createElement("p");
        preco.innerText = "R$ " + produto.preco;

        let botao = document.createElement("button");
        botao.innerText = "Adicionar";
        botao.onclick = function() {
            adicionar(index);
        };

        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(preco);
        div.appendChild(botao);

        area.appendChild(div);

        let hr = document.createElement("hr");
        area.appendChild(hr);
    });
}

//Adicionar ao carrinho metódo push
function adicionar(index){
    carrinho.push(produtos[index]);
    atualizarCarrinho();
}

//Remover do Carrinho metódo splice
function remover(index){
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

//Atualizar o carrinho metódo forEach
function atualizarCarrinho(){
    let area = document.getElementById("carrinho");
    area.innerHTML = "";

    carrinho.forEach((produto, index) =>{

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = produto.imagem;
        img.width = 80;

        let nome = document.createElement("p");
        nome.innerText = produto.nome;

        let preco = document.createElement("p");
        preco.innerText = "R$ " + produto.preco;

        let botao = document.createElement("button");
        botao.innerText = "Remover";
        botao.onclick = function() {
            remover(index);
        };

        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(preco);
        div.appendChild(botao);

        area.appendChild(div);

        let hr = document.createElement("hr");
        area.appendChild(hr);
    });

    calcularTotal();
}

//Calcular o total do carrinho metódo reduce
function calcularTotal(){
    let total = carrinho.reduce((soma, produto)=>{
        return soma + produto.preco;
    }, 0);

    document.getElementById("total").innerText = "Total: R$ " + total;
}

//Inicializar
mostrarProdutos();