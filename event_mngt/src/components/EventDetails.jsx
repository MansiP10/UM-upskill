import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const mockEvent = {
    title: 'Art Exhibition',
    description: 'An exhibition showcasing local art.',
    category: 'Arts',
    date: '2024-12-20',
    location: { address: '123 Art Street, Cityville' },
    ticketPrice: 10,
  };

  return (
    <div>
      <h2>{mockEvent.title}</h2>
      <p>{mockEvent.description}</p>
      <p>Category: {mockEvent.category}</p>
      <p>Date: {mockEvent.date}</p>
      <p>Location: {mockEvent.location.address}</p>
      <p>Price: ${mockEvent.ticketPrice}</p>
    </div>
  );
}

export default EventDetails;