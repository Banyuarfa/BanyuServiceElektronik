import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Quote from "./Sections/Quote";
import Facts from "./Sections/Facts";
import HowToOrder from "./Sections/HowToOrder";

const Ecommerce = () => {
    return (
        <main>
            <Hero />
            <About />
            <Quote />
            <Services />
            <Facts />
            <HowToOrder />
        </main>
    );
};

export default Ecommerce;
