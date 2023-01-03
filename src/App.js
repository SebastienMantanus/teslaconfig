import "./App.css";
import { useState } from "react";

function App() {
  const [carType1, setCarType1] = useState(true);
  const [carType2, setCarType2] = useState(false);
  const [carColor1, setCarColor1] = useState(true);
  const [carColor2, setCarColor2] = useState(false);

  // Gestion des bordures

  let borderSelector1 = "selectors";
  let borderSelector2 = "selectors";
  let borderSelector3 = "selectors";
  let borderSelector4 = "selectors";

  // Gestion du prix
  let CarPrice = 0;

  if (carType1) {
    CarPrice = 90700;
    borderSelector1 = "selectors active";
  }

  if (carType2) {
    CarPrice = 106900;
    borderSelector2 = "selectors active";
  }

  if (carColor1) {
    CarPrice = CarPrice + 0;
    borderSelector3 = "selectors active";
  }

  if (carColor2) {
    CarPrice = CarPrice + 1000;
    borderSelector4 = "selectors active";
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Tesla Config</h1>
      </header>
      <main className="main">
        <section>
          <h2>Sélectionnez votre véhicule</h2>
          <div
            className={borderSelector1}
            onClick={() => {
              setCarType1(true);
              setCarType2(false);
            }}
          >
            Grande Autonomie
          </div>
          <div
            className={borderSelector2}
            onClick={() => {
              setCarType1(false);
              setCarType2(true);
            }}
          >
            Performance
          </div>
        </section>
        <section>
          <h2>Sélectionnez la couleur</h2>
          <div
            className={borderSelector3}
            onClick={() => {
              setCarColor1(true);
              setCarColor2(false);
            }}
          >
            Blanc Nacré multicouches
          </div>
          <div
            className={borderSelector4}
            onClick={() => {
              setCarColor1(false);
              setCarColor2(true);
            }}
          >
            Noir uni
          </div>
        </section>
        <section className="price">
          <div>{CarPrice} €</div>
          <button>Buy !</button>
        </section>
      </main>
    </div>
  );
}

export default App;
