import { GST_RATE } from './mockData';

/**
 * B S Abdur Rahman Auditorium — official venue data as supplied by IICC
 * (https://www.iiccentre.com/auditorium.php). Shift tariffs are in INR,
 * exclusive of CGST 9% + SGST 9% (see `GST_RATE`).
 */
export const auditoriumDetails = {
  name: 'B S Abdur Rahman Auditorium',
  nameUrdu: 'بی ایس عبدالرحمن آڈیٹوریم',
  capacity: 300,
  capacityLabel: 'Theater Style',
  stage: '32 × 24 ft',
  shiftOptions: [
    { value: 'first', label: 'First Shift · 9 AM – 2 PM', hours: 5, member: 16000, nonMember: 20000 },
    { value: 'second', label: 'Second Shift · 4 PM – 10 PM', hours: 6, member: 22000, nonMember: 28000 },
    { value: 'fullDay', label: 'Full Day · 9 AM – 10 PM', hours: 13, member: 30000, nonMember: 38000 }
  ],
  extraHour: { member: 3500, nonMember: 4000 },
  amenities: [
    'Theater-Style Seating for 300',
    'Fully Air-Conditioned Hall',
    'Advanced Audio-Visual Equipment',
    'Two Fully Equipped Green Rooms',
    '32 × 24 ft Stage',
    'Lobby for Registration / Display Counters'
  ]
};

export interface AuditoriumTariffRow {
  id: string;
  label: string;
  labelUrdu: string;
  member: number;
  nonMember: number;
}

export const auditoriumTariff: AuditoriumTariffRow[] = [
  { id: 'aud-first-shift', label: 'First Shift · 9 AM to 2 PM', labelUrdu: 'پہلی شفٹ · صبح 9 تا دوپہر 2', member: 16000, nonMember: 20000 },
  { id: 'aud-second-shift', label: 'Second Shift · 4 PM to 10 PM', labelUrdu: 'دوسری شفٹ · شام 4 تا رات 10', member: 22000, nonMember: 28000 },
  { id: 'aud-full-day', label: 'Full Day · 9 AM to 10 PM', labelUrdu: 'پورا دن · صبح 9 تا رات 10', member: 30000, nonMember: 38000 },
  { id: 'aud-additional-hour', label: 'Additional Hours (per hour)', labelUrdu: 'اضافی اوقات (فی گھنٹہ)', member: 3500, nonMember: 4000 }
];

export const auditoriumGstNote = `All rates are subject to 18% GST (CGST ${GST_RATE * 50}% + SGST ${GST_RATE * 50}%).`;
