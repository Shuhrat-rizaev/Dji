import Navbar from "@/companents/Navbar";
import "./globals.css";
// import { Poppins } from "next/font/google";
import { Poppins } from "next/font/google";
import Footer from "@/companents/Footer";
export const metadata = {
  title: "Next js",
  description: "Mening birinchi next loyham va men urganyapman",
  keywords: "me, neki, Abduqodir, ",
  icons: {
    icon: "/next.jpg",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "block",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={poppins.className}>{children}</body>
      <Footer />
    </html>
  );
}
