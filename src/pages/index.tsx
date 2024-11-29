import { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

export default function Home() {
  const [gasoline, setGasoline] = useState("");
  const [ethanol, setEthanol] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    if (!gasoline || !ethanol) {
      alert("Preencha os campos de gasolina e etanol!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3333/fuel-check", {
        gasoline: Number(gasoline),
        ethanol: Number(ethanol),
      });
      console.log('response', response);

      setResult(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Erro ao calcular o melhor combustível!");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Qual Combustível Vale Mais a Pena?</h1>
        <div className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-white mb-2">Preço da Gasolina:</label>
            <input
              type="number"
              placeholder="R$"
              value={gasoline}
              onChange={(e) => setGasoline(e.target.value)}
              className="w-full p-2 border rounded text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Preço do Etanol:</label>
            <input
              type="number"
              placeholder="R$"
              value={ethanol}
              onChange={(e) => setEthanol(e.target.value)}
              className="w-full text-gray-700 p-2 border rounded"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Calcular
          </button>
        </div>
        {result && (
          <div className="mt-4 p-4 bg-green-100 border text-gray-700 border-green-300 rounded">
            <p>{result}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
