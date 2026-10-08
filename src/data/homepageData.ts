// src/data/homepageData.ts

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  category: "nairobi" | "day-trip" | "multi-day";
  duration: string;
  vehicle: "4x4 Land Cruiser Jeep" | "Overland Safari Truck" | "4x4 Jeep + Local Flight";
  badge: string;
  image: string;
  shortDescription: string;
  highlights: string[];
  bokunUrl: string;
}

export const BRAND_INFO = {
  name: "Live in Love Kenya",
  fullName: "Live in Love Kenya Tours and Travel",
  tagline: "Wild Adventures. Beautiful Memories.",
  established: 2011,
  licenseBody: "Kenya Tourism Board (KTB)",
  phone: "+254 711 890 451",
  whatsapp: "254711890451",
  email: "liveinlovetours@gmail.com",
  address: "Langata Road, Nairobi, Kenya",
  promise: "The 'Hakuna Matata' Worry-Free Safari Promise",
};

export const TRUST_STATS = [
  {
    value: "Since 2011",
    label: "KTB Registered Operator",
    detail: "15+ years crafting authentic Kenya safaris",
  },
  {
    value: "28 Mins",
    label: "From Nairobi City & JKIA",
    detail: "Daily 6:00 AM – 7:00 PM Park departures",
  },
  {
    value: "100% 4x4",
    label: "Pop-Up Roof Land Cruisers",
    detail: "Plus elevated Overland Trucks for groups",
  },
  {
    value: "5.0 ★",
    label: "TripAdvisor Excellence",
    detail: "Led by veteran guides Peter & Jackson",
  },
];

// Consolidated 3 Flagship Nairobi Packages (Replacing the 8 duplicate cards)
export const NAIROBI_EXCURSIONS: TourPackage[] = [
  {
    id: "nbo-1",
    slug: "nairobi-national-park-4x4-game-drive",
    title: "Nairobi National Park 4x4 Game Drive",
    category: "nairobi",
    duration: "4 Hours (Half-Day)",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Most Popular • Daily 6AM–7PM",
    image: "/giza-hero.jpg",
    shortDescription:
      "Track lions, black & white rhinos, buffaloes, and giraffes framed against the Nairobi skyline in a custom pop-up roof 4x4 Land Cruiser.",
    highlights: [
      "Private or small-group joining options in 4x4 Land Cruisers",
      "4 of the Big Five (Lions, Black & White Rhinos, Buffaloes, Leopards)",
      "Hands-on KWS online park entrance ticket assistance",
      "Complimentary hotel or meeting-point pickup",
    ],
    bokunUrl: "#book-nbo-classic",
  },
  {
    id: "nbo-2",
    slug: "nairobi-layover-park-elephants-giraffe-centre",
    title: "JKIA Layover & City Sanctuary Trio",
    category: "nairobi",
    duration: "6–8 Hours",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Ideal for 6h+ Airport Layovers",
    image: "/elephants-greeting.jpg",
    shortDescription:
      "Tailored for JKIA transit travelers or city guests: combine a morning game drive with baby elephants at Sheldrick Wildlife Trust and the Giraffe Centre.",
    highlights: [
      "Direct JKIA Airport or Nairobi hotel pickup & drop-off",
      "Close-up baby elephant viewing at David Sheldrick Orphanage",
      "Hand-feed endangered Rothschild giraffes at Giraffe Centre",
      "Includes curated local lunch stop",
    ],
    bokunUrl: "#book-nbo-layover",
  },
  {
    id: "nbo-3",
    slug: "full-day-nairobi-wild-and-bomas-culture",
    title: "Full-Day Wild & Bomas Cultural Immersion",
    category: "nairobi",
    duration: "Full Day (8–10 Hours)",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "All-In-One Nairobi Signature",
    image: "/elephants-family.jpg",
    shortDescription:
      "Experience every iconic corner of Nairobi in one seamless day: dawn wildlife tracking, conservation sanctuaries, and traditional homesteads & dances at Bomas of Kenya.",
    highlights: [
      "Early morning Nairobi National Park game drive",
      "David Sheldrick Elephant Orphanage & Giraffe Centre entry",
      "Afternoon tribal dance showcase at Bomas of Kenya",
      "Dedicated guide from sunrise to late afternoon",
    ],
    bokunUrl: "#book-nbo-fullday",
  },
];

// Out-of-Town Day Trips, Overnights & Multi-Day Expeditions
export const SIGNATURE_SAFARIS: TourPackage[] = [
  // DAY TRIPS & OVERNIGHTS
  {
    id: "saf-1",
    slug: "lake-naivasha-hells-gate-crescent-island",
    title: "Lake Naivasha, Hell's Gate & Crescent Island",
    category: "day-trip",
    duration: "1 Day (Daily Departure)",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Rift Valley Day Escape",
    image: "/ewaso-hero.jpg",
    shortDescription:
      "Journey down the Great Rift Valley escarpment past Mt. Longonot for a guided boat ride among hippos and a walking safari on Crescent Island.",
    highlights: [
      "Scenic Great Rift Valley viewpoint & Mt. Longonot views",
      "Guided boat safari past hippos & fish-hunting African eagles",
      "Guided walking safari alongside zebras, giraffes & waterbucks",
    ],
    bokunUrl: "#book-naivasha",
  },
  {
    id: "saf-2",
    slug: "amboseli-national-park-overnight",
    title: "Amboseli 'Land of Giants' Overnight Safari",
    category: "day-trip",
    duration: "2 Days / 1 Night",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Kilimanjaro Views",
    image: "/elephants-hidden.jpg",
    shortDescription:
      "Witness over 1,800 free-ranging big-tusked elephants, lions, cheetahs, and 47 raptor species set against the snow-capped peak of Mount Kilimanjaro.",
    highlights: [
      "Iconic elephant herds beneath Mount Kilimanjaro",
      "Swamp game viewing for hippos, flamingos, pelicans & kingfishers",
      "Authentic Maasai pastoral cultural encounter",
    ],
    bokunUrl: "#book-amboseli",
  },
  {
    id: "saf-3",
    slug: "lake-nakuru-and-naivasha-overnight",
    title: "Lake Nakuru & Lake Naivasha Overnight Safari",
    category: "day-trip",
    duration: "2 Days / 1 Night",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Rhinos & Flamingos",
    image: "/gallery-landscape.jpg",
    shortDescription:
      "Just 156 km northwest of Nairobi: track black and white rhinos, tree-climbing lions, and vibrant flocks of pink flamingos along the alkaline shores.",
    highlights: [
      "4 of the Big Five (Lions, Rhinos, Leopards & Buffaloes)",
      "World-famous birdwatching & pink flamingo shorelines",
      "Boat ride & Crescent Island exploration in Naivasha",
    ],
    bokunUrl: "#book-nakuru",
  },

  // MULTI-DAY EXPEDITIONS
  {
    id: "saf-4",
    slug: "3-day-ol-pejeta-conservancy-safari",
    title: "3-Day Ol Pejeta Conservancy & Rhino Expedition",
    category: "multi-day",
    duration: "3 Days / 2 Nights",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Conservation Spotlight",
    image: "/conservation-ranger.jpg",
    shortDescription:
      "Where wildlife meets frontier conservation near Nanyuki. Encounter the Big Five, visit the last two northern white rhinos on Earth, and cross the Equator.",
    highlights: [
      "Visit the last two Northern White Rhinos & Sweetwaters Chimpanzees",
      "Guided bush walks & night elephant-watching at the waterholes",
      "Scenic Equator crossing stop with Mount Kenya views",
    ],
    bokunUrl: "#book-olpejeta",
  },
  {
    id: "saf-5",
    slug: "4-day-tsavo-and-amboseli-safari",
    title: "4-Day Tsavo & Amboseli Prehistoric Heritage Safari",
    category: "multi-day",
    duration: "4 Days / 3 Nights",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Southern Circuit",
    image: "/corridor-hero.jpg",
    shortDescription:
      "Connect with raw wilderness across Tsavo's red-dust plains and prehistoric lava flows before tracking Amboseli's giant tuskers under Kilimanjaro.",
    highlights: [
      "Famous red-dust elephants of Tsavo & prehistoric heritage sites",
      "Golden-hour photography beneath Mount Kilimanjaro",
      "3 nights in curated safari lodges and tented camps",
    ],
    bokunUrl: "#book-tsavo-amboseli",
  },
  {
    id: "saf-6",
    slug: "5-day-ol-pejeta-nakuru-maasai-mara",
    title: "5-Day Ol Pejeta, Lake Nakuru & Maasai Mara",
    category: "multi-day",
    duration: "5 Days / 4 Nights",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Big Five & Big Cats",
    image: "/giza-and-leopard.jpg",
    shortDescription:
      "From night game drives in Laikipia and Rift Valley flamingo lakes to the endless plains of the Maasai Mara and the Mara River migration crossings.",
    highlights: [
      "Nature walks & night wildlife tracking in Ol Pejeta",
      "Lake Nakuru rhino sanctuary & Rift Valley escarpment",
      "Full-day Maasai Mara game drives tracking the 5 Big Cats",
    ],
    bokunUrl: "#book-5day-mara",
  },
  {
    id: "saf-7",
    slug: "5-day-maasai-mara-and-diani-beach",
    title: "5-Day Maasai Mara & Diani Bush-to-Beach Escape",
    category: "multi-day",
    duration: "5 Days / 4 Nights",
    vehicle: "4x4 Jeep + Local Flight",
    badge: "Bush + Indian Ocean",
    image: "/lodge-night-sky.jpg",
    shortDescription:
      "Pair thrilling Big Five game drives across the Maasai Mara savannah with a seamless domestic flight straight to the white sands of Diani Beach.",
    highlights: [
      "Maasai Mara game drives along the Mara River corridor",
      "Domestic bush-to-beach flight arrangement included",
      "Relaxation along Diani's turquoise Indian Ocean coastline",
    ],
    bokunUrl: "#book-mara-diani",
  },
  {
    id: "saf-8",
    slug: "7-day-samburu-olpejeta-nakuru-maasai-mara",
    title: "7-Day Samburu, Ol Pejeta, Rift Valley & Maasai Mara",
    category: "multi-day",
    duration: "7 Days / 6 Nights",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "The Grand Kenya Circuit",
    image: "/giza-full.jpg",
    shortDescription:
      "Our flagship expedition through northern Kenya's indigenous Samburu heartland, Ol Pejeta, Lakes Nakuru & Naivasha, and the world-renowned Maasai Mara.",
    highlights: [
      "Track the 'Samburu Special Five' & indigenous Samburu heritage",
      "Ol Pejeta rhinos, Lake Nakuru flamingos & Naivasha boat ride",
      "2 full days in the Maasai Mara in a pop-up roof 4x4 Jeep",
    ],
    bokunUrl: "#book-7day-grand",
  },
];

export const TRIPADVISOR_REVIEWS = [
  {
    id: "rev-1",
    title: "Great adventure",
    author: "Joseph H.",
    location: "Verified TripAdvisor Guest",
    guideMentioned: "Peter",
    rating: 5,
    quote:
      "Peter, with Live in Love was a super helpful, attentive, and deeply knowledgeable guide. He picked us up at our hotel and helped manage the park entrance process seamlessly. Peter's knowledge of the park and habitats made the day.",
  },
  {
    id: "rev-2",
    title: "Amazing experience",
    author: "Rhianna H.",
    location: "5-Day Safari Guest",
    guideMentioned: "Jackson",
    rating: 5,
    quote:
      "Jackson was our tour guide and he was absolutely brilliant from start to finish. He made a real commitment to make sure we found all the animals we wanted to see over the 5 days, travelling long hours with a smile.",
  },
  {
    id: "rev-3",
    title: "Amazing Safari Tour!!!",
    author: "Kersheral J.",
    location: "Verified TripAdvisor Guest",
    guideMentioned: "Peter & Team",
    rating: 5,
    quote:
      "We had an incredible safari experience from start to finish! Peter and his drivers were absolutely fantastic, knowledgeable, friendly, professional, and great at making sure we had the best possible time in Kenya.",
  },
  {
    id: "rev-4",
    title: "Unforgettable Day at Nairobi National Park",
    author: "Romy C.",
    location: "Dallas, Texas",
    guideMentioned: "Nairobi Park Team",
    rating: 5,
    quote:
      "We visited Nairobi National Park two days ago, and the experience exceeded every expectation. It is truly unbelievable to witness such rich wildlife so close to the city skyline!",
  },
];