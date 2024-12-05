import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Header from "./components/headers";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        {children}
        <div className="flex flex-col items-center justify-center pt-10 pb-10 text-beige bg-bleu gap-3">
          <h2 className="text-lg font-bold">DO YOU HAVE A QUESTION ?</h2>
          <p> Write to this adress : contact@skillmatch.com</p>
        </div>
      </body>
    </html>
  );
}
