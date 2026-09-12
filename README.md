# 📖 The Bookmark Cafe Website (Kalyan West)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bookmarks--cafe.onrender.com-brightgreen?style=for-the-badge&logo=render)](https://bookmarks-cafe.onrender.com)
[![GitHub stars](https://img.shields.io/badge/Status-Live%20Online-success?style=for-the-badge)](https://bookmarks-cafe.onrender.com)

> ### 🌐 **Live Website Link:**  
> 👉 **[https://bookmarks-cafe.onrender.com](https://bookmarks-cafe.onrender.com)**

---

An aesthetic, responsive, customer-facing web application designed for **The Bookmark Cafe**, Kalyan West's premier literary haven where good books meet artisan brew and gourmet dining.

---

## 🌟 Key Features

1. **Brand Storytelling & Literary Aesthetic**
   - Theme inspired by rich espresso brown, aged book pages, and the cafe's iconic secret book-cover entrance door.
   - Elegant typography pairing *Cinzel*, *Playfair Display*, and *Plus Jakarta Sans*.

2. **Authentic Kalyan Menu with Indian Rupee (₹) Pricing**
   - Categories:
     - ☕ Artisan Coffee & Signature Belgian Hot Chocolates
     - 🥤 Thick Shakes (Lotus Biscoff, Brownie Fudge), Frappes & Mocktails
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
   - Generates an instant booking reference (e.g. `BK-7492`) with a 1-click WhatsApp notification to **+91 8421190965**.

5. **Community Book Exchange & Board Games**
   - Details on the *"Take a Book, Leave a Book"* initiative.
   - Curated Book & Brew of the Month (*The Midnight Library* + *Hazelnut Hot Chocolate*).

6. **Location, Map & Quick Contact**
   - Address: Shop No. 4, Patil Bungalow, Gandhar Nagar Road, Adharwadi Jail Road, Kalyan West, Maharashtra 421301.
   - Phone: **+91 8421190965**
   - Operating Hours: 11:30 AM – 11:00 PM (Everyday)
   - Embedded Google Map with direct directions link.

---

## 🚀 Live Deployment on Render

* **Live URL**: **[https://bookmarks-cafe.onrender.com](https://bookmarks-cafe.onrender.com)**
* **Environment**: Static Site
* **Publish Directory**: `./`
* **Configuration File**: `render.yaml`

Every commit pushed to the `main` branch on GitHub automatically updates the live Render website.

---

## 💻 How to Run Locally

You can also preview the website locally using Python:

```bash
python server.py
```

Then visit in your web browser:
```
http://localhost:8080
```

---

## 📁 Project Structure

```
d:\bookmark_cafe\
├── index.html          # Semantic responsive HTML5 structure
├── render.yaml         # Render hosting blueprint configuration
├── server.py           # Local development Python server
├── README.md           # Project documentation with live demo
├── css/
│   └── styles.css      # Custom styling, bookmark ribbons, animations
└── js/
    ├── data.js         # Menu items, prices, cafe metadata, testimonials, FAQs
    ├── cart.js         # Taste Tray state & WhatsApp message generator
    ├── reservation.js  # Table booking logic & WhatsApp confirmation
    └── app.js          # Main UI controller, search, filters & drawer interactions
```

---

© 2026 The Bookmark Cafe. Designed with ❤️ for Indian bibliophiles & coffee enthusiasts.
