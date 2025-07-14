"use client"


import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Foodie Delight</h2>
          <p className="text-green-300 mb-6">
            Bringing the freshest and tastiest food products from farm to table.
            Quality and flavor you can trust.
          </p>
          <address className="not-italic mb-4 text-green-400">
            123 Flavor Street<br />
            Gourmet City, FC 45678<br />
            Phone: +1 (555) 123-4567<br />
            Email: info@foodiedelight.com
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">Our Products</a>
            </li>
            <li>
              <a href="/recipes" className="hover:underline">Recipes</a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com/foodiedelight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.343v21.314C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.324-.6 1.324-1.343V1.343C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/foodiedelight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-green-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-3.179 0-5.515 3.03-4.797 6.045-4.091-.205-7.719-2.164-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.734.199-1.518.232-2.224.084.626 1.956 2.444 3.377 4.6 3.418-2.07 1.623-4.678 2.348-7.29 2.041 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/foodiedelight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-green-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.735 0 8.332.014 7.052.072 5.77.13 4.512.428 3.37 1.57 2.228 2.713 1.93 3.97 1.872 5.252.814 8.333.8 8.735.8 12c0 3.265.014 3.667.072 4.948.058 1.283.355 2.54 1.497 3.682 1.142 1.142 2.4 1.439 3.682 1.497 1.281.058 1.683.072 4.948.072 3.265 0 3.667-.014 4.948-.072 1.283-.058 2.54-.355 3.682-1.497 1.142-1.142 1.439-2.4 1.497-3.682.058-1.281.072-1.683.072-4.948s-.014-3.667-.072-4.948c-.058-1.283-.355-2.54-1.497-3.682C19.54.428 18.283.13 17 .072 15.72.014 15.317 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.164a4.002 4.002 0 1 1 0-8.004 4.002 4.002 0 0 1 0 8.004z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-green-800 text-center py-6 text-green-400 text-sm">
        &copy; {new Date().getFullYear()} Foodie Delight. All rights reserved.
      </div>
    </footer>
  );
}
