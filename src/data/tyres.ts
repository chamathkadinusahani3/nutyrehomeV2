export type EuRating = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type Tyre = {
  id: string;
  brand: string;
  brandLogo: string;
  name: string;
  tier: 'Budget' | 'Mid-Range' | 'Premium';
  season: 'Summer' | 'Winter' | 'All Season';
  runFlat?: boolean;
  reinforced?: boolean;
  evSuitable?: boolean;
  speedRating: string;
  fuelEfficiency: EuRating;
  wetGrip: EuRating;
  noise: number;
  price: number;
  image: string;
};

export const tyres: Tyre[] = [
{
  id: 't01',
  brand: 'Michelin',
  brandLogo: '/logo/michelin.jpg',
  name: 'Primacy 4+',
  tier: 'Premium',
  season: 'Summer',
  speedRating: 'V',
  fuelEfficiency: 'B',
  wetGrip: 'A',
  noise: 69,
  price: 118,
  image: '/img2.png'
},
{
  id: 't02',
  brand: 'Michelin',
  brandLogo: '/logo/michelin.jpg',
  name: 'CrossClimate 2',
  tier: 'Premium',
  season: 'All Season',
  speedRating: 'H',
  fuelEfficiency: 'B',
  wetGrip: 'A',
  noise: 71,
  price: 129,
  reinforced: true,
  image: '/tyreref.png'
},
{
  id: 't03',
  brand: 'Continental',
  brandLogo: '/logo/continental.jpg',
  name: 'PremiumContact 6',
  tier: 'Premium',
  season: 'Summer',
  speedRating: 'W',
  fuelEfficiency: 'C',
  wetGrip: 'A',
  noise: 70,
  price: 112,
  runFlat: true,
  image: '/promo3.png'
},
{
  id: 't04',
  brand: 'Continental',
  brandLogo: '/logo/continental.jpg',
  name: 'WinterContact TS 870',
  tier: 'Premium',
  season: 'Winter',
  speedRating: 'H',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 71,
  price: 108,
  image: '/hero.png'
},
{
  id: 't05',
  brand: 'Bridgestone',
  brandLogo: '/logo/bridgestone.jpg',
  name: 'Turanza T005',
  tier: 'Premium',
  season: 'Summer',
  speedRating: 'V',
  fuelEfficiency: 'B',
  wetGrip: 'A',
  noise: 70,
  price: 115,
  evSuitable: true,
  image: '/img2.png'
},
{
  id: 't06',
  brand: 'Bridgestone',
  brandLogo: '/logo/bridgestone.jpg',
  name: 'Blizzak LM005',
  tier: 'Premium',
  season: 'Winter',
  speedRating: 'H',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 71,
  price: 109,
  image: '/runflat.png'
},
{
  id: 't07',
  brand: 'Pirelli',
  brandLogo: '/logo/pirelli.jpg',
  name: 'Cinturato P7',
  tier: 'Premium',
  season: 'Summer',
  speedRating: 'W',
  fuelEfficiency: 'B',
  wetGrip: 'A',
  noise: 72,
  price: 121,
  runFlat: true,
  image: '/promo3.png'
},
{
  id: 't08',
  brand: 'Pirelli',
  brandLogo: '/logo/pirelli.jpg',
  name: 'P Zero',
  tier: 'Premium',
  season: 'Summer',
  speedRating: 'Y',
  fuelEfficiency: 'D',
  wetGrip: 'A',
  noise: 73,
  price: 148,
  image: '/hero.png'
},
{
  id: 't09',
  brand: 'Goodyear',
  brandLogo: '/logo/goodyear.jpg.webp',
  name: 'EfficientGrip Performance 2',
  tier: 'Mid-Range',
  season: 'Summer',
  speedRating: 'V',
  fuelEfficiency: 'B',
  wetGrip: 'A',
  noise: 70,
  price: 96,
  evSuitable: true,
  image: '/img2.png'
},
{
  id: 't10',
  brand: 'Goodyear',
  brandLogo: '/logo/goodyear.jpg.webp',
  name: 'Vector 4Seasons Gen 3',
  tier: 'Mid-Range',
  season: 'All Season',
  speedRating: 'H',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 71,
  price: 101,
  reinforced: true,
  image: '/tyreref.png'
},
{
  id: 't11',
  brand: 'Dunlop',
  brandLogo: '/logo/dunlop.jpg',
  name: 'SP Sport BluResponse',
  tier: 'Mid-Range',
  season: 'Summer',
  speedRating: 'H',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 70,
  price: 84,
  image: '/promo3.png'
},
{
  id: 't12',
  brand: 'Dunlop',
  brandLogo: '/logo/dunlop.jpg',
  name: 'Winter Sport 5',
  tier: 'Mid-Range',
  season: 'Winter',
  speedRating: 'V',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 71,
  price: 89,
  image: '/hero.png'
},
{
  id: 't13',
  brand: 'Hankook',
  brandLogo: '/logo/hankook.jpg',
  name: 'Ventus Prime4',
  tier: 'Mid-Range',
  season: 'Summer',
  speedRating: 'V',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 69,
  price: 78,
  image: '/img2.png'
},
{
  id: 't14',
  brand: 'Hankook',
  brandLogo: '/logo/hankook.jpg',
  name: 'Winter i*cept RS3',
  tier: 'Mid-Range',
  season: 'Winter',
  speedRating: 'H',
  fuelEfficiency: 'D',
  wetGrip: 'C',
  noise: 71,
  price: 74,
  image: '/runflat.png'
},
{
  id: 't15',
  brand: 'Yokohama',
  brandLogo: '/logo/yokohama.jpg',
  name: 'BluEarth-A AE61',
  tier: 'Mid-Range',
  season: 'Summer',
  speedRating: 'V',
  fuelEfficiency: 'C',
  wetGrip: 'B',
  noise: 70,
  price: 76,
  image: '/tyreref.png'
},
{
  id: 't16',
  brand: 'BFGoodrich',
  brandLogo: '/logo/bfgoodrich_1.jpg',
  name: 'Advantage',
  tier: 'Budget',
  season: 'Summer',
  speedRating: 'H',
  fuelEfficiency: 'D',
  wetGrip: 'C',
  noise: 71,
  price: 62,
  image: '/promo3.png'
},
{
  id: 't17',
  brand: 'Marshal',
  brandLogo: '/logo/marshal.png.webp',
  name: 'MH15',
  tier: 'Budget',
  season: 'Summer',
  speedRating: 'H',
  fuelEfficiency: 'D',
  wetGrip: 'D',
  noise: 72,
  price: 51,
  image: '/hero.png'
},
{
  id: 't18',
  brand: 'Marshal',
  brandLogo: '/logo/marshal.png.webp',
  name: 'I\'Zen KW31',
  tier: 'Budget',
  season: 'Winter',
  speedRating: 'H',
  fuelEfficiency: 'D',
  wetGrip: 'D',
  noise: 72,
  price: 55,
  image: '/img2.png'
}];
