import './App.css';
import restaurant from './restaurant.jpg';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve {props.adj} food.</p>
      <img src={restaurant} height={320} alt="Busy outdoor service at a restaurant" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <h3>No food-ier food has ever been cooked. It is {props.year}.</h3>
    </footer>
  )
}

const dishes = [
  "Bistec a la Mexicano",
  "Pepper crusted ribeye steak",
  "Fried ice cream",
  "All of the fajitas!"
];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Jonah" />
      <Main adj="yummy" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
