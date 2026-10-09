const contador = document.getElementById("contador");
const btnCurtir = document.getElementById("btn-curtir");
const inputTexto = document.getElementById("campo-texto");
const preview = document.getElementById("preview-texto");
const caixa = document.getElementById("caixa-cor");

let curtidas = 0;
btnCurtir.addEventListener("click", () => {
  curtidas++;
  contador.textContent = curtidas;
});

inputTexto.addEventListener("input", () => {
  preview.textContent = "Digitando: " + inputTexto.value;
});

caixa.addEventListener("mouseenter", () => {
  caixa.style.backgroundColor = "blue";
});

caixa.addEventListener("mouseleave", () => {
  caixa.style.backgroundColor = "";
});

const btnReset = document.createElement("button");
btnReset.textContent = "Resetar 🔄";
document.body.appendChild(btnReset);

btnReset.addEventListener("click", () => {
  curtidas = 0;
  contador.textContent = 0;
  inputTexto.value = "";
  preview.textContent = "Digitando: ...";
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    curtidas = 0;
    contador.textContent = 0;
    inputTexto.value = "";
    preview.textContent = "Digitando: ...";
  }
});
