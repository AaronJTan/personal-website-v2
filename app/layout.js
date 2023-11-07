import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader'
import NavBar from '@/components/NavBar/NavBar'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Tan',
  description: 'Aaron Tan, Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="mx-auto max-w-[724px] h-screen">
          <ProfileHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
