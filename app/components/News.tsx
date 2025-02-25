"use client";
import { useState } from "react";
import Link from "next/link";

const newsArticles = [
  { date: "11/25", title: "Protecting Pets During Harsh Winter Weather", link: "/coming-soon" },
  { date: "10/30", title: "Keep Fayette County Beautiful", link: "/coming-soon" },
  { date: "10/24", title: "An Expedition to Mount Carbon", link: "/coming-soon" },
  { date: "10/17", title: "Fayetteville, WV Topped Top 10 Mountain Towns", link: "/coming-soon" },
  { date: "10/15", title: "Solid Waste Authority Siting Plan Update Finalized", link: "/coming-soon" },
  { date: "09/26", title: "Voters Registration - Election Day is Near!", link: "/coming-soon" },
  { date: "09/25", title: "New River Birding and Nature Festival - All Heart", link: "/coming-soon" },
  { date: "08/04", title: "Jail and Law Enforcement Museum Opens", link: "/coming-soon" },
  { date: "09/13", title: "History-Rich Nuttallburg Tells the Story of WV Coal Mining", link: "/coming-soon" },
  { date: "09/02", title: "The Fayette Tribune - Local News & Community Updates", link: "/coming-soon" },
  { date: "09/01", title: "The Register-Herald - 7-Day Newspaper from Beckley", link: "/coming-soon" },
];

export default function NewsPage() {
  const [search, setSearch] = useState("");

  // Filter news based on search input
  const filteredNews = newsArticles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-background text-foreground py-12 px-4 sm:px-6 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0E3869] text-center mb-6">📰 Latest News</h1>

        {/* 🔍 Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#0E3869]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 📝 News List */}
        <div className="space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((article, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-[#0E3869]">
                  {article.date} - {article.title}
                </h2>
                <Link href={article.link} className="text-blue-600 hover:underline mt-2 block">
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-600 text-center">No news articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
