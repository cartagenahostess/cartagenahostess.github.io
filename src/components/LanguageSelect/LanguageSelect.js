import { CheckIcon, SelectorIcon, GlobeAltIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

const languages = [
    { id: 1, name: 'English', abbrv: 'en' },
    { id: 2, name: 'Español', abbrv: 'es' },
];

function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function LanguageSelect ({ className }) {
    const { i18n } = useTranslation();
    const [selected, setSelected] = useState(languages.find(l => l.abbrv === i18n.language));

    const changeLanguage = (lng) => {
        setSelected(lng);
        i18n.changeLanguage(lng.abbrv);
    };

    return (
        <Listbox value={ selected } onChange={ changeLanguage }>
            { ({ open }) => (
                <>
                    <Listbox.Label className="sr-only block text-sm font-medium text-gray-700">Language</Listbox.Label>
                    <div className="mt-1 relative">
                        <Listbox.Button className={ `bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ${className}` }>
                            <span className="block truncate"><GlobeAltIcon className="inline h-5 w-5 text-emerald-500 mr-2 relative bottom-0.5" aria-hidden="true" />{ selected?.name }</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={ open }
                            as={ Fragment }
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                { languages.map((lang) => (
                                    <Listbox.Option
                                        key={ lang.id }
                                        className={ ({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-emerald-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={ lang }
                                    >
                                        { ({ selected: selectedOption, active }) => (
                                            <>
                                                <span className={ classNames(selectedOption ? 'font-semibold' : 'font-normal', 'block truncate') }>
                                                    { lang?.name }
                                                </span>

                                                { selectedOption ? (
                                                    <span
                                                        className={ classNames(
                                                            active ? 'text-white' : 'text-emerald-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        ) }
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null }
                                            </>
                                        ) }
                                    </Listbox.Option>
                                )) }
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            ) }
        </Listbox>
    );
}
