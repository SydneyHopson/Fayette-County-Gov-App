import Hero from "./components/Hero";
import Gallery from "./components/Gallery"; // ✅ Import the gallery

export default function Home() {
  return (
    <div className="bg-background text-foreground">
     
      {/* ✅ Hero Section */}
      <Hero />

      {/* 🔹 Business Hours & Closures */}
      <section className="py-12 px-4 sm:px-6 lg:py-16 text-center">
        <h2 className="text-2xl font-bold text-[#0E3869]">Normal Business Hours</h2>
        <p className="text-lg mt-2">8:00 A.M. - 4:00 P.M. | Monday - Friday</p>

        <h3 className="text-xl font-bold mt-8 text-[#0E3869]">2025 Courthouse Closures</h3>
        <ul className="mt-4 text-lg">
          <li>📅 <strong>Memorial Day:</strong> Monday, May 26</li>
          <li>📅 <strong>West Virginia Day:</strong> Friday, June 20</li>
          <li>📅 <strong>Independence Day:</strong> Friday, July 4</li>
          <li>📅 <strong>Labor Day:</strong> Monday, September 1</li>
          <li>📅 <strong>Columbus Day:</strong> Monday, October 13</li>
          <li>📅 <strong>Veterans Day:</strong> Tuesday, November 11</li>
          <li>📅 <strong>Thanksgiving:</strong> Thursday & Friday, November 27-28</li>
          <li>📅 <strong>Christmas Day:</strong> Thursday, December 25</li>
        </ul>
      </section>

      {/* 🔹 Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0E3869] text-center">Quick Access</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* 🏛 "I Want To" Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">I Want To</h3>
              <ul className="mt-2 text-lg">
                <li>💳 <a href="http://fayette.softwaresystems.com/index.html" target="_blank" className="text-blue-600 hover:underline">Pay My Taxes</a></li>
                <li>📍 <a href="https://fayette911wv.org/index.php/address-verification/" target="_blank" className="text-blue-600 hover:underline">Verify My 911 Address</a></li>
                <li>🏚 <a href="https://fayettecountywv.portal.iworq.net/FAYETTECOUNTY/new-case/400/4041" target="_blank" className="text-blue-600 hover:underline">Report a Vacant House</a></li>
                <li>♻️ <a href="https://dep.wv.gov/environmental-advocate/reap/tires/Pages/TireCollectionEvents.aspx" target="_blank" className="text-blue-600 hover:underline">Recycle Tires</a></li>
                <li>🏕 <a href="/coming-soon" className="text-blue-600 hover:underline">Rent a Shelter at the Park</a></li>
              </ul>
            </div>

            {/* 📄 "Obtain" Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Obtain</h3>
              <ul className="mt-2 text-lg">
                <li>📝 <a href="#" className="text-blue-600 hover:underline">Birth Certificate</a></li>
                <li>💍 <a href="#" className="text-blue-600 hover:underline">Marriage License</a></li>
                <li>🏗 <a href="https://fayettecountywv.portal.iworq.net/portalhome/fayettecountywv" target="_blank" className="text-blue-600 hover:underline">Permits</a></li>
                <li>📜 <a href="/coming-soon" className="text-blue-600 hover:underline">Past Tax Records</a></li>
              </ul>
            </div>

            {/* 🔍 "Check" Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Check</h3>
              <ul className="mt-2 text-lg">
                <li>🗳 <a href="https://results.enr.clarityelections.com/WV/Fayette/112684/web.285569/#/summary" target="_blank" className="text-blue-600 hover:underline">Election Results</a></li>
                <li>🚦 <a href="https://results.enr.clarityelections.com/WV/Fayette/112684/web.285569/#/summary" target="_blank" className="text-blue-600 hover:underline">Road Conditions</a></li>
                <li>🏫 <a href="https://wveis.k12.wv.us/closings/" target="_blank" className="text-blue-600 hover:underline">School Closings</a></li>
                <li>📋 <a href="https://apps.sos.wv.gov/Elections/voter/amiregisteredtovote" target="_blank" className="text-blue-600 hover:underline">Voter Registration Status</a></li>
                <li>📰 <a href="/news" className="text-blue-600 hover:underline">Latest News</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Places to Visit */}
      <section className="py-12 px-4 sm:px-6 lg:py-16 text-center">
        <h2 className="text-2xl font-bold text-[#0E3869]">Explore Fayette County</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">🏞 <a href="https://wvstateparks.com/park/babcock-state-park/" target="_blank" className="text-blue-600 hover:underline">Glade Creek Grist Mill</a></h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">🌉 <a href="https://www.nps.gov/neri/planyourvisit/nrgbridge.htm" target="_blank" className="text-blue-600 hover:underline">New River Gorge Bridge</a></h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">🏕 <a href="https://newrivergorgecvb.com/company/fayette-county-park-2/" target="_blank" className="text-blue-600 hover:underline">Fayette County Park</a></h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">🚣 <a href="https://newrivergorgecvb.com/" target="_blank" className="text-blue-600 hover:underline">New River Gorge</a></h3>
          </div>
        </div>
      </section>

      {/* ✅ 🔥 Gallery Component (NEW) */}
      <Gallery />
    </div>
  );
}
