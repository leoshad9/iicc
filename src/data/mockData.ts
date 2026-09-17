import { 
  EventItem, 
  Venue, 
  GuestRoom, 
  NoticeItem, 
  TenderItem, 
  DepartmentContact, 
  VideoItem, 
  GalleryPhoto 
} from '../shared/types';
import { youtubeThumbnailUrl } from '../shared/utils/youtube';

export const presidentVisionData = {
  name: 'Salman Khurshid',
  nameUrdu: 'سلمان خورشید',
  role: 'President, India Islamic Cultural Centre',
  roleUrdu: 'صدر، انڈیا اسلامک کلچرل سینٹر',
  image: '/salman.webp',
  messageTitle: 'Reimagining IICC: Cultural Harmony, Pluralism, Literature & Modernization',
  messageTitleUrdu: 'نئی وسعتیں، باہمی رواداری، ادب اور جدید تقاضے',
  quote: 'Our founding vision remains as urgent and sacred as ever: to serve as a bridge of intellectual fraternity, interfaith dialogue, and cultural exchange among all communities across India and the global diaspora.',
  paragraphs: [
    'Established under the patronage of national luminaries in 1981, the India Islamic Cultural Centre on Lodhi Road stands at the geographical and cultural heart of New Delhi. It is an autonomous haven where literature, philosophy, Sufi thought, arts, and contemporary civic dialogue converge.',
    'As we step boldly into this era of institutional revitalization, our leadership is actively modernizing our research archives, enhancing our public lecture series, digitizing thousands of rare Urdu and Persian manuscripts, and opening our world-class venues to civil society dialogues, national book releases, and symposia.',
    'We invite our members, researchers, cultural connoisseurs, and young scholars to actively participate in this living intellectual renaissance.'
  ],
  historyMilestones: [
    { year: '1981', title: 'Foundation Stone Laid', desc: 'Conceived and patronized by national leaders to embody India\'s composite culture.' },
    { year: '2006', title: 'Campus Dedication', desc: 'Inauguration of the iconic red sandstone and marble cultural complex on Lodhi Road.' },
    { year: '2015', title: 'Research & Archive Digitization', desc: 'Expansion of the 25,000-volume reference library and digital reading terminal.' },
    { year: '2024-2026', title: 'Institutional Modernization', desc: 'Revamped conference halls, energy-efficient guest suites, and online member services.' },
  ]
};

export const upcomingEvents: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Musical Evening',
    date: 'Sat, Sep 5, 2026',
    time: '04:00 PM – 10:00 PM IST',
    venue: 'Auditorium',
    category: 'Music & Cultural',
    speaker: 'Rainbows',
    description: 'Musical Evening organized by Rainbows at IICC Auditorium.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 300,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-2',
    title: 'Book Release',
    date: 'Sat, Sep 12, 2026',
    time: '04:00 PM – 08:00 PM IST',
    venue: 'Conference Hall-1',
    category: 'Book Release',
    speaker: 'S. M. Shams',
    description: 'Book Release event organized by S. M. Shams at IICC Conference Hall-1.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 150,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-3',
    title: 'Cultural, Patriotic and Felicitation Programme',
    date: 'Wed, Sep 16, 2026',
    time: '06:00 PM Onwards',
    venue: 'Auditorium',
    category: 'Cultural',
    speaker: 'India Islamic Cultural Centre',
    description: 'Cultural, Patriotic and Felicitation Programme organized by India Islamic Cultural Centre.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 400,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-4',
    title: '3rd A. G. Noorani Memorial Lecture',
    date: 'Fri, Sep 18, 2026',
    time: '06:00 PM Onwards',
    venue: 'Auditorium',
    category: 'Lecture Series',
    speaker: 'India Islamic Cultural Centre',
    description: '3rd A. G. Noorani Memorial Lecture – The Life & Work of A.G. Noorani.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 350,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-5',
    title: 'Education Seminar',
    date: 'Mon, Sep 21, 2026',
    time: '09:00 AM – 10:00 PM',
    venue: 'Auditorium',
    category: 'Lecture Series',
    speaker: 'Mohammad Sakil',
    description: 'Education Seminar organized by Mohammad Sakil at IICC Auditorium.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 250,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-6',
    title: 'Mushaira',
    date: 'Tue, Sep 22, 2026',
    time: '04:00 PM – 10:00 PM',
    venue: 'Auditorium',
    category: 'Mushaira & Poetry',
    speaker: 'Mrs. Robab Khan',
    description: 'Mushaira organized by Mrs. Robab Khan at IICC Auditorium.',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 300,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-7',
    title: 'Seerat-un-Nabi (A talk on the Life, Character and Teachings of Prophet Muhammad PBUH)',
    date: 'Fri, Sep 25, 2026',
    time: '07:00 PM Onwards',
    venue: 'Auditorium',
    category: 'Lecture Series',
    speaker: 'India Islamic Cultural Centre',
    description: 'Seerat-un-Nabi – Talk on the Life, Character and Teachings of Prophet Muhammad PBUH.',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 400,
    seatsBooked: 0,
    isRSVPOpen: true
  },
  {
    id: 'evt-8',
    title: 'Life of the Sahaba (RA) - Lecture Series',
    date: 'Sun, Sep 27, 2026',
    time: '05:30 PM Onwards',
    venue: 'Auditorium',
    category: 'Lecture Series',
    speaker: 'India Islamic Cultural Centre',
    description: 'Life of the Sahaba (RA) – Lecture Series on the lives of the companions of Prophet Muhammad PBUH.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    seatsTotal: 350,
    seatsBooked: 0,
    isRSVPOpen: true
  }
];

export const venuesData: Venue[] = [
  {
    id: 'v-auditorium',
    name: 'Auditorium (Hakeem Abdul Hameed Hall)',
    nameUrdu: 'آڈیٹوریم (حکیم عبدالحمید ہال)',
    capacity: '500 Persons',
    dimensions: '4,800 sq. ft. · Air-Conditioned',
    description: 'Acoustically treated world-class auditorium equipped with JBL Pro line array sound, state-of-the-art motorized stage lighting, HD projection, green rooms, and VIP lounge access.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    bestFor: 'National Conferences, Convocation, International Seminars, Mushairas, Theatrical Performances',
    hourlyTariffMember: 9500,
    hourlyTariffStandard: 14000,
    dayTariffMember: 65000,
    dayTariffStandard: 95000,
    features: ['Line Array Sound System', 'Motorized Cyclorama & Stage Lights', 'Green Rooms for Guests', 'Dedicated VIP Foyer', 'Podium & Wireless Microphones']
  },
  {
    id: 'v-lawns',
    name: 'Main Central Lawns & Mughal Courtyard',
    nameUrdu: 'مرکزی وسیع لان اور مغل صحن',
    capacity: '1,200 Persons',
    dimensions: '22,000 sq. ft. · Manicured Greenery',
    description: 'Expansive lush open-air lawns bordered by traditional Mughal water rills and flora, ideal for large wedding receptions, institutional dinners, book fairs, and diplomatic festivals.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    bestFor: 'Wedding Receptions, Banquets, Exhibitions, Book Fairs, Open-Air Convocations',
    hourlyTariffMember: 12000,
    hourlyTariffStandard: 18000,
    dayTariffMember: 85000,
    dayTariffStandard: 130000,
    features: ['Illuminated Perimeter Lights', 'Direct Service Gate for Catering', 'Valet Parking Space', 'Washroom & Powder Room Pavilion', 'Backup Silent DG Generator']
  },
  {
    id: 'v-banquet',
    name: 'Dastarkhwan Banquet & Dining Hall',
    nameUrdu: 'دسترخوان ضیافت و بینکوئٹ ہال',
    capacity: '250 Persons',
    dimensions: '3,200 sq. ft. · Ground Level',
    description: 'Elegantly furnished dining hall with polished granite flooring, ambient chandeliers, and direct buffet access from the IICC authentic kitchen.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    bestFor: 'Luncheons, High-Tea Receptions, Dinner Gatherings, Post-Conference Dining',
    hourlyTariffMember: 6000,
    hourlyTariffStandard: 9000,
    dayTariffMember: 42000,
    dayTariffStandard: 60000,
    features: ['Full Buffet Stations', 'Air-Conditioned Climate Control', 'Serving Staff Hospitality', 'Private Hand-Wash Area', 'Direct Parking Corridor']
  },
  {
    id: 'v-conf1',
    name: 'Conference Hall No. 1 (Executive Boardroom)',
    nameUrdu: 'کانفرنس ہال نمبر 1 (ایگزیکٹو بورڈ روم)',
    capacity: '80 Persons',
    dimensions: '1,400 sq. ft. · Level 1',
    description: 'Modern conference facility featuring modular U-shape seating, integrated delegate microphones, 85-inch 4K LED interactive display, and video conferencing bridge.',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    bestFor: 'Board Meetings, Press Conferences, Round-Table Discussions, Academic Defense',
    hourlyTariffMember: 3500,
    hourlyTariffStandard: 5500,
    dayTariffMember: 25000,
    dayTariffStandard: 38000,
    features: ['Bosch Delegate Mic System', '85" 4K Video Wall', 'Polycom Hybrid VC System', 'Attached Secretarial Anteroom', 'Wi-Fi 6 High Speed']
  },
  {
    id: 'v-conf2',
    name: 'Seminar Hall No. 2',
    nameUrdu: 'سیمینار ہال نمبر 2',
    capacity: '120 Persons',
    dimensions: '1,800 sq. ft. · Level 2',
    description: 'Tiered acoustic seminar room suited for lectures, training workshops, documentary screenings, and literary discussions.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    bestFor: 'Workshops, Book Discussions, Documentary Screenings, Youth Debates',
    hourlyTariffMember: 4000,
    hourlyTariffStandard: 6000,
    dayTariffMember: 28000,
    dayTariffStandard: 42000,
    features: ['Overhead Laser Projector', 'Surround Audio', 'Tiered Theater Seating', 'Lectern with Digital Prompter', 'Acoustic Soundproofing']
  }
];

export const guestRoomsData: GuestRoom[] = [
  {
    id: 'gr-deluxe',
    type: 'Deluxe Twin / King Guest Room',
    count: 24,
    tariffMember: 2400,
    tariffNonMember: 3800,
    description: 'Spacious 340 sq. ft. air-conditioned room with premium orthopaedic bedding, study desk, attached marble bathroom, LED TV, tea/coffee maker, and serene courtyard views.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    amenities: ['Free High-Speed Wi-Fi', 'Daily Housekeeping', '24/7 Room Service', 'Complimentary Breakfast at Dastarkhwan', 'Electronic Safe', 'Hot Water Geyser']
  },
  {
    id: 'gr-suite',
    type: 'Presidential / Executive Suite',
    count: 8,
    tariffMember: 4500,
    tariffNonMember: 7000,
    description: 'Luxurious two-room suite (580 sq. ft.) featuring a separate living parlor for receiving visitors, plush sofa suite, mini-refrigerator, dining nook, and panoramic garden views.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: ['Living Room & Visitor Anteroom', 'King Size Bed', 'Mini Bar & Tea Station', 'Bathtub & Premium Toiletries', 'Complimentary Laundry Allowance', 'Priority Booking Status']
  }
];

export const diningInfo = {
  restaurantName: 'Dastarkhwan Restaurant',
  restaurantUrdu: 'دسترخوان ریستوران',
  tagline: 'Authentic Awadhi, Mughlai & Dum Pukht Culinary Heritage',
  timing: 'Lunch: 12:30 PM - 03:30 PM | Dinner: 07:30 PM - 11:00 PM',
  cafeName: 'Cultural Coffee Lounge & Book Cafe',
  cafeOfferings: 'Freshly roasted Arabica, traditional Kashmiri Kahwa, Sulaimani chai, samosas, and light confectionery alongside daily periodicals.',
  specialties: [
    'Galawati & Kakori Kababs with Sheermal',
    'Awadhi Dum Biryani (Mutton & Vegetable)',
    'Nalli Nihari with Roghani Naan (Weekend Breakfast)',
    'Paneer Pasanda & Dal Bukhara',
    'Shahi Tukda & Kesar Phirni'
  ],
  images: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
  ]
};

export const libraryInfo = {
  title: 'Allama Iqbal & Maulana Azad Reference Library',
  volumes: '25,000+ Volumes & 1,200 Rare Manuscripts',
  timing: 'Monday to Saturday: 09:30 AM - 06:00 PM (Closed on Sundays & National Holidays)',
  languages: ['Urdu', 'English', 'Arabic', 'Persian', 'Hindi'],
  readingRoom: 'Quiet, climate-controlled reference floor with 60 individual carrels, OPAC electronic catalog terminals, and high-speed Wi-Fi.',
  sections: [
    { name: 'Islamic Philosophy, Jurisprudence & Sufism', count: '6,500 books' },
    { name: 'Urdu Literature, Divans & Dastans', count: '8,200 books' },
    { name: 'Indian National Movement & Modern History', count: '4,100 books' },
    { name: 'Rare Persian Manuscripts & Lithographs', count: '1,200 folios' },
    { name: 'Comparative Religion & Inter-Faith Dialogue', count: '3,200 books' },
    { name: 'Current Periodicals & Research Journals', count: '45 subscriptions' }
  ]
};

// Broadcast hub entries. `youtubeId` must be a verified public YouTube ID
// (see src/shared/utils/youtube.ts) — never a placeholder. Cards without a
// verified ID keep their event metadata but render as "not published yet".
export const videosData: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Sir Syed Ahmad Khan: A Private Life by Iftikhar Alam Khan',
    titleUrdu: 'سر سید احمد خان: ایک نجی زندگی',
    category: 'Lecture Series',
    speaker: 'Iftikhar Alam Khan',
    duration: '1h 02m',
    thumbnail: youtubeThumbnailUrl('MdQLyKHz060'),
    youtubeId: 'MdQLyKHz060',
    description: 'Lecture by Iftikhar Alam Khan on the personal and public life of Sir Syed Ahmad Khan.'
  },
  {
    id: 'vid-2',
    title: 'Two days Seminar on 17th CE Poet Mirza Abdul Qadir "Bedil"',
    titleUrdu: '17ویں صدی کے شاعر مرزا عبد القادر بیدل پر دو دن کا سیمینار',
    category: 'Poetry & Music',
    speaker: 'India Islamic Cultural Centre Delhi',
    duration: '1h 15m',
    // Seminar recording is not on YouTube yet: no `youtubeId`, so this card is
    // shown as "not published yet" instead of embedding the old dead placeholder.
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Two-day seminar on the life and poetry of Mirza Abdul Qadir Bedil, the great Persian poet.'
  },
  {
    id: 'vid-3',
    title: 'Mirza Bedil पर एक महफिल Delhi में | Poetry | Persian Music | Sufism',
    titleUrdu: 'دہلی میں مرزا بیدل کی مہفل | شاعری | فارسی موسیقی | تصوف',
    category: 'Poetry & Music',
    speaker: 'Awaz The Voice',
    duration: '58m',
    thumbnail: youtubeThumbnailUrl('sUzTIoPi_Ew'),
    youtubeId: 'sUzTIoPi_Ew',
    description: 'A mahfil dedicated to Mirza Bedil featuring Persian poetry recitation and Sufi music in Delhi.'
  },
  {
    id: 'vid-4',
    title: 'Open House Session in news',
    titleUrdu: 'خبروں میں اوپن ہاؤس سیشن',
    category: 'Open House & News',
    speaker: 'India Islamic Cultural Centre Delhi',
    duration: '24m',
    thumbnail: youtubeThumbnailUrl('Ga0ZMXRhLYg'),
    youtubeId: 'Ga0ZMXRhLYg',
    description: 'News coverage of the Open House Session held at IICC.'
  },
  {
    id: 'vid-5',
    title: 'Islamic Cultural Center mounts exhibition to showcase rich heritage of calligraphy art',
    titleUrdu: 'اسلامک ثقافتی مرکز کی خوبصورت خطاطی کی میراث نمائش',
    category: 'Cultural',
    speaker: 'Daily Salar Urdu Digital',
    duration: '8m',
    // No verified YouTube ID supplied yet (previous placeholder was dead):
    // keep the card, render it as "not published yet".
    thumbnail: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80',
    description: 'Exhibition showcasing the rich heritage of calligraphy art at IICC.'
  },
  {
    id: 'vid-6',
    title: 'Operation sindoor को Salute',
    titleUrdu: 'آپریشن سندور کو سلام',
    category: 'Patriotic',
    speaker: 'Media 24x7',
    duration: '6m',
    // No verified YouTube ID supplied yet (previous placeholder was dead):
    // keep the card, render it as "not published yet".
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    description: 'Tribute to Operation Sindoor covered by Media 24x7.'
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gp-1',
    title: 'Dastan-e-Dastangoi Performance in Full Cadence',
    category: 'Dastan-e-Dastangoi',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
    caption: 'Dastango Mahmood Farooqui holding the packed auditorium in thrall with tales of Tilism-e-Hoshruba.',
    date: 'February 2026'
  },
  {
    id: 'gp-2',
    title: 'Annual All-India Mushaira Under Evening Lamps',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    caption: 'Eminent poets reciting verses to an audience of over 800 dignitaries and connoisseurs.',
    date: 'January 2026'
  },
  {
    id: 'gp-3',
    title: 'Book Discussion on Indian Syncretic Traditions',
    category: 'Book Releases',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    caption: 'Author Dr. Swapna Liddle interacting with researchers following the keynote lecture.',
    date: 'February 2026'
  },
  {
    id: 'gp-4',
    title: 'Campus Central Mughal Lawns During Spring Blossom',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    caption: 'Lush greenery and architectural water courses on Lodhi Road.',
    date: 'March 2026'
  },
  {
    id: 'gp-5',
    title: 'Scholars in Maulana Azad Reference Library Reading Room',
    category: 'Seminars',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    caption: 'Doctoral researchers examining rare Persian folios at dedicated reading desks.',
    date: 'February 2026'
  },
  {
    id: 'gp-6',
    title: 'Executive Committee & President Vision Briefing',
    category: 'Seminars',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    caption: 'President Salman Khurshid presiding over the institutional modernization council meeting.',
    date: 'January 2026'
  }
];

export const noticesData: NoticeItem[] = [
  {
    id: 'not-5',
    refNo: 'IICC/NOT/2026/05',
    title: 'Notice to Members — Transaction ID Verification Required',
    date: 'August 11, 2026',
    category: 'Official Notice',
    summary: 'All members are requested to email their Transaction IDs to account@iiccentre.com to help reconcile untracked transactions and issue receipts promptly.',
    fileSize: '500 KB',
    isImportant: true
  },
  {
    id: 'not-6',
    refNo: 'IICC/NOT/2026/06',
    title: 'Notice Inviting Tender — Security Guard Services (No. IICC/Security/2026-27/2)',
    date: 'September 01, 2026',
    category: 'Official Notice',
    summary: 'The Secretary, IICC invites sealed proposals from PSARA-compliant private security agencies for 9 male guards and 1 male night-shift supervisor for the IICC campus.',
    fileSize: '2.5 MB',
    isImportant: true
  },
  {
    id: 'not-1',
    refNo: 'IICC/NOT/2026/04',
    title: 'Notification for Ordinary General Meeting & Election Voter List Scrutiny 2026',
    date: 'March 10, 2026',
    category: 'Election & AGM',
    summary: 'In accordance with Article 16 of the IICC Constitution, all Life and Associate members are requested to verify their names and addresses on the draft electoral roll at the Secretariat before April 5, 2026.',
    fileSize: '1.2 MB',
    isImportant: true
  },
  {
    id: 'not-2',
    refNo: 'IICC/NOT/2026/03',
    title: 'Mandatory Digital KYC & RFID Card Upgradation for All Existing Members',
    date: 'March 01, 2026',
    category: 'Official Notice',
    summary: 'All registered members are requested to upload their updated photograph, mobile number, and Aadhaar/PAN details on the new IICC portal to issue the new smart biometric access card.',
    fileSize: '850 KB',
    isImportant: true
  },
  {
    id: 'not-3',
    refNo: 'IICC/NOT/2026/02',
    title: 'Summer 2026 Schedule for Calligraphy & Spoken Persian/Urdu Certificate Courses',
    date: 'February 22, 2026',
    category: 'Circular',
    summary: 'The Department of Languages announces admissions for the 8-week Summer Certificate Course in Nasta\'liq calligraphy and intermediate conversational Persian starting May 1, 2026.',
    fileSize: '620 KB',
    isImportant: false
  },
  {
    id: 'not-4',
    refNo: 'IICC/NOT/2026/01',
    title: 'Revised Tariff Schedule for Auditorium & Guest Suites (Effective 1 April 2026)',
    date: 'January 18, 2026',
    category: 'Official Notice',
    summary: 'The Executive Committee approved standard revisions for venue hire, member subsidies, and catering facilitation fees.',
    fileSize: '920 KB',
    isImportant: false
  }
];

export const tendersData: TenderItem[] = [
  {
    id: 'tnd-1',
    tenderNo: 'IICC/Security/2026-27/2',
    title: 'Security Guard Services',
    department: 'Administration & Security',
    publishDate: 'September 01, 2026',
    closingDate: 'September 10, 2026',
    estimatedCost: 'TBD',
    emdAmount: 'TBD',
    status: 'Active',
    documentUrl: 'https://www.iiccentre.com/admin/images/notice/1756708688Security%20Guard.pdf'
  }
];

export const departmentContacts: DepartmentContact[] = [
  {
    department: 'General Enquiries & Front Desk',
    departmentUrdu: 'عمومی معلومات و استقبالیہ',
    officerInCharge: 'Reception Officer, Ingress Desk',
    phones: ['011-43535353', '011-43535350'],
    email: 'iiccdelhi29@rediffmail.com',
    timing: '24 Hours Daily',
    location: 'Main Ingress Lobby, Ground Floor'
  },
  {
    department: 'Secretary Office & Administration',
    departmentUrdu: 'دفتر سیکریٹری و انتظامیہ',
    officerInCharge: 'Private Secretary to the Secretary',
    phones: ['011-43535353', '+91 9810393707'],
    email: '',
    timing: '10:00 AM - 06:00 PM (Mon-Sat)',
    location: 'Administrative Block, Level 1'
  },
  {
    department: 'Guest Room Reservations',
    departmentUrdu: 'کمروں کی بکنگ اور مہمان نوازی',
    officerInCharge: 'Hospitality Desk Manager',
    phones: ['011-43535353', '+91 9717455353'],
    email: 'iiccdelhi@gmail.com',
    timing: 'Round-the-clock Check-in Desk',
    location: 'Lodhi Road Guest Wing, Level 2'
  },
  {
    department: 'Venue Booking & Event Cell',
    departmentUrdu: 'ہالز بکنگ اور تقاریب سیل',
    officerInCharge: 'Venue Facilitation Manager',
    phones: ['011-43535338', '+91 8860049535'],
    email: 'iicchospitality@gmail.com',
    timing: '09:30 AM - 06:30 PM (Mon-Sat)',
    location: 'Convention Secretariat, Level 1'
  }
];
