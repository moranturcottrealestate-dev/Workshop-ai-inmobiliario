import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inteligencia Artificial para Asesores Inmobiliarios | Método P.R.O.P.",
  description: "Workshop Intensivo en vivo para asesores inmobiliarios. Multiplica tu capacidad comercial con el Método P.R.O.P.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body className={geist.variable}>{children}</body></html>;
}
