const HowToOrder = () => {
    return (
        <section
            className="relative grid h-96 items-center bg-black bg-cover bg-no-repeat p-10 md:p-14 lg:p-16"
            style={{
                background: "url(assets/img/tv_repair.jpg) center center",
            }}
        >
            <Line />
            <div className="absolute flex w-full -translate-y-20 justify-around px-16">
                <Step title="Hubungi Kami">
                    Hubungi kami dan ceritakan masalah TV Anda! Kami akan
                    memberikan respon cepat dan solusi terbaik bagi TV anda!
                </Step>
                <Step title="Atur Jadwal" className="relative translate-y-40">
                    Kami akan membantu Anda menentukan waktu yang paling nyaman
                    untuk kunjungan teknisi. Anda sibuk? Tenang, kami fleksibel!
                </Step>
                <Step title="Teknisi Datang">
                    Teknisi kami akan datang tepat waktu dan langsung
                    memperbaiki TV Anda di tempat. Garansi 3 bulan juga kami
                    berikan!
                </Step>
            </div>
        </section>
    );
};

const Step = ({ children, title = "", className = "" }) => (
    <div className={`self-end text-center md:w-72 lg:w-full` + className}>
        <h2 className="font-['Poppins'] text-xl font-bold text-slate-900 lg:text-2xl">
            {title}
        </h2>
        <p className="text-sm text-slate-600 lg:text-base">{children}</p>
    </div>
);
const Line = ({ className }) => (
    <div
        className={
            `flex h-2 w-full items-center justify-around rounded bg-emerald-400 bg-clip-border ` +
            className
        }
    >
        <span className="rounded-full border-4 border-white bg-emerald-400 bg-clip-border px-2 font-bold text-white">
            1
        </span>
        <span className="rounded-full border-4 border-white bg-emerald-400 px-2 font-bold text-white">
            2
        </span>
        <span className="rounded-full border-4 border-white bg-emerald-400 px-2 font-bold text-white">
            3
        </span>
    </div>
);

export default HowToOrder;
