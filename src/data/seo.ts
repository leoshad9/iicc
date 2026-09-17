// Confirm this canonical origin before deploying to a different domain.
export const SITE_URL = 'https://www.iiccentre.com';
export const SITE_NAME = 'India Islamic Cultural Centre';

export interface SeoPage {
  title: string;
  description: string;
  noindex?: boolean;
  canonicalPath?: string;
}

const pending = (title: string): SeoPage => ({
  title,
  description: `${title} at the India Islamic Cultural Centre, New Delhi. This page is currently under construction.`,
  noindex: true,
});
const signin = (title: string): SeoPage => ({
  title,
  description: `${title} for the India Islamic Cultural Centre portal.`,
  noindex: true,
});

export const seoPages: Record<string, SeoPage> = {
  '/': { title: 'India Islamic Cultural Centre (IICC) | New Delhi', description: 'Explore the India Islamic Cultural Centre on Lodhi Road, New Delhi. Discover cultural events, membership, venues, library resources and guest services.' },
  '/about': { title: 'About IICC', description: 'Learn about the India Islamic Cultural Centre in New Delhi and its commitment to cultural harmony, literature and interfaith understanding.' },
  '/about/history': { title: 'History of IICC', description: 'Explore the history and milestones of the India Islamic Cultural Centre, from its founding vision to its campus on Lodhi Road, New Delhi.' },
  '/about/aims': { title: 'Aims & Objectives', description: 'Discover the aims of the India Islamic Cultural Centre: mutual understanding, cultural exchange, education and interfaith dialogue.' },
  '/about/governing-council': { title: 'Governing Council', description: 'Meet the leadership and governing council of the India Islamic Cultural Centre, New Delhi.' },
  '/about/memorandum': { title: 'Memorandum of Association', description: 'Read the India Islamic Cultural Centre memorandum of association, institutional objectives and governance provisions.' },
  '/events': { title: 'Cultural Events & Programs', description: 'Explore cultural and academic programs at IICC, including lectures, literary gatherings and community events in New Delhi.' },
  '/events/current': pending('Current Events'),
  '/events/calendar': pending('Event Calendar'),
  '/events/past': pending('Past Events'),
  '/venues': { title: 'Venues & Event Facilities', description: 'Explore IICC halls, meeting rooms and lawns for events on Lodhi Road, New Delhi. View venue facilities and the tariff estimator.' },
  '/venues/auditorium': pending('Auditorium'),
  '/venues/conference-hall': pending('Conference Hall'),
  '/venues/board-room': pending('Board Room'),
  '/venues/banquet-hall': pending('Banquet Hall'),
  '/venues/main-lawn': pending('Main Lawn'),
  '/services': { title: 'Hospitality & Services', description: 'Discover guest accommodation, dining, coffee shop and library amenities at the India Islamic Cultural Centre in New Delhi.' },
  '/services/guest-room': { title: 'Accommodation & Guest Room Tariff Plan', description: 'Guest room and suite tariffs at the India Islamic Cultural Centre, Lodhi Road, New Delhi — single and double occupancy, suite and presidential suite rates, additional bed charge and reservations helpline.' },
  '/services/restaurant': { title: 'Dilli Dastarkhwan | Mughlai Restaurant', description: 'Discover Dilli Dastarkhwan at IICC, managed by Karim’s. Explore the Mughlai menu, lunch and dinner hours, and main and private dining spaces on Lodhi Road, New Delhi.' },
  '/services/coffee-shop': pending('Coffee Shop'),
  '/membership': { title: 'IICC Membership', description: 'Explore membership information and member services at the India Islamic Cultural Centre, New Delhi.' },
  '/membership/signin': signin('Member Sign In'),
  '/membership/new': pending('New Membership'),
  '/membership/rules': pending('Membership Rules'),
  '/login': signin('Portal Login'),
  '/library': { title: 'Sultan Qaboos Library', description: 'Welcome to Sultan Qaboos Library at IICC, New Delhi. Find library timings, the holiday schedule, and library contact details.' },
  '/notices': { title: 'Official Notices & Tenders', description: 'Browse IICC official notices, circulars, vendor tenders and procurement information from the Secretariat.' },
  '/notices/circulars': pending('Circulars'),
  '/notices/tenders': { title: 'Official Notices & Tenders', description: 'Browse IICC official notices, circulars, vendor tenders and procurement information from the Secretariat.', canonicalPath: '/notices' },
  '/contact': { title: 'Contact & Helplines', description: 'Contact the India Islamic Cultural Centre at 87-88 Lodhi Road, New Delhi. Find department helplines and contact information.' },
  '/contact/location': pending('Location Map'),
  '/media': { title: 'Media & Broadcasts', description: 'Explore multimedia, broadcasts and cultural program highlights from the India Islamic Cultural Centre, New Delhi.' },
  '/gallery': pending('Gallery'),
  '/archive': pending('Archive'),
  '/administration': pending('Administration'),
  '/administration/signin': signin('Administrator Sign In'),
  '/administration/finance': pending('Finance'),
  '/administration/hr': pending('Human Resources'),
  '/administration/security': pending('Security'),
  '/administration/maintenance': pending('Maintenance'),
  '/terms': pending('Terms & Conditions'),
};

export function normalizePath(path: string): string {
  return path.replace(/\/+$/, '').toLowerCase() || '/';
}

export function getSeoPage(path: string): SeoPage {
  return seoPages[normalizePath(path)] ?? {
    title: 'Page Not Found',
    description: 'The requested page could not be found. Return to the India Islamic Cultural Centre home page.',
    noindex: true,
  };
}

export function canonicalUrl(path: string): string {
  const normalized = normalizePath(path);
  return `${SITE_URL}${getSeoPage(normalized).canonicalPath ?? normalized}`;
}
