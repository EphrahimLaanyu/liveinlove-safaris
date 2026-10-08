// src/data/toursData.ts

export const BOKUN_CHANNEL_UUID = "f4012ff0-ce9d-4f87-8011-d994346a9e17";

export interface FullTourItem {
  id: string;
  slug: string;
  bokunExperienceId: string;
  bokunUrl: string;
  title: string;
  category: "nairobi-city" | "day-overnight" | "multi-day";
  categoryLabel: string;
  duration: string;
  priceUsd: number;
  priceNote: string;
  vehicle: "4x4 Land Cruiser Jeep" | "Overland Safari Truck" | "4x4 Jeep + Local Flight";
  badge: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  locations: string[];
}

export const ALL_TOURS: FullTourItem[] = [
  // ==========================================
  // CATEGORY 1: NAIROBI NATIONAL PARK & CITY
  // ==========================================
  {
    id: "tour-nbo-overland",
    slug: "nairobi-national-park-half-day-overland-truck",
    bokunExperienceId: "1249820",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/1249820?partialView=1",
    title: "Nairobi National Park Half-Day with Overland Safari Truck",
    category: "nairobi-city",
    categoryLabel: "Nairobi City Safari",
    duration: "5 Hours",
    priceUsd: 35,
    priceNote: "Per Person (Group Joining Truck)",
    vehicle: "Overland Safari Truck",
    badge: "Best Budget & Group Option",
    image: "https://imgcdn.bokun.tools/eab60ac7-0a1a-4093-9fe6-b46f4a7c262c.jpg",
    summary:
      "Elevated seats with wide panoramic windows make it effortless to spot wildlife over tall savanna grass and bushes.",
    description:
      "Ideal for large groups, big families, or multi-country overland expeditions. Experience Nairobi National Park from an elevated vantage point with wide viewing windows designed for spotting lions, rhinos, giraffes, and buffaloes across the plains.",
    highlights: [
      "Elevated seating with wide panoramic photography windows",
      "Ideal for large groups, students, families & overland travelers",
      "4-hour guided wildlife game drive inside Nairobi National Park",
      "Spot 4 of the Big Five against the Nairobi city skyline",
    ],
    locations: ["Nairobi National Park"],
  },
  {
    id: "tour-nbo-jeep-daily",
    slug: "nairobi-national-park-daily-game-drive-land-cruiser",
    bokunExperienceId: "672482",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/672482?partialView=1",
    title: "Nairobi National Park Daily Game Drive with 4x4 Land Cruiser Jeep",
    category: "nairobi-city",
    categoryLabel: "Nairobi City Safari",
    duration: "5 Hours",
    priceUsd: 120,
    priceNote: "Starting Rate • Private or Joining",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Flagship 4x4 Jeep Safari",
    image: "https://imgcdn.bokun.tools/f0cb1022-39b7-4258-8e14-8e13b64eb68e.jpg",
    summary:
      "Explore the only national park in the world within a capital city—exclusively in our custom 4x4 Land Cruiser Jeeps with pop-up roofs.",
    description:
      "Travelers have the option of booking either a private or small-group joining safari suitable for families, couples, or solo photographers. We use 4x4 Toyota Land Cruisers exclusively to track lions, black & white rhinos, buffaloes, cheetahs, hippos, and over 400 bird species.",
    highlights: [
      "Exclusively operated in 4x4 Toyota Land Cruisers with pop-up roofs",
      "Available as Private Charter or Small-Group Joining",
      "Morning (6:00 AM) or Afternoon departure options daily",
      "Track lions, black & white rhinos, leopards, hippos & crocodiles",
    ],
    locations: ["Nairobi National Park"],
  },
  {
    id: "tour-nbo-jeep-pickup",
    slug: "nairobi-national-park-half-day-jeep-with-pickup",
    bokunExperienceId: "950004",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/950004?partialView=1",
    title: "Nairobi National Park Half-Day 4x4 Jeep Tour with Hotel Pickup",
    category: "nairobi-city",
    categoryLabel: "Nairobi City Safari",
    duration: "6 Hours",
    priceUsd: 160,
    priceNote: "Includes Door-to-Door Pickup",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Hassle-Free KWS Ticket Help",
    image: "https://imgcdn.bokun.tools/ea429f59-0c6e-435f-9e3f-f1de6b8fe037.jpeg",
    summary:
      "A seamless half-day safari with hotel pickup, hands-on KWS online park entrance ticket assistance, and an open pop-up roof game drive.",
    description:
      "Our professional guides pick travelers directly from their Nairobi hotel or residence, assist with purchasing official online KWS entrance tickets at the gate, and lead an in-depth game drive sharing the history, ecology, and wildlife behavior of the park.",
    highlights: [
      "Complimentary pickup & drop-off from any Nairobi hotel",
      "Hands-on guide assistance with KWS online eCitizen park tickets",
      "Open pop-up roof 4x4 tour vehicle for 360° viewing",
      "Visits to the hippo & crocodile dams and ivory burning site",
    ],
    locations: ["Nairobi National Park"],
  },
  {
    id: "tour-nbo-layover-trio",
    slug: "nairobi-national-park-elephant-orphanage-giraffe-center",
    bokunExperienceId: "765072",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/765072?partialView=1",
    title: "Nairobi National Park, Elephant Orphanage & Giraffe Centre Tour",
    category: "nairobi-city",
    categoryLabel: "Nairobi City & Layover",
    duration: "5 Hours 30 Mins",
    priceUsd: 160,
    priceNote: "JKIA Layover (6h+) or Hotel Pickup",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Top Pick for JKIA Layovers",
    image: "https://imgcdn.bokun.tools/939becfc-8bc3-4e63-80f2-0ef5e9b1eb79.jpg",
    summary:
      "Designed for JKIA airport layovers (6+ hours) or city guests: combine a morning game drive with baby elephants, hand-fed giraffes, and lunch.",
    description:
      "We pick up guests directly from Jomo Kenyatta International Airport (JKIA) who have a layover of more than 6 hours—or from any hotel within Nairobi—for a private excursion featuring a Nairobi National Park game drive, the David Sheldrick Elephant Orphanage, feeding Rothschild giraffes at the Giraffe Centre, and a lunch stop.",
    highlights: [
      "Direct JKIA Airport pickup & timely return for transit passengers",
      "Morning 4x4 game drive in Nairobi National Park",
      "See rescued baby elephants at David Sheldrick Wildlife Trust",
      "Feed endangered Rothschild giraffes + curated local lunch stop",
    ],
    locations: ["Nairobi National Park", "Sheldrick Elephant Orphanage", "Giraffe Centre"],
  },
  {
    id: "tour-nbo-giraffe",
    slug: "nairobi-national-park-and-giraffe-center-daily",
    bokunExperienceId: "650187",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/650187?partialView=1",
    title: "Nairobi National Park & Giraffe Centre Daily Excursion",
    category: "nairobi-city",
    categoryLabel: "Nairobi City Safari",
    duration: "5 Hours",
    priceUsd: 180,
    priceNote: "Half-Day Wildlife Combo",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Big 4 + Rothschild Giraffes",
    image: "https://imgcdn.bokun.tools/70b562b0-2588-487d-b590-7f9c1f909626.jpg",
    summary:
      "Just 28 minutes from downtown: enjoy a 4-hour game drive spotting 4 of the Big Five followed by close encounters at the Giraffe Centre sanctuary.",
    description:
      "Begin with a 4-hour game drive in Nairobi National Park tracking lions, cheetahs, buffaloes, black & white rhinos, hippos, crocodiles, and over 400 bird species (secretary birds, storks, kingfishers, cranes). Continue to the non-profit Giraffe Centre sanctuary for conservation education and hand-feeding endangered Rothschild giraffes.",
    highlights: [
      "4-hour game drive only 28 minutes from the city center",
      "Up-close interaction and feeding at the Giraffe Centre",
      "Over 400 bird species plus lions, rhinos & buffaloes",
      "Private 4x4 Land Cruiser transport with hotel transfers",
    ],
    locations: ["Nairobi National Park", "Giraffe Centre"],
  },
  {
    id: "tour-nbo-full-culture",
    slug: "nairobi-game-drive-sheldrick-giraffe-bomas-culture",
    bokunExperienceId: "769313",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/769313?partialView=1",
    title: "Game Drive & Culture Exploration: Park, Elephants, Giraffes & Bomas",
    category: "nairobi-city",
    categoryLabel: "Full-Day Nairobi Signature",
    duration: "Full Day (8–10 Hours)",
    priceUsd: 180,
    priceNote: "Complete 4-Stop Nairobi Experience",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "All-In-One Wildlife & Culture",
    image: "https://imgcdn.bokun.tools/d2c8ac8a-9ffa-415f-9091-9e331ff926b5.jpg",
    summary:
      "Early morning game drives meet baby elephants and hand-fed giraffes, capped off by vibrant traditional homesteads and dances at Bomas of Kenya.",
    description:
      "Experience the very best of Nairobi in one unforgettable day: start at dawn inside Nairobi National Park where wildlife roams against the city skyline. Visit the David Sheldrick Elephant Orphanage to watch playful baby elephants, stop at the Giraffe Centre to hand-feed Rothschild giraffes, and immerse yourself in Kenya's rich cultural heritage at the Bomas of Kenya with traditional tribal dance performances.",
    highlights: [
      "Early morning 4x4 game drive in Nairobi National Park",
      "David Sheldrick Elephant Orphanage & Giraffe Centre visits",
      "Traditional homesteads & live tribal dances at Bomas of Kenya",
      "Full-day dedicated driver-guide & hotel transfers",
    ],
    locations: [
      "Nairobi National Park",
      "Sheldrick Wildlife Trust",
      "Giraffe Centre",
      "Bomas of Kenya",
    ],
  },

  // ==========================================
  // CATEGORY 2: DAY TRIPS & OVERNIGHT ESCAPES
  // ==========================================
  {
    id: "tour-naivasha-day",
    slug: "lake-naivasha-hells-gate-crescent-island-day-trip",
    bokunExperienceId: "804172",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/804172?partialView=1",
    title: "Lake Naivasha, Hell's Gate & Crescent Island Daily Day Trip",
    category: "day-overnight",
    categoryLabel: "Rift Valley Day Trip",
    duration: "7 Hours (Full Day)",
    priceUsd: 200,
    priceNote: "Daily Departure from Nairobi",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Boat Ride + Walking Safari",
    image: "https://imgcdn.bokun.tools/6c0372ab-4b6b-4138-835c-18a02659c2af.jpg",
    summary:
      "Escape the city along the Great Rift Valley escarpment past Mt. Longonot for a guided boat safari among hippos and a Crescent Island walking tour.",
    description:
      "Enjoy a scenic road trip overlooking the Great Rift Valley and the peak of Mount Longonot before arriving at Lake Naivasha's tranquil microclimate of fever trees and placid waters. Take a guided boat ride with life-jacketed safety guides past hundreds of hippos and fish-hunting African fish eagles, then walk freely on Crescent Island alongside giraffes, zebras, and waterbucks.",
    highlights: [
      "Great Rift Valley escarpment & Mount Longonot viewpoints",
      "Guided boat ride across Lake Naivasha viewing hippos & eagles",
      "Guided walking safari on Crescent Island Game Sanctuary",
      "Optional Hell's Gate cycling & geothermal gorge exploration",
    ],
    locations: ["Great Rift Valley", "Lake Naivasha", "Crescent Island", "Hell's Gate"],
  },
  {
    id: "tour-amboseli-overnight",
    slug: "amboseli-national-park-overnight-safari",
    bokunExperienceId: "822165",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/822165?partialView=1",
    title: "Amboseli National Park 'Land of Giants' Overnight Safari",
    category: "day-overnight",
    categoryLabel: "Overnight Safari",
    duration: "2 Days / 1 Night",
    priceUsd: 600,
    priceNote: "Overnight Kilimanjaro Escape",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "1,800+ Elephants & Kilimanjaro",
    image: "https://imgcdn.bokun.tools/1710c501-10a3-4265-822b-e4f3b9ca1777.jpg",
    summary:
      "Home to around 1,800 big-tusked elephants and big cats set against the breathtaking backdrop of Mount Kilimanjaro.",
    description:
      "Amboseli National Park is world-renowned as the 'Land of Giants,' hosting approximately 1,800 free-ranging elephants alongside lions, cheetahs, leopards, spotted hyenas, buffaloes, and waterbucks beneath Africa's highest peak, Mount Kilimanjaro. Explore lush swamps teeming with flamingos, pelicans, kingfishers, hamerkops, and 47 raptor species, and connect with the authentic pastoral heritage of the Maasai community.",
    highlights: [
      "Iconic photography of big-tusked elephants under Mt. Kilimanjaro",
      "Track lions, cheetahs, leopards, hyenas & cape buffaloes",
      "Rich wetland birding: flamingos, pelicans & 47 raptor species",
      "Flexible accommodation options tailored to your budget & style",
    ],
    locations: ["Amboseli National Park", "Mount Kilimanjaro Foothills"],
  },
  {
    id: "tour-nakuru-naivasha-overnight",
    slug: "overnight-safari-lake-nakuru-and-lake-naivasha",
    bokunExperienceId: "781719",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/781719?partialView=1",
    title: "Overnight Safari in Lake Nakuru National Park & Lake Naivasha",
    category: "day-overnight",
    categoryLabel: "Overnight Rift Valley Safari",
    duration: "2 Days / 1 Night",
    priceUsd: 900,
    priceNote: "Two Rift Valley Lakes in 2 Days",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Flamingos & White Rhinos",
    image: "https://imgcdn.bokun.tools/b65bf307-9ea5-4e14-b0f3-9ef06336f545.jpg",
    summary:
      "156 km northwest of Nairobi on smooth tarmac: combine Lake Nakuru's rhinos and pink flamingos with a serene Lake Naivasha boat safari.",
    description:
      "Located 156 km northwest of Nairobi, Lake Nakuru National Park is a premier birdwatching and rhino sanctuary hosting 4 members of the Big Five (lions, black & white rhinos, buffaloes, and leopards) alongside Rothschild giraffes, hippos, waterbucks, impalas, and vast flocks of pink flamingos. Pair your game drive with an overnight stay and a morning boat excursion on freshwater Lake Naivasha.",
    highlights: [
      "Track 4 of the Big Five including endangered black & white rhinos",
      "Spectacular pink flamingo and waterbird viewing at Lake Nakuru",
      "Freshwater boat safari & hippo viewing at Lake Naivasha",
      "Private 4x4 Land Cruiser Jeep with pop-up viewing roof",
    ],
    locations: ["Lake Nakuru National Park", "Lake Naivasha"],
  },

  // ==========================================
  // CATEGORY 3: MULTI-DAY SIGNATURE SAFARIS
  // ==========================================
  {
    id: "tour-mara-daily",
    slug: "masai-mara-daily-game-drives-safari",
    bokunExperienceId: "673867",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/673867?partialView=1",
    title: "Maasai Mara Express Safari & Daily Game Drives",
    category: "multi-day",
    categoryLabel: "Maasai Mara Expedition",
    duration: "2–3 Days",
    priceUsd: 1375,
    priceNote: "Big Five & Mara River Circuit",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "5 Big Cats & Migration Corridor",
    image: "https://imgcdn.bokun.tools/56a7b58a-fe09-48ee-a4c7-be61818f9d10.jpg",
    summary:
      "Explore Kenya's most iconic wildlife reserve bordering Tanzania along the Mara River—home to the 5 big cats and the Great Migration.",
    description:
      "The Maasai Mara is celebrated worldwide for its sweeping savannahs, high density of predators (lions, leopards, cheetahs, servals, caracals), and the dramatic Mara River crossings separating Kenya and Tanzania during the Great Wildebeest Migration. Our friendly, professional guides prioritize your safety, comfort, and unforgettable wildlife sightings.",
    highlights: [
      "Full-day game drives tracking lions, leopards & cheetahs",
      "Visit key Mara River wildebeest migration crossing points",
      "Experienced, outgoing Live in Love Kenya driver-guides",
      "Competitive all-inclusive package with 4x4 Jeep transport",
    ],
    locations: ["Maasai Mara National Reserve", "Mara River"],
  },
  {
    id: "tour-olpejeta-3day",
    slug: "ol-pejeta-conservancy-3-day-safari",
    bokunExperienceId: "1177645",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/1177645?partialView=1",
    title: "Ol Pejeta Conservancy 3-Day Wildlife & Conservation Safari",
    category: "multi-day",
    categoryLabel: "3-Day Laikipia Safari",
    duration: "3 Days / 2 Nights",
    priceUsd: 1352,
    priceNote: "Includes Rhino & Chimp Sanctuaries",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Last 2 Northern White Rhinos",
    image: "https://imgcdn.bokun.tools/9b96ded9-a77d-4f11-b818-b02384802fd1.jpg",
    summary:
      "Where wildlife meets conservation in the heart of Kenya: encounter the Big Five, the last two northern white rhinos, and Sweetwaters Chimpanzees.",
    description:
      "Our 3-day Ol Pejeta adventure takes you beyond an ordinary game drive. Enjoy close encounters with the Big Five, visit the enclosure of the world's last two northern white rhinos, and stop at the Sweetwaters Chimpanzee Sanctuary. Stand at the Equator near Nanyuki and take in scenic Mount Kenya views with flexible game drives and comfortable lodge stays.",
    highlights: [
      "Visit the last two Northern White Rhinos on Earth",
      "Included stop at the Sweetwaters Chimpanzee Sanctuary",
      "Equator crossing photo stop near Nanyuki & Mt. Kenya",
      "Big Five game drives with personalized guide service",
    ],
    locations: ["Ol Pejeta Conservancy", "Nanyuki", "Mount Kenya Equator"],
  },
  {
    id: "tour-tsavo-amboseli-4day",
    slug: "safari-in-tsavo-and-amboseli-4-days-3-nights",
    bokunExperienceId: "857083",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/857083?partialView=1",
    title: "Tsavo & Amboseli 4-Day / 3-Night Prehistoric & Wildlife Safari",
    category: "multi-day",
    categoryLabel: "4-Day Southern Circuit",
    duration: "4 Days / 3 Nights",
    priceUsd: 1900,
    priceNote: "4 Days / 3 Nights Full Board",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Red Elephants & Kilimanjaro",
    image: "https://imgcdn.bokun.tools/285ebc0d-b2c8-454b-88ff-4e9f3ac21ad9.jpg",
    summary:
      "Indescribable African sunrises, prehistoric lava heritage sites, Tsavo's red-dust elephants, and Amboseli's tuskers beneath Kilimanjaro.",
    description:
      "Connect deeply with the southern Kenyan wilderness across 4 days and 3 nights. Explore prehistoric volcanic heritage sites such as Shetani Lava Flow and Mzima Springs in Tsavo, capture golden-hour photography of Amboseli's elephant herds against Mount Kilimanjaro, and travel with professional, communicative guides who bring the bush to life.",
    highlights: [
      "Explore both Tsavo National Park and Amboseli National Park",
      "Prehistoric lava flows, Mzima Springs & red-dust elephant herds",
      "Unrivaled sunrise & sunset photography beneath Mt. Kilimanjaro",
      "3 nights in handpicked safari lodges & tented camps",
    ],
    locations: ["Tsavo West / East", "Amboseli National Park"],
  },
  {
    id: "tour-olpejeta-nakuru-mara-5day",
    slug: "olpejeta-lake-nakuru-masai-mara-5-days-4-nights",
    bokunExperienceId: "783834",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/783834?partialView=1",
    title: "5-Day Ol Pejeta, Lake Nakuru & Maasai Mara Safari (4 Nights)",
    category: "multi-day",
    categoryLabel: "5-Day Classic Trio",
    duration: "5 Days / 4 Nights",
    priceUsd: 2000,
    priceNote: "5 Days / 4 Nights Expedition",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Night Watch + Bush Walks + Mara",
    image: "https://imgcdn.bokun.tools/67214aac-705b-4065-8df8-a66f8a597fdb.jpg",
    summary:
      "Combine nature walks and night elephant-watching in Ol Pejeta with Lake Nakuru's rhinos and extensive game drives in the Maasai Mara.",
    description:
      "A richly varied 5-day, 4-night itinerary blending conservation and classic savannah tracking. Enjoy guided nature walks and night watches of elephants drinking at Ol Pejeta's waterholes, track rhinos and flamingos in Lake Nakuru National Park, and finish with sweeping Big Five game drives and cultural encounters in the Maasai Mara.",
    highlights: [
      "Guided bush walks & night elephant waterhole viewing at Ol Pejeta",
      "Rhino & flamingo game drive in Lake Nakuru National Park",
      "Extensive Big Five & big cat tracking in the Maasai Mara",
      "4x4 Land Cruiser with pop-up roof throughout the circuit",
    ],
    locations: ["Ol Pejeta Conservancy", "Lake Nakuru", "Maasai Mara"],
  },
  {
    id: "tour-mara-diani-5day",
    slug: "5-days-masai-mara-and-diani-beach-tour",
    bokunExperienceId: "925380",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/925380?partialView=1",
    title: "5-Day Maasai Mara & Diani Beach Bush-to-Beach Tour",
    category: "multi-day",
    categoryLabel: "5-Day Bush & Beach",
    duration: "5 Days / 4 Nights",
    priceUsd: 2030,
    priceNote: "Includes Domestic Coastal Flight",
    vehicle: "4x4 Jeep + Local Flight",
    badge: "Safari + Diani White Sands",
    image: "https://imgcdn.bokun.tools/b7691a38-62b0-4bc6-8b3a-d8c587cb059c.jpg",
    summary:
      "Crafted for adventure lovers and beach seekers alike—thrilling Maasai Mara game drives followed by a local flight straight to Diani Beach.",
    description:
      "Experience the best of both worlds in Kenya. We coordinate your entire bush-to-beach journey: begin with immersive Big Five game drives and Maasai cultural heritage in the Maasai Mara, then board a convenient local flight directly from the savannah airstrip to the palm-fringed white sands and turquoise waters of Diani Beach.",
    highlights: [
      "Maasai Mara Big Five game drives in a 4x4 Jeep",
      "Seamless local flight arrangement from the Mara to Diani Beach",
      "Indian Ocean coastal relaxation on Diani's white-sand beaches",
      "Perfect for couples, honeymooners & adventure travelers",
    ],
    locations: ["Maasai Mara National Reserve", "Diani Beach (South Coast)"],
  },
  {
    id: "tour-7day-samburu-mara-olpejeta",
    slug: "7-day-samburu-maasai-mara-and-olpejeta-safari",
    bokunExperienceId: "890206",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/f4012ff0-ce9d-4f87-8011-d994346a9e17/experience/890206?partialView=1",
    title: "7-Day Samburu, Ol Pejeta, Lake Nakuru, Naivasha & Maasai Mara Safari",
    category: "multi-day",
    categoryLabel: "7-Day Grand Expedition",
    duration: "7 Days / 6 Nights",
    priceUsd: 2500,
    priceNote: "Our Ultimate 5-Park Kenya Circuit",
    vehicle: "4x4 Land Cruiser Jeep",
    badge: "Flagship 7-Day Grand Safari",
    image: "https://imgcdn.bokun.tools/ad479625-e57b-4789-b476-5ef39ab0305a.jpeg",
    summary:
      "Our premier 7-day expedition linking Samburu's rare northern wildlife and indigenous culture with Ol Pejeta, Nakuru, Naivasha, and the Maasai Mara.",
    description:
      "Make unforgettable memories across Kenya's greatest ecosystems in a spacious 4-wheel drive Land Cruiser Jeep with a pop-up roof. Journey north to Samburu National Reserve for rare northern species (Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, Somali ostrich) and indigenous Samburu culture, continue through Ol Pejeta Conservancy, Lake Nakuru, and freshwater Lake Naivasha, and culminate in the world-famous Maasai Mara.",
    highlights: [
      "Samburu National Reserve: rare northern species & Samburu culture",
      "Ol Pejeta Conservancy Big Five & rhino sanctuary visit",
      "Lake Nakuru flamingo shorelines & Lake Naivasha boat ride",
      "Multi-day Maasai Mara predator & migration tracking in a 4x4 Jeep",
    ],
    locations: [
      "Samburu National Reserve",
      "Ol Pejeta Conservancy",
      "Lake Nakuru",
      "Lake Naivasha",
      "Maasai Mara",
    ],
  },
];