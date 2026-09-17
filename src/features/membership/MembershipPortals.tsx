import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  UserPlus, 
  CreditCard, 
  FileCheck, 
  CheckCircle, 
  ShieldCheck, 
  QrCode, 
  LogOut, 
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';
import { Language } from '../../shared/types';
import { translations } from '../../data/translations';
import { IICCLogo } from '../../shared/ui/IICCLogo';
import { useTranslation } from 'react-i18next';

interface MembershipPortalsProps {
  memberLoginOpen: boolean;
  onCloseMemberLogin: () => void;
  membershipApplyOpen: boolean;
  onCloseMembershipApply: () => void;
  adminLoginOpen: boolean;
  onCloseAdminLogin: () => void;
  onOpenApply: () => void;
  onOpenLogin: () => void;
}

export const MembershipPortals: React.FC<MembershipPortalsProps> = ({
  memberLoginOpen,
  onCloseMemberLogin,
  membershipApplyOpen,
  onCloseMembershipApply,
  adminLoginOpen,
  onCloseAdminLogin,
  onOpenApply,
  onOpenLogin,
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const t = translations[currentLang];

  // Member login state
  const [memberCredentials, setMemberCredentials] = useState({ id: 'IICC-LM-4821', pass: '••••••••' });
  const [isMemberLoggedIn, setIsMemberLoggedIn] = useState(false);
  const [activeMemberData, setActiveMemberData] = useState<any>(null);

  // New Membership application state
  const [applyStep, setApplyStep] = useState(1);
  const [applyCategory, setApplyCategory] = useState<'Life' | 'Associate' | 'Institutional' | 'NRI'>('Life');
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const [appRefNo, setAppRefNo] = useState('');
  const [applyForm, setApplyForm] = useState({
    fullName: '',
    fatherHusbandName: '',
    dob: '1985-06-15',
    profession: 'Senior Advocate / Academician',
    address: 'New Delhi, India',
    mobile: '+91 9811000000',
    email: 'member@domain.com',
    panNo: 'ABCDE1234F',
    proposerName: 'Justice (Retd.) M. A. Qureshi (IICC-LM-102)',
    seconderName: 'Prof. S. R. Kidwai (IICC-LM-388)',
  });

  // Admin login state
  const [adminAuth, setAdminAuth] = useState({ username: 'admin', password: 'password' });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleMemberLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMemberLoggedIn(true);
    setActiveMemberData({
      name: 'Dr. Shahabuddin Farooqui',
      id: 'IICC-LM-4821',
      category: 'Life Member (Permanent)',
      joinDate: '14 May 2012',
      duesStatus: 'All Dues Cleared (2026-27)',
      cardValidTill: 'Lifetime · Biometric Active',
      discountSubsidy: '25% on Venues & Guest Rooms',
    });
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `IICC-APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRefNo(ref);
    setApplicationSuccess(true);
  };

  return (
    <section className="py-16 bg-stone-100/70 border-b border-stone-200" id="membership">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
            {currentLang === 'ur' ? 'اراکین اور نئی درخواستیں' : 'Institutional Fraternity'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
            {currentLang === 'ur' ? 'آئی آئی سی سی رکنیت پورٹل اور خدمات' : 'Membership Portals & Account Services'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Access member amenities, verify credentials, view the digital biometric card, or apply for new membership under constitutional categories.
          </p>
        </div>

        {/* 3 Interactive Cards for Quick Access */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Existing Member Login */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center mb-4">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900">
                {currentLang === 'ur' ? 'موجودہ اراکین لاگ اِن' : "Member's Sign-In Portal"}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Log in to check membership card renewal, book guest rooms at subsidized rates, reserve library terminals, and view AGM voting notices.
              </p>
            </div>
            <div className="pt-6">
              <button
                id="portal-member-login-btn"
                onClick={onOpenLogin}
                className="w-full py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Open Member Portal</span>
              </button>
            </div>
          </div>

          {/* Card 2: New Membership Application */}
          <div className="bg-white rounded-2xl border border-amber-300/80 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-blue-950 font-bold text-[10px] px-3 py-1 rounded-bl-lg uppercase">
              Applications Open
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900">
                {currentLang === 'ur' ? 'نئی رکنیت کی درخواست' : 'New Membership Application'}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Apply online for Life Membership, Associate, Institutional, or Overseas/NRI categories. Complete multi-step screening and KYC verification.
              </p>
            </div>
            <div className="pt-6">
              <button
                id="portal-membership-apply-btn"
                onClick={onOpenApply}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-blue-950 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <UserPlus className="w-4 h-4" />
                <span>Start Online Application</span>
              </button>
            </div>
          </div>

          {/* Card 3: Admin & Staff Login */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900">
                {currentLang === 'ur' ? 'انتظامی و عملہ لاگ اِن' : 'Admin & Staff Portal'}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Restricted portal for IICC secretariat, executive committee scrutiny, booking approvals, notice publishing, and tender document updates.
              </p>
            </div>
            <div className="pt-6">
              <button
                id="portal-admin-login-btn"
                onClick={() => {}}
                className="w-full py-2.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>Admin Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. MEMBER LOGIN MODAL / DASHBOARD */}
        {memberLoginOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
              <button
                onClick={onCloseMemberLogin}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
              >
                ✕
              </button>

              {!isMemberLoggedIn ? (
                <div>
                  <div className="flex items-center gap-2 text-blue-800 text-xs font-bold uppercase mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Secure IICC Member Access</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900">
                    Existing Member Sign-In
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 mb-5">
                    Enter your Registered Member ID (e.g. IICC-LM-XXXX) and password.
                  </p>

                  <form onSubmit={handleMemberLogin} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">IICC Membership Number *</label>
                      <input
                        required
                        type="text"
                        value={memberCredentials.id}
                        onChange={(e) => setMemberCredentials({...memberCredentials, id: e.target.value})}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Password *</label>
                      <input
                        required
                        type="password"
                        value={memberCredentials.pass}
                        onChange={(e) => setMemberCredentials({...memberCredentials, pass: e.target.value})}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-blue-800" />
                        <span>Keep me signed in</span>
                      </label>
                      <a href="#forgot" className="text-blue-800 hover:underline">Forgot Password?</a>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-amber-200 text-xs font-bold transition shadow cursor-pointer"
                      >
                        Sign In to Member Dashboard
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-stone-500 pt-2 border-t border-stone-100">
                      Need help? Call Membership Cell at 011-43535353 (Ext. 204)
                    </div>
                  </form>
                </div>
              ) : (
                /* Member Logged In State: Digital Card & Account Overview */
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                      <span className="text-xs font-bold text-blue-800">Member Portal Active</span>
                    </div>
                    <button
                      onClick={() => setIsMemberLoggedIn(false)}
                      className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 font-semibold"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>

                  {/* Digital RFID Membership Card */}
                  <div className="bg-gradient-to-br from-[#06201b] via-[#1e3a8a] to-[#125547] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden border border-amber-400/40">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="bg-white p-1 rounded-lg shadow shrink-0">
                          <IICCLogo size="sm" variant="icon-only" />
                        </div>
                        <div>
                          <div className="text-[10px] text-amber-300 uppercase tracking-wider font-bold">
                            India Islamic Cultural Centre · New Delhi
                          </div>
                          <div className="text-lg font-display font-bold text-stone-50 mt-0.5">
                            {activeMemberData.name}
                          </div>
                          <div className="text-xs text-blue-300 font-mono mt-0.5">
                            {activeMemberData.id}
                          </div>
                        </div>
                      </div>

                      <div className="w-12 h-12 bg-white p-1 rounded-lg shadow shrink-0">
                        <QrCode className="w-full h-full text-stone-900" />
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-blue-700/60 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-stone-400 text-[10px] block">Membership Category:</span>
                        <strong className="text-amber-200 font-semibold">{activeMemberData.category}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 text-[10px] block">Annual Dues Status:</span>
                        <strong className="text-blue-400 font-semibold">{activeMemberData.duesStatus}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 text-[10px] block">Joined:</span>
                        <span className="text-stone-200">{activeMemberData.joinDate}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 text-[10px] block">Privilege:</span>
                        <span className="text-amber-300">{activeMemberData.discountSubsidy}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Member Actions */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <button
                      onClick={() => alert("Redirecting to online room booking with member subsidy")}
                      className="p-3 bg-stone-50 border border-stone-200 rounded-xl hover:bg-blue-50 text-stone-800 font-semibold text-left transition"
                    >
                      <CreditCard className="w-4 h-4 text-blue-800 mb-1" />
                      <div>Book Guest Room</div>
                      <span className="text-[10px] text-stone-500">25% off standard tariff</span>
                    </button>

                    <button
                      onClick={() => alert("Digital receipt downloaded")}
                      className="p-3 bg-stone-50 border border-stone-200 rounded-xl hover:bg-blue-50 text-stone-800 font-semibold text-left transition"
                    >
                      <FileCheck className="w-4 h-4 text-blue-800 mb-1" />
                      <div>Annual Dues Receipt</div>
                      <span className="text-[10px] text-stone-500">View 2026-27 invoice</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. NEW MEMBERSHIP APPLICATION MODAL */}
        {membershipApplyOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => {
                  onCloseMembershipApply();
                  setApplicationSuccess(false);
                }}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
              >
                ✕
              </button>

              {applicationSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif-title text-stone-900">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Your application for <strong className="text-stone-900">{applyCategory} Membership</strong> has been registered.
                  </p>
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 max-w-xs mx-auto">
                    <span className="text-xs text-stone-500 block">Tracking Acknowledgment Number:</span>
                    <strong className="text-base font-mono text-blue-900">{appRefNo}</strong>
                  </div>
                  <p className="text-xs text-stone-500 max-w-md mx-auto">
                    Please submit physical self-attested copies of PAN, Address Proof, and photographs to the Membership Office (Lodhi Road) within 21 days for scrutiny by the Executive Committee.
                  </p>
                  <button
                    onClick={() => {
                      onCloseMembershipApply();
                      setApplicationSuccess(false);
                    }}
                    className="px-6 py-2 rounded-lg bg-[#1e3a8a] text-amber-200 font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Online Admission Portal
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 mt-1">
                      New Membership Application Form
                    </h3>
                    <p className="text-xs text-stone-500">
                      Pursuant to Article 4 of the Constitution & By-Laws of India Islamic Cultural Centre.
                    </p>
                  </div>

                  {/* Category Selection Tabs */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-2">Select Membership Category *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { key: 'Life', title: 'Life Member', fee: '₹ 1,50,000' },
                        { key: 'Associate', title: 'Associate', fee: '₹ 75,000' },
                        { key: 'Institutional', title: 'Institutional', fee: '₹ 3,00,000' },
                        { key: 'NRI', title: 'NRI / Overseas', fee: '$ 2,500' }
                      ].map((cat: any) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setApplyCategory(cat.key)}
                          className={`p-2.5 rounded-xl text-left border transition ${
                            applyCategory === cat.key
                              ? 'bg-blue-50 border-[#1e3a8a] ring-1 ring-[#1e3a8a]'
                              : 'border-stone-200 hover:bg-stone-50'
                          }`}
                        >
                          <div className="text-xs font-bold text-stone-900">{cat.title}</div>
                          <div className="text-[10px] text-blue-800 font-mono mt-0.5">{cat.fee}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Full Legal Name *</label>
                        <input
                          required
                          type="text"
                          value={applyForm.fullName}
                          onChange={(e) => setApplyForm({...applyForm, fullName: e.target.value})}
                          placeholder="As per Government ID"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Father's / Spouse Name *</label>
                        <input
                          required
                          type="text"
                          value={applyForm.fatherHusbandName}
                          onChange={(e) => setApplyForm({...applyForm, fatherHusbandName: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Date of Birth *</label>
                        <input
                          required
                          type="date"
                          value={applyForm.dob}
                          onChange={(e) => setApplyForm({...applyForm, dob: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Mobile Contact *</label>
                        <input
                          required
                          type="tel"
                          value={applyForm.mobile}
                          onChange={(e) => setApplyForm({...applyForm, mobile: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={applyForm.email}
                          onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Profession / Designation *</label>
                        <input
                          required
                          type="text"
                          value={applyForm.profession}
                          onChange={(e) => setApplyForm({...applyForm, profession: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Income Tax PAN Number *</label>
                        <input
                          required
                          type="text"
                          value={applyForm.panNo}
                          onChange={(e) => setApplyForm({...applyForm, panNo: e.target.value})}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 font-mono uppercase"
                        />
                      </div>
                    </div>

                    {/* Proposer & Seconder Details Requirement */}
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs">
                      <div className="font-bold text-stone-800 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-700" />
                        <span>Sponsorship Requirements (2 Existing Life Members)</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] text-stone-600 block mb-0.5">Proposed By (Member Name & ID) *</label>
                          <input
                            required
                            type="text"
                            value={applyForm.proposerName}
                            onChange={(e) => setApplyForm({...applyForm, proposerName: e.target.value})}
                            className="w-full px-2.5 py-1.5 text-xs rounded border border-stone-300 bg-white"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-stone-600 block mb-0.5">Seconded By (Member Name & ID) *</label>
                          <input
                            required
                            type="text"
                            value={applyForm.seconderName}
                            onChange={(e) => setApplyForm({...applyForm, seconderName: e.target.value})}
                            className="w-full px-2.5 py-1.5 text-xs rounded border border-stone-300 bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={onCloseMembershipApply}
                        className="px-4 py-2 text-xs font-semibold text-stone-600 rounded-lg hover:bg-stone-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow"
                      >
                        Submit Membership Application
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. ADMIN LOGIN & CONSOLE MODAL */}
        {adminLoginOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
              <button
                onClick={onCloseAdminLogin}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
              >
                ✕
              </button>

              {!isAdminLoggedIn ? (
                <div>
                  <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-1">
                    <Lock className="w-4 h-4" />
                    <span>Administrative Authority</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900">
                    IICC Secretariat & Staff Login
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 mb-5">
                    Authorized system operator authentication for governance and operations.
                  </p>

                  <form 
                    onSubmit={(e) => { e.preventDefault(); setIsAdminLoggedIn(true); }}
                    className="space-y-4 max-w-md"
                  >
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Staff Username *</label>
                      <input
                        required
                        type="text"
                        value={adminAuth.username}
                        onChange={(e) => setAdminAuth({...adminAuth, username: e.target.value})}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">Security PIN / Password *</label>
                      <input
                        required
                        type="password"
                        value={adminAuth.password}
                        onChange={(e) => setAdminAuth({...adminAuth, password: e.target.value})}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-blue-950 text-xs font-bold shadow"
                      >
                        Enter Administrative Console
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Admin Dashboard Overview */
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <div>
                      <span className="text-xs font-bold text-amber-700">Administrator: Staff ID #104</span>
                      <h4 className="text-base font-bold font-serif-title text-stone-900">Operations Oversight Console</h4>
                    </div>
                    <button
                      onClick={() => setIsAdminLoggedIn(false)}
                      className="text-xs text-stone-600 hover:text-stone-900 px-3 py-1 rounded border border-stone-200"
                    >
                      Sign Out
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="text-2xl font-bold font-serif-title text-blue-900">14</div>
                      <div className="text-[11px] text-blue-700">Pending Membership Apps</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="text-2xl font-bold font-serif-title text-amber-900">8</div>
                      <div className="text-[11px] text-amber-700">Venue Bookings for Review</div>
                    </div>
                    <div className="p-3 bg-stone-100 rounded-xl border border-stone-200">
                      <div className="text-2xl font-bold font-serif-title text-stone-800">4</div>
                      <div className="text-[11px] text-stone-600">Active Tenders Live</div>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                    <div className="font-bold text-stone-800">Quick Operations:</div>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => alert("Broadcasting notice to IICC portal")} className="px-3 py-1.5 rounded bg-white border border-stone-300 font-semibold text-stone-700 hover:bg-stone-50">
                        + Post Official Notice
                      </button>
                      <button onClick={() => alert("Opening procurement RFP uploader")} className="px-3 py-1.5 rounded bg-white border border-stone-300 font-semibold text-stone-700 hover:bg-stone-50">
                        + Publish Tender Notice
                      </button>
                      <button onClick={() => alert("Exporting member register PDF")} className="px-3 py-1.5 rounded bg-white border border-stone-300 font-semibold text-stone-700 hover:bg-stone-50">
                        Export Member KYC Register
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
