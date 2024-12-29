const Gradient = ({ children, className = "" }) => (
    <span
        className={
            `text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-rose-500 ` +
            className
        }
    >
        {children}
    </span>
);

export default Gradient;
