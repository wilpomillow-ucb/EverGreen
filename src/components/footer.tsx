export function Footer() {
    return (
      <footer className="bg-white shadow-md mt-8 p-6">
        <div className="container mx-auto grid grid-cols-3 gap-6 text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Popular Categories</h3>
            <ul>
              {["Sale", "Home", "Gifts", "Body & Hair", "Skincare", "Food", "Baby & Kids", "Pets"].map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <ul>
              {["FAQs", "My Account", "Reviews"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul>
              {["Our Story", "Our Purpose"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center text-gray-600 text-xs">
          <p>Copyright © EverGreen 2025</p>
          <p className="mt-4">
            EverGreen acknowledges all Aboriginal and Torres Strait Islander peoples across the Country where we live and work. We pay our respects to their Elders and Leaders, past and present.
          </p>
          <p className="mt-2">
            We recognise Aboriginal and Torres Strait Islander peoples' unique and enduring connection to these lands, waters, and communities, and respectfully honour and celebrate their culture, knowledge, and heritage.
          </p>
        </div>
      </footer>
    );
  }