"use client";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar";
import { SearchBar } from "@/components/search-bar";
import { useState, useEffect } from "react";
import { Footer } from "@/components/footer";
import { Banner } from "@/components/banner";

export default function Layout({ children }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <html lang="en">
      <body className={`min-h-screen bg-gray-100 font-jaldi relative`}>
        {/* Fixed overlay effect */}
        {searchActive && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-blur-md z-40 transition-opacity duration-500"></div>
        )}
        
        {/* Fixed Search Bar */}
        <SearchBar setSearchActive={setSearchActive} />

        {/* Light Green Banner Above Navbar */}
        <div className="mt-[60px]">
          <Banner />
        </div>

        {/* Fixed Navbar Below Banner */}
        <div className="mt-[-80px]">
          <Navbar />
        </div>

        {/* Pass `searchActive` state to children */}
        <main className={`container mx-auto p-4 relative z-50 ${searchActive ? 'blur-md' : 'blur-0'} transition-all duration-300`}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
