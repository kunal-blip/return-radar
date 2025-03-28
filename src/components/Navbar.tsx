
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          ReturnRadar
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`hover:text-primary-foreground/80 transition-colors ${
              isActive("/") ? "font-semibold" : ""
            }`}
          >
            Markets
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
              Stocks <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-1 bg-white text-foreground rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-44">
              <div className="py-2 px-3 hover:bg-muted cursor-pointer">
                Most Active
              </div>
              <div className="py-2 px-3 hover:bg-muted cursor-pointer">
                Top Gainers
              </div>
              <div className="py-2 px-3 hover:bg-muted cursor-pointer">
                Top Losers
              </div>
            </div>
          </div>
          <Link
            to="/dashboard"
            className={`hover:text-primary-foreground/80 transition-colors ${
              isActive("/dashboard") ? "font-semibold" : ""
            }`}
          >
            Dashboard
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="bg-white text-primary hover:bg-primary-foreground">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-primary-foreground/80"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 px-4 bg-primary text-white">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className={`py-2 hover:bg-primary-foreground/10 px-2 rounded ${
                isActive("/") ? "font-semibold" : ""
              }`}
              onClick={toggleMenu}
            >
              Markets
            </Link>
            <Link
              to="/dashboard"
              className={`py-2 hover:bg-primary-foreground/10 px-2 rounded ${
                isActive("/dashboard") ? "font-semibold" : ""
              }`}
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1" onClick={toggleMenu}>
                <Button variant="outline" className="w-full bg-white text-primary hover:bg-primary-foreground">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1" onClick={toggleMenu}>
                <Button variant="secondary" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
