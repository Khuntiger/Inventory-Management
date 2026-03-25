import { useState } from "react";
import { Product } from "../types";

interface Props {
  products: Product[];
  addProduct: (name: string, price: number, quantity: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  deleteProduct: (id: number) => void;
}

export default function Products({ products, addProduct, updateQuantity, deleteProduct }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    if (!name || !price || !quantity) return;
    addProduct(name, Number(price), Number(quantity));
    setName("");
    setPrice("");
    setQuantity("");
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">🛒 จัดการสินค้า</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">เพิ่มสินค้าใหม่</h2>
        <div className="flex gap-4">
          <input
            className="border rounded-lg px-4 py-2 flex-1"
            placeholder="ชื่อสินค้า"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 w-32"
            placeholder="ราคา"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 w-32"
            placeholder="จำนวน"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleAdd}
          >
            เพิ่มสินค้า
          </button>
        </div>
      </div>
      <input
        className="border rounded-lg px-4 py-2 w-full mb-6"
        placeholder="🔍 ค้นหาสินค้า..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className={`rounded-xl shadow p-4 flex items-center justify-between ${
              p.quantity === 0 ? "bg-red-50" : "bg-white"
            }`}
          >
            <div>
              <p className="text-lg font-semibold">{p.name}</p>
              <p className="text-gray-500">฿{p.price.toLocaleString()}</p>
              {p.quantity === 0 && (
                <span className="text-red-500 text-sm font-medium">สินค้าหมด</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold w-8 text-center">{p.quantity}</span>
              <button
                className="bg-green-500 text-white w-8 h-8 rounded-lg hover:bg-green-600"
                onClick={() => updateQuantity(p.id, 1)}
              >+</button>
              <button
                className="bg-yellow-500 text-white w-8 h-8 rounded-lg hover:bg-yellow-600"
                onClick={() => updateQuantity(p.id, -1)}
              >-</button>
              <button
                className="bg-red-500 text-white px-3 h-8 rounded-lg hover:bg-red-600"
                onClick={() => deleteProduct(p.id)}
              >ลบ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}