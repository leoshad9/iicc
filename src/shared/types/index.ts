export type Language = 'en' | 'ur';

export type FontSize = 'sm' | 'md' | 'lg';

export type SectionId = 
  | 'home'
  | 'about'
  | 'administration'
  | 'services'
  | 'membership'
  | 'library'
  | 'venues'
  | 'events'
  | 'archive'
  | 'gallery'
  | 'notices'
  | 'tenders'
  | 'contact';

export interface EventItem {
  id: string;
  title: string;
  titleUrdu?: string;
  date: string;
  time: string;
  venue: string;
  category: 'Lecture Series' | 'Mushaira & Poetry' | 'Book Release' | 'Panel Discussion' | 'Music & Cultural' | 'Cultural';
  speaker: string;
  description: string;
  image: string;
  seatsTotal: number;
  seatsBooked: number;
  isRSVPOpen: boolean;
}

export interface Venue {
  id: string;
  name: string;
  nameUrdu?: string;
  capacity: string;
  dimensions: string;
  description: string;
  image: string;
  bestFor: string;
  hourlyTariffMember: number;
  hourlyTariffStandard: number;
  dayTariffMember: number;
  dayTariffStandard: number;
  features: string[];
}

/**
 * Guest room category from the official Accommodation (Hostel Rooms) tariff plan
 * (https://www.iiccentre.com/hostel-rooms.php). `tariff` is the published nightly
 * rate in INR, exclusive of CGST 9% + SGST 9% (see `GST_RATE`).
 */
export interface GuestRoom {
  id: string;
  type: string;
  typeUrdu?: string;
  /** Published tariff-plan label, e.g. 'Single Occupancy'. */
  occupancy: string;
  occupancyUrdu?: string;
  /** Nightly tariff in INR, before statutory taxes. */
  tariff: number;
  description: string;
  image: string;
  amenities: string[];
}

/** Optional add-on or statutory charge published with the tariff plan. */
export interface VenueAddOnCharge {
  id: string;
  item: string;
  itemUrdu?: string;
  /** Charge in INR, before CGST 9% + SGST 9%. */
  amount: number;
  /** Billing basis, e.g. 'per microphone'. */
  basis: string;
}

export interface NoticeItem {
  id: string;
  refNo: string;
  title: string;
  date: string;
  category: 'Official Notice' | 'Election & AGM' | 'Circular' | 'Press Release';
  summary: string;
  fileSize?: string;
  isImportant?: boolean;
}

export interface TenderItem {
  id: string;
  tenderNo: string;
  title: string;
  department: string;
  publishDate: string;
  closingDate: string;
  estimatedCost: string;
  emdAmount: string;
  status: 'Active' | 'Under Evaluation' | 'Closed';
  documentUrl?: string;
}

export interface DepartmentContact {
  department: string;
  departmentUrdu?: string;
  officerInCharge: string;
  phones: string[];
  email: string;
  timing: string;
  location: string;
}

export interface VideoItem {
  id: string;
  title: string;
  titleUrdu?: string;
  category: 'Lecture Series' | 'Poetry & Music' | 'Women Members Session' | 'Open House & News' | 'Virtual Tour' | 'Cultural' | 'Patriotic';
  speaker?: string;
  duration: string;
  /** Card artwork; use `youtubeThumbnailUrl(id)` for published recordings. */
  thumbnail: string;
  /**
   * Verified public YouTube video ID (see `src/shared/utils/youtube.ts`).
   * Omit when the recording is not published yet: the card then renders without a
   * play affordance instead of embedding a URL that cannot play.
   */
  youtubeId?: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Dastan-e-Dastangoi' | 'Cultural' | 'Book Releases' | 'Seminars' | 'Campus';
  image: string;
  caption: string;
  date: string;
}
