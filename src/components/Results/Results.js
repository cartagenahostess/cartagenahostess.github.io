import { useTranslation } from 'react-i18next';

import body1 from './body1.jpeg';
import body2 from './body2.jpeg';
import body3 from './body3.jpeg';
import body4 from './body4.jpeg';
import dental1 from './dental1.jpeg';
import dental2 from './dental2.jpeg';
import dental3 from './dental3.jpeg';
import dental4 from './dental4.jpeg';

const bodyResults = [
    body1, body2, body3, body4,
];

const dentalResults = [
    dental1, dental2, dental3, dental4
];

const displayImage = (result) => (
    <li key={ result }>
        <div className="space-y-4 h-72">
            <div className="aspect-w-3">
                <img className="shadow-lg rounded-lg h-72" src={ result } alt="" />
            </div>
        </div>
    </li>
);

export default function Results () {
    const { t } = useTranslation();

    return (
        <div className="bg-white">
            <div className="mx-auto pt-6 pb-20 px-4 max-w-7xl sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-0">{ t('results') }</h2>
                        <p className="text-xl text-emerald-600 font-semibold tracking-wide uppercase">
                            { t('body') }
                        </p>
                        <ul
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4"
                        >
                            { bodyResults.map((result) => displayImage(result)) }
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <p className="text-xl text-emerald-600 font-semibold tracking-wide uppercase">
                            { t('dental') }
                        </p>
                        <ul
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4"
                        >
                            { dentalResults.map((result) => displayImage(result)) }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
