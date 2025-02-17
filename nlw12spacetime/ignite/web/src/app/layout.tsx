import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW 11 Spacetime / Ignite',
  description:
    'Uma capsula do tempo construida com ReactJS, NextJS, TailwindCSS e Tyhpescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${baiJamjuree.className} bg-gray-900 font-sams text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-stars bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/* Stripes */}
            <div className=" absolute bottom-0 right-2 top-0 w-2 bg-stripes " />
            <SignIn />
            <Hero />
            <Copyright />
          </div>
          {/* Rigth */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-stars bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
