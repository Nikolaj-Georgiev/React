import useHttp from '../hooks/useHTTP.js';
import MealItem from './MealItem.jsx';

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  // if (!data) {
  //   return <p>No meals found.</p>;
  // } // alternative to the third argument in the useHttp hook!

  console.log(loadedMeals);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
        />
      ))}
    </ul>
  );
}
