

const About = () => {
    return (
        <section className="mt-16 p-10 md:p-14 lg:p-16 bg-slate-900 rounded-t-3xl">
            <div className="grid gap-x-8 gap md:grid-cols-2 lg:grid-cols-4">
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
            `grid grid-rows-subgrid row-span-3 text-center mt-8 ` + className
        }
        style={style}
    >
        <img src={img} alt="" className="h-48 mx-auto" />
        <h4 className="font-['Poppins'] text-2xl font-bold mt-4 mb-2 justify-self-center text-white">
            {title}
        </h4>
        <p className="text-slate-400">{p}</p>
    </div>
);

export default About;
