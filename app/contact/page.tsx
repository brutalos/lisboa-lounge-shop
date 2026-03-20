'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col bg-light text-slate-900 overflow-x-hidden">
      
      {/* Contact Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/map.jpg" 
            alt="Lisboa Lounge Location" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/50 to-lisbon-gold/50 mix-blend-multiply opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 space-y-10">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-2xl px-10 py-3 rounded-full text-white text-sm font-black uppercase tracking-[0.5em] border border-white/20">
            Fale Connosco <span className="text-lisbon-gold">|</span> {t.nav.contact}
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl italic">
            {t.contact.heroTitle} <br /> 
            <span className="text-white/60 tracking-widest font-nunito uppercase text-3xl md:text-5xl font-black not-italic block mt-8">{t.contact.heroSubtitle}</span>
          </h1>
        </div>
      </section>

      {/* Contact Grid - Postcard Aesthetic */}
      <section className="relative py-48 px-4 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-tiles opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          <div className="lg:col-span-6 space-y-20 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em] flex items-center gap-4">
                <span className="w-12 h-px bg-primary"></span> {t.contact.heritageTag}
              </h3>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.9] text-slate-900 italic">
                Onde a Alma <br /> <span className="text-accent not-italic text-8xl md:text-[10rem]">Mora.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-slate-900/5 hover:-translate-y-4 transition-all duration-700">
                  <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center text-primary shadow-2xl shadow-primary/20">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     </svg>
                  </div>
                  <h4 className="text-2xl font-black uppercase text-slate-900 pt-4">{t.contact.address}</h4>
                  <p className="text-slate-500 font-medium text-lg italic">Mühlgasse 20, <br /> 1040 Wien</p>
               </div>

               <div className="space-y-6 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-slate-900/5 hover:-translate-y-4 transition-all duration-700">
                  <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center text-accent shadow-2xl shadow-accent/20">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                  </div>
                  <h4 className="text-2xl font-black uppercase text-slate-900 pt-4">{t.contact.phone}</h4>
                  <p className="text-2xl font-black text-slate-900 pt-4"><a href="tel:+4319670061">+43 1 967 00 61</a></p>
               </div>
            </div>

            <div className="flex items-center gap-10 p-12 bg-primary/5 rounded-[4rem] border border-primary/10">
               <div className="h-20 w-20 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <img src="/images/galo-garrafa.png" alt="Lisbon Rooster" className="h-12 w-auto grayscale" />
               </div>
               <div className="space-y-2">
                  <h5 className="text-xl font-black uppercase tracking-widest text-primary italic">{t.contact.email}</h5>
                  <p className="text-2xl font-black text-slate-900"><a href="mailto:lisboalounge@lisboalounge.at">lisboalounge@lisboalounge.at</a></p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
             <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
             <div className="relative aspect-square md:aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl border-[2rem] border-white rotate-2 hover:rotate-0 transition-all duration-1000">
                <img src="/images/map.jpg" alt="Lisboa Lounge Map" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-10 rounded-full shadow-3xl animate-bounce border-8 border-white/20">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   </svg>
                </div>
             </div>
             {/* Traditional Mosaic Background Element */}
             <div className="absolute -top-10 -left-10 w-48 h-48 bg-tiles-bold rounded-full shadow-2xl opacity-40 -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </section>

      {/* Modern Footer CTA */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto lisbon-gradient rounded-[5rem] p-16 md:p-32 shadow-3xl relative overflow-hidden text-center group">
          <div className="absolute inset-0 bg-tiles-bold opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-[8rem] font-display font-black uppercase italic leading-[0.8] text-white">
              {t.contact.cta} <br /> <span className="text-lisbon-gold not-italic">Lisboa Lounge.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                href="/reservation" 
                className="w-full sm:w-auto bg-white text-primary px-20 py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-lisbon-gold transition-all shadow-2xl"
              >
                {t.home.reserveBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
