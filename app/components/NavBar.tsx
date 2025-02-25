"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // ✅ Handle Department Navigation
  const handleDepartmentClick = (path: string) => {
    setSidebarOpen(false); // Close sidebar
    router.push(path); // Navigate properly
  };

  return (
    <nav className="bg-[#0A1F44] text-white fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/NavBar-image/NavBar Logo.svg"
            alt="Fayette County Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-2xl font-bold text-[#FFD700]">Fayette County</span>
        </Link>

        {/* 🔹 Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link href="/" className="hover:text-[#FFD700]">Home</Link></li>

          {/* 🔹 Sidebar Trigger (Departments) */}
          <li>
            <button
              onClick={() => setSidebarOpen(true)}
              className="hover:text-[#FFD700] px-4 py-2 flex items-center space-x-2"
            >
              <span>Departments</span> <ChevronRight size={16} />
            </button>
          </li>

          {/* ✅ Other Pages */}
          {[
            { name: "Municipalities", path: "/coming-soon" },
            { name: "Meetings", path: "/coming-soon" },
            { name: "Social", path: "/coming-soon" },
            { name: "Events", path: "/coming-soon" },
            { name: "Forms", path: "/coming-soon" },
            { name: "Recreation", path: "/coming-soon" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link href={item.path} className="hover:text-[#FFD700] px-4 py-2">
                {item.name}
              </Link>
            </li>
          ))}

          <li><Link href="/services" className="hover:text-[#FFD700]">Services</Link></li>
          <li><Link href="/news" className="hover:text-[#FFD700]">Latest News</Link></li>
          <li><Link href="/resources" className="hover:text-[#FFD700]">Resources</Link></li>
          <li><Link href="/contact" className="hover:text-[#FFD700]">Contact</Link></li>
        </ul>
      </div>

      {/* 🔹 Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Panel (Departments Side Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#0A1F44] text-white shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* 🔹 Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-[#FFD700]">
          <h2 className="text-xl font-bold text-[#FFD700]">Departments</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={28} className="text-white hover:text-[#FFD700]" />
          </button>
        </div>

        {/* 🔹 Sidebar Links */}
        <ul className="mt-4 space-y-2 px-4">
          {/* ✅ Departments Link at the Top */}
          <li>
            <Link
              href="/departments"
              className="block py-2 px-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded hover:bg-white hover:text-[#0A1F44] transition"
            >
              Departments (Main Page)
            </Link>
          </li>

          {/* ✅ Other Departments */}
          {[
            "Assessor",
            "Building Department",
            "Circuit Clerk",
            "County Clerk",
            "Code Enforcement Agency",
            "County Commission",
            "Departments Directory",
            "Farmland Protection Board",
            "Prosecuting Attorney",
            "Tax Department",
            "Urban Renewal Authority",
            "Zoning Department",
          ].map((dept, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleDepartmentClick("/coming-soon")}
                className="w-full text-left block text-[#FFD700] hover:text-white py-2"
              >
                {dept}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1F44]  p-4 relative h-auto">
          <Image
            src="/NavBar-image/NavBar Logo.svg"
            alt="Fayette County Logo"
            width={180}
            height={180}
            className="absolute inset-0 mx-auto opacity-10"
          />

          <ul className="relative space-y-3">
            <li><Link href="/" className="block text-white hover:text-[#FFD700]" onClick={() => setIsOpen(false)}>Home</Link></li>

            {/* 🔹 Sidebar Trigger for Mobile */}
            <li>
              <button 
                onClick={() => { setSidebarOpen(true); setIsOpen(false); }} 
                className="block text-white hover:text-[#FFD700] py-2 flex items-center space-x-2"
              >
                <span>Departments</span> <ChevronRight size={16} />
              </button>
            </li>

            {/* ✅ Other Mobile Links */}
            {[
              { name: "Municipalities", path: "/coming-soon" },
              { name: "Meetings", path: "/coming-soon" },
              { name: "Social", path: "/coming-soon" },
              { name: "Events", path: "/coming-soon" },
              { name: "Forms", path: "/coming-soon" },
              { name: "Recreation", path: "/coming-soon" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="block text-white hover:text-[#FFD700] py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li><Link href="/services" className="block text-white hover:text-[#FFD700]" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/news" className="block text-white hover:text-[#FFD700]" onClick={() => setIsOpen(false)}>Latest News</Link></li>
            <li><Link href="/resources" className="block text-white hover:text-[#FFD700]" onClick={() => setIsOpen(false)}>Resources</Link></li>
            <li><Link href="/contact" className="block text-white hover:text-[#FFD700]" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
