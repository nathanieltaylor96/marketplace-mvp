import { useEffect, useState } from "react";

export default function Marketplace() {
  // Temporary Mock Listings (Placeholder Data)
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Road Bike",
      description: "A lightweight road bike in great condition.",
      price: 250,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Gaming Laptop",
      description: "Powerful gaming laptop with RTX 3060 GPU.",
      price: 1200,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Wooden Coffee Table",
      description: "Beautiful handmade wooden coffee table.",
      price: 75,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Marketplace Listings</h1>

      {listings.length === 0 ? (
        <p className="text-gray-500">No listings available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="border p-4 rounded-lg shadow-md bg-white">
              <img src={listing.imageUrl} alt={listing.title} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-lg font-semibold mt-2">{listing.title}</h2>
              <p className="text-gray-600">{listing.description}</p>
              <p className="text-green-600 font-bold">${listing.price}</p>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
