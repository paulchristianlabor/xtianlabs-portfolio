import alpineLake from '../assets/images/alpine-lake.svg'
import cityLights from '../assets/images/city-lights.svg'
import coastalTown from '../assets/images/coastal-town.svg'
import desertDunes from '../assets/images/desert-dunes.svg'
import forestTrail from '../assets/images/forest-trail.svg'
import mountainPass from '../assets/images/mountain-pass.svg'

export interface Destination {
  name: string
  location: string
  description: string
  season: string
  tripType: string
  tags: string[]
  image: string
  alt: string
}

export interface Story {
  title: string
  excerpt: string
  date: string
  location: string
  image: string
  alt: string
  href: string
}

export interface GalleryPhoto {
  title: string
  location: string
  image: string
  alt: string
}

export interface TravelTip {
  category: string
  items: string[]
}

export const featuredDestinations: Destination[] = [
  {
    name: 'Aurora Fjord Trail',
    location: 'Lofoten, Norway',
    description: 'A still-water fjord route with sunrise kayaking and cliffside villages.',
    season: 'Late Spring',
    tripType: 'Adventure',
    tags: ['Nature', 'Photography', 'Slow Travel'],
    image: alpineLake,
    alt: 'Illustration of a calm alpine lake with mountains in the distance',
  },
  {
    name: 'Sahara Wind Camp',
    location: 'Merzouga, Morocco',
    description: 'Golden dunes, Berber music nights, and stargazing under clear desert skies.',
    season: 'Autumn',
    tripType: 'Cultural Escape',
    tags: ['Desert', 'Culture', 'Camping'],
    image: desertDunes,
    alt: 'Illustration of layered desert dunes under warm evening light',
  },
  {
    name: 'Blue Harbor Walk',
    location: 'Cinque Terre, Italy',
    description: 'Colorful cliffside streets, sea views, and local seafood at sunset.',
    season: 'Summer',
    tripType: 'Leisure',
    tags: ['Coastline', 'Food', 'Walking'],
    image: coastalTown,
    alt: 'Illustration of colorful coastal homes beside calm blue water',
  },
]

export const travelStories: Story[] = [
  {
    title: 'How A Missed Train Became My Favorite Day In Lisbon',
    excerpt: 'A slow morning detour led to hidden bookshops, rooftop fado, and local stories.',
    date: '2026-01-12',
    location: 'Lisbon, Portugal',
    image: cityLights,
    alt: 'Illustration of a lively city skyline at dusk with warm lights',
    href: '#contact',
  },
  {
    title: 'Rain, Tea, And A Hundred Steps In Kyoto',
    excerpt: 'Walking temple stairs during a soft rain changed how I plan every trip now.',
    date: '2025-11-02',
    location: 'Kyoto, Japan',
    image: forestTrail,
    alt: 'Illustration of a forest path with layered trees and soft fog',
    href: '#contact',
  },
  {
    title: 'Crossing The Andean Pass With Three Backpackers',
    excerpt: 'Different languages, shared snacks, and one unforgettable mountain sunrise.',
    date: '2025-08-21',
    location: 'Cusco Region, Peru',
    image: mountainPass,
    alt: 'Illustration of a mountain pass with dramatic peaks and open sky',
    href: '#contact',
  },
]

export const galleryPhotos: GalleryPhoto[] = [
  {
    title: 'Misty Summit Morning',
    location: 'Swiss Alps',
    image: mountainPass,
    alt: 'Mountain summit illustration with cool tones and early morning haze',
  },
  {
    title: 'Golden Dune Horizon',
    location: 'Moroccan Sahara',
    image: desertDunes,
    alt: 'Desert horizon illustration with warm golden hues',
  },
  {
    title: 'Quiet Harbor Street',
    location: 'Italian Coast',
    image: coastalTown,
    alt: 'Coastal street illustration with homes facing the sea',
  },
  {
    title: 'Night Tram Through Old Town',
    location: 'Prague',
    image: cityLights,
    alt: 'Old town night illustration with tram lights and blue sky',
  },
  {
    title: 'Pine Trail Breathing Break',
    location: 'Hokkaido',
    image: forestTrail,
    alt: 'Forest trail illustration with deep pine greens',
  },
  {
    title: 'Mirror Lake Reflection',
    location: 'Banff',
    image: alpineLake,
    alt: 'Lake reflection illustration with still water and mountain silhouettes',
  },
]

export const travelTips: TravelTip[] = [
  {
    category: 'Packing Smart',
    items: [
      'Use a color-coded pouch system for faster unpacking.',
      'Keep one emergency outfit in your carry-on bag.',
      'Carry a light scarf, it doubles as shade, blanket, or pillow.',
    ],
  },
  {
    category: 'Budget Control',
    items: [
      'Book long-distance transport first, then build flexible day plans around it.',
      'Choose one paid highlight per day and balance with free local walks.',
      'Track spending nightly in a simple note before memory fades.',
    ],
  },
  {
    category: 'Comfort And Safety',
    items: [
      'Share a daily route summary with someone you trust.',
      'Save offline maps before leaving your hotel or station.',
      'Arrive at new neighborhoods before sunset when possible.',
    ],
  },
]
