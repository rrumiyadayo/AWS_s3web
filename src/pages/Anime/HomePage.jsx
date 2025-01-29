import React from "react";
import useSWR from "swr";

import Layout from "../../components/layout/Layout";

function HomePage() {
  const { data, error } = useSWR("http://127.0.0.1:3000/api/v1/anime");
  if (error) return <div><Layout>failed to load</Layout></div>;
  if (!data) return <div><Layout>loading...</Layout></div>;
  return (
    <Layout>
      <h1>Anime List</h1><br></br>
      <ul>
        {data.map((anime) => (
          <li key={anime.id}>{anime.title}<br></br>Description: {anime.description}<hr></hr></li>
        ))}
      </ul>
    </Layout>
  );
}

export default HomePage;