import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch, FaHistory } from "react-icons/fa";

export default function TabBar() {
  const router = useRouter(); // Obtém a rota atual

  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-md p-2 flex justify-around border-t border-gray-200">
      <Link href="/">
        <div
          className={`flex flex-col items-center ${
            router.pathname === "/" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <FaSearch size={24} />
          <span className="text-xs">Pesquisar</span>
        </div>
      </Link>
      <Link href="/history">
        <div
          className={`flex flex-col items-center ${
            router.pathname === "/history" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <FaHistory size={24} />
          <span className="text-xs">Histórico</span>
        </div>
      </Link>
    </nav>
  );
}
