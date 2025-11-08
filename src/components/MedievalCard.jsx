import React from 'react';

const MedievalCard = ({ title, subtitle, children }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Frame */}
      <div className="relative rounded-xl bg-gradient-to-b from-[#3a2a14] to-[#22180b] p-5 ring-1 ring-[#b08d57]/20 shadow-2xl shadow-black/50">
        {/* Ornamental corners */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-xl ring-1 ring-[#FF9D00]/10" />
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,157,0,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(123,84,47,0.25),transparent_50%)]" />

        <div className="relative">
          <div className="text-center">
            <h3 className="text-amber-100 text-xl font-black tracking-wide drop-shadow">{title}</h3>
            {subtitle && (
              <p className="mt-1 text-amber-200/80 text-sm">{subtitle}</p>
            )}
          </div>

          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MedievalCard;
