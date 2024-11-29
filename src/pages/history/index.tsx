import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function History() {
  interface HistoryItem {
    id: number;
    gasoline: number;
    ethanol: number;
    createdAt: string;
  }

  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("http://localhost:3333/fuel-check");
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar o histórico!");
      }
    };

    fetchHistory();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col text-gray-700 items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Histórico de Pesquisas</h1>
        <div className="w-full max-w-md mb-12">
          {history.length > 0 ? (
            history.map((item) => (
              <div
                key={item.id}
                className="p-4 mb-2 border rounded shadow-sm bg-gray-50"
              >
                <p>Gasolina: R$ {item?.gasoline.toFixed(2)}</p>
                <p>Etanol: R$ {item.ethanol.toFixed(2)}</p>
                <p>Data: {new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Nenhuma pesquisa encontrada.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
