"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

export function SearchBar({ setSearchActive }) {
  const [query, setQuery] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md h-[60px] flex items-center z-[110] px-4">
      {/* Company Logo */}
      <Image
        src="/images/EVERGREEN.png"  // Update with the actual logo path
        alt="EverGreen Sustainability"
        width={176}  // Adjust width as needed
        height={24} // Sets default height
        className="max-h-[24px] w-auto object-contain"
        />

      {/* Search Input and Button Wrapper */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full ml-4 w-full overflow-hidden">
        {/* Search Input */}
        <input
          type="text"
          className="w-full h-[40px] px-4 focus:outline-none transition duration-500 rounded-full"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        />

        {/* Search Button  */}
        <button
          className="p-2 text-green-600 focus:outline-none px-4"
          onClick={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        >
          <Search size={24} />
        </button>
      </div>
    </div>
  );
}
