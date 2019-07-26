import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from "semantic-ui-react";
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

  return <section className='location-list grid-view'>
      <Card.Group>
        {episodes.map(episode => (
          <Card 
            header={episode.episode}
            meta={episode.air_date}
            description={episode.name}
          />
        ))}
      </Card.Group>
    </section>
}