import localFont from 'next/font/local'

export const customFont = localFont({
  src: [
    {
      path: '../public/Fonts/DejaVuSansMono.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Fonts/Inter.woff2',
      weight: '600',
      style: 'Bold',
    },
  ],
  variable: '--font-custom',
})