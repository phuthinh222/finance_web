import Chart from "./components/Chart";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container px-8 mx-auto">
        <Chart />
      </div>
    </div>
  );
}

export default App;
