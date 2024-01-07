//our-domain.com/dynamic-id
import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetailsPage(props) {
  return <>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name='description' content={props.meetupData.description} />
    </Head>
    <MeetupDetails image={props.meetupData.image} title={props.meetupData.title} description={props.meetupData.description} address={props.meetupData.address} />
  </>
  // return <MeetupDetails image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'} title='A First Meetup' description={'The meetup description'} address='Some meetup address' />
}


export async function getStaticPaths() {
  //fetch the data from an API

  const client = await MongoClient.connect('mongodb+srv://nikog:3JHfHiG8lCEvOVpr@cluster0.l8voow3.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close(); //do not forget to do this!

  return {
    fallback: false,// if you preset this to false, this indicates that the specified paths in the paths: [] are all of them, any other will lead to error page
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://nikog:3JHfHiG8lCEvOVpr@cluster0.l8voow3.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ _id: (new ObjectId(meetupId)) })

  client.close(); //do not forget to do this!

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image
      },
    }
  }
}

/*
return {
  props: {
    meetupData: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      id: meetupId,
      title: 'A First Meetup',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup!'
    }
  }
}
*/

// [
//   {
//     params: {
//       meetupId: 'm1',
//     },
//   },
//   {
//     params: {
//       meetupId: 'm2',
//     },
//   },
// ],