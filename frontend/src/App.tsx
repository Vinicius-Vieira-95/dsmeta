import Hearder from "./componentes/Header";
import SalesCard from "./componentes/SalesCard";

function App() {

  return (
    <>
      <Hearder />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
