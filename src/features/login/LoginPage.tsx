import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ShieldCheck, UserPlus, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';

  const options = [
    {
      icon: <User className="w-7 h-7" />,
      title: currentLang === 'ur' ? "اراکین لاگ اِن" : "Member's Sign In",
      description: currentLang === 'ur'
        ? 'اپنے رکنیت پورٹل میں داخل ہوں'
        : 'Access your membership portal, view your membership details, and manage your account.',
      action: currentLang === 'ur' ? 'جائیں' : 'Sign In',
      navigateTo: '/membership/signin',
      color: 'blue',
    },
{
      icon: <ShieldCheck className="w-7 h-7" />,
      title: currentLang === 'ur' ? 'انتظامیہ سائن اِن' : 'Admin Sign In',
      description: currentLang === 'ur'
        ? 'ادارہ جاتی نظام میں داخل ہوں'
        : 'Access the administration panel for governance, finance, and management operations.',
      action: currentLang === 'ur' ? 'جانیں' : 'Sign In',
      navigateTo: '/administration/signin',
      color: 'amber',
    },
    {
      icon: <UserPlus className="w-7 h-7" />,
      title: currentLang === 'ur' ? 'نئی رکنیت' : 'New Member Sign Up',
      description: currentLang === 'ur'
        ? 'نئی رکنیت کے لیے آپ کا فورم بھریں'
        : 'Join IICC as a new member. Fill out the registration form to become part of our community.',
      action: currentLang === 'ur' ? 'رجسٹر ہوں' : 'Register',
      navigateTo: '/membership/new',
      color: 'green',
    },
  ];

  const colorMap: Record<string, { iconBg: string; iconText: string; hoverIconBg: string; actionText: string; borderHover: string }> = {
    blue: { iconBg: 'bg-blue-50', iconText: 'text-[#1e3a8a]', hoverIconBg: 'hover:bg-blue-100', actionText: 'text-[#1e3a8a]', borderHover: 'hover:border-blue-400' },
    amber: { iconBg: 'bg-amber-50', iconText: 'text-amber-700', hoverIconBg: 'hover:bg-amber-100', actionText: 'text-amber-700', borderHover: 'hover:border-amber-400' },
    green: { iconBg: 'bg-green-50', iconText: 'text-green-700', hoverIconBg: 'hover:bg-green-100', actionText: 'text-green-700', borderHover: 'hover:border-green-400' },
  };

  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              Login
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              {currentLang === 'ur' ? 'لاگ اِن' : 'Login'}
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              {currentLang === 'ur'
                ? 'آپ اپنے پسندیدہ پورٹل میں داخل ہو سکتے ہیں'
                : 'Choose your login type to access the appropriate IICC portal.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid sm:grid-cols-1 gap-5">
            {options.map((opt) => {
              const colors = colorMap[opt.color];
              return (
                <button
                  key={opt.title}
                  onClick={() => navigate(opt.navigateTo)}
                  className={`group p-6 rounded-2xl bg-white border border-stone-200 ${colors.borderHover} hover:shadow-lg transition text-left cursor-pointer`}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.iconBg} ${colors.iconText} flex items-center justify-center mb-5 ${colors.hoverIconBg} transition`}>
                    {opt.icon}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
                        {opt.title}
                      </h2>
                      <p className="text-sm text-stone-600 leading-relaxed max-w-md">
                        {opt.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className={`text-sm font-semibold ${colors.actionText}`}>
                        {opt.action}
                      </span>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
