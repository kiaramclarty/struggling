import Card from "./Card";
import data from "../atlas-of-remote-islands.js";

function App() {
  console.log(data.islands[0].name);
  //turn into my own component
  return (
    <div>
      <div className="container">
        <h1 className="section-title">BlackPink</h1>
        <img src="https://thumbs.gfycat.com/EthicalGreenAfricanaugurbuzzard-max-1mb.gif" />
      </div>

      <div className="container">
        <h2 className="section-title">Members</h2>
        <ul className="cards">
          {data.islands.map((island) => {
            return <Card island={island} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
