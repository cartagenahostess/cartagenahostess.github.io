import { BiTrip } from 'react-icons/bi';
import { BsTranslate } from 'react-icons/bs';
import { FaHotel, FaTooth, FaUserNurse } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import { IoAirplane } from 'react-icons/io5';
import { MdFaceRetouchingNatural, MdFreeBreakfast, MdOutlineEmojiTransportation, } from 'react-icons/md';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Tabs from '../Tabs';

export default function Features () {
    const { t } = useTranslation();

    const medicalTourismFeatures = [
        {
            name: t('features.trustedPractitioners'),
            description:
                t('features.trustedPractitionersDesc'),
            icon: HiIdentification,
        },
        {
            name: t('features.prePostCare'),
            description:
                t('features.prePostCareDesc'),
            icon: FaUserNurse,
        },
        {
            name: t('features.dentalWork'),
            description:
                t('features.dentalWorkDesc'),
            icon: FaTooth,
        },
        {
            name: t('features.comesticTreatments'),
            description:
                t('features.comesticTreatmentsDesc'),
            icon: MdFaceRetouchingNatural,
        },
        {
            name: t('features.aiportTransfers'),
            description:
                t('features.aiportTransfersDesc'),
            icon: IoAirplane,
        },
        {
            name: t('features.translation'),
            description:
                t('features.translationDesc'),
            icon: BsTranslate,
        },
        {
            name: t('features.lodging'),
            description:
                t('features.lodgingDesc'),
            icon: FaHotel,
        },
        {
            name: t('features.apartments'),
            description:
                t('features.apartmentsDesc'),
            icon: MdFreeBreakfast,
        },
        {
            name: t('features.transportation'),
            description:
                t('features.transportationDesc'),
            icon: MdOutlineEmojiTransportation,
        },
    ];

    const recreationalTourismFeatures = [
        {
            name: t('features.aiportTransfers'),
            description:
                t('features.aiportTransfersDesc'),
            icon: IoAirplane,
        },
        {
            name: t('features.translation'),
            description:
                t('features.translationForRecreationalTouristsDesc'),
            icon: BsTranslate,
        },
        {
            name: t('features.lodging'),
            description:
                t('features.lodgingDesc'),
            icon: FaHotel,
        },
        {
            name: t('features.apartments'),
            description:
                t('features.apartmentsDesc'),
            icon: MdFreeBreakfast,
        },
        {
            name: t('features.transportation'),
            description:
                t('features.transportationDesc'),
            icon: MdOutlineEmojiTransportation,
        },
        {
            name: t('features.trips'),
            description:
                t('features.tripsDesc'),
            icon: BiTrip,
        }
    ];

    const [selectedTab, setSelectedTab] = useState('Medical');
    const features = selectedTab === 'Medical' ? medicalTourismFeatures : recreationalTourismFeatures;

    return (
        <div className="py-12 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center flex items-center flex-col">
                    <Tabs onChange={ setSelectedTab } value={ selectedTab } />
                    <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase mt-8">{ selectedTab === 'Medical' ? t('features.medicalTourism') : t('features.tourism') }</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        { t('features.title') }
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        { selectedTab === 'Medical' ? t('features.medicalTabDesc') : t('features.recreationalTabDesc') }
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
