import React from "react";
import Gradient from "../../../Components/Gradient";
const Facts = () => {
    return (
        <section className="grid p-10 md:p-14 lg:p-16 bg-slate-900 text-white text-sm lg:text-base lg:grid-cols-3 gap-8">
            <p>
                <Gradient className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl lg:block w-fit">
                    1.000+
                </Gradient>{" "}
                TV Diperbaiki Kami telah menyelamatkan lebih dari seribu layar,
                dari LED hingga Plasma!
            </p>
            <p>
                <Gradient className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl lg:block w-fit">
                    99%
                </Gradient>{" "}
                Pelanggan Bahagia Ulasan bintang lima dari pelanggan yang puas
                dengan hasil kerja kami.
            </p>
            <p>
                <Gradient className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl lg:block w-fit">
                    80%
                </Gradient>{" "}
                Kerusakan TV Selesai di Hari yang Sama! Cepat, efektif, dan
                praktis.
            </p>
        </section>
    );
};

const Fact = () => {
    return <div>Facts</div>;
};

export default Facts;
