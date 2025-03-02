import { useEffect, useState } from "react";
import { fetchListings } from "../api";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then((res) => setListings(res.data));
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold">Marketplace</h2>
      {listings.length === 0 ? <p>No listings yet.</p> : listings.map((listing) => (
        <div key={listing.id} className="border p-4 my-2">
          <h3 className="text-lg font-semibold">{listing.title}</h3>
          <p>{listing.description}</p>
          <p className="text-green-600 font-bold">${listing.price}</p>
        </div>
      ))}
    </div>
  );
}
