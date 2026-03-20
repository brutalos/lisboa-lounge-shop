'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function ReservationPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col bg-light text-slate-900 overflow-x-hidden">
      
      {/* Reservation Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/interior.jpg" 
            alt="Lisboa Lounge Reservation" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/90 via-accent/50 to-lisbon-gold/50 mix-blend-multiply opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 space-y-10">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-2xl px-10 py-3 rounded-full text-white text-sm font-black uppercase tracking-[0.5em] border border-white/20">
            Reserva de Mesa <span className="text-lisbon-gold">|</span> Vienna
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl italic">
            {t.reservation.heroTitle} <br /> 
            <span className="text-white/60 tracking-widest font-nunito uppercase text-3xl md:text-5xl font-black not-italic block mt-8">{t.reservation.heroSubtitle}</span>
          </h1>
        </div>
      </section>

      {/* Main Content - Postcard & Info */}
      <section className="relative py-48 px-4 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-tiles opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 space-y-16 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em] flex items-center gap-4">
                <span className="w-12 h-px bg-primary"></span> {t.reservation.heritageTag}
              </h3>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.9] text-slate-900 italic">
                {t.reservation.heritageTitle}
              </h2>
            </div>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-medium italic font-libre">
              {t.reservation.heritageText}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
               <div className="space-y-4 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <span className="text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary/20 pb-2">{t.reservation.phone}</span>
                  <p className="text-3xl font-black uppercase text-slate-900 pt-4"><a href="tel:+4319670061">+43 1 967 00 61</a></p>
               </div>
               <div className="space-y-4 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <span className="text-accent text-xs font-black uppercase tracking-widest border-b-2 border-accent/20 pb-2">{t.reservation.email}</span>
                  <p className="text-lg font-black uppercase text-slate-900 pt-4 break-all"><a href="mailto:lisboalounge@lisboalounge.at">lisboalounge@lisboalounge.at</a></p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
             <div className="absolute -inset-10 bg-accent/5 rounded-[4rem] rotate-3 -z-10 animate-pulse"></div>
             <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[1.5rem] border-white rotate-1 hover:rotate-0 transition-transform duration-700 aspect-square">
                <img 
                  src="/images/interior.jpg" 
                  alt="Lisboa Lounge Interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
             </div>
             {/* Small Overlapping Badge */}
             <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[2.5rem] shadow-2xl hidden md:block rotate-6">
                <p className="text-white text-xl font-display font-black italic">{t.footer.hoursTitle}</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest pt-2">{t.footer.monSat}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Info Mosaic Section */}
      <section className="relative py-48 px-4 bg-slate-950 text-white overflow-hidden mx-6 rounded-[5rem]">
         <div className="absolute inset-0 bg-tiles-bold opacity-10 mix-blend-overlay pointer-events-none"></div>
         
         <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            
            <div className="lg:col-span-6 space-y-16">
               <div className="space-y-6">
                  <h3 className="text-lisbon-gold text-sm font-black uppercase tracking-[0.6em]">{t.reservation.hoursTag}</h3>
                  <h2 className="text-5xl md:text-[8rem] font-display font-black uppercase italic leading-[0.8]">{t.reservation.hoursTitle}</h2>
               </div>
               
               <div className="space-y-8 max-w-lg">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="text-white/50 font-black uppercase tracking-widest text-sm">{t.footer.monSat}</span>
                     <span className="text-3xl font-display font-black italic">{t.reservation.monSatHours}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="text-white/30 font-black uppercase tracking-widest text-xs italic">{t.reservation.pause}</span>
                     <span className="text-xl font-display font-black text-white/40">15:00 — 17:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="text-white/50 font-black uppercase tracking-widest text-sm">Kitchen</span>
                     <span className="text-2xl font-display font-black">{t.reservation.kitchenUntil}</span>
                  </div>
                  <div className="flex justify-between items-center text-accent">
                     <span className="font-black uppercase tracking-[0.3em] text-sm italic">{t.reservation.sundays}</span>
                     <span className="text-3xl font-display font-black">{t.footer.closed}</span>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-8 relative">
               <div className="space-y-8">
                  <div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl border-[1rem] border-white/5 rotate-2">
                     <img src="/images/cellar.jpg" alt="Atmosphere" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl border-[1rem] border-white/5 -rotate-3 bg-tiles-bold opacity-20"></div>
               </div>
               <div className="space-y-8 pt-24">
                  <div className="rounded-full overflow-hidden aspect-square shadow-2xl border-[1rem] border-white/5 rotate-6">
                     <img src="/images/presentation.jpg" alt="Food" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl border-[1rem] border-white/5 rotate-1">
                     <img src="/images/interior.jpg" alt="Interior" className="w-full h-full object-cover grayscale" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Modern Footer CTA */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto lisbon-gradient rounded-[5rem] p-16 md:p-32 shadow-3xl relative overflow-hidden text-center group">
          <div className="absolute inset-0 bg-tiles-bold opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-[8rem] font-display font-black uppercase italic leading-[0.8] text-white">
              {t.reservation.cta}
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-white text-primary px-20 py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-lisbon-gold transition-all shadow-2xl"
              >
                {t.reservation.findUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
