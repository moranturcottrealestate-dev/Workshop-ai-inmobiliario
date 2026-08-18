import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workshop Intensivo | IA para Asesores Inmobiliarios",
  description: "Implementa el Método P.R.O.P. y convierte IA en un sistema comercial aplicable a tus propiedades.",
  openGraph: { images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body className={geist.variable}>{children}</body></html>;
}
