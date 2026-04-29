const base = 14.99;

document.querySelectorAll("input").forEach(el => {
  el.addEventListener("change", calcular);
});

function calcular() {
  let total = base;

  let misturas = document.querySelectorAll(".mistura:checked");
  let refris = document.querySelectorAll(".refri:checked");

  if (misturas.length > 2) {
    total += (misturas.length - 2) * 3.99;
  }

  refris.forEach(r => {
    total += parseFloat(r.dataset.preco);
  });

  document.getElementById("total").innerText = "R$ " + total.toFixed(2);
}

function finalizar() {

  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let guarnicao = document.getElementById("guarnicao").value;
  let pagamento = document.getElementById("pagamento").value;

  let misturas = [...document.querySelectorAll(".mistura:checked")].map(e => e.value);
  let extras = [...document.querySelectorAll(".extra:checked")].map(e => e.value);
  let refris = [...document.querySelectorAll(".refri:checked")].map(e => e.value);

  let total = document.getElementById("total").innerText;

  let mensagem =
`🍛 *MEU PRATINHO - NOVO PEDIDO*

👤 Nome: ${nome}
📍 Endereço: ${endereco}

🍚 Guarnição: ${guarnicao}

🥩 Misturas:
${misturas.join(", ")}

➕ Adicionais:
${extras.join(", ")}

🥤 Refrigerantes:
${refris.join(", ")}

💳 Pagamento: ${pagamento}

💰 TOTAL: ${total}`;

  let url = `https://wa.me/5588996444527?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
