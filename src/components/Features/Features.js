import { BiTrip } from 'react-icons/bi';
import { BsTranslate } from 'react-icons/bs';
import { FaHotel, FaTooth, FaUserNurse } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import { IoAirplane } from 'react-icons/io5';
import { MdFaceRetouchingNatural, MdFreeBreakfast, MdOutlineApartment, MdOutlineEmojiTransportation, } from 'react-icons/md';
import { useState } from 'react';

import Tabs from '../Tabs';

const medicalTourismFeatures = [
    {
        name: 'Airport Pick Up & Drop Off',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: IoAirplane,
    },
    {
        name: 'Translation',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BsTranslate,
    },
    {
        name: 'Lodging Suggestions',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaHotel,
    },
    {
        name: 'Airbnbs',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MdOutlineApartment,
    },
    {
        name: 'Pre & Post-op Care',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaUserNurse,
    },
    {
        name: 'Trusted Medical Practitioners',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: HiIdentification,
    },
    {
        name: 'Dental Treatment Options',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaTooth,
    },
    {
        name: 'Cosmetic Treatment Options',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MdFaceRetouchingNatural,
    },
    {
        name: 'Transportation',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MdOutlineEmojiTransportation,
    }
];

const recreationalTourismFeatures = [
    {
        name: 'Airport Pick Up & Drop Off',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: IoAirplane,
    },
    {
        name: 'Translation',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BsTranslate,
    },
    {
        name: 'Lodging Suggestions',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaHotel,
    },
    {
        name: 'Airbnbs (Breakftast Included)',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MdFreeBreakfast,
    },
    {
        name: 'Transportation',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MdOutlineEmojiTransportation,
    },
    {
        name: 'Trips Outside of the City',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
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
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
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
