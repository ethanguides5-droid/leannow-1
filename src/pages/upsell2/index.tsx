import { Lock, ShoppingCart, CheckCircle, X, Zap } from 'lucide-react';
import DevMenu from '../../components/DevMenu';
import Footer from '../../components/Footer';
import { translations } from '../../translations';

function Upsell2() {
  const t = translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <DevMenu />
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-block bg-[#F6A800] text-[#4A4A4A] px-6 py-2 rounded-full mb-6 font-bold uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            PREMIUM UPGRADE AVAILABLE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#4A4A4A] tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '0.08em' }}>
            <span className="text-[#F6A800]">ULTIMATE BUNDLE</span><br />
            MAXIMUM RESULTS PACKAGE
          </h1>
          <p className="text-[#7C8CA1] text-xl md:text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Get 6 Bottles at Our Best Price Ever
          </p>
          <p className="text-[#4A4A4A] text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Biggest Savings - Limited to This Page Only
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#4A4A4A] mb-8">
          <div className="bg-gradient-to-r from-[#F6A800] to-[#F7D96A] text-[#4A4A4A] text-center py-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-8 h-8" fill="#4A4A4A" />
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                UPSELL 2: BEST VALUE BUNDLE
              </p>
              <Zap className="w-8 h-8" fill="#4A4A4A" />
            </div>
            <p className="text-[#4A4A4A] text-lg font-bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Save $180 + FREE Shipping!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex justify-center items-center">
              <div className="bg-[#FAFAFA] rounded-xl p-8 w-full max-w-md border-2 border-[#E6EDF4]">
                <img src="/lean6.png" alt="6 Bottles LeanNow" className="w-full h-80 object-contain" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>$39</span>
                  <span className="text-2xl text-[#7C8CA1] line-through">$79</span>
                </div>
                <p className="text-[#7C8CA1] text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Per Bottle - Exclusive Offer</p>
                <p className="text-[#4A4A4A] text-xl font-bold mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Total: $234 (Save $240!)</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>180 Days Supply</strong> - Full 6 months of thermogenic support
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>FREE Priority Shipping</strong> - Fast delivery guaranteed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>50% OFF Regular Price</strong> - Massive discount
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>60-Day Money Back</strong> - Full refund guarantee
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <strong>VIP Priority Support</strong> - Exclusive customer care
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold text-xl px-8 py-5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 uppercase mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 8px 24px rgba(74,74,74,0.3)' }}
              >
                <Lock className="w-6 h-6" />
                YES! GIVE ME THE BEST DEAL
              </button>

              <button
                onClick={() => window.location.href = '/thankyou'}
                className="w-full bg-transparent hover:bg-[#F8FBFF] text-[#7C8CA1] hover:text-[#4A4A4A] font-semibold text-base px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#E6EDF4]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <X className="w-5 h-5" />
                No thanks, continue without this upgrade
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#4A4A4A] text-white rounded-xl p-8 mb-8 border-2 border-[#F6A800]">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
            <span className="text-[#F6A800]">SMART CUSTOMERS</span> CHOOSE THIS BUNDLE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>$240</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Total savings compared to buying 6 bottles individually
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>6X</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                More effective - consistent 6-month supply for optimal results
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#F6A800] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>FREE</div>
              <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Priority shipping included - normally $29.99 for international delivery
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

export default Upsell2;
