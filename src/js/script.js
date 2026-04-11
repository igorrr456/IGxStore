let index = 0;
const images = document.querySelectorAll(".carousel img");
  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  function next() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }

  // Auto-play (opcional)
  setInterval(next, 3000);
let carrinho = [];
let contador = 0;

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    contador++;

    atualizarCarrinho();

    console.log(carrinho);
}

function atualizarCarrinho() {
    const contadorElemento = document.querySelector("#Carrinho-Contador span");
    contadorElemento.textContent = contador;
    alert("Jogo adicionado ao Carrinho!!")
}

