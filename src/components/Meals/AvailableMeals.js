import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idly",
    description: "An South Indian Special",
    price: 10,
  },
  {
    id: "m2",
    name: "Sambar Vadai",
    description: "An South Indian Special",
    price: 10,
  },
  {
    id: "m3",
    name: "Kalakki",
    description: "An South Indian Special",
    price: 10,
  },
  {
    id: "m4",
    name: "Masal Dosai",
    description: "An South Indian Special",
    price: 10,
  },
];

const AvailableMeals = () => {
  const mealitem = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealitem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
