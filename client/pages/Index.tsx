import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200 shadow-lg">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f69e8d90559a4450177f60ae025b48d492d345a?width=199"
                alt="Thrive by Design"
                className="w-12 h-12 rounded-full border border-white"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
              <a href="#" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                Who we are
              </a>
              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                What we do
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Funding Options
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact us
              </a>
            </nav>

            {/* CTA Button */}
            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-medium hover:bg-primary/90 transition-colors">
              Thrive Today!
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d03b19e3ed5da535511984151dbb820431f974f?width=3840"
            alt="Modern bedroom interior"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tight mb-8">
            <span
              className="opacity-[0.78]"
              style={{
                textShadow: "1px 1px 3px rgba(93, 93, 93, 1)",
                fontSize: "65px",
              }}
            >
              We design & build places
            </span>
            <br />
            <span style={{ fontSize: "65px" }}>where people thrive</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-12">
            <span className="uppercase tracking-widest text-lg font-bold">
              Know more
            </span>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-8 flex">
          <button className="bg-primary/80 p-4 transition-colors hover:bg-primary">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="bg-black/80 p-4 transition-colors hover:bg-black">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3228c2983d6bf756b29c9edd5c2c1bc128d0c30d?width=1024"
              alt="Interior design team"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-0.5 bg-black"></div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Who are we
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-primary capitalize">
                About us
              </h2>
            </div>

            <p className="text-2xl text-gray-600 mb-6 leading-relaxed">
              We are the full service firm. We take every step with you: from
              real estate to design, construction to operation. Then we give
              back.
            </p>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              We are the full service firm. We take every step with you: from
              real estate to design, construction to operation. Then we give
              back. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo viverra eu volutpat amet, leo non senetus odio dolor. Id
              at urna non portitor etum. Vivera senectus elit dui ultricies
              dolor. Varius nibh velit pellentesque sapien, sapien neque
              dignissim.
            </p>

            <button className="bg-primary text-white px-12 py-4 font-medium hover:bg-primary/90 transition-colors capitalize tracking-wide">
              Start Thriving
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-10">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-0.5 bg-black"></div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">
                Some of our recent works
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white capitalize">
              Our Portfolio
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-6 mb-12">
            {["all", "houses", "interior", "living rooms"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full border border-gray-600 capitalize transition-colors hover:bg-white hover:text-primary ${
                  activeFilter === filter ? "bg-white text-black" : "text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d526ed363d32228017cec61e4706bfe0223de457?width=1058"
              alt="Portfolio item 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f754bae1bf04174221a4a2e097ea233c5d493821?width=1080"
              alt="Portfolio item 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/030a95408f43e9dfa933dac1e844653048af8bed?width=1080"
              alt="Portfolio item 3"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 mx-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-0.5 bg-black"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                What we do
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-primary capitalize">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {[
              {
                number: "01",
                title: "Real Estate Advising",
                description:
                  "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
              },
              {
                number: "02",
                title: "Architectural Design",
                description:
                  "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
              },
              {
                number: "03",
                title: "Construction Management",
                description:
                  "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
              },
              {
                number: "04",
                title: "General Contracting",
                description:
                  "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
              },
              {
                number: "05",
                title: "Get Involved Get Back",
                description:
                  "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
              },
            ].map((service) => (
              <div key={service.number} className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-black text-gray-100 mb-4">
                  {service.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 capitalize">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37d952f3aab81222edfdcf2852cf65dfe66afe08?width=1294"
              alt="Testimonial background"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="text-white mr-10">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-0.5 bg-black"></div>
                <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                  What clients say
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black capitalize">
                Testimonials
              </h2>
            </div>

            <div className="relative">
              <div className="text-8xl text-gray-200 font-playfair leading-none mb-4 -ml-2">
                "
              </div>
              <p className="text-xl font-playfair leading-relaxed mb-8 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat venenatis tempor, turpis dolor. Aliquam faucibus velit,
                volutpat vulputate risus. Urna enim donec sed fringilla blandit
                arcu mi quam semper nunc.
              </p>
              <div>
                <h4 className="text-xl font-bold capitalize tracking-wide">
                  Scott S.
                </h4>
                <p className="text-sm text-gray-300 capitalize tracking-wide">
                  CEO, Abc
                </p>
              </div>
              <div className="text-8xl text-gray-200 font-playfair absolute -bottom-8 -right-2 leading-none">
                "
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 mx-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-0.5 bg-black"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Ready to thrive?
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-primary capitalize">
              Get Started
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {[
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/2c3ed71dbc94ab8f37e0ba452c9c396dd91aa212?width=698",
                title: "Real Estate Advising",
                number: "01",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/b1ecf2bf3d5fc92c9af82af11c558f716cfb6918?width=698",
                title: "Architectural Design",
                number: "02",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/7f006dd80ccdbac8bce2505cf267e95b4015a40d?width=698",
                title: "Construction Management",
                number: "03",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/679d5550b0892c6fa83ad2f4397c10ac52c620bc?width=698",
                title: "General Contracting",
                number: "04",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/f2afb6d9d9292a1d0ea6405f5db25ff237f55ec8?width=698",
                title: "Get Involved Get Back",
                number: "05",
              },
            ].map((project) => (
              <div
                key={project.number}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">
                    {project.number}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Consequat, volutpat morbi tempor elit tellus, ante in
                    mattis. Facilisi morbi ipsum dui aliquet...{" "}
                    <span className="underline">Read More</span>
                  </p>
                  <button className="w-full bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors capitalize">
                    Start Thriving
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Certifications */}
      <section className="py-16 px-4 border-t bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bbd2dccf9445a6373b2ba70bb5809da42f44f8e?width=400"
              alt="Certification 1"
              className="h-16 w-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca7dfb90c8f0a1fd557d21066a7f0c24da25d93?width=626"
              alt="Certification 2"
              className="h-16 w-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/feda2bf8fbbf3990382b1b3396c6d38f85d2e9ae?width=442"
              alt="Certification 3"
              className="h-16 w-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/780c65c37bdea354da83ebf5104ec0b64d650bcb?width=749"
              alt="Certification 4"
              className="h-16 w-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92abf778b19fea9e5f91630922f36add234f8b2?width=486"
              alt="Certification 5"
              className="h-16 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Decorative logo/icon */}
            <div className="mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff9f7ce95e31de1da1d2f403baa6f6f2ef15c315?width=222"
                alt="Newsletter icon"
                className="w-24 h-24 mx-auto lg:mx-0 rounded-full border border-white"
              />
            </div>
          </div>

          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-primary capitalize mb-6">
              Visit our Blog
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our blog to stay updated with super discounts and amazing
              offers. 300+ have already subscribed us.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="enter your email address"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="w-full bg-primary text-white py-4 font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary py-20 px-4 ml-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Company Info */}
          <div className="text-white">
            <div className="mb-8 ml-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-0.5 bg-white"></div>
                <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                  Get in touch
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black capitalize mb-6">
                Thrive by design, LLC
              </h2>
              <p className="text-xl font-bold text-gray-300 mb-8">
                Choose to thrive by Design #choose_thrivebydesign
              </p>
              <p className="text-lg">
                Pennsylvania License PA194391
                <br />
                Philadelphia License 062585
              </p>
            </div>

            <div className="mb-8 ml-10">
              <h3 className="text-2xl font-bold mb-4">Follow us:</h3>
              <div className="flex gap-6">
                <Facebook className="w-8 h-8 text-white hover:text-gray-300 cursor-pointer" />
                <Instagram className="w-8 h-8 text-white hover:text-gray-300 cursor-pointer" />
                <Linkedin className="w-8 h-8 text-white hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Address:</h4>
                  <p className="text-gray-600 underline">
                    100 South Juniper Street, Floor #3
                    <br />
                    Philadelphia, PA, 19109
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Phone:</h4>
                  <p className="text-gray-600">+1 (215) 326-9391</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Email:</h4>
                  <p className="text-gray-600 underline">
                    info@thrivebydesign.co
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Write to Us:</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="your full name*"
                  className="w-full px-6 py-4 border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="your email address*"
                  className="w-full px-6 py-4 border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="your message"
                  rows={5}
                  className="w-full px-6 py-4 border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-primary px-8 py-3 font-medium hover:bg-gray-100 transition-colors capitalize"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 px-4 border-t border-gray-600">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Thrive by Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
