import { MoveRightIcon } from "lucide-react";

const SecondaryButton = ({ children, className = "", to = "/" }) => {
    return (
        <a
            href={to}
            className={
                `text-sky-500 bg-sky-50 h-12 px-6 rounded-lg font-semibold flex items-center hover:-translate-y-1 gap-2 transition-transform hover:text-sky-900 hover:bg-sky-100 flex-shrink-0 ` +
                className
            }
        >
            {children} <MoveRightIcon />
        </a>
    );
};

export default SecondaryButton;
