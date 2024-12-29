import React from "react";
import BanyuService from "../../../Components/Gradient";
import Gradient from "../../../Components/Gradient";

const Quote = () => {
    return (
        <section className="flex h-screen items-center justify-center bg-slate-900 p-10 md:p-14 lg:p-16">
            <h1 className="text-center font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                "TV rusak? Kami adalah jawabannya! Layanan cepat, praktis, dan
                ramah hanya di <Gradient>BanyuService</Gradient>"
            </h1>
        </section>
    );
};

export default Quote;
