export default function Hero () {
  return <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Experience safe, stress-free</span>{ ' ' }
        <span className="block text-emerald-400 xl:inline">recreational</span>{ ' ' }
        <span className="block xl:inline">or</span>{ ' ' }
        <span className="block text-emerald-400 xl:inline">medical tourism</span>{ ' ' }
        <span className="block xl:inline">in Cartagena, Colombia</span>

      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Interested in traveling for fun or for medical reasons to a city full of colonial heritage? Cartagena Hostess is here to help you each step of the way.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <a
            href="tel:+57 302 303 1284"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
          >
            Contact Us
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#services"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </main>;
};