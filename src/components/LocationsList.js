import React, { useEffect, useState } from 'react';
import axios from "axios";
import InfoCards from "./InfoCards";
import pick from "../pickRandom";

export default function LocationList({ displayCount }) {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const chosen = pick(1, 67, Number(displayCount));
    axios
      .get(`https://rickandmortyapi.com/api/location/${chosen.join(",")}`)
      .then(res => {
        setLocations(res.data);
      })
      .catch(console.log);
  }, [displayCount])

  return <section className='location-list grid-view'>
      <InfoCards
        data={locations}
        header="name"
        meta="type"
        detailNames={["dimension"]}
        detailFuns={[dim => `Dimension: ${dim}`]}
      />
    </section>
}
