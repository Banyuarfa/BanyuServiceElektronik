import React from "react";
import Gradient from "../../../Components/Gradient";
const Facts = () => {
    return (
        <section className="grid gap-8 bg-slate-900 p-10 text-sm text-white md:p-14 lg:grid-cols-3 lg:p-16 lg:text-base">
            <p>
                <Gradient className="w-fit font-['Poppins'] text-4xl font-bold md:text-5xl lg:block lg:text-6xl">
                    1.000+
                </Gradient>{" "}
                TV Diperbaiki Kami telah menyelamatkan lebih dari seribu layar,
                dari LED hingga Plasma!
            </p>
            <p>
                <Gradient className="w-fit font-['Poppins'] text-4xl font-bold md:text-5xl lg:block lg:text-6xl">
                    99%
                </Gradient>{" "}
                Pelanggan Bahagia Ulasan bintang lima dari pelanggan yang puas
                dengan hasil kerja kami.
            </p>
            <p>
                <Gradient className="w-fit font-['Poppins'] text-4xl font-bold md:text-5xl lg:block lg:text-6xl">
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
