import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blog App Homepage",
    template: "%s | Blog App",
  },
  description: "This is an app to present and show case a blog",
};
//this is where we can add some layout for children for example.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className}">
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
