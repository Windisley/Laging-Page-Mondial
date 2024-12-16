import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Aparador Mondial",
  description: "Descubra o Aparador Super Groom 10 com 30 dias de garantia! Garantia, durabilidade e modernidade para manter seu estilo sempre alinhado. Saiba mais e adquira o seu agora mesmo!",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      className="
       bg-white font-roboto-regular
      "
      >
         {children}
      </body>
    </html>
  );
}
