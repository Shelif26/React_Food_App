import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description: "The Poster boy of Tamil Nadu Food",
    price: 30.0,
  },
  {
    id: "m2",
    name: "Idli and Vada",
    description: "Tamil Nadu food to relish!",
    price: 12.0,
  },
  {
    id: "m3",
    name: "Paruppu Payasam",
    description: "A simple sweet treat from Tamil Nadu",
    price: 25.0,
  },
  {
    id: "m4",
    name: "Murukku",
    description: "Something to munch on with tea",
    price: 10.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
