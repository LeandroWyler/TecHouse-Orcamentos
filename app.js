let modelos = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    modelos = data;
  })
  .catch(error => {
    console.error('Erro ao carregar os dados:', error);
  });

function buscarModelo() {
  const input = document.getElementById('modeloInput').value.trim().toLowerCase();
  const resultado = modelos.find(item => item.modelo.toLowerCase() === input);

  const divResultado = document.getElementById('resultado');
  const valorTela = document.getElementById('valorTela');
  const maoObra = document.getElementById('maoObra');
  const total = document.getElementById('total');

  if (resultado) {
    valorTela.textContent = resultado.valorTela.toFixed(2);
    maoObra.textContent = resultado.maoObra.toFixed(2);
    total.textContent = resultado.total.toFixed(2);
    divResultado.classList.remove('hidden');
  } else {
    valorTela.textContent = '';
    maoObra.textContent = '';
    total.textContent = '';
    divResultado.classList.add('hidden');
    alert('Modelo não encontrado.');
  }
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado com sucesso!"))
    .catch(err => console.error("Erro ao registrar o Service Worker:", err));
}
