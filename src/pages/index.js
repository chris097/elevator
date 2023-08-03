import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import HeroSection from '@/components/Homepage/HeroSection'
import Faq from '@/components/Homepage/Faq'
import Service from '@/components/Homepage/Service'
import RecentWork from '@/components/Homepage/RecentWork'
import TechnicalTeam from '@/components/Homepage/TechnicalTeam'
import Result from '@/components/Homepage/Result'
import AboutUs from '@/components/Homepage/AboutUs'
import Footer from '@/components/Footer'
import Contact from '@/components/Homepage/Contact'
import Testimonies from '@/components/Homepage/Testimonies'
// import Clients from '@/components/Homepage/Clients'


export default function Home() {

  return (
    <main>
      <Header />
       <div className='relative lg:h-[716px] h-auto'>
        <HeroSection />
      </div>
      {/*
      <Service />
      <AboutUs />
      <RecentWork />
      <Contact />
      <TechnicalTeam />
      <Result />
      <Testimonies />
      <Faq /> */}
      {/* <Clients /> */}
      {/* <Footer /> */}
    </main>
  )
}
