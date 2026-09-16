import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontSize } from '../shared/types';
import { Header } from '../shared/ui/Header';
import { Footer } from '../shared/ui/Footer';
import { BackToTop } from '../shared/ui/BackToTop';
import { HomePage } from '../features/home/HomePage';
import { AboutPage } from '../features/about/AboutPage';
import { HistoryPage } from '../features/about/HistoryPage';
import { AimsPage } from '../features/about/AimsPage';
import { GoverningCouncilPage } from '../features/about/GoverningCouncilPage';
import { MemorandumPage } from '../features/about/MemorandumPage';
import { EventsPage } from '../features/events/EventsPage';
import { CurrentEventsPage } from '../features/events/CurrentEventsPage';
import { CalendarPage } from '../features/events/CalendarPage';
import { PastEventsPage } from '../features/events/PastEventsPage';
import { VenuesPage } from '../features/venues/VenuesPage';
import { AuditoriumPage } from '../features/venues/AuditoriumPage';
import { ConferenceHallPage } from '../features/venues/ConferenceHallPage';
import { BoardRoomPage } from '../features/venues/BoardRoomPage';
import { BanquetHallPage } from '../features/venues/BanquetHallPage';
import { MainLawnPage } from '../features/venues/MainLawnPage';
import { ServicesPage } from '../features/services/ServicesPage';
import { GuestRoomPage } from '../features/services/GuestRoomPage';
import { RestaurantPage } from '../features/services/RestaurantPage';
import { CoffeeShopPage } from '../features/services/CoffeeShopPage';
import { MembershipPage } from '../features/membership/MembershipPage';
import { MemberSignInPage } from '../features/membership/SignInPage';
import { NewMembershipPage } from '../features/membership/NewMembershipPage';
import { RulesPage } from '../features/membership/RulesPage';
import { LoginPage } from '../features/login/LoginPage';
import { NoticesPage } from '../features/notices/NoticesPage';
import { CircularsPage } from '../features/notices/CircularsPage';
import { ContactPage } from '../features/contact/ContactPage';
import { LocationMapPage } from '../features/contact/LocationMapPage';
import { MediaPage } from '../features/media/MediaPage';
import { GalleryPage } from '../features/gallery/GalleryPage';
import { ArchivePage } from '../features/archive/ArchivePage';
import { AdminPage } from '../features/administration/AdminPage';
import { AdminSignInPage } from '../features/administration/AdminSignInPage';
import { FinancePage } from '../features/administration/FinancePage';
import { HrPage } from '../features/administration/HrPage';
import { SecurityPage } from '../features/administration/SecurityPage';
import { MaintenancePage } from '../features/administration/MaintenancePage';
import { LibraryPage } from '../features/library/LibraryPage';
import { TermsPage } from '../features/legal/TermsPage';
import Seo from '../shared/ui/Seo';
import NotFoundPage from '../features/errors/NotFoundPage';
import './i18n';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function Layout() {
  const { i18n } = useTranslation();
  const [fontSize, setFontSize] = useState<FontSize>('md');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const currentLang = i18n.language as 'en' | 'ur';

  const getFontSizeClass = () => {
    if (fontSize === 'sm') return 'text-size-sm';
    if (fontSize === 'lg') return 'text-size-lg';
    return '';
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'dark' : ''
      } ${currentLang === 'ur' ? 'font-urdu' : ''
      } ${getFontSizeClass()}`}
      dir={currentLang === 'ur' ? 'rtl' : 'ltr'}
    >
      <Header
        onLanguageChange={(lang: 'en' | 'ur') => i18n.changeLanguage(lang)}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <ScrollToTop />
      <Seo />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/aims" element={<AimsPage />} />
          <Route path="/about/governing-council" element={<GoverningCouncilPage />} />
          <Route path="/about/memorandum" element={<MemorandumPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/current" element={<CurrentEventsPage />} />
          <Route path="/events/calendar" element={<CalendarPage />} />
          <Route path="/events/past" element={<PastEventsPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/venues/auditorium" element={<AuditoriumPage />} />
          <Route path="/venues/conference-hall" element={<ConferenceHallPage />} />
          <Route path="/venues/board-room" element={<BoardRoomPage />} />
          <Route path="/venues/banquet-hall" element={<BanquetHallPage />} />
          <Route path="/venues/main-lawn" element={<MainLawnPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/guest-room" element={<GuestRoomPage />} />
          <Route path="/services/restaurant" element={<RestaurantPage />} />
          <Route path="/services/coffee-shop" element={<CoffeeShopPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/membership/signin" element={<MemberSignInPage />} />
          <Route path="/membership/new" element={<NewMembershipPage />} />
          <Route path="/membership/rules" element={<RulesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/notices/circulars" element={<CircularsPage />} />
          <Route path="/notices/tenders" element={<NoticesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/location" element={<LocationMapPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/administration" element={<AdminPage />} />
          <Route path="/administration/signin" element={<AdminSignInPage />} />
          <Route path="/administration/finance" element={<FinancePage />} />
          <Route path="/administration/hr" element={<HrPage />} />
          <Route path="/administration/security" element={<SecurityPage />} />
          <Route path="/administration/maintenance" element={<MaintenancePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
