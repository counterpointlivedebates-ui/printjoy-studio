import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream border-b border-cream-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-navy">
              PrintJoy Studio
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-navy hover:text-sage transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/about" className="text-navy hover:text-sage transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/#products" className="text-navy hover:text-sage transition-colors px-3 py-2 text-sm font-medium">Products</Link>
              <Link to="/contact" className="text-navy hover:text-sage transition-colors px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-navy hover:text-sage transition-colors">
              <ShoppingCart size={24} />
            </button>
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-navy hover:text-sage transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-cream-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-navy hover:bg-cream-dark px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="block text-navy hover:bg-cream-dark px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/#products" className="block text-navy hover:bg-cream-dark px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link to="/contact" className="block text-navy hover:bg-cream-dark px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
