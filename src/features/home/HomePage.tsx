import React from 'react';
import { Hero } from './Hero';
import { PresidentVision } from '../about/PresidentVision';
import { EventsSection } from '../events/EventsSection';
import { VenuesSection } from '../venues/VenuesSection';
import { AmenitiesSection } from '../services/AmenitiesSection';
import { MultimediaSection } from '../media/MultimediaSection';
import { MembershipPortals } from '../membership/MembershipPortals';
import { NoticeBoardAndTenders } from '../notices/NoticeBoardAndTenders';
import { HelplineDirectory } from '../contact/HelplineDirectory';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <PresidentVision />
      <EventsSection />
      <VenuesSection />
      <AmenitiesSection />
      <MultimediaSection />
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
      <NoticeBoardAndTenders />
      <HelplineDirectory />
    </div>
  );
};
