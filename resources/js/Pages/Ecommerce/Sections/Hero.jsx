import Gradient from "../../../Components/Gradient.jsx";
import PrimaryButton from "../../../Components/PrimaryButton.jsx";
import SecondaryButton from "../../../Components/SecondaryButton.jsx";

const Hero = () => (
    <section className="flex sm:max-w-2xl md:max-w-3xl lg:max-w-6xl flex-wrap-reverse mx-auto p-10 md:p-14 lg:p-16 pt-36 gap-8 lg:gap-0">
        <div
            role="textbox"
            className="grid max-w-3xl text-center lg:text-left lg:max-w-xl"
        >
            <h1 className="font-['Poppins'] lg:text-6xl md:text-5xl text-3xl font-bold text-slate-900">
                <Gradient className="inline-block">BanyuService</Gradient>
                <br />
                Solusi Layar Ceria, Tanpa Drama!
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mt-4">
                Layar TV Anda rusak? Jangan biarkan suasana jadi suram!{" "}
                <Gradient>BanyuService</Gradient> hadir untuk menyelamatkan hari
                Anda. Cukup santai di rumah, kami yang datang membawa keajaiban
                untuk TV kesayangan Anda!
            </p>
            <div
                role="group"
                className="flex justify-center lg:justify-start gap-4 mt-8"
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
