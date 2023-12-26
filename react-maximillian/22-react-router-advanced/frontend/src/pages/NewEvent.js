import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

function NewEventPage() {
  return <EventForm />
};

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  // const enteredTitle = data.get('title'); // we could extract data like this by passing the given name in the form (name='title in this case);

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }


  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (!response.ok) {
    throw json({ message: 'Bla bla could not save event.' }, { status: 500 })
  }

  return redirect('/events')
};