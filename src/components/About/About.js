import { useTranslation } from 'react-i18next';

import LisneyPic from './lisney.png';
import EverlisPic from './everlis.png';
import GuillermoPic from './guillermo.png';
import DrGuillermoPic from './drGuillermo.png';

export default function About () {
  const { t } = useTranslation();


  const people = [
    {
      name: 'Lisney Mena Rodríguez',
      role: t('about.lisneyRole'),
      image: LisneyPic,
      bio:
        t('about.lisneyDesc'),
      classNames: 'object-top'
    },
    {
      name: 'Guillermo Sarmiento Aponte',
      role: t('about.guillermoRole'),
      image: GuillermoPic,
      bio:
        t('about.guillermoDesc'),
      classNames: 'object-top'
    },
    {
      name: 'Everlis González Mena',
      role: t('about.everlisRole'),
      image: EverlisPic,
      bio:
        t('about.everlisDesc'),
      classNames: 'object-center'
    },
    {
      name: 'Guillermo Montes',
      role: t('about.guillermoMontesRole'),
      image: DrGuillermoPic,
      bio:
        t('about.guillermoMontesDesc'),
      classNames: 'object-top'
    },
  ];

  return (
    <div className="bg-white" id="about">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{ t('about.title') }</h2>
            <p className="text-xl text-gray-500">
              { t('about.us') }
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
                      <img className={ `object-cover shadow-lg rounded-lg ${person.classNames}` } src={ person.image } alt="" />
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
};
