const HowToOrder = () => {
    return (
        <section
            className="relative grid bg-black items-center p-10 md:p-14 lg:p-16 h-96 bg-no-repeat bg-cover"
            style={{
                background: "url(assets/img/tv_repair.jpg) center center",
            }}
        >
            <Line />
            <div className="absolute w-full justify-around flex px-16 -translate-y-20">
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
    <div className={`md:w-72 lg:w-full text-center self-end` + className}>
        <h2 className="font-bold font-['Poppins'] text-xl lg:text-2xl  text-slate-900">
            {title}
        </h2>
        <p className="text-sm lg:text-base text-slate-600">{children}</p>
    </div>
);
const Line = ({ className }) => (
    <div
        className={
            `h-2 rounded w-full bg-clip-border bg-emerald-400 flex justify-around items-center ` +
            className
        }
    >
        <span className="bg-emerald-400 bg-clip-border px-2 rounded-full font-bold text-white border-white border-4">
            1
        </span>
        <span className="bg-emerald-400 px-2 rounded-full font-bold text-white border-white border-4">
            2
        </span>
        <span className="bg-emerald-400 px-2 rounded-full font-bold text-white border-white border-4">
            3
        </span>
    </div>
);

export default HowToOrder;
