import React from 'react';

const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-[#7B542F] text-amber-100 shadow ring-1 ring-[#FF9D00]/40'
        : 'text-amber-200/80 hover:text-amber-100 hover:bg-[#7B542F]/40'
    }`}
  >
    {label}
  </button>
);

const AuthTabs = ({ active, setActive }) => {
  const tabs = [
    { key: 'login', label: 'Login' },
    { key: 'register', label: 'Register' },
    { key: 'forgot', label: 'Forgot Password' },
    { key: 'sso', label: 'SSO' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 p-1 rounded-lg bg-[#594100]/50 backdrop-blur ring-1 ring-white/10">
      {tabs.map((tab) => (
        <TabButton
          key={tab.key}
          label={tab.label}
          isActive={active === tab.key}
          onClick={() => setActive(tab.key)}
        />
      ))}
    </div>
  );
};

export default AuthTabs;
