interface FooterProps {
  footerText: string;
  contactUs: string;
  privacyPolicy: string;
  returnAddress: string;
  unsubscribe: string;
}

function Footer({ footerText, contactUs, privacyPolicy, returnAddress, unsubscribe }: FooterProps) {
  return (
    <footer className="mt-20 pt-12 pb-8 border-t-2 border-[#E6EDF4]" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #F7F9FB)' }}>
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-[#7C8CA1] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
          {footerText}
        </p>

        <div className="flex justify-center gap-6 text-sm mb-6">
          <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-[#FF8C00] transition-colors border-b border-[#F6A800]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            {contactUs}
          </a>
          <a href="/privacy" className="text-[#4A4A4A] hover:text-[#FF8C00] transition-colors border-b border-[#F6A800]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            {privacyPolicy}
          </a>
        </div>

        <div className="space-y-2 text-sm text-[#7C8CA1]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
          <p>{returnAddress}</p>
          <p>{unsubscribe}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
