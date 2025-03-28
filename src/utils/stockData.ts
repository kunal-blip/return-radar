
// Mock data for Indian stocks and indices
export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface IndexData {
  symbol: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface UserInvestment {
  symbol: string;
  name: string;
  investedAmount: number;
  currentValue: number;
  quantity: number;
}

// Main Indian indices
export const indices: IndexData[] = [
  {
    symbol: "NIFTY",
    name: "NIFTY 50",
    value: 22462.5,
    change: 126.3,
    changePercent: 0.57,
  },
  {
    symbol: "SENSEX",
    name: "BSE SENSEX",
    value: 74016.6,
    change: 321.15,
    changePercent: 0.44,
  },
  {
    symbol: "NIFTYBANK",
    name: "NIFTY BANK",
    value: 48125.75,
    change: -156.2,
    changePercent: -0.32,
  },
  {
    symbol: "NIFTYIT",
    name: "NIFTY IT",
    value: 38562.9,
    change: 452.65,
    changePercent: 1.19,
  },
];

// Popular Indian stocks
export const stocks: StockData[] = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    price: 2845.75,
    change: 35.6,
    changePercent: 1.27,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    price: 3968.25,
    change: 42.35,
    changePercent: 1.08,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    price: 1587.5,
    change: -12.8,
    changePercent: -0.8,
  },
  {
    symbol: "INFY",
    name: "Infosys",
    price: 1482.6,
    change: 28.35,
    changePercent: 1.95,
  },
  {
    symbol: "BAJAJFINSV",
    name: "Bajaj Finserv",
    price: 1642.9,
    change: -18.25,
    changePercent: -1.1,
  },
  {
    symbol: "TATAMOTORS",
    name: "Tata Motors",
    price: 921.35,
    change: 15.7,
    changePercent: 1.73,
  },
];

// Mock user investments data
export const mockUserInvestments: UserInvestment[] = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    investedAmount: 85000,
    currentValue: 92400,
    quantity: 32,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    investedAmount: 120000,
    currentValue: 115800,
    quantity: 30,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    investedAmount: 45000,
    currentValue: 47625,
    quantity: 30,
  },
  {
    symbol: "INFY",
    name: "Infosys",
    investedAmount: 70000,
    currentValue: 74130,
    quantity: 50,
  },
];

// Calculate total portfolio metrics
export const calculatePortfolioMetrics = () => {
  const totalInvested = mockUserInvestments.reduce(
    (acc, investment) => acc + investment.investedAmount,
    0
  );
  
  const currentValue = mockUserInvestments.reduce(
    (acc, investment) => acc + investment.currentValue,
    0
  );
  
  const absoluteReturn = currentValue - totalInvested;
  const returnPercentage = (absoluteReturn / totalInvested) * 100;
  
  return {
    totalInvested,
    currentValue,
    absoluteReturn,
    returnPercentage,
  };
};

// Calculate sector breakdown
export const investmentBreakdown = [
  { name: "Technology", value: 45 },
  { name: "Energy", value: 22 },
  { name: "Financial", value: 18 },
  { name: "Manufacturing", value: 15 },
];
