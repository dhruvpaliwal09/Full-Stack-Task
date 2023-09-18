
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Ratingcard() {
  const [Ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movie')
      .then((response) => response.json())
      .then((data) => setRatings(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 px-8">
      {Ratings.map((movie) => (
        <div key={movie.id} className="w-full max-w-xs relative">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-300 object-cover object-center"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <p className="text-gray-600 whitespace-normal max-w-full font-bold text-xl">Rating: {movie.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
