import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Tan',
  description: 'Aaron Tan, Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-1">
          <div className="mx-auto max-w-[724px]">
            <ProfileHeader />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
