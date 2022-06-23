import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import NavigationDetails from "./NavigationDetails";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const PopularityAsc = () => {
  const [popularityAsc, setPopularityAsc] = useState([]);

  useEffect(() => {
    const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=de-DE&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((json) => setPopularityAsc(json.results));
  }, []);

  return (
    <div id="outer-container">
      <div id="page-wrap">
        <Sidebar />
        <NavigationDetails />
        <main className="main">
          <h1>Die 20 unpopulärsten Filme</h1>
          <div className="movie-list">
            {popularityAsc.map((elt, i) => {
              return (
                <MovieItem
                  key={elt.id}
                  id={elt.id}
                  title={elt.title}
                  year={elt.release_date?.slice(0, 4)}
                  img={elt.poster_path}
                />
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PopularityAsc;
