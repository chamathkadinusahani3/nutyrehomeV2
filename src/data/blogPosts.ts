import {
  BatteryChargingIcon,
  CarFrontIcon,
  DiscIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SnowflakeIcon,
  TagIcon,
  WrenchIcon,
  type LucideProps } from
'lucide-react';
import type { ComponentType } from 'react';

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  icon: ComponentType<LucideProps>;
};

export const blogCategories: BlogCategory[] = [
{
  slug: 'tyre-buying-guides',
  name: 'Tyre Buying Guides',
  description: 'Helping drivers choose the perfect tyres based on vehicle type, budget, driving conditions, and performance needs.',
  icon: TagIcon
},
{
  slug: 'tyre-maintenance',
  name: 'Tyre Maintenance',
  description: 'Expert advice on tyre pressure, tread depth, rotation, balancing, and extending tyre life.',
  icon: WrenchIcon
},
{
  slug: 'tyre-safety',
  name: 'Tyre Safety',
  description: 'Essential safety guides covering braking performance, tread wear, road safety, and inspections.',
  icon: ShieldCheckIcon
},
{
  slug: 'run-flat-tyres',
  name: 'Run Flat Tyres',
  description: 'Everything about run-flat technology, benefits, maintenance, and compatibility.',
  icon: DiscIcon
},
{
  slug: 'wheel-alignment',
  name: 'Wheel Alignment',
  description: 'Learn how alignment and balancing improve handling, reduce wear, and increase fuel efficiency.',
  icon: SlidersHorizontalIcon
},
{
  slug: 'puncture-repairs',
  name: 'Puncture Repairs',
  description: 'Repair advice, replacement decisions, emergency puncture solutions, and prevention tips.',
  icon: DiscIcon
},
{
  slug: 'seasonal-driving',
  name: 'Seasonal Driving',
  description: 'Summer, winter, wet weather, snow, and all-season driving advice.',
  icon: SnowflakeIcon
},
{
  slug: 'ev-tyres',
  name: 'Electric Vehicle Tyres',
  description: 'Specialised tyre advice for electric vehicles and hybrids.',
  icon: BatteryChargingIcon
},
{
  slug: 'car-maintenance',
  name: 'Car Maintenance',
  description: 'Vehicle care tips beyond tyres including suspension, brakes, MOT preparation, and servicing.',
  icon: CarFrontIcon
},
{
  slug: 'nutyre-news',
  name: 'Nutyre News',
  description: 'Latest updates, offers, company news, tyre technology, and industry insights.',
  icon: NewspaperIcon
}];


export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
  editorsPick?: boolean;
};

export const trendingTags = [
'Tyres',
'Safety',
'RunFlat',
'EV',
'WinterDriving',
'Maintenance',
'FuelEconomy',
'WheelAlignment'];


export const blogPosts: BlogPost[] = [
// Tyre Buying Guides
{
  id: 'p01',
  slug: 'how-to-choose-the-right-tyres',
  title: 'How to Choose the Right Tyres for Your Car',
  excerpt: 'From vehicle type to driving style, here is a practical framework for narrowing down thousands of tyres to the handful that actually suit you.',
  category: 'tyre-buying-guides',
  tags: ['Tyres', 'Buying Guide'],
  image: '/hero.png',
  featured: true
},
{
  id: 'p02',
  slug: 'budget-vs-premium-tyres',
  title: 'Budget vs Premium Tyres: What Is the Real Difference?',
  excerpt: 'Premium tyres cost more, but how much of that is marketing versus measurable performance? We break down the tests that matter.',
  category: 'tyre-buying-guides',
  tags: ['Tyres', 'Buying Guide'],
  image: '/Budgettyres.png'
},
{
  id: 'p03',
  slug: 'tyre-speed-ratings-and-load-index',
  title: 'Understanding Tyre Speed Ratings and Load Index',
  excerpt: 'Those letters and numbers on your sidewall aren’t decoration — they define what your tyres are legally and safely rated to handle.',
  category: 'tyre-buying-guides',
  tags: ['Tyres', 'FuelEconomy'],
  image: '/img2.png'
},
{
  id: 'p04',
  slug: 'tyre-size-explained-sidewall-numbers',
  title: 'Tyre Size Explained: Reading the Sidewall Numbers',
  excerpt: 'Width, profile, rim diameter, load index — decode every number stamped on your tyre in under five minutes.',
  category: 'tyre-buying-guides',
  tags: ['Tyres', 'Buying Guide'],
  image: '/tyreref.png',
  editorsPick: true
},

// Tyre Maintenance
{
  id: 'p05',
  slug: 'tyre-pressure-explained',
  title: 'Tyre Pressure Explained: Why PSI Matters',
  excerpt: 'Under-inflated tyres quietly cost you fuel, grip, and tread life. Here is how to find the right PSI and check it properly.',
  category: 'tyre-maintenance',
  tags: ['Maintenance', 'FuelEconomy'],
  image: '/tyreref.png'
},
{
  id: 'p06',
  slug: 'how-often-to-rotate-tyres',
  title: 'How Often Should You Rotate Your Tyres?',
  excerpt: 'Rotating your tyres on a schedule evens out wear and can add thousands of miles to their life. Here is the routine we recommend.',
  category: 'tyre-maintenance',
  tags: ['Maintenance', 'Tyres'],
  image: '/promo1.jpg'
},
{
  id: 'p07',
  slug: '10-signs-your-tyres-need-replacing',
  title: '10 Signs Your Tyres Need Replacing',
  excerpt: 'From tread wear bars to sidewall bulges, these are the warning signs no driver should ignore.',
  category: 'tyre-maintenance',
  tags: ['Safety', 'Maintenance'],
  image: '/hero.png',
  editorsPick: true
},

// Tyre Safety
{
  id: 'p08',
  slug: 'tread-depth-legal-limit',
  title: 'Tread Depth: The Legal Limit and Why It Matters',
  excerpt: 'The UK minimum is 1.6mm — but braking performance starts dropping off long before you get there. Here is the science.',
  category: 'tyre-safety',
  tags: ['Safety', 'Tyres'],
  image: '/tyreref.png'
},
{
  id: 'p09',
  slug: 'worn-tyres-braking-distance',
  title: 'How Worn Tyres Affect Your Braking Distance',
  excerpt: 'A worn tyre can add whole car lengths to your stopping distance in the wet. We put the numbers side by side.',
  category: 'tyre-safety',
  tags: ['Safety'],
  image: '/runflat.png'
},
{
  id: 'p10',
  slug: 'pre-mot-tyre-checklist',
  title: 'Pre-MOT Tyre Checklist: Pass First Time',
  excerpt: 'Tyres are one of the most common MOT failure points. Run through this checklist before you book your test.',
  category: 'tyre-safety',
  tags: ['Safety', 'Maintenance'],
  image: '/about.png'
},

// Run Flat Tyres
{
  id: 'p11',
  slug: 'what-are-run-flat-tyres',
  title: 'What Are Run Flat Tyres and How Do They Work?',
  excerpt: 'Reinforced sidewalls let you keep driving after a puncture — here is exactly how far, how fast, and what to check afterwards.',
  category: 'run-flat-tyres',
  tags: ['RunFlat', 'Tyres'],
  image: '/runflat.png',
  editorsPick: true
},
{
  id: 'p12',
  slug: 'run-flat-vs-standard-tyres',
  title: 'Run Flat vs Standard Tyres: Which Should You Choose?',
  excerpt: 'Run-flats trade a firmer ride and higher cost for peace of mind. We weigh up whether that trade suits your driving.',
  category: 'run-flat-tyres',
  tags: ['RunFlat', 'Buying Guide'],
  image: '/img2.png'
},

// Wheel Alignment
{
  id: 'p13',
  slug: 'wheel-alignment-vs-balancing',
  title: 'Wheel Alignment vs Balancing: What Is the Difference?',
  excerpt: 'They sound similar and both live under the car, but alignment and balancing fix completely different problems.',
  category: 'wheel-alignment',
  tags: ['WheelAlignment', 'Maintenance'],
  image: '/promo2.png'
},
{
  id: 'p14',
  slug: '5-signs-your-car-needs-wheel-alignment',
  title: '5 Signs Your Car Needs a Wheel Alignment',
  excerpt: 'Steering pulling to one side? Uneven tyre wear? These are the tell-tale signs your alignment is off.',
  category: 'wheel-alignment',
  tags: ['WheelAlignment', 'Safety'],
  image: '/about.png'
},

// Puncture Repairs
{
  id: 'p15',
  slug: 'can-a-punctured-tyre-be-repaired',
  title: 'Can a Punctured Tyre Always Be Repaired?',
  excerpt: 'Not every puncture can be safely fixed. Here is how technicians decide between a repair and a replacement.',
  category: 'puncture-repairs',
  tags: ['Safety', 'Maintenance'],
  image: '/promo3.png'
},
{
  id: 'p16',
  slug: 'puncture-on-the-motorway-what-to-do',
  title: 'What to Do If You Get a Puncture on the Motorway',
  excerpt: 'A blowout at speed is one of the most dangerous moments on the road. Here is the step-by-step safe response.',
  category: 'puncture-repairs',
  tags: ['Safety', 'RunFlat'],
  image: '/runflat.png'
},

// Seasonal Driving
{
  id: 'p17',
  slug: 'preparing-your-car-for-winter',
  title: 'Preparing Your Car for Winter: A Complete Checklist',
  excerpt: 'From tyre tread to antifreeze levels, get your car ready for ice, snow, and freezing UK mornings.',
  category: 'seasonal-driving',
  tags: ['WinterDriving', 'Maintenance'],
  image: '/promo2.png',
  editorsPick: true
},
{
  id: 'p18',
  slug: 'summer-tyres-vs-all-season',
  title: 'Summer Tyres vs All-Season: What Is Best for UK Roads?',
  excerpt: 'The UK climate rarely commits to one season. Here is how to decide between summer, winter, and all-season tyres.',
  category: 'seasonal-driving',
  tags: ['WinterDriving', 'Tyres'],
  image: '/hero.png'
},

// Electric Vehicle Tyres
{
  id: 'p19',
  slug: 'why-evs-need-specialist-tyres',
  title: 'Why EVs Need Specialist Tyres',
  excerpt: 'Extra weight, instant torque, and lower cabin noise all change what a tyre needs to do on an electric car.',
  category: 'ev-tyres',
  tags: ['EV', 'Tyres'],
  image: '/EVtyres.png'
},
{
  id: 'p20',
  slug: 'extending-ev-tyre-life',
  title: 'Extending EV Tyre Life: Tips for Electric Car Owners',
  excerpt: 'EV tyres can wear up to 30% faster. These habits help electric car owners get the most from every set.',
  category: 'ev-tyres',
  tags: ['EV', 'Maintenance'],
  image: '/EVtyres.png'
},

// Car Maintenance
{
  id: 'p21',
  slug: 'beyond-tyres-car-servicing-checklist',
  title: 'Beyond Tyres: A Complete Car Servicing Checklist',
  excerpt: 'Tyres are only part of the picture. Here is everything worth checking at your next service appointment.',
  category: 'car-maintenance',
  tags: ['Maintenance'],
  image: '/promo2.png'
},
{
  id: 'p22',
  slug: 'brake-pads-101-when-to-replace',
  title: 'Brake Pads 101: When to Replace Them',
  excerpt: 'Squealing, grinding, or a soft pedal — here is how to read the warning signs before they become a safety issue.',
  category: 'car-maintenance',
  tags: ['Safety', 'Maintenance'],
  image: '/about.png'
},

// Nutyre News
{
  id: 'p23',
  slug: 'nutyre-opens-new-fitting-centre-hatfield',
  title: 'Nutyre Opens New Fitting Centre in Hatfield',
  excerpt: 'Our newest tyre fitting centre and warehouse is now open, bringing faster stock availability across Hertfordshire.',
  category: 'nutyre-news',
  tags: ['Tyres'],
  image: '/promo1.jpg',
  editorsPick: true
},
{
  id: 'p24',
  slug: 'same-day-mobile-fitting-hertfordshire',
  title: 'Introducing Same-Day Mobile Fitting Across Hertfordshire',
  excerpt: 'Our mobile fitting vans now cover same-day bookings across the county — here is how it works and where we cover.',
  category: 'nutyre-news',
  tags: ['Tyres', 'Maintenance'],
  image: '/faq.png'
}];


export type BlogFaq = {
  question: string;
  answer: string;
};

export const blogFaqs: BlogFaq[] = [
{
  question: 'How often should tyres be replaced?',
  answer: 'Most tyres last between 20,000 and 40,000 miles, or roughly 5 years, whichever comes first. Replace sooner if tread depth is near 1.6mm, if you spot sidewall damage, or if the tyre is over 10 years old regardless of tread.'
},
{
  question: 'How do I check tyre pressure?',
  answer: 'Check pressures when tyres are cold, using a reliable gauge, and compare against the PSI listed in your door sill or handbook — not the number on the tyre sidewall, which is the maximum, not the recommended, pressure.'
},
{
  question: 'What is tread depth?',
  answer: 'Tread depth is the measurement of the grooves on your tyre that channel away water and maintain grip. The UK legal minimum is 1.6mm across the central three-quarters of the tyre, but we recommend replacing at 3mm for the best wet-weather safety margin.'
},
{
  question: 'Are run-flat tyres worth it?',
  answer: 'Run-flats are worth it if you value being able to keep driving after a puncture and don’t carry a spare wheel. They cost more to replace and give a firmer ride, so they suit drivers who prioritise convenience and safety over comfort and price.'
},
{
  question: 'How often should wheels be aligned?',
  answer: 'We recommend a wheel alignment check once a year, or immediately after hitting a pothole or kerb, noticing uneven tyre wear, or feeling the steering pull to one side.'
},
{
  question: 'Can punctured tyres be repaired?',
  answer: 'Small punctures in the central tread area can usually be repaired if caught early. Damage to the sidewall, punctures near the shoulder, or repeated repairs in the same area typically mean the tyre needs replacing for safety.'
}];
