import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    },
  });

  function handleDelete() {
    const answer = prompt('Are you sure?');
    if (answer.trim().toLocaleLowerCase() === 'yes') {
      mutate({ id });
    }
  }

  console.log(data);

  return (
    <>
      <Outlet />
      <Header>
        <Link
          to='/events'
          className='nav-item'
        >
          View all Events
        </Link>
      </Header>
      {isPending && (
        <div
          id='events-detail-content'
          className='center'
        >
          <LoadingIndicator />
        </div>
      )}
      {data && (
        <article id='event-details'>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to='edit'>Edit</Link>
            </nav>
          </header>
          <div id='event-details-content'>
            <img
              src={`http://localhost:3000/${data.image}`}
              alt={data.title}
            />
            <div id='event-details-info'>
              <div>
                <p id='event-details-location'>{data.location}</p>
                <time dateTime={`${data.date}$${data.time}`}>
                  {data.date}@{data.time}
                </time>
              </div>
              <p id='event-details-description'>{data.description}</p>
            </div>
          </div>
        </article>
      )}
      {isError && (
        <div
          id='events-detail-content'
          className='center'
        >
          <ErrorBlock
            title='An error has occurred when loading the event'
            message={
              error.info?.message ||
              'Failed to fetch event data, please try again later.'
            }
          />
        </div>
      )}
    </>
  );
}
