import PageHero from "../components/PageHero";

function Contact() {
  return (
    <>
      <PageHero
        subtitle="CONTACT A4AC"
        title="Let's Start Your Next Project."
        description="Whether you're planning a residential home, commercial development or large-scale project, our team is ready to help bring your vision to life."
      />

      <section className="bg-[#F8F8F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          {/* Contact Details */}

          <div>

            <h2 className="mb-8 font-serif text-4xl sm:text-5xl">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Email
                </h3>

                <p className="text-gray-600">
                  info@a4ac.co.za
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +27 11 477 8738
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Office
                </h3>

                <p className="leading-8 text-gray-600">
                  22 Davy Road<br />
                  Industria North<br />
                  Randburg<br />
                  Johannesburg<br />
                  South Africa
                </p>
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=22+Davy+Road+Industria+North+Randburg+Johannesburg"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800"
            >
              Get Directions
            </a>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
              />

              <button
                className="w-full rounded-full bg-black py-4 text-white transition hover:bg-neutral-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Google Map */}

      <section className="bg-white pb-20 lg:pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              title="A4AC Office"
              src="https://www.google.com/maps?q=22+Davy+Road+Industria+North+Randburg+Johannesburg&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;