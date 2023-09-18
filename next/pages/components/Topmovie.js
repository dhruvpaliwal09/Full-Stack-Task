import React, { useState, useEffect } from 'react';

const Topmovie = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/movie')
            .then((response) => response.json())
            .then((data) => {
                const top15Movies = data.slice(0, 12);
                setMovies(top15Movies);
            })
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 px-8">
            {movies.map((movie) => (
                <div key={movie.id} className="w-full max-w-xs relative">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={movie.image}
                            alt={movie.name}
                            className="w-full h-auto object-cover object-center"
                        />
                        <div className="p-4 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{movie.name}</h2>
                                <p className="text-gray-600 whitespace-normal max-w-full">Rating: {movie.rating}</p>
                                <p className="text-gray-600 whitespace-normal max-w-full">Year: {movie.year}</p>
                                <p className="text-gray-600 whitespace-normal max-w-full">Duration: {movie.duration}</p>
                            </div>
                            <div className="">
                                <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-2">
                                        View Details
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Topmovie;
