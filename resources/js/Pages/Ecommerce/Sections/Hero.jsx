import Gradient from "../../../Components/Gradient.jsx";
import PrimaryButton from "../../../Components/PrimaryButton.jsx";
import SecondaryButton from "../../../Components/SecondaryButton.jsx";

const Hero = () => (
    <section className="mx-auto flex flex-wrap-reverse gap-8 p-10 pt-36 sm:max-w-2xl md:max-w-3xl md:p-14 lg:max-w-6xl lg:gap-0 lg:p-16">
        <div
            role="textbox"
            className="grid max-w-3xl text-center lg:max-w-xl lg:text-left"
        >
            <h1 className="font-['Poppins'] text-3xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
                <Gradient className="inline-block">BanyuService</Gradient>
                <br />
                Solusi Layar Ceria, Tanpa Drama!
            </h1>

            <p className="mt-4 text-lg text-slate-600 md:text-xl lg:text-2xl">
                Layar TV Anda rusak? Jangan biarkan suasana jadi suram!{" "}
                <Gradient>BanyuService</Gradient> hadir untuk menyelamatkan hari
                Anda. Cukup santai di rumah, kami yang datang membawa keajaiban
                untuk TV kesayangan Anda!
            </p>
            <div
                role="group"
                className="mt-8 flex justify-center gap-4 lg:justify-start"
            >
                <PrimaryButton className="w-full md:w-fit lg:w-fit">
                    Pesan Sekarang
                </PrimaryButton>
                <SecondaryButton className="hidden md:flex">
                    Cek Layanan Kami
                </SecondaryButton>
            </div>
        </div>
        <div role="img" className="m-auto">
            <img src="assets/icons/show.gif" className="h-52" />
        </div>
    </section>
);

export default Hero;
