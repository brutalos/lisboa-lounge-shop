'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col bg-light text-slate-900 overflow-x-hidden">
      
      {/* Hero Section - The Light of Lisbon */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Lisboa Lounge Sunset" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-lisbon-gold/40 mix-blend-multiply opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Tile Graphics */}
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-tiles opacity-10 rounded-3xl rotate-12 -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-tiles opacity-5 rounded-full -rotate-12 -z-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 space-y-12">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-2xl px-10 py-3 rounded-full text-white text-sm font-black uppercase tracking-[0.5em] border border-white/20">
            {t.home.heroTag}
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl italic">
            {t.home.heroTitle} <br /> 
            <span className="text-white/60 tracking-widest font-nunito uppercase text-3xl md:text-5xl font-black not-italic block mt-8">{t.home.heroSubtitle}</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
            <Link 
              href="/reservation" 
              className="w-full sm:w-auto bg-lisbon-gold hover:bg-white text-primary px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-2xl shadow-lisbon-gold/20"
            >
              {t.home.reserveBtn}
            </Link>
            <Link 
              href="/menu" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/30 px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95"
            >
              {t.home.menuBtn}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs font-black uppercase tracking-[0.5em] animate-bounce">
          Scroll down to discover
        </div>

        {/* Portuguese Flag Accent Border */}
        <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col">
          <div className="h-1.5 bg-[#046A38]"></div>
          <div className="h-1.5 bg-[#FFCD00]"></div>
          <div className="h-1.5 bg-[#DA291C]"></div>
        </div>
      </section>

      {/* The Soul of Lisbon Section - Asymmetrical Postcard Layout */}
      <section className="relative py-48 px-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-7 relative group">
             <div className="absolute -inset-10 bg-tiles-bold opacity-10 rounded-[4rem] group-hover:opacity-20 transition-opacity"></div>
             <div className="relative overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/30 border-[1.5rem] border-white rotate-1">
                <img 
                  src="/images/interior.jpg" 
                  alt="Lisboa Lounge Ambiance" 
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
             </div>
             {/* Small Overlapping Card */}
             <div className="absolute -bottom-20 -right-10 bg-lisbon-gold p-12 rounded-[2.5rem] shadow-2xl max-w-sm hidden md:block -rotate-3 hover:rotate-0 transition-transform duration-700">
                <h4 className="text-primary text-4xl font-display font-black mb-4">Dine & Wine</h4>
                <p className="text-primary/70 text-lg font-bold uppercase tracking-widest italic">In the heart of Vienna's Freihausviertel</p>
             </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-accent text-sm font-black uppercase tracking-[0.6em] flex items-center gap-4">
                <span className="w-12 h-px bg-accent"></span> {t.home.heritageTag}
              </h3>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.9] text-slate-900 italic">
                {t.home.heritageTitle}
              </h2>
            </div>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-medium italic font-libre">
              {t.home.heritageText}
            </p>
            
            <div className="space-y-10 pt-8">
              <div className="flex gap-10 items-start">
                <div className="h-20 w-20 flex-shrink-0 bg-primary/5 rounded-[2rem] flex items-center justify-center grayscale hover:grayscale-0 transition-all p-4 border border-primary/10">
                  <img src="/images/galo-garrafa.png" alt="Portuguese Heritage" className="w-full h-auto" />
                </div>
                <div className="space-y-3">
                   <h5 className="text-xl font-black uppercase tracking-widest text-primary">{t.home.traditionalSoul}</h5>
                   <p className="text-slate-500 font-medium leading-relaxed">{t.home.traditionalSoulDesc}</p>
                </div>
              </div>
              
              <div className="flex gap-10 items-start">
                <div className="h-20 w-20 flex-shrink-0 bg-lisbon-gold/5 rounded-[2rem] flex items-center justify-center grayscale hover:grayscale-0 transition-all p-4 border border-lisbon-gold/10">
                  <img src="/images/capitao.png" alt="Lisbon Identity" className="w-full h-auto opacity-50" />
                </div>
                <div className="space-y-3">
                   <h5 className="text-xl font-black uppercase tracking-widest text-primary">{t.home.viennaContext}</h5>
                   <p className="text-slate-500 font-medium leading-relaxed">{t.home.viennaContextDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Highlights - Traditional Azulejo Wall */}
      <section className="relative py-48 px-4 text-slate-900 overflow-hidden mx-6 rounded-[5rem] border-[1rem] border-white shadow-2xl">
         <div className="absolute inset-0 bg-white"></div>
         <div className="absolute inset-0 bg-traditional-azulejo opacity-100 pointer-events-none"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
         
         <div className="max-w-[1600px] mx-auto space-y-32 relative z-10 text-center">
            <div className="space-y-10">
               <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em] bg-white/90 backdrop-blur-sm inline-block px-8 py-2 rounded-full border border-primary/20 shadow-xl">{t.home.favoritesTag}</h3>
               <h2 className="text-5xl md:text-9xl font-display font-black uppercase italic text-white drop-shadow-[0_10px_10px_rgba(0,51,153,0.8)]">{t.home.favoritesTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
               {/* Polvo Card */}
               <div className="group relative">
                  <div className="relative overflow-hidden rounded-[4rem] aspect-[4/5] shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-8 border-8 border-white">
                     <img src="/images/presentation.jpg" alt="Polvo" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-12 flex flex-col justify-end text-left space-y-4">
                        <span className="text-lisbon-gold text-4xl font-display font-black italic">01</span>
                        <h4 className="text-4xl font-black uppercase tracking-widest text-white leading-none">Polvo à <br /> Lagareiro</h4>
                        <div className="h-0 group-hover:h-20 transition-all overflow-hidden opacity-0 group-hover:opacity-100">
                           <p className="text-white/60 font-medium pt-4">Tender octopus with roasted potatoes and a sea of premium olive oil.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Steak Card */}
               <div className="group relative mt-12 md:mt-24 lg:mt-32">
                  <div className="relative overflow-hidden rounded-[4rem] aspect-[4/5] shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-8 border-8 border-white">
                     <img src="/images/menu/wine-pack.jpg" alt="Vinhos" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-12 flex flex-col justify-end text-left space-y-4">
                        <span className="text-lisbon-gold text-4xl font-display font-black italic">02</span>
                        <h4 className="text-4xl font-black uppercase tracking-widest text-white leading-none">A Nossa <br /> Garrafeira</h4>
                        <div className="h-0 group-hover:h-20 transition-all overflow-hidden opacity-0 group-hover:opacity-100">
                           <p className="text-white/60 font-medium pt-4">Selected wines from Douro, Alentejo and the sparkling Vinho Verde.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Bacalhau Card */}
               <div className="group relative">
                  <div className="relative overflow-hidden rounded-[4rem] aspect-[4/5] shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-8 border-8 border-white">
                     <img src="/images/cellar.jpg" alt="Events" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-12 flex flex-col justify-end text-left space-y-4">
                        <span className="text-lisbon-gold text-4xl font-display font-black italic">03</span>
                        <h4 className="text-4xl font-black uppercase tracking-widest text-white leading-none">Momentos <br /> no Keller</h4>
                        <div className="h-0 group-hover:h-20 transition-all overflow-hidden opacity-0 group-hover:opacity-100">
                           <p className="text-white/60 font-medium pt-4">Celebrate life in our historical 19th-century wine cellar.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="pt-20">
               <Link href="/menu" className="inline-block bg-primary text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.4em] hover:bg-lisbon-gold hover:text-primary transition-all shadow-2xl">
                 {t.home.favoritesDesc}
               </Link>
            </div>
         </div>
         
         {/* Azulejo Grout Overlay */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </section>

      {/* Modern Postcard / Location Section */}
      <section className="py-48 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-tiles opacity-5 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-32">
          
          <div className="flex-1 space-y-16">
            <div className="space-y-6">
              <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em]">{t.home.locationTag}</h3>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.9] text-slate-900">
                {t.home.locationTitle}
              </h2>
            </div>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-medium font-libre italic">
              {t.home.locationText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="space-y-4 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <span className="text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary/20 pb-2">{t.home.address}</span>
                  <p className="text-xl font-black uppercase text-slate-900 pt-4">Mühlgasse 20, <br /> 1040 Wien</p>
               </div>
               <div className="space-y-4 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <span className="text-accent text-xs font-black uppercase tracking-widest border-b-2 border-accent/20 pb-2">{t.home.booking}</span>
                  <p className="text-xl font-black uppercase text-slate-900 pt-4">+43 1 967 00 61</p>
               </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto">
             <div className="absolute -inset-10 bg-lisbon-gold opacity-10 rounded-full blur-[100px] animate-pulse"></div>
             <div className="relative aspect-square md:aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[2rem] border-white -rotate-2 hover:rotate-0 transition-all duration-700">
                <img src="/images/map.jpg" alt="Lisboa Lounge Location" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-6 rounded-full shadow-2xl animate-bounce">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   </svg>
                </div>
             </div>
             {/* Traditional Rooster Graphic Overlay */}
             <div className="absolute -bottom-16 -left-16 hidden lg:block scale-150 transform -rotate-12 pointer-events-none">
                <img src="/images/galo-garfo.png" alt="Traditional Rooster" className="h-60 w-auto opacity-20 contrast-125" />
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
              {t.home.footerTitle} <br /> <span className="text-lisbon-gold not-italic">Lisboa Lounge.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                href="/reservation" 
                className="w-full sm:w-auto bg-white text-primary px-20 py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-lisbon-gold transition-all shadow-2xl"
              >
                {t.home.reserveBtn}
              </Link>
              <a 
                href="tel:+4319670061" 
                className="text-white/70 hover:text-white transition-colors text-xl font-black tracking-widest uppercase flex items-center gap-4"
              >
                <span className="w-12 h-px bg-white/20"></span>
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
