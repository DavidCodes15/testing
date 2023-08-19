import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/user/Nav'
import Footer from '@/components/user/Footer'
import Provider from '@/components/admin/Provider'
import { LanguageProvider } from '@/utils/languageContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'georgian pipe',
  description: 'company that produces pipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <LanguageProvider>
        <Nav />
        <main>
        {children}
        </main>
        <Footer />
        </LanguageProvider>
        </Provider>
        </body>
    </html>
  )
}
