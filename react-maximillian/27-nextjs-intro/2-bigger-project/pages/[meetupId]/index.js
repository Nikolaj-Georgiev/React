//our-domain.com/dynamic-id

import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function MeetupDetailsPage() {
  return <MeetupDetails image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' title='A First Meetup' description={'The meetup description'} address='Some meetup address' />
}


export async function getStaticPaths() {
  //fetch the data from an API

  return {
    fallback: false,// if you preset this to false, this indicates that the specified paths in the paths: [] are all of them, any other will lead to error page
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params.meetupId;

  console.log(context.params);

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
}