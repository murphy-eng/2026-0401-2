import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: '關於德通', path: '/about' },
  { name: '公司沿革', path: '/history' },
  { 
    name: '產品介紹', 
    path: '/products',
    children: [
      { name: '連接器', path: '/products/connectors' },
      { name: '客製化線材', path: '/products/custom-cables' },
    ]
  },
  { name: '產業動態', path: '/news' },
  { name: '聯絡我們', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-white/90 backdrop-blur-xl py-2 shadow-[0_10px_30px_-10px_rgba(0,44,77,0.1)] border-gray-100" 
          : "bg-white py-4 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#005596] tracking-tight">TOKUTSU</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">德通端子股份有限公司</span>
            </div>
          </Link>

          {/* Desktop Menu - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#005596] flex items-center gap-1",
                    location.pathname.startsWith(item.path) ? "text-[#005596]" : "text-gray-600"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {item.children && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 rounded-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#005596]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#005596] p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#005596] hover:bg-gray-50"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-[#005596]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
