import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from "semantic-ui-react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/3,21")
      .then(res => {
        setLocations(res.data);
      })
      .catch(console.log);
  }, [])

  return <section className='location-list grid-view'>
      <Card.Group>
        {locations.map(location => (
          <Card 
            header={location.name}
            meta={location.type}
            description={`Dimension: ${location.dimension}`}
          />
        ))}
      </Card.Group>
    </section>
}
