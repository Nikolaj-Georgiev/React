import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.status);

  let title = 'An error occurred';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;//this is for the new Response() way of doing it
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.'
  }

  return <>
    <MainNavigation />
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>;
  </>
}