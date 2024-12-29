import React from "react";
import BanyuService from "../../../Components/Gradient";
import Gradient from "../../../Components/Gradient";

const Quote = () => {
    return (
        <section className="flex items-center justify-center bg-slate-900 p-10 md:p-14 lg:p-16 h-screen ">
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center font-['Poppins'] ">
                "TV rusak? Kami adalah jawabannya! Layanan cepat, praktis, dan
                ramah hanya di <Gradient>BanyuService</Gradient>"
            </h1>
        </section>
    );
};

export default Quote;
