import React, { useState } from 'react';
import { Mail, Lock, User, Shield, ArrowRight } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange, name }) => (
  <div className="flex items-center gap-2 rounded-lg bg-[#22180b]/60 ring-1 ring-white/10 focus-within:ring-[#FF9D00]/40 px-3 py-2">
    {Icon && <Icon className="w-4 h-4 text-amber-200" />}
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent outline-none text-amber-100 placeholder:text-amber-200/60"
    />
  </div>
);

const Submit = ({ label, onClick, icon: Icon = ArrowRight }) => (
  <button
    onClick={onClick}
    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#B6771D] to-[#7B542F] text-amber-50 font-bold py-2.5 shadow-lg shadow-black/20 ring-1 ring-black/40 hover:brightness-110 transition"
  >
    <span>{label}</span>
    <Icon className="w-4 h-4" />
  </button>
);

export const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    // Will connect to backend endpoints in next step
    alert(`Login with ${form.email}`);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input
        name="email"
        icon={Mail}
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        name="password"
        icon={Lock}
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Submit label="Enter the Keep" onClick={onSubmit} />
    </form>
  );
};

export const RegisterForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Register ${form.name}`);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input
        name="name"
        icon={User}
        placeholder="Display name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        name="email"
        icon={Mail}
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        name="password"
        icon={Lock}
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Submit label="Join the Guild" onClick={onSubmit} />
    </form>
  );
};

export const ForgotForm = () => {
  const [email, setEmail] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input
        name="email"
        icon={Mail}
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Submit label="Send Raven" onClick={onSubmit} />
    </form>
  );
};

export const SSOForm = () => {
  const providers = [
    { key: 'google', label: 'Continue with Google' },
    { key: 'github', label: 'Continue with GitHub' },
    { key: 'discord', label: 'Continue with Discord' },
  ];
  return (
    <div className="space-y-2">
      {providers.map((p) => (
        <button
          key={p.key}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b0b0b]/60 hover:bg-[#0b0b0b]/80 text-amber-50 font-semibold py-2.5 ring-1 ring-white/10 transition"
          onClick={() => alert(`${p.label}`)}
        >
          <Shield className="w-4 h-4" />
          {p.label}
        </button>
      ))}
    </div>
  );
};
