export default function Testimonials() {
  return (
    <section className="py-12 px-8 overflow-hidden md:py-20 lg:py-24" id="testimonials">
      <div className="flex text-center">
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-blue-gray-900 mb-12">Testimonials</h2>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:px-8">
        {/* <svg
          className="absolute top-full right-full transform translate-x-1/2 -translate-y-1/3 lg:translate-x-1/4 xl:-translate-y-1/6"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg> */} 

        <div className="relative shadow-2xl rounded-xl md:mx-8 lg:mx-28 py-6 border border-blue-gray-50">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer className="mt-8 mb-12">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Judith Black</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
