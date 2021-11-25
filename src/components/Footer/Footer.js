import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

import Logo from '../../logo.png';

export default function Footer () {
    const { t } = useTranslation();

    return (
        <footer className="bg-emerald-600" aria-labelledby="footer-heading" id="contact">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
                <div className="md:grid md:grid-cols-3 md:gap-28">
                    <div className="space-y-4 md:col-span-1">
                        <img
                            className="h-10 rounded-lg"
                            src={ Logo }
                            alt="Cartagena Hostess"
                        />
                        <p className="text-white text-base">
                            { t('footer.desc') }
                        </p>
                    </div>
                    <div className="space-y-8 md:col-span-1">
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{ t('contactUs') }</h3>
                        <ul className="mt-12 space-y-4">
                            <li className="text-white hover:text-blue-gray-900">
                                <a href="tel:+57 302 303 1284">
                                    <PhoneIcon className="h-4 mr-2 inline" />
                                    🇺🇸 +1 954 440 5761
                                </a>
                            </li>
                            <li className="text-white hover:text-blue-gray-900">
                                <a href="tel:+57 302 303 1284">
                                    <PhoneIcon className="h-4 mr-2 inline" />
                                    🇨🇴 +57 302 303 1284
                                </a>
                            </li>
                            <li className="text-white hover:text-blue-gray-900">
                                <a href="tel:+57 300 642 9191">
                                    <PhoneIcon className="h-4 mr-2 inline" />
                                    🇨🇴 +57 300 642 9191
                                </a>
                            </li>
                            <li className="text-white hover:text-blue-gray-900">
                                <a href="mailto:cartagenahostess@gmail.com" rel="noreferrer" target="_blank">
                                    <MailIcon className="h-4 mr-2 inline" />
                                    cartagenahostess@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 py-3 border-t border-blue-gray-50">
                <p className="text-base font-medium text-white px-6 md:text-center">{ t('footer.madeWith') } 👓 { t('footer.by') } <a href="https://twitter.com/vanpacheco08" className="text-blue-gray-100 hover:text-blue-gray-900" rel="noreferrer" target="_blank">@vanpacheco</a></p>
            </div>
        </footer>
    );
}
