
import { Card, CardContent } from "@/components/ui/card";
import { StockData } from "@/utils/stockData";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StockCardProps {
  stock: StockData;
}

const StockCard = ({ stock }: StockCardProps) => {
  const isPositive = stock.change >= 0;

  return (
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold">{stock.symbol}</h3>
            <p className="text-sm text-muted-foreground">{stock.name}</p>
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
            <span>
              {isPositive ? "+" : ""}
              {stock.changePercent.toFixed(2)}%
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-semibold">₹{stock.price.toLocaleString('en-IN')}</span>
          <span className={isPositive ? "stock-up" : "stock-down"}>
            {isPositive ? "+" : ""}₹{Math.abs(stock.change).toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;
