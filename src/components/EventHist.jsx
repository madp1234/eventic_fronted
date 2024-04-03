// // import React, { useState } from 'react';
// // import { useEffect } from 'react';
// // import { ticketOutline } from 'ionicons/icons';
// // import { IonIcon } from '@ionic/react';
// // import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// // import DeleteIcon from '@material-ui/icons/Delete';
// // import Feedback from './Feedback';
// // import './EventHist.css'; // Import your CSS file

// // const EventHist = () => {
// //   const [showFeedback, setShowFeedback] = useState(false);

// //   const handleFeedback = () => {
// //     setShowFeedback(!showFeedback);
// //   };

// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     // Function to fetch events data from your backend API
// //     const fetchEvents = async () => {
// //       try {
// //         const userName = localStorage.getItem('token');
// //         // Fetch events data from your backend API
// //         const response = await fetch(`/api/eventhist/${userName}`); 
// //         if (response.ok) {
// //           const data = await response.json();
// //           // Update events state with the fetched events data
// //           setEvents(data);
// //         } else {
// //           console.error('Failed to fetch events data');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching events data:', error);
// //       }
// //     };  // Call the fetchEvents function when the component mounts
// //     fetchEvents();
// //   }, []);;

// //   // const handleEventClick = eventname => {
// //   //   // Handle event click logic here
// //   // };

// //   return (
// //     <>
// //       <div className={`bar ${showFeedback ? 'blur-background' : ''}`}>
// //         <span className="logo-container">
// //           <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
// //           <span className="logo">Eventic</span>
// //         </span>
// //         <div className='head'>Welcome Admin !</div>
       
// //       </div>
// //       <div className={`event-grid ${showFeedback ? 'blur-background' : ''}`}>
// //         {events.map(event => (
// //           <div key={event.eventname} className="event-item">
// //             <img src={`data:image/png;base64,${event.poster}`} alt="image"  />
// //             <div className='event-name'>{event.eventname}</div>
// //             <div className='actions'>
// //               <button onClick={handleFeedback}><ThumbUpIcon /></button>
// //               <button ><DeleteIcon /></button>
// //             </div>
            
// //           </div>
           
// //         ))}
         
// //       </div>
     
// //       {showFeedback && <Feedback />}
// //     </>
// //   );
// // };

// // export default EventHist;


// import React, { useState, useEffect } from 'react';
// import { ticketOutline } from 'ionicons/icons';
// import { IonIcon } from '@ionic/react';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Feedback from './Feedback';
// import './EventHist.css'; // Import your CSS file

// const EventHist = () => {
//   const [showFeedback, setShowFeedback] = useState(false);

//   const handleFeedback = () => {
//     setShowFeedback(!showFeedback);
//   };

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Function to fetch events data from your backend API
//     const fetchEvents = async () => {
//       try {
//         const userName = localStorage.getItem('token');
//         // Fetch events data from your backend API
//         const response = await fetch(`/api/eventhist/${userName}`); 
//         if (response.ok) {
//           const data = await response.json();
//           // Update events state with the fetched events data
//           setEvents(data);
//         } else {
//           console.error('Failed to fetch events data');
//         }
//       } catch (error) {
//         console.error('Error fetching events data:', error);
//       }
//     };  // Call the fetchEvents function when the component mounts
//     fetchEvents();
//   }, []);

//   return (
//     <>
//       <div className={`bar ${showFeedback ? 'blur-background' : ''}`}>
//         <span className="logo-container">
//           <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
//           <span className="logo">Eventic</span>
//         </span>
//         <div className='head'>Welcome Admin !</div>
//       </div>

//       {showFeedback && <Feedback />} {/* Render the feedback form above the event grid */}

//       <div className={`event-grid ${showFeedback ? 'blur-background' : ''}`}>
//         {events.map(event => (
//           <div key={event.eventname} className="event-item">
//             <img src={`data:image/png;base64,${event.poster}`} alt="image"  />
//             <div className='event-name'>{event.eventname}</div>
//             <div className='actions'>
//               <button onClick={handleFeedback}><ThumbUpIcon /></button>
//               <button ><DeleteIcon /></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default EventHist;

// import React, { useState, useEffect } from 'react';
// import { ticketOutline } from 'ionicons/icons';
// import { IonIcon } from '@ionic/react';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Feedback from './Feedback';
// import './EventHist.css'; // Import your CSS file

// const EventHist = () => {
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [selectedEventName, setSelectedEventName] = useState('');

//   const handleFeedback = (eventName) => {
//     setSelectedEventName(eventName);
//     setShowFeedback(true);
//   };



//   useEffect(() => {
//     // Function to fetch events data from your backend API
//     const fetchEvents = async () => {
//       try {
//         const userName = localStorage.getItem('token');
//         // Fetch events data from your backend API
//         const response = await fetch(`/api/eventhist/${userName}`); 
//         if (response.ok) {
//           const data = await response.json();
//           // Update events state with the fetched events data
//           setEvents(data);
//         } else {
//           console.error('Failed to fetch events data');
//         }
//       } catch (error) {
//         console.error('Error fetching events data:', error);
//       }
//     };  // Call the fetchEvents function when the component mounts
//     fetchEvents();
//   }, []);

//   return (
//     <>
//       <div >
//         <span className="logo-container">
//           <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
//           <span className="logo">Eventic</span>
//         </span>
     
//       </div>

//       {/* Overlay the feedback form */}
//       {showFeedback && 
//       <Feedback eventname={selectedEventName} position={{ x: 100, y: 100 }} />
//       }


//       <div className={`event-grid`}>
//         {events.map(event => (
//           <div key={event.eventname} className="event-item">
//             <img src={`data:image/png;base64,${event.poster}`} alt="image"  />
//             <div className='event-name'>{event.eventname}</div>
//             <div className='actions'>
//               <button onClick={handleFeedback(event.eventname)}><ThumbUpIcon /></button>
//               <button ><DeleteIcon /></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default EventHist;
import React, { useState, useEffect } from 'react';
import { ticketOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import Feedback from './Feedback';
import './EventHist.css'; // Import your CSS file

const EventHist = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const [selectedEventName, setSelectedEventName] = useState('');

  const handleFeedback = (eventName) => {
    setSelectedEventName(eventName);
    setShowFeedback(true);
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Function to fetch events data from your backend API
    const fetchEvents = async () => {
      try {
        const userName = localStorage.getItem('token');
        // Fetch events data from your backend API
        const response = await fetch(`/api/eventhist/${userName}`); 
        if (response.ok) {
          const data = await response.json();
          // Update events state with the fetched events data
          setEvents(data);
        } else {
          console.error('Failed to fetch events data');
        }
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };  // Call the fetchEvents function when the component mounts
    fetchEvents();
  }, []);

  return (
    <>
      <div>
        <span className="logo-container">
          <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
          <span className="logo">Eventic</span>
        </span>
      </div>

      {/* Overlay the feedback form */}
      {showFeedback && 
      <Feedback eventname={selectedEventName} position={{ x: 100, y: 100 }} />
      }


      <div className={`event-grid`}>
        {events.map(event => (
          <div key={event.eventname} className="event-item">
            <img src={`data:image/png;base64,${event.poster}`} alt="image"  />
            <div className='event-name'>{event.eventname}</div>
            <div className='actions'>
              {/* Pass a function reference to onClick */}
              <button onClick={() => handleFeedback(event.eventname)}><ThumbUpIcon /></button>
              <button ><DeleteIcon /></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventHist;
