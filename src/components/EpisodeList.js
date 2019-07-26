import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from "semantic-ui-react";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/10,28")
      .then(res => {
        setEpisodes(res.data);
      })
      .catch(console.log);
  }, [])

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