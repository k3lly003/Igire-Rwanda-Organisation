import SideBar from "./components/Sidebar";
import "@/globals.css";
import { imb } from "@/utils/fonts";

export const metadata = {
  title: "IRO Inventory management",
  description: "IRO Inventory management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${imb}`}
      >
        <SideBar />
         {children}
      </body>
    </html>
  );
}
