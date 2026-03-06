export interface Service {
  id: string
  name: string
  description: string
  price: number // in cents
  priceDisplay: string
  features: string[]
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'outdoor-session',
    name: 'In Person Outdoor Photo Session',
    description:
      'A relaxed, natural-light outdoor session designed to capture you at your best. Includes up to 2 hours of shooting and 6 fully edited photos delivered to your inbox.',
    price: 18000,
    priceDisplay: '$180',
    features: [
      'Up to 2 hours',
      '6 fully edited photos',
      'Natural light outdoor setting',
      'Location of your choice',
      'High-res & web exports',
      '7 day delivery',
    ],
    featured: true,
  },
  {
    id: 'single-retouch',
    name: 'Single Photo Retouch',
    description:
      'Colour correction, exposure adjustments, and light skin smoothing for one image. Perfect for profile pictures and special portraits.',
    price: 2500,
    priceDisplay: '$25',
    features: [
      'Colour grading',
      'Exposure correction',
      'Skin smoothing',
      '48hr delivery',
      'High-res export',
    ],
  },
  {
    id: 'portrait-enhancement',
    name: 'Portrait Enhancement',
    description:
      'Comprehensive retouching including background cleanup, advanced skin work, and creative colour grading for one portrait.',
    price: 4500,
    priceDisplay: '$45',
    features: [
      'Advanced skin retouching',
      'Background cleanup',
      'Teeth whitening',
      'Eye enhancement',
      '72hr delivery',
      'High-res export',
    ],
  },
  {
    id: 'event-gallery',
    name: 'Event Gallery Edit',
    description:
      'Professional editing of your 10 best event photos. Consistent colour grading throughout for a cohesive gallery.',
    price: 14900,
    priceDisplay: '$149',
    features: [
      '10 edited photos',
      'Consistent colour palette',
      'Basic retouching',
      'Gallery-ready export',
      '5 day delivery',
    ],
  },
  {
    id: 'full-session',
    name: 'Full Session Edit',
    description:
      'Complete editing of up to 30 photos from a single session. Our most comprehensive editing package for a polished final gallery.',
    price: 34900,
    priceDisplay: '$349',
    features: [
      'Up to 30 edited photos',
      'Full retouching',
      'Consistent colour grade',
      'Print & web exports',
      '7 day delivery',
    ],
  },
]
