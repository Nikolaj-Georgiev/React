import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailsPage() {
  const data = useRouteLoaderData('event-details');
  console.log(data);

  return <EventItem event={data.event} />

};

export default EventDetailsPage;

export async function loader({ request, params }) {
  //request.url can be used to extract query params if any.
  //params object contains all the rout parameter values as we could do it with help of useParams
  const id = params.eventId;

  // const response = await fetch('http://localhost:8080/events/' + id);
  // return response;

  // return fetch('http://localhost:8080/events/' + id); // will do same as above. React router will automatically await the fetch and give us the response

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not fetch details for selected event' }, { status: 500 });
  }
  return response;
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