export interface RestaurantMenuSection {
  id: string;
  name: string;
  nameUrdu: string;
  description: string;
  items: { id: number; name: string; note?: string }[];
}

// Names transcribed from the supplied menu.md. Confirm unusual spellings with the restaurant.
// No prices or dietary/allergen guarantees were supplied.
const sections = [
  {
    id: 'shorba', name: 'Bahaar-e-Shorba', nameUrdu: 'شوربے', description: 'A warming beginning',
    names: ['Murgh Ka Shorba', 'Gosht Ka Shorba', 'Timalar Ka Garam Ras']
  },
  {
    id: 'tandoor', name: 'Shaan-e-Tandoor', nameUrdu: 'تندور', description: 'From the tandoor',
    names: ['Afghani Murgh White (8 Pcs)', 'Afghani Murgh White (4 Pcs)', 'Tandoori Murgh', 'Tandoon Mutton Burra (6 Pcs)', 'Tandoon Mutton Burra (3 Pcs)', 'Tandoori Chicken Burra (8 Pcs)', 'Tandoori Chicken Burra (4 Pcs)', 'Tandoori Bakra (Whole Lamb)']
  },
  {
    id: 'tikka', name: 'Tikka Bemisal', nameUrdu: 'تکہ', description: 'Flavour from the fire',
    names: ['Murgh Malai Tikka (8 Pcs)', 'Murgh Malai Tikka (4 Pcs)', 'Murgh Tikka (8 Pcs)', 'Murgh Tikka (4 Pcs)', 'Fish Tikka (8 Pcs)', 'Paneer Tikka (8 Pcs)', 'Paneer Tikka (4 Pcs)']
  },
  {
    id: 'kabab', name: 'Kabab-e-Lazeer', nameUrdu: 'کباب', description: 'The art of the kabab',
    names: ['Murgh Seekh Kabab (4 Pcs)', 'Dil Pasand Seekh Kabab (4 Pcs)', 'Bemisaal Shami Kabab (2 Pcs)']
  },
  {
    id: 'rolls', name: 'Rolls', nameUrdu: 'رول', description: 'Wrapped with flavour',
    names: ['Murgh Kabab Roll', "Kanms’ Roll (Kabab Roll)", 'Murgh Tikka Roll', 'Paneer Roll']
  },
  {
    id: 'dastarkhwan', name: 'Shahi Dastar Khwan', nameUrdu: 'شاہی دسترخوان', description: 'The royal main course',
    names: ['Mutton Haleem', 'Murgh Musallam', 'Crispy Fried Fish (6 Pcs)', 'Akbar Murgh Masala (Chicken Curry)', 'Shahi Murgh (Chicken Do Plaza)', 'Murgh Nahari', 'Lazeez Murgh Saag', 'Karahi Murgh Peshawari', 'Makhani Murgh (Butter Chicken Full)', 'Makhani Murgh (Butter Chicken Hall)', 'Makhani Murgh (Butter Ch. Boneless Full)', 'Makhani Murgh (Butter Ch Boneless Half)', 'Jahangin Murgh', 'Handi Murgh Spl. (With Mutton Qeera)', 'Crispy Fried Chicken (10)', 'Crispy Fried Chicken (5 Pcs)', 'Jahangin Qorma', 'Firdausi Qorma (Mutton Qorma)', 'Dil Bahaar Do Plaza (Mutton Stew)', 'Badshahi Badam Pasanda', 'Karahi Gosht', 'Subzi Gosht', 'Saag Gosht', 'Nargisi Kotta', 'Nayab Maghaz Masala (Brain Curry)', 'Lahmee Qeema', 'Qeema Kalej', 'Tukhm-e-Murgh Masala (Egg Curry)', 'Nahari (Mutton)', 'Mutton Paya', 'Handi Gosht Spl (With Mutton Qeemo)', 'Daal Gosht']
  },
  {
    id: 'zameen', name: 'Nemat-e-Zameen', nameUrdu: 'نعمتِ زمین', description: 'From garden to table',
    names: ['Mixed Vegetable', 'Aloo-Mattar-Paneer', 'Aloo-Palak', 'Makhani Daal', 'Yellow Daal', 'Paneer Saag', 'Karahi Paneer', 'Shahi Paneer', 'Butter Paneer', 'Malai Kofta', 'Mushroom-e-Mumtaz']
  },
  {
    id: 'rice', name: 'Rice & Pulao', nameUrdu: 'چاول اور پلاؤ', description: 'Fragrant accompaniments',
    names: ['Murgh Biryani Achari', 'Gosht Biryani Achari', 'Murgh Biryani Anarkali', 'Biryani Bahishti Gosht', 'Vegetable Pulao', 'Zeera Rice', 'Plain Rice']
  },
  {
    id: 'bread', name: 'Naan & Roti', nameUrdu: 'نان اور روٹی', description: 'Complete your dastarkhwan',
    names: ['Lazeez Qeema Naan', 'Aloo Parantha', 'Paneer Parantha', 'Tandoori Parantha', 'Bagarkhani (Sheer Maal)', 'Roghni Naan (Butter Naan)', 'Plain Naan', 'Tandoori Roti', 'Rumali Roti', 'Butter Roti', 'Desi Alta Rot']
  },
  {
    id: 'mithas', name: 'Mithas', nameUrdu: 'مٹھاس', description: 'A sweet finale',
    names: ['Kheer Benazeer', 'Shahi Tukra', 'Gulab Jamun (2 Pcs)']
  }
];

const notes: Record<string, string> = {
  'Tandoori Bakra (Whole Lamb)': 'Order 24 hours in advance · 50% advance payment',
  'Fish Tikka (8 Pcs)': 'Winter season only',
  'Murgh Musallam': 'Preparation time: 30 minutes'
};

let nextId = 1;
export const restaurantMenu: RestaurantMenuSection[] = sections.map(({ names, ...section }) => ({
  ...section,
  items: names.map(name => ({ id: nextId++, name, ...(notes[name] ? { note: notes[name] } : {}) }))
}));

export const restaurantDetails = {
  name: 'Dilli Dastarkhwan',
  nameUrdu: 'دلی دسترخوان',
  managedBy: 'Karim’s',
  mainSeating: 78,
  privateSeating: 12,
  lunch: '12 noon – 3 pm',
  dinner: '7 pm – 11 pm'
};
