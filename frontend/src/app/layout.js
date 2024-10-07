import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Viviency",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
