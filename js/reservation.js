// Table & Reading Nook Reservation System for The Bookmark Cafe

import { CAFE_INFO } from './data.js';

class ReservationManager {
    constructor() {
        this.recentBookings = this.loadBookings();
    }

    loadBookings() {
        try {
            const saved = localStorage.getItem('bookmark_cafe_bookings');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    saveBooking(booking) {
        this.recentBookings.unshift(booking);
        if (this.recentBookings.length > 5) {
            this.recentBookings.pop();
        }
        try {
            localStorage.setItem('bookmark_cafe_bookings', JSON.stringify(this.recentBookings));
        } catch (e) {
            console.error('Error saving booking', e);
        }
    }

    createBooking(formData) {
        const id = 'BK-' + Math.floor(1000 + Math.random() * 9000);
        const booking = {
            id,
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email ? formData.email.trim() : '',
            guests: formData.guests,
            date: formData.date,
            time: formData.time,
            seating: formData.seating,
            occasion: formData.occasion,
            notes: formData.notes ? formData.notes.trim() : '',
            createdAt: new Date().toISOString()
        };

        this.saveBooking(booking);
        return booking;
    }

    getWhatsAppBookingUrl(booking) {
        let message = `*📚 Table Reservation Request - The Bookmark Cafe ☕*\n`;
        message += `───────────────────\n`;
        message += `*Booking Ref:* ${booking.id}\n`;
        message += `*Name:* ${booking.name}\n`;
        message += `*Phone:* ${booking.phone}\n`;
        message += `*Guests:* ${booking.guests} Person(s)\n`;
        message += `*Date:* ${booking.date}\n`;
        message += `*Time:* ${booking.time}\n`;
        message += `*Seating:* ${booking.seating}\n`;
        if (booking.occasion && booking.occasion !== 'None') {
            message += `*Occasion:* ${booking.occasion}\n`;
        }
        if (booking.notes) {
            message += `*Special Request:* ${booking.notes}\n`;
        }
        message += `───────────────────\n`;
        message += `Please confirm my table reservation. Looking forward to visiting! 📖`;

        return `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
}

export const reservationManager = new ReservationManager();
