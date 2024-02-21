import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script>
        {`(function (w, d, s, o, f, js, fjs) { w[o] = w[o] || function () { (w[o].q =
          w[o].q || []).push(arguments); }; (js = d.createElement(s)), (fjs =
          d.getElementsByTagName(s)[0]); js.id = o; js.src = f; js.async = 1;
          fjs.parentNode.insertBefore(js, fjs); })(window, document, "script", "_cvt",
          "https://cdn.convrrt.com/libs/popup/widget.js");
          _cvt("init", {
            orgID: 'mailmodo',
            projectID: "0004ede9-b0b1-55d5-b0b2-819243f1c0ea_f5ad2069-61cf-4503-8b70-7e7b6eae5812",
            popupID: "ec25ac2c-7a17-45be-94e8-13f093af2e6e"
          });`}
      </script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
