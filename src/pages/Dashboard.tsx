
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IndianRupee, TrendingDown, TrendingUp } from "lucide-react";
import ReturnMetrics from "@/components/ReturnMetrics";
import InvestmentBreakdown from "@/components/InvestmentBreakdown";
import { mockUserInvestments } from "@/utils/stockData";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Dashboard</h1>
            <p className="text-muted-foreground">
              Tracking your portfolio performance
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            Update Investments
          </Button>
        </div>

        <div className="mb-8">
          <ReturnMetrics />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Investments</CardTitle>
                <CardDescription>
                  Current performance of your stock investments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Stock</TableHead>
                      <TableHead>Invested</TableHead>
                      <TableHead>Current Value</TableHead>
                      <TableHead>Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUserInvestments.map((investment) => {
                      const returnValue = investment.currentValue - investment.investedAmount;
                      const returnPercent = (returnValue / investment.investedAmount) * 100;
                      const isPositive = returnValue >= 0;

                      return (
                        <TableRow key={investment.symbol}>
                          <TableCell>
                            <div className="font-medium">{investment.symbol}</div>
                            <div className="text-sm text-muted-foreground">
                              {investment.name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">
                              ₹{investment.investedAmount.toLocaleString("en-IN")}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {investment.quantity} shares
                            </div>
                          </TableCell>
                          <TableCell>
                            ₹{investment.currentValue.toLocaleString("en-IN")}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {isPositive ? (
                                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                              )}
                              <span
                                className={`font-medium ${
                                  isPositive ? "text-green-500" : "text-red-500"
                                }`}
                              >
                                {isPositive ? "+" : ""}
                                {returnPercent.toFixed(2)}%
                              </span>
                            </div>
                            <div
                              className={`text-sm ${
                                isPositive ? "text-green-500" : "text-red-500"
                              }`}
                            >
                              {isPositive ? "+" : ""}
                              ₹{Math.abs(returnValue).toLocaleString("en-IN")}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <InvestmentBreakdown />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your recent market activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="text-sm text-muted-foreground">Yesterday</p>
                <p className="font-medium">Added 10 shares of TCS at ₹3,950.00</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="text-sm text-muted-foreground">3 days ago</p>
                <p className="font-medium">Added 5 shares of Reliance at ₹2,820.50</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="text-sm text-muted-foreground">1 week ago</p>
                <p className="font-medium">Added 15 shares of HDFC Bank at ₹1,575.25</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="text-sm text-muted-foreground">2 weeks ago</p>
                <p className="font-medium">Added 25 shares of Infosys at ₹1,460.75</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-primary/5 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary">ReturnRadar</h3>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ReturnRadar. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
