import { BiTrip } from 'react-icons/bi';
import { BsTranslate } from 'react-icons/bs';
import { FaHotel, FaTooth, FaUserNurse } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import { IoAirplane } from 'react-icons/io5';
import { MdFaceRetouchingNatural, MdFreeBreakfast, MdOutlineEmojiTransportation, } from 'react-icons/md';
import { useState } from 'react';

import Tabs from '../Tabs';

const medicalTourismFeatures = [
    {
        name: 'Trusted Medical Practitioners',
        description:
            'We will only refer you to healthcare practitioners that we trust and have worked with for years.',
        icon: HiIdentification,
    },
    {
        name: 'Pre & Post-op Care',
        description:
            'We are qualified to provide you with adequate nursing care. Expect to be treated kindly and patiently.',
        icon: FaUserNurse,
    },
    {
        name: 'Dental Work',
        description:
            'Dental prostheses, veneers, smile design... you name it.',
        icon: FaTooth,
    },
    {
        name: 'Cosmetic Treatments',
        description:
            'We offer cosmetic surgical procedures such as face-lift done by professionals we trust.',
        icon: MdFaceRetouchingNatural,
    },
    {
        name: 'Airport Pick Up & Drop Off',
        description:
            'We\'ll pick you up in the Arrivals hall and drop you off at the airport upon departure. If you prefer to be picked up someplace else, feel free to let us know.',
        icon: IoAirplane,
    },
    {
        name: 'Translation',
        description:
            'No Spanish, No Problem. We offer translation services so you can communicate with locals or with your doctors (if need be).',
        icon: BsTranslate,
    },
    {
        name: 'Lodging Suggestions',
        description:
            'Know where to stay and where not to. If you already have a place in mind, feel free to run it by us.',
        icon: FaHotel,
    },
    {
        name: 'Furnished Apartments (Breakftast Included)',
        description:
            'Enjoy free breakfast if you prefer to stay in one of our furnished apartment options.',
        icon: MdFreeBreakfast,
    },
    {
        name: 'Transportation',
        description:
            'Our trusted drivers will pick you up and take you to your destination. Don\'t worry about figuring out public transport nor about crazy taxi fares.',
        icon: MdOutlineEmojiTransportation,
    },
];

const recreationalTourismFeatures = [
    {
        name: 'Airport Pick Up & Drop Off',
        description:
            'We\'ll pick you up in the Arrivals hall and drop you off at the airport upon departure. If you prefer to be picked up someplace else, feel free to let us know.',
        icon: IoAirplane,
    },
    {
        name: 'Translation',
        description:
            'No Spanish, No Problem. We offer translation services so you can communicate with locals.',
        icon: BsTranslate,
    },
    {
        name: 'Lodging Suggestions',
        description:
            'Know where to stay and where not to. If you already have a place in mind, feel free to run it by us.',
        icon: FaHotel,
    },
    {
        name: 'Furnished Apartments (Breakftast Included)',
        description:
            'Enjoy free breakfast if you prefer to stay in one of our furnished apartment options.',
        icon: MdFreeBreakfast,
    },
    {
        name: 'Transportation',
        description:
            'Our trusted drivers will pick you up and take you to your destination. Don\'t worry about figuring out public transport nor about crazy taxi fares.',
        icon: MdOutlineEmojiTransportation,
    },
    {
        name: 'Trips Outside the City',
        description:
            'Whether you want to get a mud bath in El Volcán del Totumo or visit beautiful beaches in nearby coastal cities, we can take you there. Just let us know and we\'ll arrange your transport.',
        icon: BiTrip,
    }
];

export default function Features () {
    const [selectedTab, setSelectedTab] = useState('Medical');
    const features = selectedTab === 'Medical' ? medicalTourismFeatures : recreationalTourismFeatures;

    return (
        <div className="py-12 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center flex items-center flex-col">
                    <Tabs onChange={ setSelectedTab } value={ selectedTab } />
                    <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase mt-8">{ `${selectedTab} Tourism` }</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Our Services
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        { selectedTab === 'Medical' ? "Save money without cutting quality. Let us handle your accomodation and care arrangements so you can focus on healing and wellness." : "Enjoy staying in a romantic, colorful, vibrant coastal city with the useful insights only a local can provide." }
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        { features.map((feature) => (
                            <div key={ feature.name } className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{ feature.name }</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{ feature.description }</dd>
                            </div>
                        )) }
                    </dl>
                </div>
            </div>
        </div>
    );
}
