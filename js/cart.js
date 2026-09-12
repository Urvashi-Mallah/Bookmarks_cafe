// Cart / Taste Tray Management for The Bookmark Cafe
// Direct WhatsApp Ordering without complex login

import { MENU_ITEMS, CAFE_INFO } from './data.js';

class CartManager {
    constructor() {
        this.items = this.loadCart();
        this.listeners = [];
    }

    loadCart() {
        try {
            const saved = localStorage.getItem('bookmark_cafe_tray');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Error loading cart from storage', e);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('bookmark_cafe_tray', JSON.stringify(this.items));
        } catch (e) {
            console.error('Error saving cart to storage', e);
        }
        this.notify();
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(fn => fn(this.items, this.getSummary()));
    }

    addItem(itemId) {
        const menuItem = MENU_ITEMS.find(i => i.id === itemId);
        if (!menuItem) return;

        const existing = this.items.find(i => i.id === itemId);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({
                id: menuItem.id,
                name: menuItem.name,
                price: menuItem.price,
                isVeg: menuItem.isVeg,
                image: menuItem.image,
                quantity: 1
            });
        }
        this.saveCart();
    }

    removeItem(itemId) {
        this.items = this.items.filter(i => i.id !== itemId);
        this.saveCart();
    }

    changeQuantity(itemId, delta) {
        const item = this.items.find(i => i.id === itemId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeItem(itemId);
        } else {
            this.saveCart();
        }
    }

    clear() {
        this.items = [];
        this.saveCart();
    }

    getSummary() {
        const totalCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { totalCount, subtotal };
    }

    getWhatsAppOrderUrl(orderType = 'Dine-in Pre-order', notes = '') {
        const { subtotal } = this.getSummary();
        if (this.items.length === 0) return null;

        let message = `*✨ Order Inquiry - The Bookmark Cafe ✨*\n`;
        message += `📍 Kalyan West | Customer Pre-Order\n`;
        message += `───────────────────\n`;
        message += `*Type:* ${orderType}\n\n`;
        message += `*Selected Items:*\n`;

        this.items.forEach(item => {
            const vegIcon = item.isVeg ? '🟢' : '🔴';
            message += `• ${vegIcon} ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        });

        message += `\n───────────────────\n`;
        message += `*Estimated Subtotal:* ₹${subtotal}\n`;

        if (notes && notes.trim()) {
            message += `*Special Instructions:* ${notes.trim()}\n`;
        }

        message += `\nPlease confirm availability and prep time. Thank you! 📖☕`;

        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodedMessage}`;
    }
}

export const cart = new CartManager();
