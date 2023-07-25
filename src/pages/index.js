import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'
import HeroSection from '@/components/Homepage/HeroSection'
import Faq from '@/components/Homepage/Faq'
import Service from '@/components/Homepage/Service'
import RecentWork from '@/components/Homepage/RecentWork'
import TechnicalTeam from '@/components/Homepage/TechnicalTeam'
import Result from '@/components/Homepage/Result'
import AboutUs from '@/components/Homepage/AboutUs'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <Header />
      <div className='relative lg:h-[716px] h-auto'>
        <HeroSection />
      </div>
      <Faq />
      <Service />
      <RecentWork />
      <TechnicalTeam />
      <Result />
      <AboutUs />
      <Footer />
    </main>
  )
}
