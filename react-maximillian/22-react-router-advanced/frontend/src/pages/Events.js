import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { loadEvents } from '../Util/loaders';

function EventsPage() {
  const { events } = useLoaderData();
  // data.events this comes from the events property that we passed to the deffer object and with destructuring we take only events

  // // if (data.isError) {
  // //   return <p>{data.message}</p>// you can add error component here too
  // // }
  // const events = data.events;

  // return <EventsList events={events} />

  // the function wrapped with Await component will be called automatically when the events is resolved and the data is there; loadedEvents is the resolved events value
  //Suspense is a component that shows fallback whilst we are waiting for the events to be fetched
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  )
}

export default EventsPage;

// async function loadEvents() {
//   const response = await fetch('http://localhost:8080/events');

//   if (!response.ok) {
//     // return { isError: true, message: 'Could not fetch the events.' }
//     // throw { message: 'Could not fetch events.' };
//     // throw new Response(JSON.stringify({ message: 'Could not fetch events!' }), { status: 500 }) // best option for generic error handling component
//     throw json({ message: 'Could not fetch events!' }, { status: 500 })
//   } else {
//     // return response; // not working with defer
//     const resData = await response.json();
//     return resData.events;
//   }
// }

export function loader() {
  return defer({
    events: loadEvents()
  })//we pass an object and bundle all the http requests that we want to send from this page N.B.
};



/*
export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // later to be made
  } else {
    // const resData = await response.json();
    // return resData.events;
    //you can return any type of data! The loader() function is happening in the browser N.B. not to a server! Client side code!
    // const response = new Response();
    return response;
  }
};
*/