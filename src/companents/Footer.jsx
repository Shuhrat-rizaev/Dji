import gogle from "@/assets/images/gogle.png";
import appstore from "@/assets/images/appstore.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <div className="mt-20 flex  justify-between gap-4">
        <div className="items-start flex flex-col gap-2">
          <p className="font-semibold text-xl mb-4">Contact Us</p>
          <p>Uzbekistan</p>
          <p>+998 94 281 93 99</p>
          <p>demo@exampledemo.com</p>
          <p>Dji Demo Store</p>
          <p>No, 12345 Freedom Tashkent </p>
        </div>
        <div className="items-start flex flex-col gap-2">
          <p className="font-semibold text-xl mb-4">Information</p>
          <p>Product Support</p>
          <p>Checkout</p>
          <p>License Policy</p>
          <p>Affiliate</p>
        </div>
        <div className="items-start flex flex-col gap-2">
          <p className="font-semibold text-xl mb-4">Customer Service</p>
          <p>Help Centre</p>
          <p>Raddem Vaucher</p>
          <p>Contact Us</p>
          <p>Policies & Rules</p>
        </div>
        <div className="items-start flex flex-col gap-2">
          <p className="font-semibold text-xl mb-4">Download Our App</p>
          <p>
            Download our App & get extra 20% Discount on your first Order...!{" "}
          </p>
          <div className="flex gap-4">
            <Image src={gogle} alt="Google link" width={180} />
            <Image src={appstore} alt="App Store Link" width={180} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
