'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 pt-8 transition-all duration-500">
      <div className="max-w-[1600px] mx-auto bg-white/95 backdrop-blur-2xl shadow-2xl shadow-slate-900/10 rounded-[2.5rem] px-8 md:px-16 h-24 flex items-center justify-between border-b-4 border-lisbon-gold/20 relative overflow-hidden group">
        
        {/* Decorative Tile Accents in Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-tiles opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-tiles opacity-5 translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none group-hover:opacity-10 transition-opacity"></div>

        <Link href="/" className="flex-shrink-0 transition-all hover:scale-105 active:scale-95 relative z-10">
          <img src="/images/logo.png" alt="Lisboa Lounge" className="h-16 w-auto drop-shadow-md" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-12 text-[14px] font-black uppercase tracking-[0.3em] text-slate-800 relative z-10">
          <Link href="/" className="hover:text-primary transition-all relative group flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lisbon-gold opacity-0 group-hover:opacity-100 transition-all"></span>
            {t.nav.home}
          </Link>
          <Link href="/menu" className="hover:text-primary transition-all relative group flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all"></span>
            {t.nav.menu}
          </Link>
          <Link href="/reservation" className="hover:text-primary transition-all relative group flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lisbon-gold opacity-0 group-hover:opacity-100 transition-all"></span>
            {t.nav.reservation}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-all relative group flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lisbon-gold opacity-0 group-hover:opacity-100 transition-all"></span>
            {t.nav.contact}
          </Link>
        </nav>
        
        <div className="flex items-center gap-6 relative z-10">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center gap-3 mr-4 text-[10px] font-black uppercase tracking-widest border-r border-slate-200 pr-6">
            <button 
              onClick={() => setLanguage('de')} 
              className={`hover:text-primary transition-colors ${language === 'de' ? 'text-primary underline decoration-2 underline-offset-4' : 'text-slate-400'}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('pt')} 
              className={`hover:text-primary transition-colors ${language === 'pt' ? 'text-primary underline decoration-2 underline-offset-4' : 'text-slate-400'}`}
            >
              PT
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`hover:text-primary transition-colors ${language === 'en' ? 'text-primary underline decoration-2 underline-offset-4' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          <a 
            href="tel:+4319670061" 
            className="hidden lg:flex flex-col items-end group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-accent transition-colors italic">{t.nav.callUs}</span>
            <span className="text-sm font-black text-slate-900">+43 1 967 00 61</span>
          </a>
          
          <Link 
            href="/reservation" 
            className="hidden sm:flex bg-primary text-white p-4 rounded-2xl hover:bg-lisbon-gold hover:text-dark transition-all shadow-xl shadow-primary/10 active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
          
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black">
               <button onClick={() => setLanguage('de')} className={language === 'de' ? 'text-primary' : 'text-slate-400'}>DE</button>
               <button onClick={() => setLanguage('pt')} className={language === 'pt' ? 'text-primary' : 'text-slate-400'}>PT</button>
               <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-primary' : 'text-slate-400'}>EN</button>
            </div>
            <button className="p-3 bg-slate-50 text-primary rounded-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
