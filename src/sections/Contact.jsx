<section
  id="contact"
  className="bg-[#F8F8F6] py-28"
></section>
function Contact() {
  return (
    <section className="bg-[#F8F8F6] py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-500">
            Contact
          </p>

          <h2 className="mb-8 font-serif text-5xl">
            Let's Build
            <br />
            Something Great
          </h2>

          <p className="mb-10 max-w-lg text-lg leading-8 text-gray-600">
            Whether you're planning a residential, commercial or mixed-use
            development, our team is ready to bring your vision to life.
          </p>

          <div className="space-y-8">

            <div>
              <h3 className="mb-2 font-semibold">
                Email
              </h3>

              <p className="text-gray-600">
                info@a4ac.co.za
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">
                Phone
              </h3>

              <p className="text-gray-600">
                (+27) 011 477 8738
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">
                Office
              </h3>

              <p className="text-gray-600">
                Johannesburg, South Africa
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <form className="rounded-[32px] bg-white p-10 shadow-xl">

          <div className="mb-6">

            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Smith"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
            />

          </div>

          <div className="mb-6">

            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@email.com"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
            />

          </div>

          <div className="mb-6">

            <label className="mb-2 block font-medium">
              Subject
            </label>

            <input
              type="text"
              placeholder="Project Enquiry"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
            />

          </div>

          <div className="mb-8">

            <label className="mb-2 block font-medium">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-black"
            ></textarea>

          </div>

          <button className="w-full rounded-full bg-black py-4 text-white transition hover:bg-neutral-800">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;