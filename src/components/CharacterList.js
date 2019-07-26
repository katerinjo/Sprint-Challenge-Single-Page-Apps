import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card, Image } from "semantic-ui-react";
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
      <Card.Group>
        {characters.map(character => (
          <Card>
            <Image src={character.image} />
            <Card.Header>{character.name}</Card.Header>
            <Card.Meta>{character.species}</Card.Meta>
            <Card.Description>
              {[character.type && <p>Type: {character.type}</p>,
              character.gender && <p>Gender: {character.gender}</p>,
              character.status && <p>Status: {character.status}</p>,
              character.origin && <p>Origin: {character.origin.name}</p>]}
            </Card.Description>
          </Card>
        ))}
      </Card.Group>
    </section>
}
