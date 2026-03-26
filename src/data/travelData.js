import heroImg from "../assets/premium/pakistan_travel_hero_1774527001487.png";
import hunzaImg from "../assets/premium/destination_hunza_valley_1774527050537.png";
import skarduImg from "../assets/premium/destination_skardu_lake_shangrila_1774527073187.png";

export const heroData = {
  title: "Discover Pakistan's Hidden Gems",
  subtitle: "Experience the magic of the North with our hand-curated luxury travel packages.",
  image: heroImg
};

export const destinations = [
  {
    id: "hunza",
    name: "Hunza Valley",
    tagline: "The Shangri-La of Pakistan",
    image: hunzaImg,
    rating: 4.9,
    reviews: 1240,
    price: 35500, // PKR per person (couple package road)
    duration: "5-7 Days",
    highlights: ["Rakaposhi View", "Attabad Lake", "Baltit Fort"],
    locationType: "Mountains",
    description: "Nestled in the Gilgit-Baltistan region, Hunza is a mountainous valley renowned for its breathtaking landscapes and rich cultural heritage."
  },
  {
    id: "skardu",
    name: "Skardu Valley",
    tagline: "Gateway to the Eight-Thousanders",
    image: skarduImg,
    rating: 4.8,
    reviews: 850,
    price: 32500, // PKR per person (road)
    duration: "6-8 Days",
    highlights: ["Shangrila Lake", "Deosai Plains", "Kachura Lakes"],
    locationType: "Mountains",
    description: "Skardu is the gateway to some of the world's highest peaks and features surreal alpine lakes and desert dunes."
  },
  {
    id: "swat",
    name: "Swat Valley",
    tagline: "The Switzerland of the East",
    image: hunzaImg, // Placeholder for Swat for now
    rating: 4.7,
    reviews: 920,
    price: 18000, // PKR per person
    duration: "3-5 Days",
    highlights: ["Malam Jabba", "Kalam Forest", "Mahodand Lake"],
    locationType: "Mountains",
    description: "Swat Valley is famous for its lush green meadows, clear river waters, and the snowy slopes of Malam Jabba."
  }
];

export const packages = [
  {
    id: "hunza-escape",
    title: "Classic Hunza Escape",
    destinationId: "hunza",
    image: hunzaImg,
    price: 35500,
    duration: 5,
    tag: "Most Popular",
    rating: 4.9,
    reviews: 120,
    itinerary: [
      { day: 1, title: "Arrival in Gilgit & Drive to Hunza", description: "Meet at Gilgit airport, drive to Karimabad via Karakoram Highway." },
      { day: 2, title: "Altit & Baltit Fort Exploration", description: "Visit the 700-year-old forts and local bazaar." },
      { day: 3, title: "Attabad Lake & Passu Cones", description: "Boat ride at Attabad Lake and scenic photography at Passu." },
      { day: 4, title: "Khunjerab Pass Excursion", description: "Drive to the Pak-China border, the highest paved road in the world." },
      { day: 5, title: "Departure", description: "Last minute shopping and flight back from Gilgit." }
    ],
    inclusions: ["4-Star Accommodation", "Premium Private Jeep", "Professional Tour Guide", "Breakfast & Dinner", "All Entry Fees"],
    exclusions: ["Airfare", "Personal Expenses", "Lunch", "Travel Insurance"]
  },
  {
    id: "skardu-bliss",
    title: "Week of Bliss in Skardu",
    destinationId: "skardu",
    image: skarduImg,
    price: 155000, // By Air Luxury Package from researched data
    duration: 6,
    tag: "Luxury",
    rating: 5.0,
    reviews: 45,
    itinerary: [
      { day: 1, title: "Fly to Skardu", description: "Stunning aerial views of Nanga Parbat." },
      { day: 2, title: "Shangrila Resort & Upper Kachura", description: "Leisure time at the heart-shaped lake." },
      { day: 3, title: "Deosai National Park", description: "Full day excursion to the Land of Giants." },
      { day: 4, title: "Kharpocho Fort & Cold Desert", description: "Sunset at the world's highest cold desert." },
      { day: 5, title: "Shigar Valley & Fort", description: "Culturally rich experience at Shigar." },
      { day: 6, title: "Departure", description: "Fly back to Islamabad." }
    ],
    inclusions: ["Airfare Included", "Serena Hotels Stay", "V8 Land Cruiser", "All Meals", "Domestic Transfers"],
    exclusions: ["International Flights", "Personal Tips"]
  }
];
