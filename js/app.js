// Main Application Controller for The Bookmark Cafe
import { MENU_ITEMS, MENU_CATEGORIES, CAFE_INFO, TESTIMONIALS, GALLERY_IMAGES, FAQS } from './data.js';
import { cart } from './cart.js';
import { reservationManager } from './reservation.js';

// Application State
const state = {
    activeCategory: 'all',
    activeDietFilter: 'all', // 'all', 'veg', 'nonveg', 'bestseller'
    searchQuery: '',
    isTrayOpen: false,
    isMobileMenuOpen: false
};

// UI Notification Toast
export function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let iconSvg = `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
    if (type === 'bookmark') {
        iconSvg = `<svg class="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 20V4z"></path></svg>`;
    }

    toast.innerHTML = `
        ${iconSvg}
        <div class="text-sm font-medium">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 260);
    }, 3200);
}

// Render Menu Categories Tabs
function renderCategories() {
    const container = document.getElementById('category-tabs');
    if (!container) return;

    container.innerHTML = MENU_CATEGORIES.map(cat => {
        const isActive = state.activeCategory === cat.id;
        return `
            <button 
                data-category="${cat.id}"
                class="category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                    isActive 
                        ? 'bg-amber-600 text-white border-amber-500 shadow-sm' 
                        : 'bg-white text-[#4a3525] border-[#d8c8b6] hover:border-amber-600 hover:text-amber-800 shadow-2xs'
                }"
            >
                <i data-lucide="${cat.icon}" class="w-3.5 h-3.5"></i>
                <span>${cat.name}</span>
            </button>
        `;
    }).join('');

    container.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.activeCategory = btn.dataset.category;
            renderCategories();
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });
}

// Render Menu Items
function renderMenuItems() {
    const container = document.getElementById('menu-grid');
    const emptyState = document.getElementById('menu-empty');
    if (!container) return;

    let items = MENU_ITEMS;

    // Filter by category
    if (state.activeCategory !== 'all') {
        items = items.filter(i => i.category === state.activeCategory);
    }

    // Filter by diet
    if (state.activeDietFilter === 'veg') {
        items = items.filter(i => i.isVeg);
    } else if (state.activeDietFilter === 'nonveg') {
        items = items.filter(i => !i.isVeg);
    } else if (state.activeDietFilter === 'bestseller') {
        items = items.filter(i => i.isBestseller);
    }

    // Filter by search
    if (state.searchQuery.trim()) {
        const query = state.searchQuery.toLowerCase().trim();
        items = items.filter(i => 
            i.name.toLowerCase().includes(query) || 
            i.description.toLowerCase().includes(query) ||
            i.tags.some(t => t.toLowerCase().includes(query))
        );
    }

    if (items.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    container.innerHTML = items.map(item => {
        const cartItem = cart.items.find(i => i.id === item.id);
        const qtyInCart = cartItem ? cartItem.quantity : 0;

        return `
            <div class="light-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-[#e4d8c9] bg-white shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300">
                <div class="relative h-52 overflow-hidden bg-[#faf6f0]">
                    <img 
                        src="${item.image}" 
                        alt="${item.name}" 
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onerror="this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    <!-- Diet badge -->
                    <div class="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#e2d5c3] shadow-2xs">
                        <span class="diet-indicator ${item.isVeg ? 'diet-veg' : 'diet-nonveg'}"></span>
                        <span class="text-[11px] font-bold tracking-wide uppercase ${item.isVeg ? 'text-emerald-700' : 'text-rose-700'}">
                            ${item.isVeg ? 'Veg' : 'Non-Veg'}
                        </span>
                    </div>

                    <!-- Bestseller / tags -->
                    <div class="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                        ${item.isBestseller ? `
                            <span class="bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                                <i data-lucide="star" class="w-3 h-3 fill-black"></i> Bestseller
                            </span>
                        ` : ''}
                    </div>

                    <!-- Price Tag Over Image -->
                    <div class="absolute bottom-3 left-3 bg-amber-500 text-black font-extrabold px-3 py-1 rounded-lg text-base shadow-lg">
                        ₹${item.price}
                    </div>
                </div>

                <div class="p-5 flex flex-col flex-grow justify-between bg-white">
                    <div>
                        <div class="flex items-start justify-between gap-2 mb-1.5">
                            <h3 class="font-serif-title text-xl font-bold text-[#1f130b] group-hover:text-amber-700 transition-colors leading-snug">
                                ${item.name}
                            </h3>
                        </div>
                        <p class="text-sm text-[#5c4a3d] line-clamp-2 leading-relaxed mb-4">
                            ${item.description}
                        </p>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            ${item.tags.map(t => `
                                <span class="text-[10px] uppercase font-bold tracking-wider bg-[#f6eee3] text-[#78350f] px-2 py-0.5 rounded border border-[#e8dac8]">
                                    ${t}
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="pt-3 border-t border-[#f0e4d4] flex items-center justify-between">
                        ${qtyInCart > 0 ? `
                            <div class="flex items-center gap-2 bg-[#fcf9f5] border border-amber-600/40 rounded-xl px-2 py-1">
                                <button data-action="dec" data-id="${item.id}" class="qty-btn w-7 h-7 flex items-center justify-center rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-200 transition">
                                    <i data-lucide="minus" class="w-3.5 h-3.5"></i>
                                </button>
                                <span class="font-bold text-amber-950 px-2 text-sm">${qtyInCart} in tray</span>
                                <button data-action="inc" data-id="${item.id}" class="qty-btn w-7 h-7 flex items-center justify-center rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition">
                                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        ` : `
                            <button 
                                data-action="add" 
                                data-id="${item.id}" 
                                class="add-to-tray-btn w-full btn-amber-glow text-black font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
                            >
                                <i data-lucide="bookmark-plus" class="w-4 h-4"></i>
                                <span>Add to Taste Tray</span>
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Attach button events
    container.querySelectorAll('[data-action="add"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            cart.addItem(id);
            const item = MENU_ITEMS.find(i => i.id === id);
            showToast(`Added <strong>${item.name}</strong> to Taste Tray! <button class="open-tray-btn underline font-bold text-amber-300 ml-1.5 cursor-pointer">View Tray</button>`, 'bookmark');
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });

    container.querySelectorAll('[data-action="inc"]').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.changeQuantity(btn.dataset.id, 1);
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });

    container.querySelectorAll('[data-action="dec"]').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.changeQuantity(btn.dataset.id, -1);
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });
}

// Render Taste Tray Drawer
function renderCartDrawer() {
    const container = document.getElementById('tray-items');
    const badgeElements = document.querySelectorAll('.cart-count-badge');
    const subtotalEl = document.getElementById('tray-subtotal');
    const whatsappBtn = document.getElementById('tray-whatsapp-btn');
    const emptyNotice = document.getElementById('tray-empty-notice');
    const trayFooter = document.getElementById('tray-footer');

    const { totalCount, subtotal } = cart.getSummary();

    // Update badges
    badgeElements.forEach(badge => {
        badge.textContent = totalCount;
        if (totalCount > 0) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });

    if (subtotalEl) {
        subtotalEl.textContent = `₹${subtotal}`;
    }

    if (!container) return;

    if (cart.items.length === 0) {
        container.innerHTML = '';
        if (emptyNotice) emptyNotice.classList.remove('hidden');
        if (trayFooter) trayFooter.classList.add('hidden');
        return;
    }

    if (emptyNotice) emptyNotice.classList.add('hidden');
    if (trayFooter) trayFooter.classList.remove('hidden');

    container.innerHTML = cart.items.map(item => `
        <div class="flex items-center justify-between gap-3 p-2.5 sm:p-3 bg-[#24170e] hover:bg-[#2a1b11] transition-colors rounded-xl border border-[#3e2617] shadow-xs">
            <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0 border border-amber-900/40 shadow-xs"
                loading="lazy"
                onerror="this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'"
            />
            <div class="flex-grow min-w-0 pr-1">
                <div class="flex items-center gap-1.5 mb-0.5">
                    <span class="diet-indicator ${item.isVeg ? 'diet-veg' : 'diet-nonveg'} scale-75 flex-shrink-0"></span>
                    <h4 class="font-semibold text-xs sm:text-sm text-[#f6eee2] leading-tight break-words">${item.name}</h4>
                </div>
                <div class="text-[11px] text-amber-400 font-medium flex items-center flex-wrap gap-x-1.5">
                    <span>₹${item.price} each</span>
                    <span class="text-neutral-500">•</span>
                    <span class="text-amber-300 font-bold">Total: ₹${item.price * item.quantity}</span>
                </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
                <div class="flex items-center bg-[#170e08] rounded-lg p-0.5 border border-[#482c1a]">
                    <button data-cart-dec="${item.id}" class="w-6 h-6 rounded flex items-center justify-center text-amber-400 hover:bg-amber-900/40 text-xs transition" aria-label="Decrease quantity">
                        <i data-lucide="minus" class="w-3 h-3"></i>
                    </button>
                    <span class="text-xs font-bold w-5 text-center text-amber-200">${item.quantity}</span>
                    <button data-cart-inc="${item.id}" class="w-6 h-6 rounded flex items-center justify-center text-amber-400 hover:bg-amber-900/40 text-xs transition" aria-label="Increase quantity">
                        <i data-lucide="plus" class="w-3 h-3"></i>
                    </button>
                </div>
                <button data-cart-remove="${item.id}" class="text-neutral-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-950/30 transition text-xs" title="Remove item" aria-label="Remove item">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Update WhatsApp link
    if (whatsappBtn) {
        const orderTypeSelect = document.getElementById('order-type-select');
        const orderNotesInput = document.getElementById('order-notes-input');
        
        const updateLink = () => {
            const orderType = orderTypeSelect ? orderTypeSelect.value : 'Dine-in Pre-order';
            const notes = orderNotesInput ? orderNotesInput.value : '';
            const url = cart.getWhatsAppOrderUrl(orderType, notes);
            whatsappBtn.href = url || '#';
        };

        updateLink();
        if (orderTypeSelect) orderTypeSelect.onchange = updateLink;
        if (orderNotesInput) orderNotesInput.oninput = updateLink;
    }

    // Attach event listeners inside tray
    container.querySelectorAll('[data-cart-inc]').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.changeQuantity(btn.dataset.cartInc, 1);
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });

    container.querySelectorAll('[data-cart-dec]').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.changeQuantity(btn.dataset.cartDec, -1);
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });

    container.querySelectorAll('[data-cart-remove]').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.removeItem(btn.dataset.cartRemove);
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });
}

// Setup Cart Drawer Events
function setupCartDrawer() {
    const drawer = document.getElementById('taste-tray-drawer');
    const overlay = document.getElementById('tray-backdrop');
    const closeBtn = document.getElementById('close-tray-btn');
    const clearBtn = document.getElementById('clear-tray-btn');

    const toggleDrawer = (open) => {
        state.isTrayOpen = open;
        if (!drawer || !overlay) return;

        if (open) {
            drawer.classList.remove('translate-x-full');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            document.body.classList.add('overflow-hidden');
        } else {
            drawer.classList.add('translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            document.body.classList.remove('overflow-hidden');
        }
    };

    // Event delegation to catch clicks on any .open-tray-btn (static or dynamically created)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.open-tray-btn');
        if (btn) {
            e.preventDefault();
            toggleDrawer(true);
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', () => toggleDrawer(false));
    if (overlay) overlay.addEventListener('click', () => toggleDrawer(false));

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your taste tray?')) {
                cart.clear();
                renderMenuItems();
                showToast('Taste Tray cleared.');
            }
        });
    }

    cart.subscribe(() => {
        renderCartDrawer();
        if (window.lucide) window.lucide.createIcons();
    });
}

// Setup Dietary Filter Buttons
function setupDietaryFilters() {
    const filterButtons = document.querySelectorAll('.diet-filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('bg-amber-600', 'text-white', 'border-amber-500');
                b.classList.add('bg-white', 'text-[#452b1b]', 'border-[#d8c8b6]');
            });
            btn.classList.add('bg-amber-600', 'text-white', 'border-amber-500');
            btn.classList.remove('bg-white', 'text-[#452b1b]', 'border-[#d8c8b6]');

            state.activeDietFilter = btn.dataset.filter;
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    });

    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderMenuItems();
            if (window.lucide) window.lucide.createIcons();
        });
    }
}

// Setup Table Reservation Form & Modal
function setupReservation() {
    const form = document.getElementById('reservation-form');
    const modal = document.getElementById('reservation-modal');
    const modalContent = document.getElementById('reservation-modal-details');
    const closeModalBtn = document.getElementById('close-reservation-modal');
    const whatsappModalBtn = document.getElementById('reservation-whatsapp-send-btn');

    // Set minimum date to today
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('res-name').value,
                phone: document.getElementById('res-phone').value,
                email: document.getElementById('res-email').value,
                guests: document.getElementById('res-guests').value,
                date: document.getElementById('res-date').value,
                time: document.getElementById('res-time').value,
                seating: document.getElementById('res-seating').value,
                occasion: document.getElementById('res-occasion').value,
                notes: document.getElementById('res-notes').value
            };

            const booking = reservationManager.createBooking(formData);

            if (modalContent) {
                modalContent.innerHTML = `
                    <div class="bg-[#2a1b12] p-4 rounded-xl border border-amber-800/40 text-left mb-5 space-y-2 text-sm">
                        <div class="flex justify-between items-center border-b border-[#472c1c] pb-2">
                            <span class="text-neutral-400">Booking Reference:</span>
                            <span class="font-mono text-base font-bold text-amber-400">${booking.id}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-neutral-400">Guest Name:</span>
                            <span class="font-semibold text-neutral-200">${booking.name}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-neutral-400">Date & Time:</span>
                            <span class="font-semibold text-neutral-200">${booking.date} at ${booking.time}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-neutral-400">Party Size:</span>
                            <span class="font-semibold text-neutral-200">${booking.guests} Guest(s)</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-neutral-400">Seating Preference:</span>
                            <span class="font-semibold text-amber-300">${booking.seating}</span>
                        </div>
                    </div>
                `;
            }

            if (whatsappModalBtn) {
                whatsappModalBtn.href = reservationManager.getWhatsAppBookingUrl(booking);
            }

            if (modal) {
                modal.classList.remove('hidden');
            }

            form.reset();
            showToast('Table reservation request created successfully!', 'bookmark');
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
}

// Render Gallery Grid
function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = GALLERY_IMAGES.map(img => `
        <div class="group relative rounded-2xl overflow-hidden h-64 bg-[#1f130b] border border-amber-900/30">
            <img 
                src="${img.url}" 
                alt="${img.title}" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span class="text-[10px] font-extrabold uppercase tracking-widest bg-amber-500 text-black px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
                    ${img.category}
                </span>
                <h4 class="font-serif-title text-base font-bold text-white leading-snug">
                    ${img.title}
                </h4>
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    container.innerHTML = TESTIMONIALS.map(t => `
        <div class="light-card p-6 rounded-2xl flex flex-col justify-between border border-[#e4d8c9] bg-white shadow-sm hover:shadow-md transition">
            <div>
                <div class="flex items-center gap-1 text-amber-500 mb-4">
                    ${Array(t.rating).fill(0).map(() => `<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>`).join('')}
                </div>
                <p class="text-[#4a392c] italic text-sm leading-relaxed mb-6">
                    "${t.text}"
                </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-[#f0e4d4]">
                <img src="${t.avatar}" alt="${t.author}" class="w-11 h-11 rounded-full object-cover border-2 border-amber-600/60" />
                <div>
                    <h5 class="font-bold text-sm text-[#1f130b]">${t.author}</h5>
                    <p class="text-xs text-amber-800 font-semibold">${t.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render FAQs Accordion
function renderFaqs() {
    const container = document.getElementById('faq-accordion');
    if (!container) return;

    container.innerHTML = FAQS.map((faq, index) => `
        <div class="border border-[#382214] rounded-xl overflow-hidden bg-[#20140c] transition">
            <button 
                class="faq-toggle-btn w-full px-5 py-4 text-left font-bold text-neutral-200 flex justify-between items-center hover:text-amber-400 transition"
                data-faq-index="${index}"
            >
                <span class="text-base font-serif-title">${faq.question}</span>
                <i data-lucide="chevron-down" class="w-5 h-5 text-amber-500 transition-transform duration-300 faq-icon"></i>
            </button>
            <div class="faq-content hidden px-5 pb-4 text-sm text-[#b8a692] leading-relaxed border-t border-[#311c10] pt-3">
                ${faq.answer}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.faq-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isHidden = content.classList.contains('hidden');

            // Close all
            container.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
            container.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

            if (isHidden) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });
}

// Setup Mobile Navigation Drawer
function setupMobileNav() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMobile = (open) => {
        state.isMobileMenuOpen = open;
        if (!mobileDrawer) return;

        if (open) {
            mobileDrawer.classList.remove('-translate-x-full');
            document.body.classList.add('overflow-hidden');
        } else {
            mobileDrawer.classList.add('-translate-x-full');
            document.body.classList.remove('overflow-hidden');
        }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobile(true));
    if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', () => toggleMobile(false));
    mobileLinks.forEach(l => l.addEventListener('click', () => toggleMobile(false)));
}

// Initialize Entire App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenuItems();
    renderCartDrawer();
    setupCartDrawer();
    setupDietaryFilters();
    setupReservation();
    renderGallery();
    renderTestimonials();
    renderFaqs();
    setupMobileNav();

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
