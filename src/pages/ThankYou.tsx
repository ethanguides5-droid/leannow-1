import { CheckCircle, Package, Mail, Heart } from 'lucide-react';
import Footer from '../components/Footer';
import DevMenu from '../components/DevMenu';
import { translations } from '../translations';

function ThankYou() {
  const t = translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <DevMenu />

      <div className="text-center text-sm text-[#7C8CA1] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
        Thank you for ordering from Digistore24 MSLW Limited with Digistore24.<br />
        On your bank statement you will see a charge from Digistore24.
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E6EDF4] mb-12">
          <div className="text-center py-16 px-6">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-[#F6A800] rounded-full flex items-center justify-center">
                <CheckCircle className="w-20 h-20 text-[#4A4A4A]" strokeWidth={3} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
              <span className="text-[#4A4A4A]">THANK YOU FOR</span><br />
              <span className="text-[#4A4A4A]">YOUR </span><span className="text-[#F6A800]">ORDER!</span>
            </h1>
            <p className="text-xl text-[#7C8CA1] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Your journey to <span className="font-bold text-[#4A4A4A]">optimal metabolism</span> and <span className="font-bold text-[#4A4A4A]">thermogenic fat burning</span> starts now!
            </p>
            <a
              href="https://parcelsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-3 uppercase shadow-lg hover:scale-105"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em' }}
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              TRACK ORDER
            </a>
          </div>

          <div className="bg-[#F5F6F7] px-8 py-6 border-t border-[#E6EDF4]">
            <p className="text-center text-[#4A4A4A] text-base" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
              You will receive a <span className="font-bold">confirmation email</span> shortly with your order details and tracking information. Your <span className="font-bold text-[#F6A800]">LEANNOW</span> will be carefully packaged and shipped within <span className="font-bold text-[#4A4A4A]">24-48 hours.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-8 text-center shadow-md border border-[#E6EDF4] hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 bg-[#F5F6F7] rounded-full flex items-center justify-center border-2 border-[#E6EDF4]">
                <Mail className="w-10 h-10 text-[#4A4A4A]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4A4A4A] mb-3 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
              CHECK YOUR<br />EMAIL
            </h3>
            <p className="text-sm text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Confirmation sent to your inbox
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-md border border-[#E6EDF4] hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 bg-[#F5F6F7] rounded-full flex items-center justify-center border-2 border-[#E6EDF4]">
                <Package className="w-10 h-10 text-[#4A4A4A]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4A4A4A] mb-3 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
              FAST SHIPPING
            </h3>
            <p className="text-sm text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Dispatched within 24-48<br />hours
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-md border border-[#E6EDF4] hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 bg-[#F5F6F7] rounded-full flex items-center justify-center border-2 border-[#E6EDF4]">
                <CheckCircle className="w-10 h-10 text-[#4A4A4A]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4A4A4A] mb-3 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
              60-DAY<br />GUARANTEE
            </h3>
            <p className="text-sm text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif' }}>
              100% money-back<br />protection
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#4A4A4A] to-[#5A5A5A] rounded-2xl p-12 mb-12 border-4 border-[#F5C843]">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
              <span className="text-white">WHAT </span><span className="text-[#F6A800]">HAPPENS NEXT?</span>
            </h2>
            <p className="text-white text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Your LEANNOW journey in 3 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#5A5A5A] rounded-xl p-8 text-center border-2 border-[#6A6A6A]">
              <div className="text-[#F6A800] text-6xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>1</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                WE PREPARE
              </h3>
              <p className="text-[#E6EDF4] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your order is carefully packaged with premium materials
              </p>
            </div>

            <div className="bg-[#5A5A5A] rounded-xl p-8 text-center border-2 border-[#6A6A6A]">
              <div className="text-[#F6A800] text-6xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>2</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                WE SHIP
              </h3>
              <p className="text-[#E6EDF4] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Track your package every step of the way to your door
              </p>
            </div>

            <div className="bg-[#5A5A5A] rounded-xl p-8 text-center border-2 border-[#6A6A6A]">
              <div className="text-[#F6A800] text-6xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>3</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                YOU ENJOY
              </h3>
              <p className="text-[#E6EDF4] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Start your journey to better metabolism and vitality
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E6EDF4] p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
              <span className="text-[#4A4A4A]">MAXIMIZE YOUR </span><span className="text-[#F6A800]">RESULTS</span>
            </h2>
            <p className="text-[#7C8CA1] text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
              For best results, take LEANNOW consistently every day. Most users notice improvements in energy and digestive comfort within the first few weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F6F7] rounded-xl p-6 border border-[#E6EDF4]">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#F6A800] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                    DAILY CONSISTENCY
                  </h3>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Take your supplement at the same time each day for optimal absorption
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6F7] rounded-xl p-6 border border-[#E6EDF4]">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#F6A800] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                    HEALTHY LIFESTYLE
                  </h3>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Support your metabolism with balanced nutrition and regular hydration
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6F7] rounded-xl p-6 border border-[#E6EDF4]">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#F6A800] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                    PATIENT COMMITMENT
                  </h3>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Give it time - most benefits appear within 3 months of consistent use
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6F7] rounded-xl p-6 border border-[#E6EDF4]">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#F6A800] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.03em' }}>
                    TRACK PROGRESS
                  </h3>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Notice changes in your energy levels and overall wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Footer
            footerText={t.footerText}
            contactUs={t.contactUs}
            privacyPolicy={t.privacyPolicy}
            returnAddress={t.returnAddress}
            unsubscribe={t.unsubscribe}
          />
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
