const people = [
  {
    name: 'Lisneys Rodríguez',
    role: 'Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio:
      'Meet your hostess. After moving back to Colombia from the United States, I began forming trust relationships with the people who work with me today. Being surrounded by tourists, I have noticed their frequent distrust, and rightly so; most of the time they don\'t have any previous contact with locals before their trip. My goal is to make you feel at home.'
  }
];

export default function About () {
  return (
    <div className="bg-white" id="about">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About Us</h2>
            <p className="text-xl text-gray-500">
              Cartagena Hostess is a project that aims to fill the needs of recreational and medical tourists who want to feel safe and relaxed knowing their trustworthy hostess is there to guide them. We have been helping visitors enjoy a pleasant experience for a couple of years and now we are looking forward to welcoming many more with outstretched arms.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              { people.map((person) => (
                <li key={ person.name } className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={ person.imageUrl } alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{ person.name }</h3>
                          <p className="text-emerald-600">{ person.role }</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{ person.bio }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
