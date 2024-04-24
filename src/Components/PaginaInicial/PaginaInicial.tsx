import { useEffect, useState } from "react";
import { fetchPage } from "../../Services/ClientApi";
import { PageProps } from "../../Interfaces/PageProps"
import "../PaginaInicial/PaginaInicial.css"

const PaginaInicial: React.FC<PageProps> = ({ symbol }) => {
  const [sym, setSymData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPage(symbol)
      .then((response) => {
        setSymData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [symbol]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;

  return (
    <>
      <div className="card">
        <h1>{symbol}</h1>
        <img src={sym?.logourl} alt={`${sym}`} width={100} />
        <p>
          <div>
            <p>Moeda: {sym?.currency}</p>
            <p>Nome: {sym?.shortName}</p>
            <p>Preço regular no mercado: R$ {sym?.regularMarketPrice}</p>
            <p>Média de preço nos últimos 200 dias: </p>
            <p>R$ {sym?.twoHundredDayAverage}</p>
            <p>Variação média de preço nos últimos 200 dias: </p>
            <p>R$ {sym?.twoHundredDayAverageChange}</p>
          </div>
        </p>
      </div>
    </>
  );
};

export default PaginaInicial;