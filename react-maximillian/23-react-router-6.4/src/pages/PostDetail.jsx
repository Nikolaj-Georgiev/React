import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';
import NewsletterSignup from '../components/NewsletterSignup';

function PostDetailPage() {
  const postData = useLoaderData();

  return (
    <>
      <BlogPost
        title={postData.title}
        text={postData.body}
      />
      <NewsletterSignup />
    </>
  );
}

export default PostDetailPage;

export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}
