import Main from "../../komponenten/Voornaamst/Main";
import "./PageProductsList.css";

const produtos = [
  {
    nome: "Ford Ka XR 1.6",
    preco: 19900.00,
    cores: ["#191970", "#111111", "#cc0000"],
  },
  {
    nome: "Chevrolet Omega Fittipaldi",
    preco: 59900.00,
    cores: ["#c0c0c0", "#1c1c1c"],
  },
  {
    nome: "Volkswagen Polo Classic 1.8",
    preco: 18000.00,
    cores: ["#5e5e5e", "#f5f5f5", "#1e1e1e"],
  },
];

function PAGEPRODUCTSLIST() {
  return (
    <Main titulo="DESTAQUES">
      {produtos.map((item_prd, index) => {
        return (
          <div key={index} className="PageProductsList_item">
            <h3>produto:</h3>
            {item_prd.nome}
            <br />
            <h3>preco:</h3>
            {item_prd.preco.toLocaleString('pt-BR', {style: 'currency',
              currency: 'BRL'
            })}
            <br />
            <h3>cores:</h3>

            <div className="PageProductsList_colors">
              {item_prd.cores.map((item_clr) => {
                return ( 
                  <div 
                  className="PageProductsList_color-item"
                    style={{
                      background: item_clr,
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </Main>
  );
}

export default PAGEPRODUCTSLIST;
