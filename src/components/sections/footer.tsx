import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-2xl font-bold border p-2">WORDNOX</span>

          <div className="my-5">
            <ul>
              <li className="flex items-center mt-2 cursor-pointer hover:text-gray-200">
                <a
                  href="mailto:info@wordnox.com"
                  className="ml-2 text-slate-200"
                >
                  info@wordnox.com
                </a>
              </li>
              <li className="flex items-center mt-2 cursor-pointer hover:text-gray-200">
                <a href="tel:+233506441493" className="ml-2">
                  +233506441493
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-2xl font-bold">Follow Us</span>
          <div className="flex flex-row mt-5">
            <a
              href="https://www.facebook.com/wordnox"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/wordnox"
              target="_blank"
              rel="noreferrer"
              className="ml-5 text-white cursor-pointer hover:text-gray-200"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
