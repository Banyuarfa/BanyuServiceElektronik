import { EyeOffIcon, MonitorXIcon, TvMinimalIcon } from "lucide-react";

const Services = () => {
    return (
        <section className="p-10 md:p-14 lg:p-16 bg-slate-100 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
                icon={<MonitorXIcon />}
                title="Mati Total"
                p="Nggak ada tanda-tanda kehidupan? Kami siap CPR TV Anda!"
            />
            <Card
                icon={<TvMinimalIcon />}
                title="Standby Mode"
                p="Lampu nyala, tapi TV diem aja? Kami tahu triknya!"
            />
            <Card
                icon={<EyeOffIcon />}
                title="Layar Gelap"
                p="Suara ada, gambar nggak kelihatan? Tenang, kami bisa sulap!"
            />
            <Card
                icon={<MonitorXIcon />}
                title="Layar Keriput"
                p="Gambar jadi kayak kain kusut? Serahkan pada kami."
            />
            <Card
                icon={<MonitorXIcon />}
                title="Layar Blank"
                p="Layar kosong? Jangan panik, kami ahli memperbaiki!"
            />
            <Card
                icon={<MonitorXIcon />}
                title="Tidak Ada Suara"
                p="Gambar oke, tapi bisu? Kami akan kasih suaranya balik."
            />
            <Card
                icon={<MonitorXIcon />}
                title="Tidak Dapat Menangkap Siaran"
                p="Mau nonton tapi salurannya hilang? Kami bantu cari!"
                className="md:col-span-2 lg:col-span-3"
            />
        </section>
    );
};

const Card = ({ icon, title, p, className = "" }) => {
    return (
        <div className={`bg-white p-4 rounded-lg ` + className}>
            <div className="bg-slate-200 inline-block p-2 rounded-lg text-3xl">
                {icon}
            </div>
            <h4 className="mt-2 mb-1 font-bold text-slate-900">{title}</h4>
            <p className="text-slate-600 text-sm">{p}</p>
        </div>
    );
};

export default Services;
