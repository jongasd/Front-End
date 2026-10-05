import { useState } from "react";

// Aula 4 (E3): a quantidade não passa de 10
const QUANTIDADE_MAXIMA = 10;

function CardPrato({ nome, preco, categoria, descricao, onAdicionar }) {
  const [quantidade, setQuantidade] = useState(1);
  const [curtidas, setCurtidas] = useState(0); // Aula 4 (E2)
  const [mostrarDescricao, setMostrarDescricao] = useState(false); // Aula 4 (E4)

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    if (quantidade < QUANTIDADE_MAXIMA) {
      setQuantidade(quantidade + 1);
    }
  }

  function adicionar() {
    onAdicionar(quantidade, preco);
    setQuantidade(1);
  }

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      {/* Aula 3 (D1): emoji só na sobremesa */}
      <h2>
        {categoria === "Sobremesa" ? "🍰 " : ""}
        {nome}
      </h2>
      <p className="preco">{precoFormatado}</p>

      {/* Aula 3 (E3) prop descricao + Aula 4 (E4) mostrar/esconder */}
      {mostrarDescricao && <p className="descricao">{descricao}</p>}
      <button
        type="button"
        className="btn-secundario"
        onClick={() => setMostrarDescricao(!mostrarDescricao)}
      >
        {mostrarDescricao ? "Esconder descrição" : "Ver descrição"}
      </button>

      <div className="quantidade">
        <button type="button" onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>
          −
        </button>
        <span>{quantidade}</span>
        <button type="button" onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>
          +
        </button>
      </div>

      <button type="button" className="btn-adicionar" onClick={adicionar}>
        Adicionar ao pedido
      </button>
      <button type="button" className="btn-secundario" onClick={() => setCurtidas(curtidas + 1)}>
        ❤️ Curtir ({curtidas})
      </button>
    </article>
  );
}

export default CardPrato;
