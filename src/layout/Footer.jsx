function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="font-serif text-4xl">
              A4AC
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Award-winning architects creating innovative,
              sustainable and timeless spaces throughout
              South Africa and across Africa.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Navigation
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Architecture</li>
              <li>Interior Design</li>
              <li>Project Management</li>
              <li>LiDAR Technology</li>
              <li>Sustainable Design</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                info@a4ac.co.za
              </p>

              <p>
                +27 (0)11 477 8738
              </p>

              <p>
                Randburg
                <br />
                Johannesburg
                <br />
                South Africa
              </p>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-gray-800 pt-8">

          <p className="text-center text-gray-500">
            © 2026 A4AC Architects. Website redesign concept created by Qiyaam Moodley.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;