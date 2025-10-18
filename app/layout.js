import './globals.css'
import { customFont } from './fonts'  // ← Changed this line!

export const metadata = {
  title: 'Learn Blender - Master 3D Modeling, Animation, and Rendering',
  description: 'Master the art of 3D modeling, animation, and rendering with Blender',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.variable}>
      <body className={customFont.className}>{children}</body>
    </html>
  )
}