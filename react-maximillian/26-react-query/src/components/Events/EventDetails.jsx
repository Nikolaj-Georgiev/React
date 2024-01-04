import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });
      navigate('/events');
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({ id });
  }

  let content;

  if (isPending) {
    content = (
      <div
        id='events-detail-content'
        className='center'
      >
        <p>Fetching data..</p>
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
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
    );
  }

  if (data) {
    const formatedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
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
              <time dateTime={`TodoData&TodoTime`}>
                {formatedDate}@{data.time}
              </time>
            </div>
            <p id='event-details-description'>{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>This action cannot be undone.</p>
          <div className='form-actions'>
            {isPendingDeletion && (
              <p>Deletion is on the way, please wait a moment</p>
            )}
            {!isPendingDeletion && (
              <>
                <button
                  onClick={handleStopDelete}
                  className='button-text'
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className='button'
                >
                  Delete
                </button>
              </>
            )}
          </div>
          {isErrorDeleting && (
            <ErrorBlock
              title='Failed to delete event'
              message={
                deleteError.info?.message ||
                'Failed to delete the event, please try again later'
              }
            />
          )}
        </Modal>
      )}

      <Outlet />
      <Header>
        <Link
          to='/events'
          className='nav-item'
        >
          View all Events
        </Link>
      </Header>

      <article id='event-details'>{content}</article>
    </>
  );
}
