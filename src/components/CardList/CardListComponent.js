import React from "react";

import Card from '../Card/CardComponent'

import './card-list.styles.css';


const CardList = ({ characters }) => (
  <div className="card-list">
   { characters.map(character => (
     <Card key={character.id} id={character.id} email={character.email} name={character.name} phone={character.phone} website={character.website} company={character.company} />
     ))}
  </div>
);

export default CardList;
