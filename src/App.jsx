import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AuthTabs from './components/AuthTabs';
import MedievalCard from './components/MedievalCard';
import { LoginForm, RegisterForm, ForgotForm, SSOForm } from './components/AuthForms';

const App = () => {
  const [active, setActive] = useState('login');

  return (
    <div className="min-h-screen bg-[#1a1208] text-amber-50 flex flex-col">
      {/* Hero with Spline */}
      <div className="h-[55vh] md:h-[60vh]">
        <HeroSection />
      </div>

      {/* Auth section */}
      <main className="flex-1 -mt-10 md:-mt-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <div className="flex justify-center mb-4">
                <AuthTabs active={active} setActive={setActive} />
              </div>

              <MedievalCard
                title={
                  active === 'login'
                    ? 'Enter the Keep'
                    : active === 'register'
                    ? 'Join the Guild'
                    : active === 'forgot'
                    ? 'Send a Raven'
                    : 'Single Sign-On'
                }
                subtitle={
                  active === 'login'
                    ? 'Welcome back, traveler.'
                    : active === 'register'
                    ? 'Claim your banner and begin your quests.'
                    : active === 'forgot'
                    ? 'We will send a reset incantation to your scrolls.'
                    : 'Choose your herald to vouch for your identity.'
                }
              >
                {active === 'login' && <LoginForm />}
                {active === 'register' && <RegisterForm />}
                {active === 'forgot' && <ForgotForm />}
                {active === 'sso' && <SSOForm />}

                <p className="mt-3 text-center text-xs text-amber-200/60">
                  By proceeding you agree to the Guild Charter and privacy edicts.
                </p>
              </MedievalCard>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-[#22180b]/60 p-3 ring-1 ring-white/10">
                  <p className="text-xs text-amber-200/80">Woodland Palette</p>
                  <div className="mt-2 flex justify-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#7B542F]" />
                    <span className="w-5 h-5 rounded bg-[#B6771D]" />
                    <span className="w-5 h-5 rounded bg-[#FF9D00]" />
                    <span className="w-5 h-5 rounded bg-[#594100]" />
                    <span className="w-5 h-5 rounded bg-[#644A07]" />
                  </div>
                </div>
                <div className="rounded-lg bg-[#22180b]/60 p-3 ring-1 ring-white/10">
                  <p className="text-xs text-amber-200/80">Gamified Journey</p>
                  <p className="text-xs text-amber-200/60">Quests, streaks, and guild ranks coming next.</p>
                </div>
                <div className="rounded-lg bg-[#22180b]/60 p-3 ring-1 ring-white/10">
                  <p className="text-xs text-amber-200/80">Secure Foundations</p>
                  <p className="text-xs text-amber-200/60">SSO and magic links supported in roadmap.</p>
                </div>
              </div>

              <footer className="py-10 text-center text-xs text-amber-200/50">
                Crafted in the Old Forge. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
