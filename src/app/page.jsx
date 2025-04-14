import Image from "next/image";
import wach from "@/assets/images/wach.png";
import iphon from "@/assets/images/15.png";
import airpod from "@/assets/images/airpod.png";
import calonka from "@/assets/images/calonka.png";
import airpods from "@/assets/images/AirPods.png";
import Laptop from "@/assets/images/Laptop.png";
import Ipad from "@/assets/images/Ipad.png";
import camera from "@/assets/images/Camera.png";
import games from "@/assets/images/Games.png";
import lased from "@/assets/images/Latest.png";
import nutbuk from "@/assets/images/labtop.png";
import speakers from "@/assets/images/speakers.png";
import charger from "@/assets/images/charger.png";
import atv from "@/assets/images/Atv.png";
import pro from "@/assets/images/15pro.png";
import proMAx from "@/assets/images/15max.png";
import povurbank from "@/assets/images/povurbank.png";
import math from "@/assets/images/math.png";
import img from "@/assets/images/photo.png";
import photo from "@/assets/images/img.png";
import aksesuvar from "@/assets/images/aksesuvar.png";
import box from "@/assets/images/box.png";
import hamburger from "@/assets/images/hamburger.png";
import dollor from "@/assets/images/dollor.png";
// import gogle from "@/assets/images/gogle.png";
// import appstore from "@/assets/images/appstore.png";
import Products from "@/companents/Products";
import Footer from "@/companents/Footer";
export default function Home() {
  return (
    <div className=" container mx-auto w-[85%]">
      <section className="mt-19">
        <div className=" flex justify-between">
          <div className=" flex flex-col items-start gap-6        ">
            <h2 className="text-[#FA6B1C] text-2xl ">SALE UP TO 30% OFF</h2>
            <h1 className=" text-[54px]">Apple Watch Series</h1>
            <p>
              Featured packed at a batter value than over pawerful sensors to
              manitor your fitness
            </p>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300">
              {" "}
              Shop Now{" "}
            </button>
          </div>
          <div>
            <Image src={wach} alt="Apple wach" width={600} />
          </div>
        </div>
      </section>
      <div className="mt-[80px] flex justify-between">
        <div className="  md:w-40 p-4   border-0 rounded-xl shadow-sm hover:shadow-2xl transition ">
          <Image
            src={iphon}
            alt=" iphone 15Pro max"
            width={106}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-gray-700 mt-3 font-medium text-lg">
            Iphone
          </p>
        </div>{" "}
        <div className="  md:w-40 p-4  rounded-xl shadow-sm hover:shadow-2xl transition ">
          <Image
            src={airpod}
            alt=" Airpods max"
            width={106}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-gray-700 mt-3 font-medium text-lg">
            Headphone
          </p>
        </div>{" "}
        <div className="  md:w-40 p-4  rounded-xl shadow-sm hover:shadow-2xl transition ">
          <Image
            src={calonka}
            alt=" Zamonaziy kalonca"
            width={106}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-gray-700 mt-3 font-medium text-lg">
            Mini Speakers
          </p>
        </div>{" "}
        <div className="  md:w-40 p-4  rounded-xl shadow-sm hover:shadow-2xl transition ">
          <Image
            src={airpods}
            alt=" Airpods pro"
            width={106}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-gray-700 mt-3 font-medium text-lg">
            Accessories
          </p>
        </div>{" "}
        <div className="  md:w-40 p-4 rounded-xl shadow-sm hover:shadow-2xl transition ">
          <Image
            src={Laptop}
            alt="M3 pro laptop "
            width={106}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-gray-700 mt-3 font-medium text-lg">
            Laptop
          </p>
        </div>{" "}
        <div className="  md:w-40 p-4  rounded-xl shadow-sm hover:shadow-2xl transition ">
          <Image
            src={Ipad}
            alt=" Ipad "
            width={106}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-gray-700 mt-3 font-medium text-lg">
            Ipad mini Pro
          </p>
        </div>
      </div>
      <div className="flex  justify-between mt-20 ">
        <div className="bg-gray-200 w-[500px] rounded-2xl flex flex-col items-center gap-4 justify-center shadow-2xs">
          <div className=" flex flex-col justify-between items-center gap-3 ">
            <p className="text-sm text-gray-500">Security smart Camera</p>
            <h2 className="text-2xl font-semibold my-2">
              Just starting at $850
            </h2>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="-mt-10">
            <Image src={camera} alt="camera" width={400} height={250} />
          </div>
        </div>
        <div className="bg-gray-200 w-[500px] rounded-2xl flex flex-col items-center gap-4 justify-center p-4 shadow-2xs">
          {" "}
          <p className="text-sm text-gray-500">Entertainment & Games</p>
          <h2 className="text-2xl font-semibold my-2">Just starting at $450</h2>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300">
            {" "}
            Shop Now{" "}
          </button>
          <Image src={games} alt="games jostic" width={250} />
        </div>
      </div>
      <div className=" mt-30 flex justify-between gap-2">
        <div className="md:w-62 p-4 h-80  border-0 rounded-xl shadow-sm hover:shadow-2xl transition flex flex-col items-center gap-2">
          <Image src={lased} alt="samart wach" width={180} />
          <h2 className="text-[#484848] text-[18px]">Latest Smart Watch </h2>
          <div className="flex  gap-2">
            <p className="text-[#FF5B00]">$90.00</p>
            <p>$100.00</p>
          </div>
        </div>{" "}
        <div className="md:w-62 p-4 h-80  border-0 rounded-xl shadow-sm hover:shadow-2xl transition flex flex-col items-center gap-2">
          <Image src={nutbuk} alt="samart wach" width={180} />
          {/* <Image src={yulduz} alt=" yulduz" width={160} /> */}
          <h2 className="text-[#484848] text-[16px]">Apple Mackbook Air M3</h2>
          <div className="flex  gap-2">
            <p className="text-[#FF5B00]">$1099.00</p>
            <p>$1199.00</p>
          </div>
        </div>{" "}
        <div className="md:w-62 p-4 h-80  border-0 rounded-xl shadow-sm hover:shadow-2xl transition flex flex-col items-center gap-2">
          <Image src={speakers} alt="samart wach" width={180} />
          {/* <Image src={yulduz} alt=" yulduz" width={160} /> */}
          <h2 className="text-[#484848] text-[18px]">Homepad mini</h2>
          <div className="flex  gap-2">
            <p className="text-[#FF5B00]">$54.00</p>
            <p>$68.00</p>
          </div>
        </div>{" "}
        <div className="md:w-62 p-4 h-80  border-0 rounded-xl shadow-sm hover:shadow-2xl transition flex flex-col items-center gap-2">
          <Image src={charger} alt="samart wach" width={180} />
          {/* <Image src={yulduz} alt=" yulduz" width={160} /> */}
          <h2 className="text-[#484848] text-[18px]">Drou safe charger </h2>
          <div className="flex  gap-2">
            <p className="text-[#FF5B00]">$34.00</p>
            <p>$52.00</p>
          </div>
        </div>{" "}
        <div className="md:w-62 p-4 h-80  border-0 rounded-xl shadow-sm hover:shadow-2xl transition flex flex-col items-center gap-2">
          <Image src={atv} alt="samart wach" width={180} />
          {/* <Image src={yulduz} alt=" yulduz" width={160} /> */}
          <h2 className="text-[#484848] text-[18px]">Home Entertainment</h2>
          <div className="flex  gap-2">
            <p className="text-[#FF5B00]">$94.00</p>
            <p>$113.00</p>
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-around mt-[64px]  ">
        <div className="flex flex-col items-center gap-5">
          <button className="bg-orange-500 text-white px-6 py-2  text-sm font-medium hover:bg-orange-600 transition duration-300">
            Hurry Up!
          </button>
          <h1 className=" text-[50px]  text-center">
            Up To 20 % Discount Check it Out
          </h1>
          <div className="flex gap-3">
            <div className="bg-gray-200 p-4 text-center rounded-lg ">
              <h1>310</h1>
              <p>DAYS</p>
            </div>{" "}
            <div className="bg-gray-200 p-4 text-center rounded-lg ">
              <h1>06</h1>
              <p>HRS</p>
            </div>{" "}
            <div className="bg-gray-200 p-4 text-center rounded-lg ">
              <h1>34</h1>
              <p>MINS</p>
            </div>{" "}
            <div className="bg-gray-200 p-4 text-center rounded-lg ">
              <h1>08</h1>
              <p>SEC</p>
            </div>
          </div>
          <p className="text-xl font-bold">Shop Now</p>
        </div>
        <div className="flex">
          <Image
            src={pro}
            alt="Iphone 15 pro "
            width={250}
            height={273}
            className="mt-32"
          />
          <Image src={proMAx} alt="Iphone 15 pro Max" width={360} />
        </div>
      </div>
      {/* Products Page */}
      <Products />
      <div className="mt-20 flex gap-5">
        <div className="flex flex-col items-start gap-3">
          <Image src={povurbank} alt="quvatlagich" width={400} />
          <div className="flex gap-2">
            <Image src={math} alt="math" width={24} />
            <p>March 15 2025</p>
          </div>
          <p>Music magnate headphone</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Image src={photo} alt="ish stoli" width={400} />
          <div className="flex gap-2">
            <Image src={math} alt="math" width={24} />
            <p>March 15 2025</p>
          </div>
          <p>Music magnate headphone</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Image src={img} alt="rasm" width={400} />
          <div className="flex gap-2">
            <Image src={math} alt="math" width={24} />
            <p>March 15 2025</p>
          </div>
          <p>Music magnate headphone</p>
        </div>
      </div>
      <div className="flex gap-10 mt-20">
        <div>
          <Image src={aksesuvar} alt="Apple aksesuvarlari" width={640} />
        </div>
        <div className="flex flex-col items-center gap-3 mt-10">
          <p className="text-[#474747]">Big discount</p>
          <h2 className="text-3xl text-[#474747]">Must buying apple devices</h2>
          <h3 className="text-[#CF4900]  text-2xl font-semibold ">$450.00</h3>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300 mt-5">
            Shop Now
          </button>
        </div>
      </div>
      <div className="mt-20 flex justify-between pb-5 border-b-2 border-gray-300">
        <div className="flex flex-col items-center gap-4 w-[215px]">
          <Image src={box} alt="box" width={55} />
          <p className="text-2xl font-semibold">Free Delivery</p>
          <p className="text-[#606060] text-center">
            And free returns. Checkout for delivery date.
          </p>
        </div>{" "}
        <div className="flex flex-col items-center gap-4 w-[290px]">
          <Image src={dollor} alt="box" width={55} />
          <p className="text-2xl font-semibold">Pay monthly at 0% APR</p>
          <p className="text-[#606060] text-center">
            Choos to checkout with Apple Card monthly installmants.
          </p>
        </div>{" "}
        <div className="flex flex-col items-center gap-4  w-[240px]">
          <Image src={hamburger} alt="box" width={55} />
          <p className="text-2xl font-semibold">Personalize it</p>
          <p className="text-[#606060] text-center">
            Engrave your device with your name or a personal note.
          </p>
        </div>
      </div>
    </div>
  );
}
