import { json, redirect, useRouteLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { loadEvent, loadEvents } from '../Util/loaders';

function EventDetailsPage() {
  // const data = useRouteLoaderData('event-details');
  const { event, events } = useRouteLoaderData('event-details');
  console.log(event, events);

  return (<>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Say WHAAAT?</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </ Await>
    </Suspense>
  </>);
}

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
};



export async function action({ params, request }) {
  const eventId = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: 'Could not delete event' }, { status: 500 });
  }

  return redirect('/events');
}


/////////////////////////
// export async function loader({ request, params }) {
//   //request.url can be used to extract query params if any.
//   //params object contains all the rout parameter values as we could do it with help of useParams
//   const id = params.eventId;

//   // const response = await fetch('http://localhost:8080/events/' + id);
//   // return response;

//   // return fetch('http://localhost:8080/events/' + id); // will do same as above. React router will automatically await the fetch and give us the response

//   const response = await fetch('http://localhost:8080/events/' + id);

//   if (!response.ok) {
//     throw json({ message: 'Could not fetch details for selected event' }, { status: 500 });
//   }
//   return response;
// };