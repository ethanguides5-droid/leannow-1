import { Lock, ShoppingCart, CheckCircle, X } from 'lucide-react';
import DevMenu from '../../components/DevMenu';
import Footer from '../../components/Footer';
import { translations } from '../../translations';

function Upsell1() {
  const t = translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <DevMenu />
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-block bg-[#4A4A4A] text-white px-6 py-2 rounded-full mb-6 font-bold uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            SPECIAL ONE-TIME OFFER
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#4A4A4A] tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '0.08em' }}>
            WAIT! <span className="text-[#F6A800]">EXCLUSIVE BONUS</span><br />
            DIGITAL GUIDE BUNDLE
          </h1>
          <p className="text-[#7C8CA1] text-xl md:text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Complete Thermogenic Fat Loss Protocol Bundle
          </p>
          <p className="text-[#4A4A4A] text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Available Only On This Page - Never Offered Again
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#F6A800] mb-8">
          <div className="bg-gradient-to-r from-[#4A4A4A] to-[#5A5A5A] text-white text-center py-6">
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              UPSELL 1: COMPLETE GUIDE BUNDLE
            </p>
            <p className="text-[#F6A800] text-lg mt-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              3 Essential E-Books - Only $49.90!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex justify-center items-center">
              <div className="bg-[#FAFAFA] rounded-xl p-8 w-full max-w-md border-2 border-[#E6EDF4]">
                <img src="/caixas.png" alt="Complete E-Book Bundle" className="w-full h-96 object-contain scale-110" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#F6A800]" style={{ fontFamily: 'Montserrat, sans-serif' }}>$49.90</span>
                  <span className="text-2xl text-[#7C8CA1] line-through">$147</span>
                </div>
                <p className="text-[#7C8CA1] text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Complete Bundle - One-Time Payment</p>
                <p className="text-[#4A4A4A] text-xl font-bold mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Save Over $97 - 66% OFF!</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Fast Track Fat Burn Action Guide</strong> - Accelerate thermogenesis and boost metabolism
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Metabolism Reset Protocol 28 Day</strong> - Complete 28-day plan for maximum fat burning
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Thermogenic Fat Loss Blueprint</strong> - Optimize metabolism and burn stubborn body fat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Instant Digital Access</strong> - Download immediately after purchase
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>One-Time Payment</strong> - Never pay again, yours forever
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold text-xl px-8 py-5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 uppercase mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 8px 24px rgba(74,74,74,0.3)' }}
              >
                <Lock className="w-6 h-6" />
                Add to Order
              </button>

              <button
                onClick={() => window.location.href = '/thankyou'}
                className="w-full bg-transparent hover:bg-[#F8FBFF] text-[#7C8CA1] hover:text-[#4A4A4A] font-semibold text-base px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#E6EDF4]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <X className="w-5 h-5" />
                No thanks, I'll pass on this offer
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#4A4A4A] text-white rounded-xl p-8 mb-8 border-2 border-[#F6A800]">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
            WHY YOU NEED THE <span className="text-[#F6A800]">COMPLETE BUNDLE</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>66%</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                OFF regular price - massive savings on this comprehensive guide bundle
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>28</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Days complete metabolism reset protocol for maximum fat burning results
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>3</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Complete guides covering every aspect of metabolism optimization and fat loss
              </p>
            </div>
          </div>
        </div>

        <Footer
          footerText={t.footerText}
          contactUs={t.contactUs}
          privacyPolicy={t.privacyPolicy}
          returnAddress={t.returnAddress}
          unsubscribe={t.unsubscribe}
          disclaimer={t.disclaimer}
        />
      </div>
    </div>
  );
}

export default Upsell1;
