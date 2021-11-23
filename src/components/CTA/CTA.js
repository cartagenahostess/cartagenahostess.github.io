import { useTranslation } from 'react-i18next';

export default function CTA () {
  const { t } = useTranslation();

  return (
    <div className="bg-emerald-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-gray-900 md:text-4xl">
          <span className="block">{ t('cta.question') }</span>
          <span className="block text-emerald-400">{ t('cta.action') }</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="tel:+57 302 303 1284"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700"
            >
              { t('contactUs') }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
