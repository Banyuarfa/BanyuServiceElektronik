import { EyeOffIcon, MonitorXIcon, TvMinimalIcon } from "lucide-react";

const Services = () => {
    return (
        <section className="grid gap-4 bg-slate-100 p-10 md:grid-cols-2 md:p-14 lg:grid-cols-3 lg:p-16">
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
        <div className={`rounded-lg bg-white p-4 ` + className}>
            <div className="inline-block rounded-lg bg-slate-200 p-2 text-3xl">
                {icon}
            </div>
            <h4 className="mb-1 mt-2 font-bold text-slate-900">{title}</h4>
            <p className="text-sm text-slate-600">{p}</p>
        </div>
    );
};

export default Services;
