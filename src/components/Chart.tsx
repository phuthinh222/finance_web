import { ChartBar } from "./Charts/ChartBar";
import ChartLine from "./Charts/ChartLine";
import { Card } from "./ui/card";

function Chart() {
  return (
    <>
      <h1>Uniswap Overview</h1>
      <div className="flex justify-between">
        <Card className="w-[588px] h-[332px]">
          <ChartLine />
        </Card>
        <Card className="w-[588px] h-[332px]">
          <ChartBar />
        </Card>
      </div>
      <div className="flex">
        <p>
          Volume 24H: <span className="text-white">$860.60m</span>
          <span className="text-red">(↓39.33%)</span>
        </p>
        <p>
          Volume 24H: <span className="text-white">$860.60m</span>
          <span className="text-red-500	">(↓39.33%)</span>
        </p>
        <p>
          Volume 24H: <span className="text-white">$860.60m</span>
          <span className="text-red">(↓39.33%)</span>
        </p>
      </div>
    </>
  );
}

export default Chart;
