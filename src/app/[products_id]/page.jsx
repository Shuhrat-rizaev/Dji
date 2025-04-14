import { message } from "antd";
import Image from "next/image";

const getProductsById = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  } catch (error) {
    message.error("Mahsulotni olishda xatolik yuz berdi");
    console.error(error);
    return null;
  }
};

const page = async ({ params }) => {
  const { products_id } = params;
  const data = await getProductsById(products_id);

  if (!data) {
    return (
      <div className="text-center text-red-500 mt-10">
        Xatolik yuz berdi yoki mahsulot topilmadi.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Mahsulot rasmi */}
        <div className="flex justify-center">
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={400}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Mahsulot ma'lumotlari */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
          <p className="text-gray-600 text-lg">{data.description}</p>
          <div className="flex gap-4 items-center">
            <span className="text-2xl text-orange-600 font-semibold">
              ${data.price}
            </span>
            <span className="text-gray-400 line-through text-lg">
              $10000.00
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Kategoriya:{" "}
            <span className="font-medium text-black">{data.category}</span>
          </p>
          <p className="text-sm text-gray-500">
            Brend: <span className="font-medium text-black">{data.brand}</span>
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-xl transition">
            Savatga qo‘shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
