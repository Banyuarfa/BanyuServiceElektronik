const About = () => {
    return (
        <section className="mt-16 rounded-t-3xl bg-slate-900 p-10 md:p-14 lg:p-16">
            <div className="gap grid gap-x-8 md:grid-cols-2 lg:grid-cols-4">
                <Card
                    img="assets/img/duck.jpeg"
                    title="Teknisi Super Profesional"
                    p="Kami pahlawan layar yang sudah berpengalaman."
                />
                <Card
                    img="assets/img/duck.jpeg"
                    title="Garansi 3 Bulan"
                    p="Kalau rusak lagi (semoga tidak!), kami tangani ulang gratis."
                />
                <Card
                    img="assets/img/duck.jpeg"
                    title="Suku Cadang Ori"
                    p="Selama tersedia, kami hanya pakai yang asli."
                />
                <Card
                    img="assets/img/duck.jpeg"
                    title="Cepat & Praktis"
                    p="Nggak perlu repot, semua selesai di tempat Anda."
                />
                <Card
                    img="assets/img/duck.jpeg"
                    title="Speed, Sure, Smile"
                    p="Cepat datang, pasti beres, dan selalu ramah!"
                    className="md:col-span-2 lg:col-span-4"
                />
            </div>
        </section>
    );
};
const Card = ({ img, title, p, className = "", style }) => (
    <div
        className={
            `row-span-3 mt-8 grid grid-rows-subgrid text-center ` + className
        }
        style={style}
    >
        <img src={img} alt="" className="mx-auto h-48" />
        <h4 className="mb-2 mt-4 justify-self-center font-['Poppins'] text-2xl font-bold text-white">
            {title}
        </h4>
        <p className="text-slate-400">{p}</p>
    </div>
);

export default About;
