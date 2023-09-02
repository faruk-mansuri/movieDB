import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: '' });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Response === 'False') {
      setIsError({ show: true, msg: data.Error });
      setLoading(false);
    } else {
      setMovie(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (isError.show) {
    return (
      <div className='page-error'>
        <h1>{isError.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }

  const { Title: title, Year: year, Plot: plot, Poster: poster } = movie;
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to all movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
