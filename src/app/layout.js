import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import "animate.css";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sun Cart",
  description: "Summer Essentials For Every Adventure",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme='light'
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
        </body>
         <ToastContainer />
    </html>
  );
}
