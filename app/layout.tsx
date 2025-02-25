import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";






export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <NavBar />
        
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
