import "./App.css";
import Header from "./assets/Header";
import Main from "./assets/Main";
import data from "./assets/data.json";

function App() {
  return (
    <div className="programme">
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;
