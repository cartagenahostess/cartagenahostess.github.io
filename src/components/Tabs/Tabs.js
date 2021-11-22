function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Tabs ({ onChange, value }) {
    const tabs = [
        { name: 'Recreational', current: value === 'Recreational' },
        { name: 'Medical', current: value === 'Medical' },
    ];

    return (
        <nav className="flex space-x-4" aria-label="Tabs">
            { tabs.map((tab) => (
                <button
                    key={ tab.name }
                    className={ classNames(
                        tab.current ? 'bg-emerald-100 text-emerald-700' : 'text-gray-500 hover:text-gray-700',
                        'px-3 py-2 font-medium text-sm rounded-md'
                    ) }
                    aria-current={ tab.current ? 'page' : undefined }
                    onClick={ () => onChange(tab.name) }
                >
                    { tab.name }
                </button>
            )) }
        </nav>
    );
}
