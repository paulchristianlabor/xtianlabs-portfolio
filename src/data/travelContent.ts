const alpineLake = '/images/photos/alpine-lake.jpg'
const cityLights = '/images/photos/city-lights.jpg'
const coastalTown = '/images/photos/coastal-town.jpg'
const desertDunes = '/images/photos/desert-dunes.jpg'
const forestTrail = '/images/photos/forest-trail.jpg'
const mountainPass = '/images/photos/mountain-pass.jpg'

export interface Destination {
  name: string
  location: string
  description: string
  image: string
  alt: string
}

export interface GalleryPhoto {
  title: string
  image: string
  alt: string
}

export const featuredDestinations: Destination[] = [
  {
    name: 'Alcoy',
    location: 'Cebu, Philippines',
    description: 'Mountain views and quiet landscapes.',
    image: alpineLake,
    alt: 'Photo of a calm alpine lake with mountains in the distance',
  },
  {
    name: 'Toledo City',
    location: 'Cebu, Philippines',
    description: 'Coastal scenery and hidden spots.',
    image: desertDunes,
    alt: 'Photo of layered desert dunes under warm evening light',
  },
  {
    name: 'Dinagat Islands',
    location: 'Surigao del Norte, Philippines',
    description: 'Clear waters and unique rock formations.',
    image: coastalTown,
    alt: 'Photo of colorful coastal homes beside calm blue water',
  },
]

export const galleryPhotos: GalleryPhoto[] = [
  {
    title: 'Mountain Sunrise',
    image: mountainPass,
    alt: 'Photo of a mountain summit in early morning haze',
  },
  {
    title: 'Desert Horizon',
    image: desertDunes,
    alt: 'Photo of a desert horizon with warm golden hues',
  },
  {
    title: 'Coastal Street',
    image: coastalTown,
    alt: 'Photo of a coastal street with homes facing the sea',
  },
  {
    title: 'City Lights',
    image: cityLights,
    alt: 'Photo of old town at night with tram lights',
  },
  {
    title: 'Forest Trail',
    image: forestTrail,
    alt: 'Photo of a forest trail with deep pine greens',
  },
  {
    title: 'Lake Reflection',
    image: alpineLake,
    alt: 'Photo of a lake reflection with mountain silhouettes',
  },
]
