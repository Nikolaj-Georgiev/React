import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.jsx';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id='error-content'>
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
        <p>{`Status: ${error.status}`}</p>
      </main>
    </>
  );
}
