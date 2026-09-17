import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SignInForm } from '../../shared/ui/SignInForm';

export const AdminSignInPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';

  return (
    <SignInForm
      title={currentLang === 'ur' ? 'انتظامیہ لاگ اِن' : 'Admin Sign In'}
      subtitle={currentLang === 'ur'
        ? 'ادارہ جاتی نظام میں داخل ہوں۔ مالیات، انتظامیہ، سیکیورٹی اور دیگر انتظامی کاموں تک رسائی حاصل کریں۔'
        : 'Access the administration panel for governance, finance, HR, security, and management operations.'}
      submitLabel={currentLang === 'ur' ? 'سائن اِن ہوں' : 'Sign In'}
      successMessage={currentLang === 'ur'
        ? 'ایڈمن سائن ان کامیاب ہو گا۔ (یہ ایک ڈیمو صفحہ ہے، کوئی ایکشن نہیں ہوتا)'
        : 'Admin sign-in successful (demo page — no real action is performed).'}
      footer={
        <div className="mt-4 text-center text-xs text-stone-500">
          <Link to="/" className="text-[#1e3a8a] font-semibold hover:underline">
            {currentLang === 'ur' ? 'ہوم پیج پر لوٹیں' : 'Return to Home'}
          </Link>
        </div>
      }
    />
  );
};

export default AdminSignInPage;