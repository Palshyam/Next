import "@/assets/styles/globals.scss";

import type { Metadata } from 'next'
import Header from "./Commoncomponents/Header/Page";
import Footer from "./Commoncomponents/Footer/Page";

export const metadata: Metadata = {
  title: 'First Project',
  description: 'Acme is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
