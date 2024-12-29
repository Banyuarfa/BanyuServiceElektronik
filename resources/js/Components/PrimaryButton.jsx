const PrimaryButton = ({ children, className = "", to = "/" }) => {
    return (
        <a
            href={to}
            className={
                `bg-sky-500 text-white h-12 px-6 rounded-lg font-semibold flex items-center justify-center hover:-translate-y-1 transition-all hover:bg-sky-400 flex-shrink-0 ` +
                className
            }
        >
            {children}
        </a>
    );
};

export default PrimaryButton;
