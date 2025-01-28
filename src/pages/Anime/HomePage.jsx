import React from "react";
import useSWR from "swr";

function HomePage() {
  const { data, error } = useSWR("http://127.0.0.1:3000/api/v1/anime");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h1>Anime List</h1><br></br>
      <ul>
        {data.map((anime) => (
          <li key={anime.id}>{anime.title}<br></br>Description: {anime.description}<hr></hr></li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;