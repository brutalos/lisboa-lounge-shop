'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-950 text-white py-32 px-4 rounded-t-[4rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-tiles opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10 text-center md:text-left">
        <div className="space-y-8">
          <img src="/images/logo.png" alt="Lisboa Lounge" className="h-16 w-auto mb-6 mx-auto md:mx-0 invert brightness-200 drop-shadow-2xl" />
          <p className="text-white/50 text-lg leading-relaxed max-w-xs mx-auto md:mx-0">
            {t.footer.tagline}
          </p>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-primary text-sm font-black uppercase tracking-[0.4em]">{t.footer.navTitle}</h3>
          <ul className="space-y-4 font-extrabold uppercase tracking-widest text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors">{t.nav.home}</Link></li>
            <li><Link href="/menu" className="hover:text-accent transition-colors">{t.nav.menu}</Link></li>
            <li><Link href="/reservation" className="hover:text-accent transition-colors">{t.nav.reservation}</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-primary text-sm font-black uppercase tracking-[0.4em]">{t.footer.hoursTitle}</h3>
          <div className="space-y-4">
            <p className="text-white/50 text-sm font-extrabold uppercase tracking-widest">{t.footer.monSat}</p>
            <p className="text-2xl font-black">12:00 — 23:00</p>
            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] italic">(Pause 15:00 — 17:00)</p>
            <p className="text-accent text-sm font-black uppercase tracking-[0.3em] pt-4 italic">{t.footer.closed}</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-primary text-sm font-black uppercase tracking-[0.4em]">{t.footer.locationTitle}</h3>
          <div className="space-y-4">
            <p className="text-white/50 text-lg">Mühlgasse 20, 1040 Wien</p>
            <p className="text-2xl font-black"><a href="tel:+4319670061" className="hover:text-accent transition-colors">+43 1 967 00 61</a></p>
            <p className="text-white/50 hover:text-white transition-colors">lisboalounge@lisboalounge.at</p>
          </div>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t border-white/10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-xs font-bold uppercase tracking-widest text-white/30">
        <p>© {new Date().getFullYear()} Lisboa Lounge Dine & Wine. {t.footer.rights}</p>
        <p className="text-center md:text-right italic">{t.footer.credits}</p>
      </div>
    </footer>
  )
}
