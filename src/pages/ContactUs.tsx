import { Mail, ArrowLeft } from 'lucide-react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-white py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#4A4A4A] hover:text-[#F6A800] transition-colors mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>

        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] rounded-lg shadow-xl overflow-hidden border-2 border-[#E6EDF4] p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#4A4A4A] rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-[#F6A800]" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}>
              Contact Us
            </h1>

            <p className="text-[#7C8CA1] text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
              We're here to help with any questions or concerns you may have about LeanNow.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border-2 border-[#E6EDF4] mb-8">
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
              Get in Touch
            </h2>

            <p className="text-[#7C8CA1] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.7' }}>
              For any inquiries, issues, or support related to your order, product information, or our services, please contact us at:
            </p>

            <div className="flex items-center justify-center gap-3 bg-[#F5F6F7] rounded-lg p-6 border-2 border-[#E6EDF4]">
              <Mail className="w-6 h-6 text-[#4A4A4A]" />
              <a
                href="mailto:leannow@contact.com"
                className="text-2xl font-bold text-[#F6A800] hover:text-[#4A4A4A] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                leannow@contact.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-[#E6EDF4]">
              <h3 className="text-lg font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                Orders & Shipping
              </h3>
              <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Questions about your order status, shipping, or delivery
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-[#E6EDF4]">
              <h3 className="text-lg font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                Product Support
              </h3>
              <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Information about LeanNow ingredients, usage, and benefits
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-[#E6EDF4]">
              <h3 className="text-lg font-bold text-[#4A4A4A] mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                Returns & Refunds
              </h3>
              <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                60-day money-back guarantee inquiries and return assistance
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6F7] rounded-lg p-6 border-2 border-[#E6EDF4]">
            <p className="text-[#7C8CA1] text-sm text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Our customer support team typically responds within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
