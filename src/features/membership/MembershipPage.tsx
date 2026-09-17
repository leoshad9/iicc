import React from 'react';
import { MembershipPortals } from './MembershipPortals';

export const MembershipPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e3a8a] font-bold">
              Membership
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 mt-2">
              Membership Portals & Account Services
            </h1>
            <p className="text-base text-stone-600 mt-4 max-w-2xl">
              Sign in, apply for new membership, or access the admin portal. All membership categories and services in one place.
            </p>
          </div>
        </div>
      </section>
      <MembershipPortals
        memberLoginOpen={false}
        onCloseMemberLogin={() => {}}
        membershipApplyOpen={false}
        onCloseMembershipApply={() => {}}
        adminLoginOpen={false}
        onCloseAdminLogin={() => {}}
        onOpenApply={() => {}}
        onOpenLogin={() => {}}
      />
    </div>
  );
};
