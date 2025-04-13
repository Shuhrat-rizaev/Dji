import Navbar from "@/companents/Navbar";
import "./globals.css";

export const metadata = {
  title: "Next js",
  description: "Mening birinchi next loyham va men urganyapman",
  keywords: "me, neki, Abduqodir, ",
  icons: {
    icon: "/next.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <h1>Footer</h1>
    </html>
  );
}
