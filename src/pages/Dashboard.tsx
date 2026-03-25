import { Product } from "../types";

interface Props {
  products: Product[];
}

export default function Dashboard({ products }: Props) {
  const totalItems = products.length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const outOfStock = products.filter((p) => p.quantity === 0).length;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">📦 Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 rounded-xl p-6 shadow">
          <p className="text-gray-500 text-sm">สินค้าทั้งหมด</p>
          <p className="text-4xl font-bold text-blue-600">{totalItems}</p>
          <p className="text-gray-400">รายการ</p>
        </div>
        <div className="bg-green-100 rounded-xl p-6 shadow">
          <p className="text-gray-500 text-sm">มูลค่ารวม</p>
          <p className="text-4xl font-bold text-green-600">
            ฿{totalValue.toLocaleString()}
          </p>
          <p className="text-gray-400">บาท</p>
        </div>
        <div className="bg-red-100 rounded-xl p-6 shadow">
          <p className="text-gray-500 text-sm">สินค้าหมด</p>
          <p className="text-4xl font-bold text-red-600">{outOfStock}</p>
          <p className="text-gray-400">รายการ</p>
        </div>
      </div>
    </div>
  );
}