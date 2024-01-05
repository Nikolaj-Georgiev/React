import Link from 'next/link';
import { useRouter } from 'next/router';

// our-domain.com/news/something-important -> this will serve the news.js file

export default function DetailsPage() {
  const router = useRouter();

  // console.log(router.query.newsId);
  const newsId = router.query.newsId;

  //send a request to the backend API to fetch the news item with the newsId



  return <>
    <h1>{newsId?.toLocaleUpperCase() || 'The Details Page'}</h1>
    <Link href='/'>Back</Link>
  </>
}