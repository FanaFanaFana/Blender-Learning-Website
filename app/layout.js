import './globals.css'
import { customFont } from './fonts'
import { IconProvider } from '@/components/shared/IconContext'

export const metadata = {
  title: 'Blender Visual Documentation - Master 3D Modeling, Animation, and Rendering',
  description: 'Master the art of 3D modeling, animation, and rendering with Blender',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.variable}>
      <body className={customFont.className}>
        <IconProvider>
          {children}
        </IconProvider>
      </body>
    </html>
  )
}