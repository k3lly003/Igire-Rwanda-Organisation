import Navbar from "@/components/sections/navBar";
import "./globals.css";
import { imb } from "./utils/fonts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IRO",
  description: "igire rwanda organisation website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${imb}`}
      >
        <Navbar />
         {children}
        <Footer />
      </body>
    </html>
  );
}
