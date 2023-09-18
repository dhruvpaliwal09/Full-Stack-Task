
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Topshow() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/shows')
      .then((response) => response.json())
      .then((data) => {
        const top15Show = data.slice(0, 12);
        setShows(top15Show);
      })
      .catch((error) => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 px-8">
      {shows.map((shows) => (
        <div key={shows.id} className="w-full max-w-xs relative">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={shows.image}
              alt={shows.name}
              className="w-full h-auto object-cover object-center"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{shows.name}</h2>
                <p className="text-gray-600 whitespace-normal max-w-full">Rating: {shows.rating}</p>
                <p className="text-gray-600 whitespace-normal max-w-full">Year: {shows.year}</p>
                <p className="text-gray-600 whitespace-normal max-w-full">Episodes: {shows.Episode}</p>
              </div>
              <div className="">
              <Link href='https://www.imdb.com/' target="_blank">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-2">
                  View Details
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
