import { Lock, ShoppingCart, ShieldCheck, CheckCircle, ChevronDown, Truck, Package, Award } from 'lucide-react';
import { useState } from 'react';
import { translations, Translations } from './translations';
import Footer from './components/Footer';
import DevMenu from './components/DevMenu';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const t: Translations = translations.en;

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <DevMenu />
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight text-[#4A4A4A] tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '0.08em' }}>
            {t.headline.split('LEANNOW')[0]}<span className="text-[#F6A800]">LEANNOW</span>{t.headline.split('LEANNOW')[1]}<br />
            {t.subheadline.split('SUPPLIES LAST!')[0]}<span className="text-[#F6A800]">SUPPLIES LAST!</span>
          </h1>
          <p className="text-[#4A4A4A] text-lg md:text-xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Advanced thermogenic fat burner designed to support metabolism and boost thermogenesis
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="https://www.checkout-ds24.com/product/647343"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold text-lg px-12 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}
          >
            <ShoppingCart className="w-6 h-6" />
            {t.buyNowBottle}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#FFFFFF] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#E6EDF4]">
            <div className="bg-gradient-to-r from-[#F6A800] to-[#F7D96A] text-[#4A4A4A] text-center py-3 font-bold text-lg border-b border-[#E6EDF4]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
              {t.bestValue}
            </div>
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold mb-2 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>6 {t.bottles}</h2>
              <p className="text-sm text-[#7C8CA1] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>180 {t.daysSupply}</p>

              <div className="mb-6 flex justify-center bg-[#FAFAFA] rounded-lg p-6" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <img src="/lean6.png" alt="6 Bottles LeanNow" className="w-full h-64 object-contain" />
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-[#F6A800] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $49
                </div>
                <div className="text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.perBottle}</div>
              </div>

              <a
                href="https://www.checkout-ds24.com/product/647346"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold py-4 rounded-lg mb-4 flex items-center justify-center gap-2 transition-all duration-300 uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 4px 12px rgba(74,74,74,0.2)' }}
              >
                <Lock className="w-5 h-5" />
                {t.buyNow}
              </a>

              <div className="text-center space-y-1">
                <p className="font-semibold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{t.biggestDiscount}</p>
                <p className="text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.liverSupport} / 6 {t.months}</p>
                <p className="text-sm text-[#7C8CA1] mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="font-bold text-[#4A4A4A]">$294</span>
                </p>
                <p className="text-sm text-[#F6A800] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>+ USA FREE SHIPPING</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#E6EDF4]">
            <div className="bg-gradient-to-r from-[#F6A800] to-[#F7D96A] text-[#4A4A4A] text-center py-3 font-bold text-lg border-b border-[#E6EDF4]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
              {t.greatSavings}
            </div>
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold mb-2 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>3 {t.bottles}</h2>
              <p className="text-sm text-[#7C8CA1] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>90 {t.daysSupply}</p>

              <div className="mb-6 flex justify-center bg-[#FAFAFA] rounded-lg p-6" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <img src="/lean3.png" alt="3 Bottles LeanNow" className="w-full h-64 object-contain" />
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-[#F6A800] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $69
                </div>
                <div className="text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.perBottle}</div>
              </div>

              <a
                href="https://www.checkout-ds24.com/product/647345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold py-4 rounded-lg mb-4 flex items-center justify-center gap-2 transition-all duration-300 uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 4px 12px rgba(74,74,74,0.2)' }}
              >
                <Lock className="w-5 h-5" />
                {t.buyNow}
              </a>

              <div className="text-center space-y-1">
                <p className="font-semibold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Best Opportunity</p>
                <p className="text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.liverSupport} / 3 {t.months}</p>
                <p className="text-sm text-[#7C8CA1] mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="font-bold text-[#4A4A4A]">$207</span>
                </p>
                <p className="text-sm text-[#F6A800] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>+ USA FREE SHIPPING</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#E6EDF4]">
            <div className="bg-gradient-to-r from-[#F6A800] to-[#F7D96A] text-[#4A4A4A] text-center py-3 font-bold text-lg border-b border-[#E6EDF4]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
              {t.starterPack}
            </div>
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold mb-2 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>1 {t.bottle}</h2>
              <p className="text-sm text-[#7C8CA1] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>30 {t.daysSupply}</p>

              <div className="mb-6 flex justify-center bg-[#FAFAFA] rounded-lg p-6" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <img src="/lean1.png" alt="1 Bottle LeanNow" className="w-full h-64 object-contain" />
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-[#F6A800] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $79
                </div>
                <div className="text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.perBottle}</div>
              </div>

              <a
                href="https://www.checkout-ds24.com/product/647343"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#4A4A4A] hover:bg-[#FF8C00] text-white hover:text-[#4A4A4A] font-bold py-4 rounded-lg mb-4 flex items-center justify-center gap-2 transition-all duration-300 uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 4px 12px rgba(74,74,74,0.2)' }}
              >
                <Lock className="w-5 h-5" />
                {t.buyNow}
              </a>

              <div className="text-center space-y-1">
                <p className="font-semibold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{t.starterPackText}</p>
                <p className="text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.liverSupport} / 1 {t.month}</p>
                <p className="text-sm text-[#7C8CA1] mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="font-bold text-[#4A4A4A]">$79</span>
                </p>
                <p className="text-sm text-[#F6A800] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{t.shipping}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] rounded-lg shadow-xl overflow-hidden max-w-6xl mx-auto border-2 border-[#E6EDF4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="flex justify-center">
              <div className="bg-[#FFFFFF] rounded-lg p-8 w-full max-w-md h-80 flex items-center justify-center border-2 border-[#E6EDF4]">
                <img src="/60dias.png" alt="LeanNow Product" className="w-[115%] h-[115%] object-contain" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#4A4A4A] border-2 border-[#F6A800] rounded-full px-6 py-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#F6A800]" />
                <span className="text-white font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.satisfactionApproved}
                </span>
              </div>

              <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
                {t.guaranteeText}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#FFFFFF] rounded-lg p-4 border-2 border-[#E6EDF4] hover:border-[#FF8C00] transition-colors duration-300 cursor-pointer flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#4A4A4A]" strokeWidth={1.5} />
                    <p className="font-bold text-[#4A4A4A] text-sm uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>{t.freeSample}</p>
                  </div>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.tryItNow}</p>
                </div>

                <div className="bg-[#FFFFFF] rounded-lg p-4 border-2 border-[#E6EDF4] hover:border-[#FF8C00] transition-colors duration-300 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#4A4A4A]" strokeWidth={1.5} />
                    <p className="font-bold text-[#4A4A4A] text-sm uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>{t.fullRefund}</p>
                  </div>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.everyPennyBack}</p>
                </div>

                <div className="bg-[#FFFFFF] rounded-lg p-4 border-2 border-[#E6EDF4] hover:border-[#FF8C00] transition-colors duration-300 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#4A4A4A]" strokeWidth={1.5} />
                    <p className="font-bold text-[#4A4A4A] text-sm uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>{t.thirtyDays}</p>
                  </div>
                  <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{t.plentyOfTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}>
              {t.freeShippingHeadline.split('FREE')[0]}<span className="text-[#F6A800]">FREE Shipping Too!</span>
            </h2>
            <p className="text-[#7C8CA1] text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              {t.customersChoose}
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border-2 border-[#4A4A4A] rounded-full px-6 py-3" style={{ boxShadow: '0 4px 12px rgba(74,74,74,0.15)' }}>
              <Truck className="w-5 h-5 text-[#4A4A4A]" strokeWidth={1.5} />
              <span className="text-[#4A4A4A] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t.saveShipping}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] rounded-lg p-8 border-2 border-[#E6EDF4] hover:border-[#FF8C00] transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F5F6F7] rounded-full flex items-center justify-center border-2 border-[#E6EDF4]">
                  <CheckCircle className="w-8 h-8 text-[#4A4A4A]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] text-center mb-3 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                {t.fastProcessing}
              </h3>
              <p className="text-[#7C8CA1] text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {t.fastProcessingDesc}
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-8 border-2 border-[#E6EDF4] hover:border-[#FF8C00] transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F5F6F7] rounded-full flex items-center justify-center border-2 border-[#E6EDF4]">
                  <Package className="w-8 h-8 text-[#4A4A4A]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] text-center mb-3 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                {t.securePackaging}
              </h3>
              <p className="text-[#7C8CA1] text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {t.securePackagingDesc}
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-8 border-2 border-[#E6EDF4] hover:border-[#FF8C00] transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F5F6F7] rounded-full flex items-center justify-center border-2 border-[#E6EDF4]">
                  <Award className="w-8 h-8 text-[#4A4A4A]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] text-center mb-3 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                {t.premiumService}
              </h3>
              <p className="text-[#7C8CA1] text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {t.premiumServiceDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em' }}>
            {t.faq}
          </h2>

          <div className="space-y-4">
            <div className="bg-[#FFFFFF] rounded-lg overflow-hidden border-2 border-[#E6EDF4]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F6F7] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                  {t.faqQuestion1}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#4A4A4A] transition-transform duration-200 ${
                    openFaq === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-[#7C8CA1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
                    {t.faqAnswer1}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#FFFFFF] rounded-lg overflow-hidden border-2 border-[#E6EDF4]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F6F7] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                  {t.faqQuestion2}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#4A4A4A] transition-transform duration-200 ${
                    openFaq === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-[#7C8CA1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
                    {t.faqAnswer2}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#FFFFFF] rounded-lg overflow-hidden border-2 border-[#E6EDF4]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F6F7] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                  {t.faqQuestion3}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#4A4A4A] transition-transform duration-200 ${
                    openFaq === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-[#7C8CA1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
                    {t.faqAnswer3}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#FFFFFF] rounded-lg overflow-hidden border-2 border-[#E6EDF4]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F6F7] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                  {t.faqQuestion4}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#4A4A4A] transition-transform duration-200 ${
                    openFaq === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-[#7C8CA1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
                    {t.faqAnswer4}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#FFFFFF] rounded-lg overflow-hidden border-2 border-[#E6EDF4]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <button
                onClick={() => toggleFaq(5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F6F7] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                  {t.faqQuestion5}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#4A4A4A] transition-transform duration-200 ${
                    openFaq === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-6">
                  <p className="text-[#7C8CA1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
                    {t.faqAnswer5}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <a
              href="https://drive.google.com/file/d/164XN8WUCW9CUmGGbdCkZ7lpZOJrrRFAJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#4A4A4A] text-white font-bold rounded-full hover:bg-[#FF8C00] hover:text-[#4A4A4A] transition-all duration-300 shadow-lg transform hover:scale-105 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', boxShadow: '0 4px 16px rgba(74,74,74,0.25)' }}
            >
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FFFFFF] rounded-full"></div>
              </div>
              {t.seeOurLabel}
            </a>
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

export default App;
