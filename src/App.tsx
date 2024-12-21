import Chart from "./components/Chart";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container px-10 mx-auto">
        <Chart />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

export default App;
