// // EventDetails.js

// import React from 'react';
// import ProductDetailPage from './ProductDetails';
// import './EventDetails.css';
// import eventimage from '../assets/img_2.jpeg';


// const EventDetails = () => {
//   const eventDetails = {
//     image: eventimage,
//     name: 'Sample Event',
//     date: '2024-01-26',
//     time: '10:00 AM',
//     location: 'Sample Location',
//     description: 'This is a sample event description.',
//     ticketPrice: '$20',
//   };

//   return (
//     <div className="card-container">
//       <div className="card">
//         <ProductDetailPage event={eventDetails} />
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailPage from './ProductDetails';
import './EventDetails.css';

const EventDetails = () => {
  const { eventname} = useParams();
  const [eventDetails, setEventDetails] = useState(null);
const {admin} = useParams();

  useEffect(() => {
    // Fetch event details based on the eventId
    const fetchEventDetails = async () => {
      try {
        
        const response = await fetch(`/api/event/${eventname}`); // Adjust the endpoint according to your backend API
        if (response.ok) {
          const eventData = await response.json();
          setEventDetails(eventData);
        } else {
          console.error('Failed to fetch event details');
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventname]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      <div className="card">
        <ProductDetailPage event={eventDetails} admin={admin} />
      </div>
    </div>
  );
};

export default EventDetails;
