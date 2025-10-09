import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the events from the backend API
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events'); // Your backend URL
        if (response.ok) {
          const eventsData = await response.json();
          setEvents(eventsData); // Set the fetched events in state
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents(); // Call the function to fetch events
  }, []); // Empty dependency array means this runs only once after the component mounts

  return (
    <div>
      <h2>Event List</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.category}</p>
            <p>{event.description}</p>
            <Link to={`/event/${event._id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
}

export default EventList;
