
import Navbar from "@/components/Navbar";
import MarketOverview from "@/components/MarketOverview";
import StockCard from "@/components/StockCard";
import { stocks } from "@/utils/stockData";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Landmark, LineChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Track Your Returns, <br />Not Just Your Investments
                </h1>
                <p className="text-lg mb-6">
                  Monitor the Indian stock market and get insights into your investment returns and breakdown.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button size="lg" variant="secondary" className="font-semibold">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                      Log In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-pulse">
                    <TrendingUp size={32} />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center animate-pulse delay-300">
                    <Landmark size={28} />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
                    <LineChart size={260} className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        <section className="py-10 container mx-auto px-4">
          <MarketOverview />
        </section>

        {/* Top Stocks Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Top Stocks</h2>
              <Button variant="ghost" className="flex items-center">
                View All <ArrowRightCircle size={16} className="ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {stocks.map((stock) => (
                <StockCard key={stock.symbol} stock={stock} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose ReturnRadar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <LineChart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Return-Focused</h3>
              <p className="text-muted-foreground">
                Focus on what matters: your actual returns, not just the amount invested.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Monitor market movements and your portfolio performance with live updates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Landmark size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment Breakdown</h3>
              <p className="text-muted-foreground">
                Visualize your portfolio allocation and identify opportunities for diversification.
              </p>
            </div>
          </div>
        </section>
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

export default Index;
