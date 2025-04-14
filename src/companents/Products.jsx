import Image from "next/image";
import { message } from "antd";
import Link from "next/link";

const getProducts = async () => {
  try {
    const res = await fetch({
      url: `https://dummyjson.com/products`,
      method: "GET",
    });
    return res.json();
  } catch (error) {
    console.log(message);
  }
};

export default async function Products() {
  const products_list = await getProducts();
  console.log(products_list);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {products_list?.products?.map((item) => {
        return (
          <div key={item.id} className="col-span-1">
            <div className="p-4 h-80 border-0 rounded-xl shadow-sm hover:shadow-2xl transition flex flex-col items-center gap-2">
              <Image
                src={item.thumbnail}
                alt="smart watch"
                width={180}
                height={150}
              />
              <h2 className="text-[#484848] text-[18px] text-center">
                {item.title}
              </h2>
              <div className="flex gap-2">
                <p className="text-[#FF5B00]">${item.price}</p>
                <p className="line-through text-gray-400">$100.00</p>
              </div>
              <Link href={`/${item.id}`}>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300">
                  Batafsil
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
