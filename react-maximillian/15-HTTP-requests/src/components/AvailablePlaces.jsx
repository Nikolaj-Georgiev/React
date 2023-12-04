import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  //usually when handling errors we have these ⬆️ 3 states working together

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if (!response.ok) {
          throw new Error('Failed fetching places');
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later!',
        });
      }

      setIsFetching(false);
    }
    fetchPlaces();

    // fetch('http://localhost:3000/places')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
  }, []);

  if (error) {
    return (
      <Error
        title='An error ocurred'
        message={error.message}
      />
    );
  }

  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching place data ... '
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
