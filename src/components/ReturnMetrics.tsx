
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculatePortfolioMetrics } from "@/utils/stockData";
import { IndianRupee, TrendingDown, TrendingUp } from "lucide-react";

const ReturnMetrics = () => {
  const { totalInvested, currentValue, absoluteReturn, returnPercentage } =
    calculatePortfolioMetrics();
  
  const isPositive = returnPercentage >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Current Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <IndianRupee className="h-5 w-5 mr-1 text-muted-foreground" />
            <span className="text-3xl font-bold">
              {currentValue.toLocaleString("en-IN")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Total investment: ₹{totalInvested.toLocaleString("en-IN")}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Total Returns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            {isPositive ? (
              <TrendingUp className="h-5 w-5 mr-1 text-green-500" />
            ) : (
              <TrendingDown className="h-5 w-5 mr-1 text-red-500" />
            )}
            <span 
              className={`text-3xl font-bold ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {returnPercentage >= 0 ? "+" : ""}
              {returnPercentage.toFixed(2)}%
            </span>
          </div>
          <p 
            className={`text-sm mt-1 ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}₹
            {Math.abs(absoluteReturn).toLocaleString("en-IN")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReturnMetrics;
