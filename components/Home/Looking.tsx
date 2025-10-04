import React from "react";
import {
  Home,
  Building2,
  Briefcase,
  Key,
  Calendar,
  Sparkles,
} from "lucide-react";

const categories = [
  { label: "Home", icon: Home },
  { label: "Shortlets", icon: Building2 },
  { label: "Commercial", icon: Briefcase },
  { label: "Retail Shops", icon: Key },
  { label: "Halls", icon: Calendar },
  { label: "Open space", icon: Sparkles },
];

const Looking = () => {
  return (
    <div className="bg-[#F7F5FD]" id="looking">
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl text-center font-semibold tracking-tight">
          Are you looking for:
        </h2>
        <p className="text-center">We have got you covered</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="group gap-3 rounded-xl p-4 md:p-5 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              aria-label={label}
            >
              <div className="inline-flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 p-2">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="font-medium">{label}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Looking;
