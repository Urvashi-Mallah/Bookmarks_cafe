// The Bookmark Cafe Data Store
// Authentic menu, curated library highlights, and contact information

export const CAFE_INFO = {
    name: "The Bookmark Cafe",
    tagline: "Where Good Books Meet Artisan Brews",
    location: "Shop No. 4, Patil Bungalow, Gandhar Nagar Road, Adharwadi Jail Road, Kalyan West, Maharashtra 421301",
    shortLocation: "Kalyan West, Mumbai MMR",
    phone: "+91 8421190965",
    rawPhone: "918421190965",
    whatsappNumber: "918421190965",
    instagram: "@thebookmarkcafe_",
    instagramUrl: "https://instagram.com/thebookmarkcafe_",
    hours: "11:30 AM – 11:00 PM (Everyday)",
    rating: 4.4,
    totalReviews: 850,
    costForTwo: "₹800 - ₹1,200",
    amenities: [
        "Curated Bookshelf with 1,000+ Titles",
        "Secret Book-Door Entrance",
        "Free High-Speed Wi-Fi",
        "Board Games (Chess, Scrabble, Catan)",
        "Quiet Work & Reading Nooks",
        "Pet-Friendly Outdoor Patio"
    ]
};

export const MENU_CATEGORIES = [
    { id: "all", name: "All Flavors", icon: "sparkles" },
    { id: "coffee", name: "Artisan Coffee & Hot Chocolates", icon: "coffee" },
    { id: "shakes", name: "Thick Shakes & Mocktails", icon: "glass-water" },
    { id: "bites", name: "Fries Bar & Starters", icon: "utensils" },
    { id: "pizza-pasta", name: "Pizzas & Handcrafted Pastas", icon: "pizza" },
    { id: "burgers", name: "Burgers & Sandwiches", icon: "sandwich" },
    { id: "asian-bowls", name: "Asian Bowls & Sizzlers", icon: "soup" },
    { id: "desserts", name: "Desserts & Pancakes", icon: "cake" }
];

export const MENU_ITEMS = [
    // --- Coffee & Hot Chocolates ---
    {
        id: "c1",
        name: "Classic Belgian Dark Hot Chocolate",
        category: "coffee",
        price: 249,
        isVeg: true,
        isBestseller: true,
        description: "Rich melted Belgian dark chocolate slow-steamed with whole milk and topped with toasted mini marshmallows.",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
        tags: ["Signature", "Cozy Favorite"]
    },
    {
        id: "c2",
        name: "Hazelnut Hot Chocolate",
        category: "coffee",
        price: 279,
        isVeg: true,
        isBestseller: true,
        description: "Decadent melted cocoa infused with roasted Italian hazelnut praline and whipped cream.",
        image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=600&q=80",
        tags: ["Must Try", "Nutty"]
    },
    {
        id: "c3",
        name: "Raspberry Dark Hot Cocoa",
        category: "coffee",
        price: 289,
        isVeg: true,
        isBestseller: false,
        description: "Velvety dark chocolate paired with tart wild raspberry coulis. The perfect book companion.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        tags: ["Chef Special"]
    },
    {
        id: "c4",
        name: "Spanish Cortado Arabica",
        category: "coffee",
        price: 189,
        isVeg: true,
        isBestseller: false,
        description: "Equal parts double ristretto specialty roast and silky textured warm micro-foam.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
        tags: ["Arabica Roast"]
    },
    {
        id: "c5",
        name: "Salted Caramel Macchiato",
        category: "coffee",
        price: 229,
        isVeg: true,
        isBestseller: true,
        description: "Freshly pulled espresso poured over vanilla-steamed milk and drizzled with buttery salted caramel.",
        image: "images/menu/c5_salted_caramel_macchiato.jpg",
        tags: ["Sweet & Bold"]
    },
    {
        id: "c6",
        name: "Bookmark Signature Iced Cold Brew",
        category: "coffee",
        price: 199,
        isVeg: true,
        isBestseller: true,
        description: "18-hour slow cold brewed single-origin Chikmagalur beans served over crystal ice rocks.",
        image: "images/menu/c6_iced_cold_brew.jpg",
        tags: ["18-hr Brew", "Chilled"]
    },

    // --- Shakes & Mocktails ---
    {
        id: "s1",
        name: "Fudge Brownie Overload Shake",
        category: "shakes",
        price: 299,
        isVeg: true,
        isBestseller: true,
        description: "Thick chocolate ice cream blended with chunky fudge brownie bits, topped with whipped cream and chocolate cigar.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        tags: ["Indulgent", "Bestseller"]
    },
    {
        id: "s2",
        name: "Lotus Biscoff Crumble Shake",
        category: "shakes",
        price: 319,
        isVeg: true,
        isBestseller: true,
        description: "Caramelized Lotus Biscoff spread blended thick with vanilla cream and topped with crushed biscuits.",
        image: "images/menu/s2_lotus_biscoff_crumble_shake.jpg",
        tags: ["Trending", "Caramel"]
    },
    {
        id: "s3",
        name: "PB & Coco Protein Smoothie",
        category: "shakes",
        price: 309,
        isVeg: true,
        isBestseller: false,
        description: "Roasted peanut butter, unsweetened dark cocoa, banana, oat milk, and chia seeds for wholesome energy.",
        image: "images/menu/s3_pb_coco_protein_smoothie.jpg",
        tags: ["Healthy Pick"]
    },
    {
        id: "s4",
        name: "Electric Blue Lagoon Mocktail",
        category: "shakes",
        price: 189,
        isVeg: true,
        isBestseller: false,
        description: "Vibrant curacao citrus syrup shaken with sparkling soda, fresh mint sprigs, and lemon zest.",
        image: "images/menu/s4_electric_blue_lagoon_mocktail.jpg",
        tags: ["Refreshing"]
    },
    {
        id: "s5",
        name: "Smoked Berry Basil Iced Tea",
        category: "shakes",
        price: 199,
        isVeg: true,
        isBestseller: true,
        description: "Hand-shaken Assam black tea steeped with wild strawberries, muddled sweet basil, and citrus juice.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
        tags: ["Crisp & Fruity"]
    },

    // --- Starters & Fries Bar ---
    {
        id: "b1",
        name: "Bookmark Grand Fries Platter",
        category: "bites",
        price: 269,
        isVeg: true,
        isBestseller: true,
        description: "Crisp potato fries layered with melted four-cheese sauce, jalapenos, peri-peri dust, and homemade dips.",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
        tags: ["Crowd Favorite", "Sharing"]
    },
    {
        id: "b2",
        name: "Fiery Peri-Peri Spiced Fries",
        category: "bites",
        price: 169,
        isVeg: true,
        isBestseller: true,
        description: "Golden crinkle-cut fries tossed generously in our house-blend African Bird's Eye peri-peri seasoning.",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
        tags: ["Spicy Crunch"]
    },
    {
        id: "b3",
        name: "Loaded Cheesy Nachos Grande",
        category: "bites",
        price: 249,
        isVeg: true,
        isBestseller: false,
        description: "Corn tortilla chips smothered in warm cheese sauce, refried beans, fresh salsa fresca, and sour cream.",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80",
        tags: ["Cheesy Delight"]
    },
    {
        id: "b4",
        name: "Cheesy Herb Garlic Bread Pull-Apart",
        category: "bites",
        price: 199,
        isVeg: true,
        isBestseller: true,
        description: "Artisan sourdough baguette brushed with roasted garlic herb butter, stuffed with stretchy mozzarella.",
        image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80",
        tags: ["Cheese Pull"]
    },
    {
        id: "b5",
        name: "Crispy Paneer Pepper Poppers",
        category: "bites",
        price: 229,
        isVeg: true,
        isBestseller: false,
        description: "Panko-crusted cottage cheese fingers marinated in smoked paprika served with chipotle dip.",
        image: "images/menu/b5_crispy_paneer_poppers.jpg",
        tags: ["Crunchy"]
    },
    {
        id: "b6",
        name: "Smoked Chicken Crispy Tenders",
        category: "bites",
        price: 259,
        isVeg: false,
        isBestseller: true,
        description: "Golden buttermilk fried chicken strips dusted with cajun seasoning and served with garlic mayo.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        tags: ["Non-Veg", "Crispy"]
    },

    // --- Pizzas & Handcrafted Pastas ---
    {
        id: "p1",
        name: "Burrata & Pesto Artisan Pizza",
        category: "pizza-pasta",
        price: 469,
        isVeg: true,
        isBestseller: true,
        description: "Slow-fermented thin crust topped with San Marzano tomato reduction, basil walnut pesto, and fresh creamy Burrata cheese.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        tags: ["Gourmet", "Must Try"]
    },
    {
        id: "p2",
        name: "Quattro Stagioni (Four Seasons)",
        category: "pizza-pasta",
        price: 439,
        isVeg: true,
        isBestseller: true,
        description: "Classic Italian 4-section pizza featuring sun-dried tomatoes, roasted bell peppers, sauteed mushrooms, and kalamata olives.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
        tags: ["Italian Classic"]
    },
    {
        id: "p3",
        name: "Smoky Peri-Peri Chicken Pizza",
        category: "pizza-pasta",
        price: 479,
        isVeg: false,
        isBestseller: true,
        description: "Herbed crust loaded with spiced chargrilled chicken chunks, red onions, pickled jalapenos, and mozzarella.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        tags: ["Non-Veg", "Chef Special"]
    },
    {
        id: "p4",
        name: "Creamy Pink Sauce Fettuccine",
        category: "pizza-pasta",
        price: 349,
        isVeg: true,
        isBestseller: true,
        description: "Fettuccine tossed in the beloved balance of rich parmesan Alfredo and tangy basil Arrabbiata, with garden vegetables.",
        image: "images/menu/p4_creamy_pink_sauce_fettuccine.jpg",
        tags: ["Patron Favorite"]
    },
    {
        id: "p5",
        name: "Pasta Peperonata with Truffle Oil",
        category: "pizza-pasta",
        price: 369,
        isVeg: true,
        isBestseller: false,
        description: "Penne coated in a velvety roasted sweet bell pepper puree, garlic, kalamata olives, finished with Italian white truffle oil.",
        image: "images/menu/p5_pasta_peperonata_truffle.jpg",
        tags: ["Truffle Scent"]
    },
    {
        id: "p6",
        name: "Grilled Chicken Pesto Penne",
        category: "pizza-pasta",
        price: 399,
        isVeg: false,
        isBestseller: false,
        description: "Herb-marinated tender chicken breast slivers tossed with penne in fragrant Genovese basil pine-nut pesto.",
        image: "images/menu/p6_grilled_chicken_pesto_penne.jpg",
        tags: ["Non-Veg"]
    },

    // --- Burgers & Sandwiches ---
    {
        id: "bg1",
        name: "Classic Paneer Crunch Burger",
        category: "burgers",
        price: 219,
        isVeg: true,
        isBestseller: true,
        description: "Spiced crispy paneer patty, shredded iceberg lettuce, sliced gherkins, and house smoked tandoori spread on a brioche bun.",
        image: "images/menu/bg1_classic_paneer_crunch_burger.jpg",
        tags: ["Bestseller"]
    },
    {
        id: "bg2",
        name: "Fiery Chicken Mexican Burger",
        category: "burgers",
        price: 259,
        isVeg: false,
        isBestseller: true,
        description: "Succulent grilled chicken patty topped with melted cheddar, jalapeno salsa, nachos crunch, and spicy chipotle.",
        image: "images/menu/bg2_fiery_chicken_mexican_burger.jpg",
        tags: ["Non-Veg", "Fiery"]
    },
    {
        id: "bg3",
        name: "Bookmark 3-Tier Grilled Club Sandwich",
        category: "burgers",
        price: 239,
        isVeg: true,
        isBestseller: true,
        description: "Triple-decker butter toasted bread layered with seasoned potato mash, crisp cucumber, tomatoes, cheese slice, and mint chutney.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
        tags: ["Classic Comfort"]
    },
    {
        id: "bg4",
        name: "Smoked Chicken Grilled Sourdough Sandwich",
        category: "burgers",
        price: 269,
        isVeg: false,
        isBestseller: false,
        description: "Slow-roasted pulled chicken tossed in honey mustard and fresh herbs, pressed with aged cheddar in toasted sourdough.",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
        tags: ["Non-Veg", "Gourmet"]
    },

    // --- Asian Bowls & Sizzlers ---
    {
        id: "ab1",
        name: "Oriental Wok-Tossed Pot Rice",
        category: "asian-bowls",
        price: 369,
        isVeg: true,
        isBestseller: true,
        description: "Aromatic jasmine rice cooked in clay pot style topped with exotic oriental veggies in a savory garlic soy ginger gravy.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        tags: ["Kalyan Favorite", "Warm Bowl"]
    },
    {
        id: "ab2",
        name: "Bangkok Street Style Pad Thai",
        category: "asian-bowls",
        price: 349,
        isVeg: true,
        isBestseller: false,
        description: "Flat rice noodles stir-fried with tamarind sauce, crunchy bean sprouts, tofu, scallions, and crushed roasted peanuts.",
        image: "images/menu/ab2_bangkok_street_pad_thai.jpg",
        tags: ["Street Flavor"]
    },
    {
        id: "ab3",
        name: "Sizzling Cottage Cheese Steak Sizzler",
        category: "asian-bowls",
        price: 449,
        isVeg: true,
        isBestseller: true,
        description: "Grilled marinated paneer steak served on a smoking iron skillet with herbed butter rice, buttered greens, and pepper sauce.",
        image: "images/menu/ab3_cottage_cheese_steak_sizzler.jpg",
        tags: ["Sizzling Skillet"]
    },
    {
        id: "ab4",
        name: "Chargrilled Chicken Supreme Sizzler",
        category: "asian-bowls",
        price: 499,
        isVeg: false,
        isBestseller: true,
        description: "Tender chicken breasts grilled to perfection with smoky BBQ glaze, roasted jacket potato, buttered corn, and garlic sauce.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        tags: ["Non-Veg", "Grand Sizzler"]
    },

    // --- Desserts & Pancakes ---
    {
        id: "d1",
        name: "Warm Sizzling Walnut Brownie",
        category: "desserts",
        price: 249,
        isVeg: true,
        isBestseller: true,
        description: "Gooey chocolate walnut brownie on a smoking sizzler plate, crowned with Madagascan vanilla gelato and hot fudge.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        tags: ["Legendary", "Hot & Cold"]
    },
    {
        id: "d2",
        name: "Lotus Biscoff Fluffy Stack Pancakes",
        category: "desserts",
        price: 279,
        isVeg: true,
        isBestseller: true,
        description: "Three pillowy buttermilk pancakes drenched in warm Biscoff drizzle, biscuit crumbs, and whipped butter.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
        tags: ["Sweet Morning"]
    },
    {
        id: "d3",
        name: "New York Classic Baked Cheesecake",
        category: "desserts",
        price: 269,
        isVeg: true,
        isBestseller: false,
        description: "Dense, creamy cream-cheese slice baked on a cinnamon graham cracker crust with strawberry coulis.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        tags: ["New York Style"]
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        author: "Pooja Deshmukh",
        role: "Book Lover & Kalyan Resident",
        rating: 5,
        text: "Entering through that secret book-cover door literally feels like stepping into Diagon Alley or Narnia. The Hot Chocolate paired with a good mystery novel is my weekend ritual!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
    },
    {
        id: 2,
        author: "Rohan Kulkarni",
        role: "Software Engineer & Remote Worker",
        rating: 5,
        text: "Hands down the best work cafe in Kalyan. The high-speed Wi-Fi is reliable, plug points at every corner, and their Burrata Pizza + Cold Brew keeps me powered through client calls.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    },
    {
        id: 3,
        author: "Simran & Aaditya",
        role: "Date Night Regulars",
        rating: 5,
        text: "The fairy lights, soft jazz, and endless shelves of books create the warmest romantic vibe. You have to order the Pink Sauce Pasta and the Sizzling Brownie!",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
    },
    {
        id: 4,
        author: "Dr. Anish Patil",
        role: "Professor & Bibliophile",
        rating: 5,
        text: "The community book exchange shelf is such a thoughtful concept. I brought two Haruki Murakami novels and exchanged for a classic Dostoevsky. True sanctuary for Kalyan's readers.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    }
];

export const GALLERY_IMAGES = [
    {
        title: "The Iconic Secret Book Door Entrance",
        category: "Ambiance",
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Cozy Bookshelves Stacked with 1,000+ Titles",
        category: "Library",
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Artisanal Pour-Over & Latte Art",
        category: "Coffee",
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Burrata & Pesto Wood-fired Style Pizza",
        category: "Food",
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Board Game Nights & Acoustic Evenings",
        category: "Community",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Warm Sizzling Walnut Brownie Delight",
        category: "Desserts",
        url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    }
];

export const FAQS = [
    {
        question: "Can I bring my own books or laptop to work/study?",
        answer: "Yes, absolutely! We love hosting students, remote professionals, and avid readers. We provide high-speed complimentary Wi-Fi and power outlets near all bookshelf and window nooks."
    },
    {
        question: "How does the Community Book Exchange work?",
        answer: "Our 'Take a Book, Leave a Book' policy is simple: bring any novel or book in good readable condition, leave it on our Community Shelf, and pick any book from that shelf to take home for free!"
    },
    {
        question: "How do I reserve a table or host a book club meetup?",
        answer: "You can book directly via our website booking tool or click the WhatsApp button to chat directly with us at +91 8421190965. For groups of 5+, we recommend booking at least 3 hours in advance."
    },
    {
        question: "Do you offer vegetarian and Jain-friendly food options?",
        answer: "Yes! Over 70% of our menu is vegetarian, and many items including pastas, pizzas, and starters can be customized without onion and garlic upon request."
    },
    {
        question: "Where is The Bookmark Cafe located and is parking available?",
        answer: "We are located at Shop No. 4, Patil Bungalow, Adharwadi Jail Road, Gandhar Nagar, Kalyan West. Ample two-wheeler and street four-wheeler parking is available right along the road."
    }
];
