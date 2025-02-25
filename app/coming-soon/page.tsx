"use client";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A1F44] text-white text-center px-6">
      <h1 className="text-4xl font-bold text-[#FFD700]">🚧 Coming Soon</h1>
      <p className="text-lg mt-4 max-w-2xl">
        This feature or page is currently under development and will be available soon. 
        Stay tuned for updates!
      </p>

      <p className="text-md mt-2 text-gray-300">
        ⏳ <span className="text-[#FFD700]">Upon bid approval</span>, this section will be updated accordingly.
      </p>

      <Link href="/" className="mt-6 px-6 py-3 bg-[#FFD700] text-[#0A1F44] rounded-md font-semibold hover:bg-[#E6C300] transition">
        Return to Home
      </Link>
    </div>
  );
}
