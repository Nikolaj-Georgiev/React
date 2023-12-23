/* eslint-disable no-unused-vars */
import { useRouteError } from 'react-router-dom';
import brokenPigImg from '../assets/brokenPig3.webp';

import PageContent from '../components/PageContent.jsx';
import MainNav from '../components/MainNav.jsx';
import Header from '../components/Header.jsx';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error has occured!';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <Header>
        <MainNav />
      </Header>
      <PageContent
        title={title}
        img={brokenPigImg}
        imgText='Broken piggy bank'
        cssClass='broken-piggy-bank'
      >
        {message}
      </PageContent>
    </>
  );
}
