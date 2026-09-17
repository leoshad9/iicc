import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SignInFormProps {
  title: string;
  subtitle: string;
  submitLabel: string;
  successMessage: string;
  footer?: React.ReactNode;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  title,
  subtitle,
  submitLabel,
  successMessage,
  footer,
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setError(currentLang === 'ur' ? ' تمام معلومات درکار ہے' : 'All fields are required.');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">IICC</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
            {title}
          </h1>
          <p className="text-base text-stone-600 mt-4 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
                  {currentLang === 'ur' ? 'کامیابی' : 'Success'}
                </h3>
                <p className="text-sm text-stone-600">{successMessage}</p>
                <button
                  onClick={() => { setSubmitted(false); setIdentifier(''); setPassword(''); }}
                  className="mt-5 px-5 py-2 rounded-lg bg-[#1e3a8a] text-white text-sm font-semibold hover:bg-blue-900 transition"
                >
                  {currentLang === 'ur' ? 'دوبارہ کوشش کریں' : 'Try Again'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {currentLang === 'ur' ? 'ایڈریس / فون نمبر' : 'Email / Phone Number'}
                  </label>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={currentLang === 'ur' ? 'example@email.com' : 'you@email.com'}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/40 focus:border-[#1e3a8a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {currentLang === 'ur' ? 'پاس ورڈ' : 'Password'}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={currentLang === 'ur' ? '••••••••' : '••••••••'}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/40 focus:border-[#1e3a8a]"
                  />
                </div>
                {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-blue-950 text-sm font-bold transition"
                >
                  {submitLabel}
                </button>
                {footer}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInForm;