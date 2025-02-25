"use client";
import Link from "next/link";

const departments = [
  { name: "Directory", link: "/coming-soon" },
  { name: "Courthouse Directory 2024", link: "/coming-soon" },
  { name: "Assessor", link: "/coming-soon" },
  { name: "Building Safety Department", link: "/coming-soon" },
  { name: "Beautification Committee", link: "/coming-soon" },
  { name: "Building Inspector", link: "/coming-soon" },
  { name: "Circuit Clerk", link: "/coming-soon" },
  { name: "Circuit Court", link: "/coming-soon" },
  { name: "County Clerk", link: "/coming-soon" },
  { name: "Records Room", link: "/coming-soon" },
  { name: "Vital Statistics", link: "/coming-soon" },
  { name: "Voter Registration", link: "/coming-soon" },
  { name: "County Commission", link: "/coming-soon" },
  { name: "Code Enforcement Agency", link: "/coming-soon" },
  { name: "Dog Warden", link: "/coming-soon" },
  { name: "New River Humane Society", link: "/coming-soon" },
  { name: "E-911 Center", link: "/coming-soon" },
  { name: "Address Verification", link: "/coming-soon" },
  { name: "Farmland Protection Board", link: "/coming-soon" },
  { name: "Fayette County Soldiers & Sailors Memorial Building", link: "/coming-soon" },
  { name: "Magistrate", link: "/coming-soon" },
  { name: "Tickets", link: "/coming-soon" },
  { name: "Parks and Recreation", link: "/coming-soon" },
  { name: "Probation", link: "/coming-soon" },
  { name: "Prosecuting Attorney", link: "/coming-soon" },
  { name: "Solid Waste Authority & Litter Control Officer", link: "/coming-soon" },
  { name: "Litter Control Tire Collection Days", link: "/coming-soon" },
  { name: "Tax Department", link: "/coming-soon" },
  { name: "Urban Renewal Authority", link: "/coming-soon" },
  { name: "WVU Extension", link: "/coming-soon" },
  { name: "Zoning Department", link: "/coming-soon" },
  { name: "Board of Zoning Appeals", link: "/coming-soon" },
  { name: "Planning Commission", link: "/coming-soon" },
  { name: "Zoning Officer", link: "/coming-soon" },
];

export default function DepartmentsPage() {
  return (
    <div className="bg-background text-foreground py-12 px-4 sm:px-6 lg:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0E3869] text-center mb-6">🏛️ Departments & Agencies</h1>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-[#0E3869]">{dept.name}</h2>
              <Link href={dept.link} className="text-blue-600 hover:underline mt-2 block">
                View More
              </Link>
            </div>
          ))}
        </div>

        {/* 🔹 Footer Info */}
        <div className="mt-12 text-center text-gray-600">
          <p>If you cant find the department listing you are looking for, please call the Fayette County Courthouse main line at <span className="font-bold">304-574-1200</span>.</p>
        </div>
      </div>
    </div>
  );
}
