"use client";

import { useState, useMemo } from "react";
import { Home, Info, PenTool, Plus, Search } from "lucide-react";
import Link from "next/link";
import Fuse from "fuse.js"; // fuzzy spelling search

// --- 1. MOCK DATA (This simulates the database items an admin would add) ---
const INITIAL_ITEMS = [
  { id: 1, name: "Red Water Bottle", location: "Gym", color: "bg-red-200" },
  { id: 2, name: "Calculus Textbook", location: "Room 304", color: "bg-blue-200" },
  { id: 3, name: "Black Hoodie", location: "Cafeteria", color: "bg-gray-800" },
  { id: 4, name: "Airpods Case", location: "Library", color: "bg-white" },
  { id: 5, name: "Blue Notebook", location: "Quad", color: "bg-blue-400" },
  { id: 6, name: "Lunch Box", location: "Lost & Found", color: "bg-green-200" },
  { id: 7, name: "Pencil Case", location: "Room 102", color: "bg-yellow-200" },
  { id: 8, name: "Jean Jacket", location: "Gym", color: "bg-blue-600" },
  { id: 9, name: "Umbrella", location: "Office", color: "bg-purple-200" },
  { id: 10, name: "Soccer Ball", location: "Field", color: "bg-gray-200" },
  { id: 11, name: "Lab Goggles", location: "Room 405", color: "bg-transparent border-2" },
  { id: 12, name: "Keys", location: "Office", color: "bg-yellow-600" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  // --- 2. SMART SEARCH LOGIC ---
  const filteredItems = useMemo(() => {
    if (!query) return INITIAL_ITEMS;

    const fuse = new Fuse(INITIAL_ITEMS, {
      keys: ["name", "location"], // Search by name OR location
      threshold: 0.4, // 0.0 = perfect match, 1.0 = match anything. 0.4 allows typos.
    });

    return fuse.search(query).map((result) => result.item);
  }, [query]);

  return (
    <div className="min-h-screen bg-[#AEC0F3] flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <header className="px-6 py-4 flex items-center justify-between">
        {/* Left Icons */}
        <div className="flex gap-6 text-black">
          <Link href="/">
            <Home className="w-8 h-8 cursor-pointer hover:text-indigo-700 transition" />
          </Link>
          <Info className="w-8 h-8 cursor-pointer hover:text-indigo-700 transition" />
          <PenTool className="w-8 h-8 cursor-pointer hover:text-indigo-700 transition" />
        </div>
        
        {/* Right Title */}
        <h1 className="text-3xl font-extrabold text-[#1E1B4B]">ReunItems</h1>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 px-6 pb-6 max-w-6xl mx-auto w-full flex flex-col">
        
        {/* SEARCH & ADD SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-6">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-3/5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for your item (e.g. 'botle')"
              className="w-full p-4 pl-6 rounded-2xl text-2xl text-gray-600 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 placeholder:text-gray-300 bg-white"
            />
          </div>

          {/* Add Item Button */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#1E1B4B] leading-tight text-right hidden md:block">
              Add<br />Item
            </span>
            <button className="bg-[#1E1B4B] text-white rounded-full p-1 shadow-xl hover:scale-110 transition-transform cursor-pointer">
              <Plus strokeWidth={3} className="w-14 h-14" />
            </button>
            <span className="text-xl font-bold text-[#1E1B4B] md:hidden">
              Add Item
            </span>
          </div>
        </div>

        {/* --- SCROLLABLE GRID --- */}
        <div className="flex-1 overflow-y-auto">
            {/* Desktop: grid-cols-4 (4 items per row)
                Mobile: grid-cols-2 (2 items per row) 
            */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10">
            {filteredItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 group">
                {/* Image Placeholder (The Blue Square) */}
                <div className={`aspect-square w-full rounded-[2rem] shadow-md transition-transform group-hover:-translate-y-1 overflow-hidden bg-white flex items-center justify-center relative`}>
                    {/* Simulated Image Content */}
                    <div className={`w-3/4 h-3/4 rounded-xl ${item.color} opacity-80`} />
                    
                    {/* Caption Overlay (Optional style) */}
                    <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                        <span className="bg-white/80 px-2 py-1 rounded-lg text-xs font-bold text-gray-700">
                            {item.location}
                        </span>
                    </div>
                </div>
                
                {/* Caption Below */}
                <p className="text-center font-bold text-[#1E1B4B] text-lg">
                    {item.name}
                </p>
                </div>
            ))}
            
            {/* Show message if no results */}
            {filteredItems.length === 0 && (
                <div className="col-span-full text-center py-20 text-indigo-900/50 text-xl font-bold">
                    No items found matching "{query}"
                </div>
            )}
            </div>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1E1B4B] text-white p-4 text-xs font-medium flex justify-between items-center mt-auto">
        <span>2025 Branham High School . reunitems@gmail.com</span>
        <span>XXX-XXX-XXXX</span>
      </footer>
    </div>
  );
}
