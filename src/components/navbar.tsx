import { useEffect, useState, useRef } from "react";

export function Navbar() {
  const categories = [
    "Sale", "Home", "Gifts", "Body & Hair", "Skincare", "Food", "Baby & Kids", "Pets", "Eco Living"
  ];
  
  const containerRef = useRef(null);
  const [visibleCategories, setVisibleCategories] = useState(categories);

  useEffect(() => {
    const updateCategories = () => {
      if (!containerRef.current) return;
      
      let availableWidth = containerRef.current.offsetWidth;
      let tempCategories = [];
      let totalWidth = 0;

      for (let category of categories) {
        const categoryWidth = category.length * 10 + 32;
        if (totalWidth + categoryWidth < availableWidth) {
          tempCategories.push(category);
          totalWidth += categoryWidth;
        } else {
          break;
        }
      }
      setVisibleCategories(tempCategories);
    };

    updateCategories();
    window.addEventListener("resize", updateCategories);
    return () => window.removeEventListener("resize", updateCategories);
  }, []);

  return (
    <nav className="bg-white shadow-md p-2 mt-20">
      <div className="container mx-auto flex flex-col items-center">
        <div ref={containerRef} className="flex justify-center space-x-2 w-full max-w-6xl overflow-hidden">
          {visibleCategories.map((category) => (
            <a 
              key={category} 
              href={`/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
              className="text-gray-700 text-sm text-center px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-green-600 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
