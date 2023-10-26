const PersonLi = function (props) {
  return (
    <li className='listItem'>
      <p>firstName: {props.people.firstName}</p>
      <p>lastName: {props.people.lastName}</p>
      <p>email: {props.people.email}</p>
      <p>course: {props.people.course}</p>
    </li>
  );
};

export default PersonLi;
