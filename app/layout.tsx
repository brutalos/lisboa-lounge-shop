import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/context/LanguageContext"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lisboa Lounge | Dine & Wine",
  description: "Portugiesische Tradition reimagined. Entdecken Sie authentische Aromen im Herzen Wiens.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-accent selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
