import Link from "next/link";
import { DollarSign } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  const customerCareLinks = [
    { name: "Help Center", href: "#" },
    { name: "How to Buy", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  const darazLinks = [
    { name: "About Daraz", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Daraz Blog", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Daraz Affiliate Program", href: "#" },
  ];

  return (
    <footer className="bg-[#f4f4f6] pt-12 pb-8 mt-auto text-[#0f136d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-tight text-[#0f136d]">Customer Care</h3>
            <ul className="space-y-3">
              {customerCareLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 text-sm hover:underline hover:text-[#F85606] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Daraz */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-tight text-[#0f136d]">Daraz</h3>
            <ul className="space-y-3">
              {darazLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 text-sm hover:underline hover:text-[#F85606] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods & Verified by */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-tight text-[#0f136d]">Payment Methods</h3>
            <div className="flex flex-wrap gap-2">
              {/* Placeholders for Payment Methods */}
              <div className="w-14 h-9 bg-white border border-gray-200 shadow-sm rounded-md flex items-center justify-center text-xs font-bold text-blue-800">
                Visa
              </div>
              <div className="w-14 h-9 bg-white border border-gray-200 shadow-sm rounded-md flex items-center justify-center text-xs font-bold text-red-600">
                MC
              </div>
              <div className="w-14 h-9 bg-[#e2136e] shadow-sm rounded-md flex items-center justify-center text-[10px] font-bold text-white">
                bKash
              </div>
              <div className="w-14 h-9 bg-[#f7931e] shadow-sm rounded-md flex items-center justify-center text-[10px] font-bold text-white">
                Nagad
              </div>
              <div className="w-14 h-9 bg-white border border-gray-200 shadow-sm rounded-md flex items-center justify-center text-gray-700">
                <DollarSign size={18} />
                <span className="text-[10px] font-bold ml-0.5">COD</span>
              </div>
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4 tracking-tight text-[#0f136d]">Verified by</h3>
            <div className="flex gap-2">
              <div className="h-10 px-4 bg-white border border-gray-200 shadow-sm rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">
                PCI DSS
              </div>
            </div>
          </div>

          {/* Download App & Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-tight text-[#0f136d]">Download App</h3>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="w-10 h-10 border-2 border-black border-dashed flex items-center justify-center">
                  <span className="text-[10px] font-bold text-gray-400">QR</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-8 px-4 bg-black text-white rounded-md flex items-center justify-center text-[11px] font-medium cursor-pointer hover:bg-gray-800 transition-colors">
                  App Store
                </div>
                <div className="h-8 px-4 bg-black text-white rounded-md flex items-center justify-center text-[11px] font-medium cursor-pointer hover:bg-gray-800 transition-colors">
                  Google Play
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-5 tracking-tight text-[#0f136d]">Follow Us</h3>
            <div className="flex gap-3 text-gray-600">
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:text-blue-600 hover:-translate-y-1 transition-all duration-300">
                <FacebookIcon />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:text-pink-600 hover:-translate-y-1 transition-all duration-300">
                <InstagramIcon />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:text-red-600 hover:-translate-y-1 transition-all duration-300">
                <YoutubeIcon />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
                <LinkedinIcon />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 YourStore. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#F85606] transition-colors">Bangladesh</Link>
            <Link href="#" className="hover:text-[#F85606] transition-colors">Pakistan</Link>
            <Link href="#" className="hover:text-[#F85606] transition-colors">Sri Lanka</Link>
            <Link href="#" className="hover:text-[#F85606] transition-colors">Myanmar</Link>
            <Link href="#" className="hover:text-[#F85606] transition-colors">Nepal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
