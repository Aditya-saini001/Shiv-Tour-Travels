'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Car, Calendar, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const popularFares: Record<string, Record<string, number>> = {
  'Dehradun': {
    'Delhi': 4000,
    'Mussoorie': 2000,
    'Jolly Grant Airport': 899,
    'Rishikesh': 2000,
    'Haridwar': 2000,
    'Saharanpur': 1899,
    'Noida': 3899,
    'Chandigarh': 3500,
    'Char Dham Yatra': 38000,
  },
  'Delhi': {
    'Dehradun': 4000,
    'Mussoorie': 4999,
    'Rishikesh': 4500,
    'Haridwar': 4000,
  },
  'Jolly Grant Airport': {
    'Dehradun': 899,
    'Rishikesh': 1200,
    'Haridwar': 1500,
    'Mussoorie': 2500,
  },
  'Mussoorie': {
    'Dehradun': 2000,
    'Delhi': 4999,
    'Jolly Grant Airport': 2500,
  },
};

export default function QuickBookingBar() {
  const [pickup, setPickup] = useState('Dehradun');
  const [drop, setDrop] = useState('Delhi');
  const [carType, setCarType] = useState('Sedan (Dzire / Aura)');
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  // Calculate price estimate
  let basePrice = 2500;
  if (popularFares[pickup] && popularFares[pickup][drop]) {
    basePrice = popularFares[pickup][drop];
  } else if (popularFares[drop] && popularFares[drop][pickup]) {
    basePrice = popularFares[drop][pickup];
  }

  // Adjust for car type
  let carMultiplier = 1;
  if (carType.includes('Ertiga')) carMultiplier = 1.35;
  if (carType.includes('Innova Crysta')) carMultiplier = 1.85;
  if (carType.includes('Tempo Traveller')) carMultiplier = 2.4;

  const estimatedFare = Math.round(basePrice * carMultiplier * (tripType === 'roundtrip' ? 1.75 : 1));

  const whatsappMessage = `*Taxi Booking Request - Shiv Tour & Travels*%0A%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}%0A*Trip Type:* ${
    tripType === 'oneway' ? 'One Way' : 'Round Trip'
  }%0A*Vehicle:* ${carType}%0A*Date:* ${date}%0A*Estimated Fare:* ₹${estimatedFare.toLocaleString(
    'en-IN'
  )}%0A%0APlease confirm availability!`;

  return (
    <section id="calculator" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16">
      <div className="bg-darkbg-850 border border-taxi-500/30 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 backdrop-blur-xl gold-glow-sm">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-taxi-400" />
              Quick Fare Estimate & Instant Booking
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Fixed rate quotes with zero hidden charges and instant WhatsApp confirmation
            </p>
          </div>

          {/* One Way / Round Trip Toggle */}
          <div className="flex items-center bg-darkbg-950 p-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setTripType('oneway')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'oneway'
                  ? 'bg-taxi-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              One Way
            </button>
            <button
              type="button"
              onClick={() => setTripType('roundtrip')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'roundtrip'
                  ? 'bg-taxi-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Round Trip
            </button>
          </div>
        </div>

        {/* Input Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {/* Pickup City */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-taxi-400" />
              Pickup City / Location
            </label>
            <select
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
            >
              <option value="Dehradun">Dehradun</option>
              <option value="Jolly Grant Airport">Jolly Grant Airport</option>
              <option value="Delhi">Delhi / NCR</option>
              <option value="Mussoorie">Mussoorie</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Chandigarh">Chandigarh</option>
            </select>
          </div>

          {/* Drop City */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              Drop Destination
            </label>
            <select
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
            >
              <option value="Delhi">Delhi / NCR</option>
              <option value="Mussoorie">Mussoorie</option>
              <option value="Jolly Grant Airport">Jolly Grant Airport</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Saharanpur">Saharanpur</option>
              <option value="Noida">Noida / Greater Noida</option>
              <option value="Char Dham Yatra">Char Dham Yatra Full Circuit</option>
              <option value="Auli">Auli / Joshimath</option>
              <option value="Chopta">Chopta / Tungnath</option>
              <option value="Chandigarh">Chandigarh</option>
            </select>
          </div>

          {/* Vehicle Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-taxi-400" />
              Select Cab Model
            </label>
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
            >
              <option value="Sedan (Dzire / Aura)">Sedan (Dzire / Aura - 4 Seater)</option>
              <option value="SUV (Ertiga)">SUV (Ertiga - 6 Seater)</option>
              <option value="Premium SUV (Innova Crysta)">Innova Crysta (7 Seater)</option>
              <option value="Tempo Traveller (12 Seater)">Tempo Traveller (12/17 Seater)</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-taxi-400" />
              Journey Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
            />
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-darkbg-950/70 p-4 sm:p-5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block">
                Estimated Fixed Fare:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-taxi-400 font-mono">
                  ₹{estimatedFare.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400">
                  ({tripType === 'oneway' ? 'One Way Pick & Drop' : 'Round Trip'})
                </span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Toll & Fuel Included Estimates</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/917819909454?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-600/30 hover:scale-105"
            >
              <span>Book On WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+917819909454"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-taxi-500/20 hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call +91 7819909454</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
