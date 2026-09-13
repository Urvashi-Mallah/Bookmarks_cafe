// The Bookmark Cafe Data Store
// Authentic menu with real printed menu card prices, exact descriptions, and verified Veg / Non-Veg classifications
// Sourced from The Bookmark Cafe, Kalyan West

export const CAFE_INFO = {
    name: "The Bookmark Cafe",
    tagline: "Where Good Books Meet Artisan Brews",
    location: "Shop No. 4, Patil Bungalow, Gandhar Nagar Road, Adharwadi Jail Road, Kalyan West, Maharashtra 421301",
    shortLocation: "Kalyan West, Mumbai MMR",
    phone: "+91 8421190965",
    rawPhone: "918421190965",
    whatsappNumber: "918421190965",
    whatsappInquiryMessage: `✨ *Hello The Bookmark Cafe!* ✨\n📍 Kalyan West | Customer Inquiry\n───────────────────\nHello! I am reaching out from your official website. I'd like to inquire about your menu specials, table seating, and visit today! 📖☕`,
    whatsappInquiryUrl: "https://api.whatsapp.com/send?phone=918421190965&text=%E2%9C%A8%20%2AHello%20The%20Bookmark%20Cafe%21%2A%20%E2%9C%A8%0A%F0%9F%93%8D%20Kalyan%20West%20%7C%20Customer%20Inquiry%0A%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%0AHello%21%20I%20am%20reaching%20out%20from%20your%20official%20website.%20I%27d%20like%20to%20inquire%20about%20your%20menu%20specials%2C%20table%20seating%2C%20and%20visit%20today%21%20%F0%9F%93%96%E2%98%95",
    instagram: "@thebookmarkcafe_",
    instagramUrl: "https://instagram.com/thebookmarkcafe_",
    hours: "11:30 AM – 11:00 PM (Everyday)",
    rating: 4.4,
    totalReviews: 850,
    costForTwo: "₹500 - ₹800",
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
    { id: "burgers", name: "Burgers, Wraps & Sandwiches", icon: "sandwich" },
    { id: "asian-bowls", name: "Asian Bowls & Sizzlers", icon: "soup" },
    { id: "desserts", name: "Desserts & Pancakes", icon: "cake" }
];

export const MENU_ITEMS = [
    // ==========================================
    // --- 1. Artisan Coffee & Hot Chocolates ---
    // ==========================================
    {
        id: "c1",
        name: "Classic Belgian Dark Hot Chocolate",
        category: "coffee",
        price: 249,
        isVeg: true,
        isBestseller: true,
        description: "Rich melted Belgian dark chocolate slow-steamed with whole milk and topped with toasted mini marshmallows.",
        image: "images/menu/c1_belgian_dark_hot_chocolate.jpg",
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
        image: "images/menu/c2_hazelnut_hot_chocolate.jpg",
        tags: ["Must Try", "Nutty"]
    },
    {
        id: "c3",
        name: "Spanish Cortado Arabica",
        category: "coffee",
        price: 189,
        isVeg: true,
        isBestseller: false,
        description: "Equal parts double ristretto specialty roast and silky textured warm micro-foam.",
        image: "images/menu/c3_spanish_cortado.jpg",
        tags: ["Arabica Roast"]
    },
    {
        id: "c4",
        name: "Salted Caramel Macchiato",
        category: "coffee",
        price: 229,
        isVeg: true,
        isBestseller: true,
        description: "Freshly pulled espresso poured over vanilla-steamed milk and drizzled with buttery salted caramel.",
        image: "images/menu/c4_salted_caramel_macchiato.jpg",
        tags: ["Sweet & Bold"]
    },
    {
        id: "c5",
        name: "Bookmark Signature Iced Cold Brew",
        category: "coffee",
        price: 199,
        isVeg: true,
        isBestseller: true,
        description: "18-hour slow cold brewed single-origin Chikmagalur beans served over crystal ice rocks.",
        image: "images/menu/c5_iced_cold_brew.jpg",
        tags: ["18-hr Brew", "Chilled"]
    },
    {
        id: "c6",
        name: "Raspberry Dark Hot Cocoa",
        category: "coffee",
        price: 289,
        isVeg: true,
        isBestseller: false,
        description: "Velvety dark chocolate paired with tart wild raspberry coulis. The perfect book companion.",
        image: "images/menu/c6_raspberry_dark_hot_cocoa.jpg",
        tags: ["Chef Special"]
    },

    // ==========================================
    // --- 2. Thick Shakes & Mocktails ---
    // ==========================================
    {
        id: "s1",
        name: "Fudge Brownie Overload Shake",
        category: "shakes",
        price: 299,
        isVeg: true,
        isBestseller: true,
        description: "Thick chocolate ice cream blended with chunky fudge brownie bits, topped with whipped cream and chocolate cigar.",
        image: "images/menu/s1_fudge_brownie_shake.jpg",
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
        image: "images/menu/s5_smoked_berry_basil_iced_tea.jpg",
        tags: ["Crisp & Fruity"]
    },

    // ==========================================
    // --- 3. Fries Bar & Starters ---
    // ==========================================
    {
        id: "b1",
        name: "Salted French Fries",
        category: "bites",
        price: 109,
        isVeg: true,
        isBestseller: false,
        description: "Golden crispy salted potato fries, hot and perfectly seasoned.",
        image: "images/menu/b1_salted_french_fries.jpg",
        tags: ["Classic", "Quick Bite"]
    },
    {
        id: "b2",
        name: "Peri-Peri Cheese Sauce Fries",
        category: "bites",
        price: 149,
        isVeg: true,
        isBestseller: true,
        description: "Crisp golden fries tossed in fiery peri-peri seasoning and drenched in velvety warm melted cheese sauce.",
        image: "images/menu/b2_peri_peri_cheese_fries.jpg",
        tags: ["Spicy Crunch", "Bestseller"]
    },
    {
        id: "b3",
        name: "Bookmark Special Fries",
        category: "bites",
        price: 169,
        isVeg: true,
        isBestseller: true,
        description: "Chef's signature loaded crispy fries topped with house secret sauces, melted cheese and aromatic Italian herbs.",
        image: "images/menu/b3_bookmark_special_fries.jpg",
        tags: ["Chef Special", "Loaded"]
    },
    {
        id: "b4",
        name: "Cheese Garlic Bread",
        category: "bites",
        price: 179,
        isVeg: true,
        isBestseller: true,
        description: "Crispy toasted garlic bread topped with generous melted cheese and aromatic Italian herbs.",
        image: "images/menu/b4_cheese_garlic_bread.jpg",
        tags: ["Cheesy", "Must Try"]
    },
    {
        id: "b5",
        name: "Potato Wedges",
        category: "bites",
        price: 179,
        isVeg: true,
        isBestseller: false,
        description: "Crispy skin-on potato wedges tossed in house spices, served with seasoned creamy dip.",
        image: "images/menu/b5_potato_wedges.jpg",
        tags: ["Crispy", "Snack"]
    },
    {
        id: "b6",
        name: "Corn Cheese Balls",
        category: "bites",
        price: 219,
        isVeg: true,
        isBestseller: true,
        description: "American sweet corn and boiled potato grated with cheese, coated with bread crumbs, fried golden and served with chipotle sauce.",
        image: "images/menu/b6_corn_cheese_balls.jpg",
        tags: ["Crispy", "Popular"]
    },
    {
        id: "b7",
        name: "Jalapeno Poppers",
        category: "bites",
        price: 219,
        isVeg: true,
        isBestseller: false,
        description: "Jalapeno peppers stuffed with a rich blend of cream cheese and Cheddar cheese, fried to crispy golden perfection.",
        image: "images/menu/b7_jalapeno_poppers.jpg",
        tags: ["Spicy & Cheesy"]
    },
    {
        id: "b8",
        name: "Overloaded Nachos",
        category: "bites",
        price: 249,
        isVeg: true,
        isBestseller: true,
        description: "Corn tortilla nachos loaded with exotic veggies and melted cheese, served with fresh salsa and sour cream.",
        image: "images/menu/b8_overloaded_nachos.jpg",
        tags: ["Sharing", "Cheesy Delight"]
    },
    {
        id: "b9",
        name: "Pav Bhaji Fondue",
        category: "bites",
        price: 239,
        isVeg: true,
        isBestseller: true,
        description: "Desi Pav Bhaji in videshi style served bubbling fondue-style with buttery toasted herb crouton skewers.",
        image: "images/menu/b9_pav_bhaji_fondue.jpg",
        tags: ["Signature", "Desi Videshi"]
    },
    {
        id: "b10",
        name: "Tomato Pesto Quesadillas",
        category: "bites",
        price: 259,
        isVeg: true,
        isBestseller: false,
        description: "Quesadilla combination of pesto cheese and diced tomatoes, served with salsa and sour cream.",
        image: "images/menu/b10_tomato_pesto_quesadilla.jpg",
        tags: ["Pesto Flavor"]
    },
    {
        id: "b11",
        name: "Paneer Tikka",
        category: "bites",
        price: 239,
        isVeg: true,
        isBestseller: true,
        description: "Fresh cottage cheese cubes marinated in spiced tandoori masala and charred in clay tandoor, served with green chutney.",
        image: "images/menu/b11_paneer_tikka.jpg",
        tags: ["Tandoor", "Smoky"]
    },
    {
        id: "b12",
        name: "Chicken Nuggets With Peri-Peri Mayo",
        category: "bites",
        price: 259,
        isVeg: false,
        isBestseller: true,
        description: "House-made crispy chicken nuggets tossed in an exotic blend of Mexican peri-peri and in-house spices, served with peri-peri dip.",
        image: "images/menu/b12_chicken_nuggets.jpg",
        tags: ["Non-Veg", "Crispy Bite"]
    },
    {
        id: "b13",
        name: "Chicken Wings (BBQ / Peri-Peri)",
        category: "bites",
        price: 279,
        isVeg: false,
        isBestseller: true,
        description: "Juicy crispy wings tossed in choice of BBQ, Schezwan, or Peri-Peri glaze.",
        image: "images/menu/b13_chicken_wings.jpg",
        tags: ["Non-Veg", "Juicy & Spiced"]
    },
    {
        id: "b14",
        name: "Tandoori Chicken Tikka",
        category: "bites",
        price: 279,
        isVeg: false,
        isBestseller: true,
        description: "Boneless chicken chunks marinated in authentic spiced yogurt, roasted in clay tandoor with onions and bell peppers.",
        image: "images/menu/b14_tandoori_chicken_tikka.jpg",
        tags: ["Non-Veg", "Tandoor Star"]
    },
    {
        id: "b15",
        name: "Peri-Peri Chicken Skewers",
        category: "bites",
        price: 289,
        isVeg: false,
        isBestseller: false,
        description: "Flavor-packed BBQ chicken skewers marinated in a spicy pepper, garlic, lemon, basil and oregano sauce.",
        image: "images/menu/b15_peri_peri_chicken_skewers.jpg",
        tags: ["Non-Veg", "Fiery Skewer"]
    },
    {
        id: "b16",
        name: "Fish Tacos",
        category: "bites",
        price: 319,
        isVeg: false,
        isBestseller: false,
        description: "Made with grilled fish battered cod, served in crispy corn tortillas with crunchy slaw and house sauce.",
        image: "images/menu/b16_fish_tacos.jpg",
        tags: ["Non-Veg", "Seafood"]
    },
    {
        id: "b17",
        name: "Butter Garlic Prawns",
        category: "bites",
        price: 359,
        isVeg: false,
        isBestseller: true,
        description: "Succulent prawns tossed in rich aromatic buttery garlic sauce, chilli flakes, and fresh parsley.",
        image: "images/menu/b17_butter_garlic_prawns.jpg",
        tags: ["Non-Veg", "Chef Special"]
    },

    // ==========================================
    // --- 4. Pizzas & Handcrafted Pastas ---
    // ==========================================
    {
        id: "p1",
        name: "Margarita Pizza",
        category: "pizza-pasta",
        price: 259,
        isVeg: true,
        isBestseller: true,
        description: "Classic Italian thin crust topped with slices of tomatoes, mozzarella cheese, and fresh fragrant basil leaves.",
        image: "images/menu/p1_margarita_pizza.jpg",
        tags: ["Classic", "Neapolitan"]
    },
    {
        id: "p2",
        name: "Paneer Tikka Pizza",
        category: "pizza-pasta",
        price: 279,
        isVeg: true,
        isBestseller: true,
        description: "Tandoori cottage cheese cubes with aromatic tikka masala, sliced red onion, crisp capsicum, and bubbling mozzarella.",
        image: "images/menu/p2_paneer_tikka_pizza.jpg",
        tags: ["Desi Fusion", "Popular"]
    },
    {
        id: "p3",
        name: "Chicken Tikka Pizza",
        category: "pizza-pasta",
        price: 299,
        isVeg: false,
        isBestseller: true,
        description: "Charred tandoori chicken tikka chunks, spiced tomato base, crunchy capsicum, red onions, and melted mozzarella.",
        image: "images/menu/p3_chicken_tikka_pizza.jpg",
        tags: ["Non-Veg", "Chef Pick"]
    },
    {
        id: "p4",
        name: "4 Cheese Pizza",
        category: "pizza-pasta",
        price: 319,
        isVeg: true,
        isBestseller: true,
        description: "Gourmet combination of four cheeses: mozzarella, yellow cheddar, parmesan, and feta baked to golden bubbly crust.",
        image: "images/menu/p4_4_cheese_pizza.jpg",
        tags: ["Quattro Formaggi", "Extra Cheesy"]
    },
    {
        id: "p5",
        name: "BBQ Chicken Pizza",
        category: "pizza-pasta",
        price: 319,
        isVeg: false,
        isBestseller: false,
        description: "Tender chicken tossed in smoky BBQ sauce, red onion, green chillies, black olives, and mozzarella cheese.",
        image: "images/menu/p5_bbq_chicken_pizza.jpg",
        tags: ["Non-Veg", "Smoky BBQ"]
    },
    {
        id: "p6",
        name: "Bookmark Special Pizza (Quattro Stagioni)",
        category: "pizza-pasta",
        price: 339,
        isVeg: true,
        isBestseller: true,
        description: "Quattro stagioni pizza crafted with four signature sauces across four sections: peri-peri, basil pesto, cheese, and tikka masala.",
        image: "images/menu/p6_bookmark_special_pizza.jpg",
        tags: ["Signature", "4-in-1"]
    },
    {
        id: "p7",
        name: "Pink Sauce Pasta",
        category: "pizza-pasta",
        price: 259,
        isVeg: true,
        isBestseller: true,
        description: "Harmonious combination of spicy tomato arrabbiata and velvety cream sauce tossed with penne pasta and exotic veggies.",
        image: "images/menu/p7_creamy_pink_sauce_pasta.jpg",
        tags: ["Patron Favorite", "Creamy & Tangy"]
    },
    {
        id: "p8",
        name: "Alfredo Sauce Pasta",
        category: "pizza-pasta",
        price: 249,
        isVeg: true,
        isBestseller: false,
        description: "Penne pasta and exotic veggies combined with rich butter, cream, garlic, and parmesan white sauce.",
        image: "images/menu/p8_alfredo_sauce_pasta.jpg",
        tags: ["White Sauce", "Cheesy"]
    },
    {
        id: "p9",
        name: "Chicken Alfredo Pasta",
        category: "pizza-pasta",
        price: 269,
        isVeg: false,
        isBestseller: true,
        description: "Tender chicken strips and penne tossed with sautéed garlic, mushrooms, cream, and parmesan sauce.",
        image: "images/menu/p9_chicken_alfredo_pasta.jpg",
        tags: ["Non-Veg", "Rich White Sauce"]
    },
    {
        id: "p10",
        name: "Veg Arrabbiata Pasta",
        category: "pizza-pasta",
        price: 249,
        isVeg: true,
        isBestseller: false,
        description: "Red sauce pasta made from garlic, ripe tomatoes, and dried red chilly peppers cooked in olive oil, topped with cheese.",
        image: "images/menu/p10_veg_arrabbiata_pasta.jpg",
        tags: ["Spicy Tomato", "Olive Oil"]
    },
    {
        id: "p11",
        name: "Jalapeno Corn Mac & Cheese",
        category: "pizza-pasta",
        price: 259,
        isVeg: true,
        isBestseller: true,
        description: "Classic oven-baked macaroni and cheese spiced with Mexican chilli, pickled jalapenos, and sweet golden corn.",
        image: "images/menu/p11_jalapeno_corn_mac_and_cheese.jpg",
        tags: ["Baked", "Comfort Food"]
    },
    {
        id: "p12",
        name: "Penne Sundried Tomato Pesto",
        category: "pizza-pasta",
        price: 259,
        isVeg: true,
        isBestseller: false,
        description: "Creamy sundried tomato pesto sauce tossed with al dente penne pasta, fresh basil, and extra virgin olive oil.",
        image: "images/menu/p12_penne_sundried_tomato_pesto.jpg",
        tags: ["Pesto", "Italian Herb"]
    },
    {
        id: "p13",
        name: "Lasagne",
        category: "pizza-pasta",
        price: 279,
        isVeg: true,
        isBestseller: true,
        description: "Baked layers of pasta sheets, seasonal garden vegetables, and mix sauce blanketed in melted mozzarella cheese.",
        image: "images/menu/p13_veg_lasagne.jpg",
        tags: ["Oven Baked", "Layered"]
    },
    {
        id: "p14",
        name: "Bookmark Special Lasagne",
        category: "pizza-pasta",
        price: 289,
        isVeg: true,
        isBestseller: true,
        description: "Spicy Kolhapuri spiced paneer layered between lasagna sheets with the quintessential golden Parmesan gratin.",
        image: "images/menu/p14_bookmark_special_lasagne.jpg",
        tags: ["Chef Signature", "Desi Kolhapuri"]
    },
    {
        id: "p15",
        name: "Spinach & Ricotta Ravioli Butter Garlic",
        category: "pizza-pasta",
        price: 319,
        isVeg: true,
        isBestseller: false,
        description: "Handmade delicate ravioli filled with fresh spinach and creamy ricotta, tossed in fragrant butter garlic sauce.",
        image: "images/menu/p15_spinach_ricotta_ravioli.jpg",
        tags: ["Handcrafted", "Gourmet"]
    },

    // ==========================================
    // --- 5. Burgers, Wraps & Sandwiches ---
    // ==========================================
    {
        id: "bg1",
        name: "Desi Aloo Tikki Burger",
        category: "burgers",
        price: 139,
        isVeg: true,
        isBestseller: false,
        description: "Crispy golden potato pattie topped with crunchy veggies and cheese, served with fresh mint mayo on a toasted bun.",
        image: "images/menu/bg1_desi_aloo_tikki_burger.jpg",
        tags: ["Desi Flavor", "Crisp Pattie"]
    },
    {
        id: "bg2",
        name: "Classic Paneer Burger",
        category: "burgers",
        price: 159,
        isVeg: true,
        isBestseller: true,
        description: "Dish made of paneer with a seasoned mixture of vegetables and spices wrapped in a soft sesame bun.",
        image: "images/menu/bg2_classic_paneer_burger.jpg",
        tags: ["Paneer Crunch", "Bestseller"]
    },
    {
        id: "bg3",
        name: "Paneer Tikka Burger",
        category: "burgers",
        price: 169,
        isVeg: true,
        isBestseller: true,
        description: "Crisp spiced paneer patty combined with aromatic tandoori tikka masala, cheese slice, and crunchy greens.",
        image: "images/menu/bg3_paneer_tikka_burger.jpg",
        tags: ["Tikka Masala", "Cheesy"]
    },
    {
        id: "bg4",
        name: "Veg Mexican Burger",
        category: "burgers",
        price: 169,
        isVeg: true,
        isBestseller: false,
        description: "Mexican spiced vegetable patty served with crispy nachos and zesty homemade salsa dip.",
        image: "images/menu/bg4_veg_mexican_burger.jpg",
        tags: ["Mexican Spiced"]
    },
    {
        id: "bg5",
        name: "Classic Chicken Burger",
        category: "burgers",
        price: 149,
        isVeg: false,
        isBestseller: true,
        description: "Classic juicy chicken burger patty made with chef's special spiced recipe, lettuce, and mayo.",
        image: "images/menu/bg5_classic_chicken_burger.jpg",
        tags: ["Non-Veg", "Classic Pick"]
    },
    {
        id: "bg6",
        name: "Chicken Tikka Burger",
        category: "burgers",
        price: 179,
        isVeg: false,
        isBestseller: true,
        description: "Fusion chicken tikka burger combining authentic Indian tikka masala, seasoned chicken, and melted cheese.",
        image: "images/menu/bg6_chicken_tikka_burger.jpg",
        tags: ["Non-Veg", "Fusion"]
    },
    {
        id: "bg7",
        name: "Chicken Mexican Burger",
        category: "burgers",
        price: 189,
        isVeg: false,
        isBestseller: false,
        description: "Mexican chicken burger packed with spicy flavours & topped with salsa, served with crispy nachos.",
        image: "images/menu/bg7_chicken_mexican_burger.jpg",
        tags: ["Non-Veg", "Spicy"]
    },
    {
        id: "bg8",
        name: "Honey Chilli Chicken & Cheese Burger",
        category: "burgers",
        price: 199,
        isVeg: false,
        isBestseller: true,
        description: "Crispy chicken tossed in sweet and spicy hot chilli sauce, smothered in melted cheese on a buttered bun.",
        image: "images/menu/bg8_honey_chilli_chicken_burger.jpg",
        tags: ["Non-Veg", "Sweet & Spicy"]
    },
    {
        id: "bg9",
        name: "Bookmark Signature Burger Chicken",
        category: "burgers",
        price: 219,
        isVeg: false,
        isBestseller: true,
        description: "Chef's loaded signature double chicken patty burger layered with cheese, fresh greens, and house secret relish.",
        image: "images/menu/bg9_bookmark_signature_burger.jpg",
        tags: ["Non-Veg", "Chef Signature"]
    },
    {
        id: "bg10",
        name: "Veg Grilled Sandwich",
        category: "burgers",
        price: 149,
        isVeg: true,
        isBestseller: true,
        description: "Vegetable grilled sandwich made with a large assortment of fresh vegetables and oodles of butter.",
        image: "images/menu/bg10_veg_grilled_sandwich.jpg",
        tags: ["Buttery", "Classic Grilled"]
    },
    {
        id: "bg11",
        name: "Bombay Club Sandwich",
        category: "burgers",
        price: 149,
        isVeg: true,
        isBestseller: true,
        description: "Mumbai style spicy potato filling, cucumber, tomatoes, cheese, and spicy mint chutney toasted to crisp perfection.",
        image: "images/menu/bg11_bombay_club_sandwich.jpg",
        tags: ["Mumbai Special", "Spicy"]
    },
    {
        id: "bg12",
        name: "Paneer Tikka Sandwich",
        category: "burgers",
        price: 159,
        isVeg: true,
        isBestseller: false,
        description: "Filled with paneer cubes, onions, green peppers, marinated with spiced yogurt and tandoori masala.",
        image: "images/menu/bg12_paneer_tikka_sandwich.jpg",
        tags: ["Tandoori Paneer"]
    },
    {
        id: "bg13",
        name: "Veg Club Sandwich",
        category: "burgers",
        price: 169,
        isVeg: true,
        isBestseller: false,
        description: "Double layer sandwich with assorted vegetables, sliced cheese, and seasoned mayo spread.",
        image: "images/menu/bg13_veg_club_sandwich.jpg",
        tags: ["Double Layer"]
    },
    {
        id: "bg14",
        name: "Chicken Grilled Sandwich",
        category: "burgers",
        price: 179,
        isVeg: false,
        isBestseller: true,
        description: "Delicious and tender grilled chicken on a bed of crisp lettuce, tomato, and mayo sandwiched between toasted bread.",
        image: "images/menu/bg14_chicken_grilled_sandwich.jpg",
        tags: ["Non-Veg", "Grilled Chicken"]
    },
    {
        id: "bg15",
        name: "Chicken Tikka Sandwich",
        category: "burgers",
        price: 179,
        isVeg: false,
        isBestseller: false,
        description: "Mashed chicken tikka mixed with capsicum, green chutney, and mayonnaise stuffed in buttered sandwich bread.",
        image: "images/menu/bg15_chicken_tikka_sandwich.jpg",
        tags: ["Non-Veg", "Spicy Tikka"]
    },
    {
        id: "bg16",
        name: "Chicken Club Sandwich",
        category: "burgers",
        price: 199,
        isVeg: false,
        isBestseller: true,
        description: "Chicken club sandwich made with seasoned shredded chicken, toasted bread, fried egg, lettuce, tomatoes, mayo, and processed cheese.",
        image: "images/menu/bg16_chicken_club_sandwich.jpg",
        tags: ["Non-Veg", "Triple Decker"]
    },
    {
        id: "bg17",
        name: "Veg Cheesy Wrap",
        category: "burgers",
        price: 169,
        isVeg: true,
        isBestseller: true,
        description: "Flour tortilla rolled with seasoned garden vegetables, house dressing, and molten melted cheese.",
        image: "images/menu/bg17_veg_cheesy_wrap.jpg",
        tags: ["Warm Wrap", "Cheesy"]
    },
    {
        id: "bg18",
        name: "Chicken Tikka Cheesy Roll",
        category: "burgers",
        price: 199,
        isVeg: false,
        isBestseller: true,
        description: "Smoky tandoori chicken tikka cubes rolled in a soft paratha with melting cheese and mint chutney.",
        image: "images/menu/bg18_chicken_tikka_cheesy_roll.jpg",
        tags: ["Non-Veg", "Tandoor Roll"]
    },
    {
        id: "bg19",
        name: "Chicken Baida Roti",
        category: "burgers",
        price: 229,
        isVeg: false,
        isBestseller: true,
        description: "Classic Mumbai style pan-fried paratha pocket stuffed with spiced egg, minced chicken, and herbs.",
        image: "images/menu/bg19_chicken_baida_roti.jpg",
        tags: ["Non-Veg", "Mumbai Classic"]
    },

    // ==========================================
    // --- 6. Asian Bowls & Sizzlers ---
    // ==========================================
    {
        id: "ab1",
        name: "Ramen Bowl (Veg)",
        category: "asian-bowls",
        price: 309,
        isVeg: true,
        isBestseller: true,
        description: "Vegetable broth base with garlic, dried mushrooms, tomato paste, soy sauce, and sriracha with soupy noodles and fresh greens.",
        image: "images/menu/ab1_veg_ramen.jpg",
        tags: ["Japanese Broth", "Comfort Bowl"]
    },
    {
        id: "ab2",
        name: "Ramen Bowl (Chicken)",
        category: "asian-bowls",
        price: 329,
        isVeg: false,
        isBestseller: true,
        description: "Rich chicken broth with garlic, mushrooms, soy and sriracha sauce, tender sliced chicken, and savory soupy noodles.",
        image: "images/menu/ab2_chicken_ramen.jpg",
        tags: ["Non-Veg", "Aromatic Ramen"]
    },
    {
        id: "ab3",
        name: "Oriental Pot Rice (Veg)",
        category: "asian-bowls",
        price: 269,
        isVeg: true,
        isBestseller: true,
        description: "Fragrant rice layered with exotic oriental vegetables and rich savory wok-tossed garlic gravy.",
        image: "images/menu/ab3_oriental_pot_rice_veg.jpg",
        tags: ["Pot Rice", "Bestseller"]
    },
    {
        id: "ab4",
        name: "Oriental Pot Rice (Chicken)",
        category: "asian-bowls",
        price: 289,
        isVeg: false,
        isBestseller: true,
        description: "Aromatic pot rice layered with tender diced chicken and garden vegetables in a sizzling oriental gravy.",
        image: "images/menu/ab4_oriental_pot_rice_chicken.jpg",
        tags: ["Non-Veg", "Oriental Gravy"]
    },
    {
        id: "ab5",
        name: "Thai Curry with Jasmine Rice (Veg)",
        category: "asian-bowls",
        price: 249,
        isVeg: true,
        isBestseller: false,
        description: "Authentic aromatic Thai coconut curry packed with crisp baby corn, mushrooms, and zucchini, served with steamed rice.",
        image: "images/menu/ab5_thai_curry_veg.jpg",
        tags: ["Thai Curry", "Coconut Milk"]
    },
    {
        id: "ab6",
        name: "Thai Curry with Rice (Chicken)",
        category: "asian-bowls",
        price: 259,
        isVeg: false,
        isBestseller: false,
        description: "Classic aromatic Thai coconut curry simmered with tender chicken pieces and bamboo shoots, served with steamed rice.",
        image: "images/menu/ab6_thai_curry_chicken.jpg",
        tags: ["Non-Veg", "Thai Flavors"]
    },
    {
        id: "ab7",
        name: "Classic Paneer Chilly",
        category: "asian-bowls",
        price: 279,
        isVeg: true,
        isBestseller: true,
        description: "Crispy paneer cubes tossed with crunchy bell peppers, spring onions, and spicy Indo-Chinese chilli soy sauce.",
        image: "images/menu/ab7_classic_paneer_chilly.jpg",
        tags: ["Indo-Chinese", "Spicy"]
    },
    {
        id: "ab8",
        name: "Classic Chicken Chilly",
        category: "asian-bowls",
        price: 279,
        isVeg: false,
        isBestseller: true,
        description: "Crispy chicken bites tossed with fresh capsicum, garlic, scallions, and dark soy chilli glaze.",
        image: "images/menu/ab8_classic_chicken_chilly.jpg",
        tags: ["Non-Veg", "Hot & Tangy"]
    },
    {
        id: "ab9",
        name: "Cottage Cheese & Capsicum Sizzler",
        category: "asian-bowls",
        price: 399,
        isVeg: true,
        isBestseller: true,
        description: "Sizzling paneer steak and capsicum served on a smoking iron skillet with herbed rice, French fries, and pepper sauce.",
        image: "images/menu/ab9_cottage_cheese_sizzler.jpg",
        tags: ["Smoking Skillet", "Paneer Sizzler"]
    },
    {
        id: "ab10",
        name: "Italian Sizzler Veg",
        category: "asian-bowls",
        price: 419,
        isVeg: true,
        isBestseller: false,
        description: "Sizzling platter featuring penne pasta, cheese garlic bread, crispy veg cutlet, French fries, and buttered vegetables.",
        image: "images/menu/ab10_italian_sizzler_veg.jpg",
        tags: ["Italian Feast", "Sizzling"]
    },
    {
        id: "ab11",
        name: "Peri-Peri Chicken Sizzler",
        category: "asian-bowls",
        price: 499,
        isVeg: false,
        isBestseller: true,
        description: "Grilled chicken breast smothered in fiery peri-peri sauce, served on an iron sizzler plate with spicy rice, fries, and buttered corn.",
        image: "images/menu/ab11_peri_peri_chicken_sizzler.jpg",
        tags: ["Non-Veg", "Grand Sizzler"]
    },
    {
        id: "ab12",
        name: "Oriental Paneer Sizzler",
        category: "asian-bowls",
        price: 399,
        isVeg: true,
        isBestseller: false,
        description: "Stir-fried noodles or rice with paneer chilly and vegetable Manchurian balls served sizzling hot.",
        image: "images/menu/ab12_oriental_paneer_sizzler.jpg",
        tags: ["Wok Sizzler"]
    },

    // ==========================================
    // --- 7. Desserts & Pancakes ---
    // ==========================================
    {
        id: "d1",
        name: "Gulab Jamun",
        category: "desserts",
        price: 99,
        isVeg: true,
        isBestseller: false,
        description: "Warm, soft melt-in-the-mouth mawa dumplings soaked in cardamom rose scented sugar syrup (2 pcs).",
        image: "images/menu/d1_gulab_jamun.jpg",
        tags: ["Desi Sweet", "Warm"]
    },
    {
        id: "d2",
        name: "Pastry of the Day",
        category: "desserts",
        price: 129,
        isVeg: true,
        isBestseller: false,
        description: "Freshly baked layered artisanal pastry with velvety frosting and premium chocolate shavings.",
        image: "images/menu/d2_pastry_of_the_day.jpg",
        tags: ["Fresh Bake"]
    },
    {
        id: "d3",
        name: "Chocolate Brownie",
        category: "desserts",
        price: 159,
        isVeg: true,
        isBestseller: true,
        description: "Warm, dense and fudgy dark chocolate brownie baked fresh in the cafe oven.",
        image: "images/menu/d3_chocolate_brownie.jpg",
        tags: ["Fudge Brownie", "Choco Lover"]
    },
    {
        id: "d4",
        name: "Fluffy Pancakes (Nutella / Honey)",
        category: "desserts",
        price: 199,
        isVeg: true,
        isBestseller: true,
        description: "Fluffy golden pancake stack drizzled generously with warm Nutella chocolate or honey, topped with whipped cream.",
        image: "images/menu/d4_fluffy_pancakes.jpg",
        tags: ["Sweet Stack", "Whipped Cream"]
    },
    {
        id: "d5",
        name: "Sizzling Brownie With Ice Cream",
        category: "desserts",
        price: 229,
        isVeg: true,
        isBestseller: true,
        description: "Warm decadent fudge brownie served sizzling on a cast-iron skillet, crowned with creamy vanilla ice cream and hot chocolate fudge drizzle.",
        image: "images/menu/d5_sizzling_brownie_ice_cream.jpg",
        tags: ["Legendary", "Sizzling Hot"]
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
        text: "Hands down the best work cafe in Kalyan. The high-speed Wi-Fi is reliable, plug points at every corner, and their Margarita Pizza + Cold Brew keeps me powered through client calls.",
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
        title: "Wood-fired Style Italiano Pizza",
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
