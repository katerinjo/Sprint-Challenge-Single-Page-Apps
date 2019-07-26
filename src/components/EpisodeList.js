import React, { useEffect, useState } from 'react';
import axios from "axios";
import InfoCards from "./InfoCards";
import pick from "../pickRandom";

export default function EpisodeList({ displayCount }) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const chosen = pick(1, 31, Number(displayCount));
    axios
      .get(`https://rickandmortyapi.com/api/episode/${chosen.join(",")}`)
      .then(res => {
        setEpisodes(res.data);
      })
      .catch(console.log);
  }, [displayCount])

  return <section className='episode-list grid-view'>
      <InfoCards
        data={episodes}
        header="episode"
        meta="air_date"
        detailNames={["name"]}
        detailFuns={[a => a]}
      />
    </section>
}