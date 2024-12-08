import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#252B42] text-white py-16 px-6">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>We Are Hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Licenses</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Column 3: Features */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Business Marketing</li>
            <li>User Analytics</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>iOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>

        {/* Column 5: Get In Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <form className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 text-sm text-white border border-gray-500 rounded-md focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-[#23A6F0] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#1b87c7] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mt-10 pt-4">
        <p className="text-center text-gray-400 text-sm">
          © Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
}
