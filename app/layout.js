import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Tan',
  description: 'Aaron Tan, Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-blue-100 mx-auto max-w-[724px] h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
