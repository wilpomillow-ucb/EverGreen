import Image from "next/image";

export function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden w-full min-w-[200px] sm:min-w-[250px] md:min-w-[300px] flex-grow">
      <div className="relative group w-full h-48 overflow-hidden rounded-md">
        <div className="w-full h-full overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-transform duration-300 scale-100 group-hover:scale-105 group-hover:blur-[2px]" 
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-center px-4">{product.description}</p>
        </div>
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <h3 className="text-md text-gray-500">{product.brand}</h3>
      <p className="text-gray-600">{product.price}</p>
    </div>
  );
}
