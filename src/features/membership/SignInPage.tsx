import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SignInForm } from '../../shared/ui/SignInForm';

export const MemberSignInPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';

  return (
    <SignInForm
      title={currentLang === 'ur' ? 'اراکین لاگ اِن' : "Member's Sign In"}
      subtitle={currentLang === 'ur'
        ? 'اپنے رکنیت پورٹل میں داخل ہوں۔ رکنیت کی تفصیلات، اپ ڈیٹس اور اپنی سروسیں یہاں دیکھیں۔'
        : 'Access your membership portal. View your membership details, profile, and services.'}
      submitLabel={currentLang === 'ur' ? 'سائن اِن ہوں' : 'Sign In'}
      successMessage={currentLang === 'ur'
        ? 'آپ کا سائن ان کامیاب ہو گا۔ (یہ ایک ڈیمو صفحہ ہے، کوئی ایکشن نہیں ہوتا)'
        : 'Sign-in successful (demo page — no real action is performed).'}
      footer={
        <div className="mt-4 text-center text-xs text-stone-500">
          {currentLang === 'ur' ? 'کوئی اکاؤنٹ نہیں ہے؟ ' : "Don't have an account? "}
          <Link to="/membership/new" className="text-[#1e3a8a] font-semibold hover:underline">
            {currentLang === 'ur' ? 'نئی رکنیت درج کریں' : 'New Membership'}
          </Link>
        </div>
      }
    />
  );
};

export default MemberSignInPage;