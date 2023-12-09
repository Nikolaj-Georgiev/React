import { useEffect } from 'react';
import { useState } from 'react';
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      // try{}catch(err){}
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        console.log('Mmm not ok!');
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

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
