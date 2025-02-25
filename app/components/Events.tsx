"use client";
import Link from "next/link";

const events = [
  {
    title: "📅 2019 Park Calendar of Events",
    link: "https://fayettecounty.wv.gov/commission/Documents/2019%20Park%20Calendar%20of%20Events%20(1).pdf",
    type: "pdf",
  },
  {
    title: "🎣 Fayette County Trout Derby",
    link: "/coming-soon",
    type: "coming-soon",
  },
  {
    title: "🏷️ Fayette County Commission Public Surplus Auction",
    link: "https://www.publicsurplus.com/sms/fayetteco,wv/list/current?orgid=695465",
    type: "external",
  },
  {
    title: "🌉 Bridge Day",
    link: "https://officialbridgeday.com/",
    type: "external",
  },
  {
    title: "🐦 Birding Festival",
    link: "https://www.facebook.com/NewRiverBirdingNatureFestival",
    type: "facebook",
  },
  {
    title: "🌿 Birding & Nature Center",
    link: "https://www.facebook.com/NewRiverBirdingNatureFestival",
    type: "facebook",
  },
  {
    title: "🎄 Lacy's Lights",
    link: "https://fayettecounty.wv.gov/commission/Documents/PRESS%20RELEASE%20FC%20PARK%20LACY%27S%20LIGHT%202015.pdf",
    type: "pdf",
  },
  {
    title: "🏛️ Leadership Fayette County",
    link: "https://www.facebook.com/LeadershipFayetteCounty",
    type: "facebook",
  },
  {
    title: "📆 County Events Schedule",
    link: "https://newrivergorgecvb.com/events/",
    type: "external",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-background text-foreground py-12 px-4 sm:px-6 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0E3869] text-center mb-8">🎭 Upcoming Events</h1>

        {/* 📅 Events List */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-[#0E3869]">{event.title}</h2>

              {/* 🛠️ Dynamic Link Handling */}
              <Link
                href={event.link}
                target={event.type !== "coming-soon" ? "_blank" : ""}
                className="inline-block mt-2 text-[#FFD700] hover:text-[#0A1F44] font-semibold transition"
              >
                {event.type === "pdf" ? "📄 View PDF" : event.type === "facebook" ? "📘 View on Facebook" : "🔗 Visit Page"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
