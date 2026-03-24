import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useInventory } from "./hooks/useInventory";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

export default function App() {
  const inventory = useInventory();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow px-8 py-4 flex gap-6">
          <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800">
            📊 Dashboard
          </Link>
          <Link to="/products" className="text-blue-600 font-semibold hover:text-blue-800">
            🛒 จัดการสินค้า
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard products={inventory.products} />} />
          <Route path="/products" element={<Products {...inventory} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}