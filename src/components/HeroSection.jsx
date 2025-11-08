import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] md:h-full w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlay - doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#22180b]/80 via-transparent to-[#22180b]/60" />

      {/* Headline overlay */}
      <div className="pointer-events-none relative z-10 h-full w-full flex items-end md:items-center">
        <div className="px-6 md:px-10 lg:px-14 pb-6 md:pb-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#7B542F]/70 backdrop-blur px-3 py-1 text-xs md:text-sm text-amber-100 ring-1 ring-white/10">
            <span className="w-2 h-2 rounded-full bg-[#FF9D00] animate-pulse" />
            Realm of Tasks
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-amber-100 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            Forge Your Focus
          </h1>
          <p className="mt-2 md:mt-4 max-w-xl text-sm md:text-base text-amber-100/90">
            A medieval-themed task manager with guild-like progress and quests. Sign in to begin your saga.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
