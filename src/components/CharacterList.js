import React, { useEffect, useState } from 'react';
import axios from "axios";
import InfoCards from "./InfoCards";
import pick from "../pickRandom";

export default function CharacterList({ displayCount }) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const chosen = pick(1, 394, displayCount)
    axios
      .get(`https://rickandmortyapi.com/api/character/${chosen.join(",")}`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(console.log);
  }, [displayCount])

  return <section className='character-list grid-view'>
    <InfoCards
      data={characters}
      image="image"
      header="name"
      meta="species"
      detailNames={["type", "gender", "status", "origin"]}
      detailFuns={[
        t => `Type: ${t}`,
        g => `Gender: ${g}`,
        s => `Status: ${s}`,
        o => `Origin: ${o}`
      ]}
    />
  </section>
}
