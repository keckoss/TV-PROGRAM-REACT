import "./App.css";
import Header from "./assets/header";
import Main from "./assets/main";
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
