# The Bookmark Cafe Website (Kalyan West)

An aesthetic, responsive, customer-facing web application designed for **The Bookmark Cafe**, Kalyan West's premier literary haven where good books meet artisan brew and gourmet dining.

---

## 🌟 Key Features

1. **Brand Storytelling & Literary Aesthetic**
   - Theme inspired by warm espresso, aged book pages, and the cafe's iconic secret book-cover entrance door.
   - Elegant typography with *Cinzel*, *Playfair Display*, and *Plus Jakarta Sans*.

2. **Authentic Kalyan Menu with Indian Rupee (₹) Pricing**
   - Categories:
     - ☕ Artisan Coffee & Signature Belgian Hot Chocolates
     - 🥤 Thick Shakes (Biscoff, Brownie Fudge), Frappes & Mocktails
     - 🍟 Fries Bar & Starters (Peri-Peri Fries, Grand Fries Platter, Cheesy Nachos)
     - 🍕 Handcrafted Pastas & Artisan Pizzas (Burrata & Pesto, Quattro Stagioni, Pink Sauce)
     - 🍔 Burgers, Club Sandwiches & Grilled Sourdough
     - 🍚 Continental Bowls & Sizzlers (Oriental Pot Rice, Sizzling Cottage Cheese/Chicken)
     - 🍰 Sweet Endings (Warm Sizzling Walnut Brownie, Lotus Biscoff Pancakes)
   - Real-time dietary filters: **Veg Only (🟢)**, **Non-Veg (🔴)**, and **Chef's Bestsellers (⭐)**.
   - Instant search bar by dish name or ingredient.

3. **Interactive Taste Tray & WhatsApp Pre-Ordering**
   - Customers can add items to their **Taste Tray**.
   - Calculates item quantities and total in ₹.
   - One-click **WhatsApp Pre-Order** formats an order message directly addressed to **+91 8421190965**.

4. **Table & Reading Nook Reservation System**
   - Book tables for solo study, romantic dates, or group book clubs.
   - Seating preferences: Cozy Reading Nook, Bookshelf Table, Window Work Bench.
   - Generates an instant booking reference (e.g. `BK-7492`) and provides 1-click WhatsApp notification to **+91 8421190965**.

5. **Community Book Exchange & Board Games**
   - Details on the *"Take a Book, Leave a Book"* initiative.
   - Monthly Book & Brew pairing showcase (*The Midnight Library* + *Hazelnut Hot Chocolate*).

6. **Location, Map & Quick Contact**
   - Address: Shop No. 4, Patil Bungalow, Gandhar Nagar Road, Adharwadi Jail Road, Kalyan West, Maharashtra 421301.
   - Phone: **+91 8421190965**
   - Operating Hours: 11:30 AM – 11:00 PM (Everyday)
   - Embedded Google Map with direct directions link.

---

## 🚀 How to Run Locally

You can launch and view the website immediately using Python:

```bash
python server.py
```

Or open directly in your web browser:
```
http://localhost:8080
```

You can also simply double-click or open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Structure

```
d:\bookmark_cafe\
├── index.html          # Semantic responsive HTML5 structure
├── server.py           # Local development Python server
├── README.md           # Documentation
├── css/
│   └── styles.css      # Custom styling, bookmark ribbons, coffee steam animations
└── js/
    ├── data.js         # Menu items, prices, cafe metadata, testimonials, FAQs
    ├── cart.js         # Taste Tray state & WhatsApp message generator
    ├── reservation.js  # Table booking logic & WhatsApp confirmation
    └── app.js          # Main UI controller, search, filters & drawer interactions
```

---

> [!NOTE]
> Per client instructions, this repository remains strictly local and has not been pushed to GitHub, Vercel, or Render.
