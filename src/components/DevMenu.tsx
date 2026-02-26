import { Eye, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function DevMenu() {
  const [showDevMenu, setShowDevMenu] = useState(false);
  const isDev = import.meta.env.DEV;

  if (!isDev) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setShowDevMenu(!showDevMenu)}
        className="bg-[#F5C843] hover:bg-[#1C3357] text-[#1C3357] hover:text-white font-bold px-6 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-110 uppercase border-2 border-[#1C3357]"
        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}
        title="Dev Preview Menu"
      >
        <Eye className="w-5 h-5" />
        Preview Pages
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDevMenu ? 'rotate-180' : ''}`} />
      </button>

      {showDevMenu && (
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-2xl border-2 border-[#1C3357] overflow-hidden min-w-[200px]">
          <a
            href="/"
            className="block px-6 py-3 text-[#1C3357] hover:bg-[#F5C843] font-semibold transition-colors duration-200 border-b border-[#E6EDF4]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Home
          </a>
          <a
            href="/thankyou"
            className="block px-6 py-3 text-[#1C3357] hover:bg-[#F5C843] font-semibold transition-colors duration-200 border-b border-[#E6EDF4]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Thank You
          </a>
          <a
            href="/upsell1"
            className="block px-6 py-3 text-[#1C3357] hover:bg-[#F5C843] font-semibold transition-colors duration-200 border-b border-[#E6EDF4]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Upsell 1
          </a>
          <a
            href="/upsell2"
            className="block px-6 py-3 text-[#1C3357] hover:bg-[#F5C843] font-semibold transition-colors duration-200 border-b border-[#E6EDF4]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Upsell 2
          </a>
          <a
            href="/upsell3"
            className="block px-6 py-3 text-[#1C3357] hover:bg-[#F5C843] font-semibold transition-colors duration-200"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Upsell 3
          </a>
        </div>
      )}
    </div>
  );
}

export default DevMenu;
