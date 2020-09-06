import React from "react";

import './card.styles.css';

const Card = ({ id, email, name, phone, website, company }) => (
  <div className="card">
    <div className="card-container">
      <div className="card-container_front">
        <img className='robotImg' alt="robot" src={`https://robohash.org/${id}?set=set1&bgset=bg1`}/>
        <div className="card-container_front_text">
          <h2>{name}</h2>
          <span><i>{company.bs}</i></span>
        </div>
      </div>
      <div className="card-container_back">
        <div className="card-container_back_company">
          <span><strong>{name}</strong></span>
          <span><strong>Company: </strong> {company.name}</span>
        </div>
        <div className="card-container_back_contact">
          <span>Contact details: </span>
          <span><strong>Email: </strong>{email}</span>
          <span><strong>Mobile: </strong>{phone}</span>
          <span><strong>Website: </strong>{website}</span>
        </div>
      </div>
    </div>
 </div>
 );

export default Card;
