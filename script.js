function enviarPedido() {
  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let guarnicao = document.getElementById("guarnicao").value;
  let pagamento = document.getElementById("pagamento").value;

  let misturas = document.querySelectorAll(".mistura:checked");
  let extras = document.querySelectorAll(".extra:checked");
  let refris = document.querySelectorAll(".refri:checked");

  let total = 14.99;

  // Misturas extras
  if (misturas.length > 2) {
    total += (misturas.length - 2) * 3.99;
  }

  // Refrigerantes
  let listaRefri = [];
  refris.forEach(r => {
    total += parseFloat(r.dataset.preco);
    listaRefri.push(r.value);
  });

  let listaMistura = [];
  misturas.forEach(m => listaMistura.push(m.value));

  let listaExtras = [];
  extras.forEach(e => listaExtras.push(e.value));

  let mensagem =
`🍛 *NOVO PEDIDO - MEU PRATINHO*

👤 Nome: ${nome}
📍 Endereço: ${endereco}

🍚 Guarnição: ${guarnicao}
🥩 Misturas: ${listaMistura.join(", ")}
➕ Extras: ${listaExtras.join(", ")}

🥤 Refrigerantes: ${listaRefri.join(", ")}

💳 Pagamento: ${pagamento}

💰 TOTAL: R$ ${total.toFixed(2)}`;

  let url = `https://wa.me/5588996444527?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
