"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Submenu = () => {
  const [recreationOpen, setRecreationOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setRecreationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={submenuRef} className="bg-[#0D1B2A] text-white shadow-md sticky top-[70px] z-[10001]">
      <div className="relative w-full overflow-x-auto flex items-center px-4 py-2 space-x-6 z-[10001] scrollbar-hide">
        {/* 🔹 Recreation (Dropdown) */}
        <div className="relative flex-shrink-0">
          <button 
            onClick={() => setRecreationOpen(!recreationOpen)} 
            className="text-[#FFD700] hover:text-white px-4 py-2 border-b-2 border-transparent hover:border-white flex items-center"
          >
            Recreation <ChevronDown size={16} className={`ml-1 transition-transform ${recreationOpen ? "rotate-180" : ""}`} />
          </button>
          {recreationOpen && (
            <div className="absolute left-0 top-full bg-[#0D1B2A] shadow-lg rounded-md p-2 w-auto z-[10002] border border-[#FFD700]">
              <Link href="/recreation/parks" className="block text-[#FFD700] hover:text-white py-2 px-4">Parks</Link>
            </div>
          )}
        </div>

        {/* 🔹 Municipalities (Direct Link) */}
        <Link href="/municipalities" className="text-[#FFD700] hover:text-white px-4 py-2 border-b-2 border-transparent hover:border-white flex-shrink-0">
          Municipalities
        </Link>

        {/* 🔹 Social (Direct Link) */}
        <Link href="/social" className="text-[#FFD700] hover:text-white px-4 py-2 border-b-2 border-transparent hover:border-white flex-shrink-0">
          Social
        </Link>

        {/* 🔹 Events (Direct Link) */}
        <Link href="/events" className="text-[#FFD700] hover:text-white px-4 py-2 border-b-2 border-transparent hover:border-white flex-shrink-0">
          Events
        </Link>
      </div>

      {/* ✅ Hide Scrollbar but Allow Scrolling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        /* 🛠️ Fix for Dropdown Going Behind */
        .relative, .absolute {
          position: relative !important;
          z-index: 10002 !important;
        }
      `}</style>
    </div>
  );
};

export default Submenu;
