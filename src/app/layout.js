import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Palerimo Pizza Resutrant",
  description: "We welcome to Palerimo Pizza Resutrant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`roboto.className `}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
