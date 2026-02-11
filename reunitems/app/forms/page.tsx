import { Home, Info, PenTool } from "lucide-react";
import Link from "next/link";

export default function FormsPage() {
  return (
    // Main container with light blue background
    <div className="min-h-screen bg-[#AEC0F3] flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <header className="px-6 py-4 flex items-center justify-between bg-[#8B9AF0]">
        {/* Left Icons */}
        <div className="flex gap-6 text-black">
          <Link href="/">
            <Home className="w-8 h-8 cursor-pointer hover:text-white transition" />
          </Link>
          <Link href="/search">
             <Info className="w-8 h-8 cursor-pointer hover:text-white transition" />
          </Link>
          <PenTool className="w-8 h-8 cursor-pointer text-white" /> {/* Active Page Highlight */}
        </div>
        
        {/* Right Title */}
        <h1 className="text-2xl font-extrabold text-[#1E1B4B]">ReunItems</h1>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full flex flex-col items-center gap-8">
        
        {/* "Forms" Badge */}
        <div className="bg-[#EAEFFF] px-12 py-3 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-[#1E1B4B]">Forms</h2>
        </div>

        {/* --- OPTION 1: REPORTING --- */}
        <Link href="https://forms.gle/5dqw9HvGC3DxKDAK7" className="w-full">
            <div className="bg-[#EAEFFF] w-full h-48 rounded-3xl flex items-center justify-center shadow-md hover:scale-105 hover:shadow-xl transition-all cursor-pointer group">
            <span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-[#1E1B4B] transition-colors text-center px-4">
                Reporting a missing item
            </span>
            </div>
        </Link>

        {/* --- OPTION 2: CLAIMING --- */}
        <Link href="https://forms.gle/msRw7Feuhai6h56T8" className="w-full">
            <div className="bg-[#EAEFFF] w-full h-48 rounded-3xl flex items-center justify-center shadow-md hover:scale-105 hover:shadow-xl transition-all cursor-pointer group">
            <span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-[#1E1B4B] transition-colors text-center px-4">
                Claiming your item
            </span>
            </div>
        </Link>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1E1B4B] text-white p-4 text-xs font-medium flex justify-between items-center mt-auto">
        <span>2025 Branham High School . reunitems@gmail.com</span>
        <span>XXX-XXX-XXXX</span>
      </footer>
    </div>
  );
}