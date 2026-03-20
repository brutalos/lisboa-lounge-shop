'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function MenuPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col bg-light text-slate-900 overflow-x-hidden">
      
      {/* Menu Header - Postcard Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/menu/cozido.jpg" 
            alt="Portuguese Feast" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/50 to-lisbon-gold/50 mix-blend-multiply opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 space-y-10">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-2xl px-10 py-3 rounded-full text-white text-sm font-black uppercase tracking-[0.5em] border border-white/20">
            A Nossa Cozinha <span className="text-lisbon-gold">|</span> Vienna
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl italic">
            {t.menu.heroTitle} <br /> 
            <span className="text-white/60 tracking-widest font-nunito uppercase text-3xl md:text-5xl font-black not-italic block mt-8">{t.menu.heroSubtitle}</span>
          </h1>
        </div>
      </section>

      {/* Main Menu Highlight - Tile & Paper Aesthetic */}
      <section className="relative py-48 px-4 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-tiles opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-6">
              <h3 className="text-accent text-sm font-black uppercase tracking-[0.6em] flex items-center gap-4">
                <span className="w-12 h-px bg-accent"></span> {t.menu.heritageTag}
              </h3>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.9] text-slate-900 italic">
                {t.menu.heritageTitle}
              </h2>
            </div>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-medium italic font-libre">
              {t.menu.heritageText}
            </p>
            
            <div className="pt-8">
               <a 
                 href="/images/menu/main-menu.jpg" 
                 target="_blank"
                 className="inline-flex items-center group gap-8 bg-lisbon-gold text-primary px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-2xl shadow-lisbon-gold/20"
               >
                 {t.menu.viewMenu}
                 <span className="w-12 h-px bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all"></span>
               </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
             <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] rotate-3 -z-10 animate-pulse"></div>
             <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[1.5rem] border-white -rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[3/4]">
                <img 
                  src="/images/menu/main-menu.jpg" 
                  alt="Lisboa Lounge Menu Preview" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             {/* Small Overlapping Tile Accent */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tiles-bold rounded-full shadow-2xl opacity-80 border-8 border-white hidden md:block animate-spin-slow"></div>
          </div>
        </div>
      </section>

      {/* Specialty Postcards - Traditional Azulejo Wall */}
      <section className="relative py-48 px-4 text-slate-900 overflow-hidden mx-6 rounded-[5rem] border-[1rem] border-white shadow-2xl">
         <div className="absolute inset-0 bg-white"></div>
         <div className="absolute inset-0 bg-traditional-azulejo opacity-100 pointer-events-none"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
         
         <div className="max-w-[1600px] mx-auto space-y-32 relative z-10 text-center">
            <div className="space-y-10">
               <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em] bg-white/90 backdrop-blur-sm inline-block px-8 py-2 rounded-full border border-primary/20 shadow-xl">{t.menu.specialtiesTag}</h3>
               <h2 className="text-5xl md:text-9xl font-display font-black uppercase italic text-white drop-shadow-[0_10px_10px_rgba(0,51,153,0.8)]">{t.menu.specialtiesTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-20">
               <div className="group space-y-10">
                  <div className="relative overflow-hidden rounded-[4rem] aspect-square shadow-2xl border-[1.5rem] border-white rotate-2 group-hover:rotate-0 transition-all duration-700">
                     <img src="/images/menu/cozido.jpg" alt="Cozido" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-3xl font-display font-black italic text-primary uppercase">Cozido à <br /> Portuguesa</h4>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Donnerstags & Freitags</p>
                  </div>
               </div>

               <div className="group space-y-10 -mt-12 lg:mt-32">
                  <div className="relative overflow-hidden rounded-[4rem] aspect-square shadow-2xl border-[1.5rem] border-white -rotate-2 group-hover:rotate-0 transition-all duration-700">
                     <img src="/images/presentation.jpg" alt="Petiscos" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-3xl font-display font-black italic text-primary uppercase">Tapas & <br /> Petiscos</h4>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Perfect for Sharing</p>
                  </div>
               </div>

               <div className="group space-y-10">
                  <div className="relative overflow-hidden rounded-[4rem] aspect-square shadow-2xl border-[1.5rem] border-white rotate-1 group-hover:rotate-0 transition-all duration-700">
                     <img src="/images/menu/wine-pack.jpg" alt="Vinhos" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-3xl font-display font-black italic text-primary uppercase">Vinhos & <br /> Provas</h4>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Curated Selections</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Azulejo Grout Overlay */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </section>

      {/* Drinks Section - The Golden Hour */}
      <section id="vinhos" className="relative py-48 px-4 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-32">
          
          <div className="flex-1 space-y-16">
            <div className="space-y-6">
              <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em]">{t.menu.wineTag}</h3>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.9] text-slate-900 italic">
                {t.menu.wineTitle}
              </h2>
            </div>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-medium font-libre italic">
              {t.menu.wineText}
            </p>
            
            <div className="pt-8">
               <a 
                 href="/images/menu/drinks.jpg" 
                 target="_blank"
                 className="inline-flex items-center group gap-8 bg-primary text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-2xl shadow-primary/20"
               >
                 {t.menu.viewWine}
                 <span className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-white transition-all"></span>
               </a>
            </div>
          </div>

          <div className="flex-1 relative">
             <div className="absolute inset-0 bg-lisbon-gold/5 rounded-[4rem] rotate-3 -z-10"></div>
             <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[1.5rem] border-white rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[3/4]">
                <img 
                  src="/images/menu/drinks.jpg" 
                  alt="Lisboa Lounge Drinks Preview" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             {/* Traditional Rooster Graphic Overlay */}
             <div className="absolute -top-16 -right-16 hidden lg:block scale-125 transform rotate-12 pointer-events-none">
                <img src="/images/galo-red.png" alt="Traditional Rooster" className="h-60 w-auto opacity-10 contrast-125" />
             </div>
          </div>
        </div>
      </section>

      {/* Event Packages - Circle Mosaic */}
      <section className="py-48 px-4 bg-light relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-center space-y-32">
          <div className="space-y-10">
            <h3 className="text-primary text-sm font-black uppercase tracking-[0.6em]">{t.menu.packagesTag}</h3>
            <h2 className="text-5xl md:text-[8rem] font-display font-black uppercase italic text-slate-900 leading-[0.8]">
              {t.menu.packagesTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="group relative">
               <div className="absolute -inset-10 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"></div>
               <img src="/images/menu/keller-circle-1.png" alt="Package A" className="h-64 w-64 mx-auto mb-12 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all group-hover:scale-110" />
               <h4 className="text-4xl font-display font-black italic uppercase text-slate-900 mb-4">Serie A</h4>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">{t.menu.packageA}</p>
               <a href="/images/menu/keller-1.jpg" target="_blank" className="text-primary font-black uppercase tracking-[0.3em] text-xs border-b-4 border-primary/20 pb-2 hover:border-primary transition-all">{t.menu.details}</a>
            </div>
            
            <div className="group relative">
               <div className="absolute -inset-10 bg-lisbon-gold/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"></div>
               <img src="/images/menu/keller-circle-2.png" alt="Package B" className="h-64 w-64 mx-auto mb-12 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all group-hover:scale-110" />
               <h4 className="text-4xl font-display font-black italic uppercase text-slate-900 mb-4">Serie B</h4>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">{t.menu.packageB}</p>
               <a href="/images/menu/keller-2.jpg" target="_blank" className="text-primary font-black uppercase tracking-[0.3em] text-xs border-b-4 border-primary/20 pb-2 hover:border-primary transition-all">{t.menu.details}</a>
            </div>
            
            <div className="group relative">
               <div className="absolute -inset-10 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"></div>
               <img src="/images/menu/keller-circle-3.png" alt="Package C" className="h-64 w-64 mx-auto mb-12 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all group-hover:scale-110" />
               <h4 className="text-4xl font-display font-black italic uppercase text-slate-900 mb-4">Serie C</h4>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">{t.menu.packageC}</p>
               <a href="/images/menu/keller-3.jpg" target="_blank" className="text-primary font-black uppercase tracking-[0.3em] text-xs border-b-4 border-primary/20 pb-2 hover:border-primary transition-all">{t.menu.details}</a>
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
              Vem Comer <br /> <span className="text-lisbon-gold not-italic">Lisboa Lounge.</span>
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
