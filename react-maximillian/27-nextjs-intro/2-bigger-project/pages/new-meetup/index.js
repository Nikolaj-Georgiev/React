//our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
  function addMeetupHandler(enteredData) {
    console.log(enteredData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />

}