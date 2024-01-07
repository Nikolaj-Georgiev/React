//our-domain.com/new-meetup
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head';

export default function NewMeetupPage() {
  const router = useRouter();


  async function addMeetupHandler(enteredMeetupData) {
    // const response = await fetch('https://some-domain.com/abc');

    //trt-catch block here
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    // router.replace() this is if you don't want to be able to go back with the back button on the browser 
    router.push('/')
  };

  return <>
    <Head>
      <title>Add a new Meetup</title>
      <meta name='description' content='Add your own meetups. Create amazing networking opportunities!' />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </>

}