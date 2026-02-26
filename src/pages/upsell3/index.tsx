import { Lock, ShoppingCart, CheckCircle, X, Gift } from 'lucide-react';
import DevMenu from '../../components/DevMenu';
import Footer from '../../components/Footer';
import { translations } from '../../translations';

function Upsell3() {
  const t = translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <DevMenu />
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#F6A800] to-[#F7D96A] text-[#4A4A4A] px-6 py-2 rounded-full mb-6 font-bold uppercase tracking-wider border-2 border-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            FINAL EXCLUSIVE OFFER
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#4A4A4A] tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '0.08em' }}>
            LAST CHANCE!<br />
            <span className="text-[#F6A800]">SINGLE BOTTLE BONUS</span>
          </h1>
          <p className="text-[#7C8CA1] text-xl md:text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Add Just 1 More Bottle at Special Price
          </p>
          <p className="text-[#4A4A4A] text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Perfect for Travel or Backup Supply
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#F6A800] mb-8">
          <div className="bg-gradient-to-r from-[#4A4A4A] via-[#5A5A5A] to-[#4A4A4A] text-white text-center py-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative z-10 flex items-center justify-center gap-2 mb-2">
              <Gift className="w-8 h-8 text-[#F6A800]" />
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                UPSELL 3: BACKUP BOTTLE
              </p>
            </div>
            <p className="relative z-10 text-[#F6A800] text-lg font-bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Save $20 - Don't Run Out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex justify-center items-center">
              <div className="bg-[#FAFAFA] rounded-xl p-8 w-full max-w-md border-2 border-[#E6EDF4]">
                <img src="/lean1.png" alt="1 Bottle LeanNow" className="w-full h-80 object-contain" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#F6A800]" style={{ fontFamily: 'Montserrat, sans-serif' }}>$59</span>
                  <span className="text-2xl text-[#7C8CA1] line-through">$79</span>
                </div>
                <p className="text-[#7C8CA1] text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Special Add-On Price</p>
                <p className="text-[#4A4A4A] text-xl font-bold mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Total: $59 (Save $20!)</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>30 Days Supply</strong> - Extra month of protection
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Travel Friendly</strong> - Perfect for trips and vacations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>No Additional Shipping</strong> - Ships with your order
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Never Run Out</strong> - Always have backup supply
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>Same Guarantee</strong> - 60-day money back included
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold text-xl px-8 py-5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 uppercase mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 8px 24px rgba(74,74,74,0.3)' }}
              >
                <Lock className="w-6 h-6" />
                YES! ADD BACKUP BOTTLE
              </button>

              <button
                onClick={() => window.location.href = '/thankyou'}
                className="w-full bg-transparent hover:bg-[#F8FBFF] text-[#7C8CA1] hover:text-[#4A4A4A] font-semibold text-base px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#E6EDF4]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <X className="w-5 h-5" />
                No thanks, proceed to checkout
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#4A4A4A] text-white rounded-xl p-8 mb-8 border-2 border-[#F6A800]">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
            WHY ADD AN <span className="text-[#F6A800]">EXTRA BOTTLE</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>$20</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Instant savings - cheaper than buying separately later
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>0$</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                No extra shipping costs - ships free with your current order
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>24/7</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Peace of mind knowing you'll never run out of supply
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
        />
      </div>
    </div>
  );
}

export default Upsell3;
