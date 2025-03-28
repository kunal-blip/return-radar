
import { indices, IndexData } from "@/utils/stockData";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MarketOverview = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Indian market indices at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {indices.map((index) => (
            <IndexCard key={index.symbol} index={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface IndexCardProps {
  index: IndexData;
}

const IndexCard = ({ index }: IndexCardProps) => {
  const isPositive = index.change >= 0;

  return (
    <div className="bg-muted/40 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">{index.symbol}</h3>
          <p className="text-xs text-muted-foreground">{index.name}</p>
        </div>
        <div
          className={`flex items-center ${
            isPositive ? "stock-up" : "stock-down"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          <span>{isPositive ? "+" : ""}{index.changePercent.toFixed(2)}%</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xl font-semibold">{index.value.toLocaleString('en-IN')}</span>
        <div className={`text-sm ${isPositive ? "stock-up" : "stock-down"}`}>
          {isPositive ? "+" : ""}
          {Math.abs(index.change).toFixed(2)} pts
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
