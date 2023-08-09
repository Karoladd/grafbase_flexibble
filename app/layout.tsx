import './css/1/globals.css'

import Navbar from '@/components/Navbar/1/Navbar'
import Footer from '@/components/Footer/1/Footer'
export const metadata = {
  title: 'Flexibble',
  description: 'Descobrir desenvolviemnto de projetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        
    </html>
  )
}
