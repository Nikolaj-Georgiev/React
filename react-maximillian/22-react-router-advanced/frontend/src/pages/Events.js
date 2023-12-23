import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>// you can add error component here too
  // }
  const events = data.events;

  return <EventsList events={events} />
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/eventssd');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch the events.' }
    // throw { message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events!' }), { status: 500 }) // best option for generic error handling component
    return json({ message: 'Could not fetch events!' }, { status: 500 })
  } else {
    return response;
  }
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