import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import 'animate.css';

const monaSansFont = Mona_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Qurbani Hat",
  description:  "Explore the best Qurbani animals including cows, goats, and sheep. Find verified sellers, compare prices, and book your Qurbani easily online in Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${monaSansFont.className} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
