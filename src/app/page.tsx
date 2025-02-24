import { ProductCard } from "@/components/product-card";

const products = [
  { id: 1, name: "Recycled Canvas Groceries Bag", brand: "Bagify", price: "$120", image: "/images/canvas-grocery-shopping-bags.jpg", description: "Carry your groceries in a sustainable bag made using recycled canvas."},
  { id: 2, name: "Recycled Blend Yoga Mat", brand: "Casall", price: "$180", image: "/images/eco_yoga_mat.png", description: "A lightweight yoga mat for life on the go. Partially produced with recycled materials."},
  { id: 3, name: "Recycled Paper Cat Litter", brand: "Daily Scoops", price: "$30", image: "/images/daily_scoops_cat_litter.webp", description: "Daily Scoops Recycled Paper Cat Litter is a biodegradable, light weight litter made exclusively from 100% recycled paper." },
  { id: 4, name: "RecyClean Toothbrush Recycled Plastic Handle", brand: "Colgate", price: "$20", image: "/images/recyclean_toothbrush.jpg", description: "Colgate RecyClean Medium Manual Toothbrush handle is made with 100% recycled food grade plastic. This eco friendly toothbrush is designed for deep cleaning, with a compact head and plant derived bristles."},
  { id: 5, name: "Eco Clean Up Bundle", brand: "Resparkle", price: "$100", image: "/images/resparkle_bundle.webp", description: "The average home goes through 30 single-use plastic bottles of dish soap in a year. That’s 1710 in a lifetime! Make the eco-friendly switch to our zero waste washing up liquid today."},
  { id: 6, name: "Eco-friendly Wool Dryer Balls", brand: "Canningvale", price: "$40", image: "/images/wool_dryer_balls.webp", description: "Add three dryer balls to your tumble dryer to absorb moisture and separate laundry, allowing hot air to circulate more freely. People have found they reduce drying time and save on energy costs."},
  { id: 7, name: "Toilet Cleaner - Eucalyptus", brand: "Ecostore", price: "$10", image: "/images/ecostore-toilet-cleaner-eucalyptus-500ml-front.webp", description: "Independently proven to kill common household germs including E.coli, Staphylococcus and Pseudomonas bacteria.The easy to use nozzle is easy to get under the toilet rim."},
  { id: 8, name: "Heali Kiwi Calming Solid Shampoo Bar", brand: "Ethique", price: "$25", image: "/images/ethique-heali-kiwi-calming-solid-shampoo-bar.webp", description: "A vegan shampoo bar for dry, itchy scalps and dandruff."},
  { id: 9, name: "Natural Multi-Purpose Kitchen Cleaner", brand: "Koala Eco", price: "$20", image: "/images/koala-eco-natural-multi-purpose-kitchen-cleaner-500ml-front.webp", description: "Biodegradable and eco-friendly plant-based formula effortlessly cleans, removes bacteria and deodorises, without the need for toxic chemicals."},
];

export default function HomePage() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold mb-6">Sustainable and Environmentally Conscious Living</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}