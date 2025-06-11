import {
  DocumentDownload,
  Facebook,
  Instagram,
  MoreCircle,
  Youtube,
} from "iconsax-react";

import Hand from "@/assets/icons/code_hand.png";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import { Button } from "@/components/ui/button";
import WorkProject from "@/components/work-project";

const Home = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full overflow-auto bg-black text-white px-5">
      <Nav />
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-6 p-2 md:grid md:grid-cols-3 mt-[141%] md:mt-40">
        <div className=" rounded-3xl bg-white/8 p-5 py-6.5 col-span-1 ">
          <img
            src={Hand}
            alt=""
            className="rounded-full object-cover size-full"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-white/80">
            <h1 className="text-4xl font-semibold text-pretty"> Asim Ali</h1>
            <p className="font-medium">Frontend Developer</p>
            <span className="flex items-center justify-center gap-2">
              <Facebook
                className="z-10 size-10 fill-white/50"
                variant={"Outline"}
              />
              <Instagram
                className="z-10 size-10 fill-white/50"
                variant={"Outline"}
              />
              <Youtube
                className="z-10 size-10 fill-white/50"
                variant={"Outline"}
              />
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-6 md:col-span-2 lg:gap-10 lg:p-6">
          <div className="flex flex-col items-start justify-center gap-5 rounded-3xl bg-white/8 p-5 lg:p-10">
            <span className="text-base text-[#8a8691]">Hello There!</span>
            <h1 className="w-full text-lg text-pretty text-white/80 lg:max-w-prose lg:text-4xl">
              I'm Asim Ali, a Frontend Developer bringing designs to life with
              clean, responsive code. I specialize in translating Figma-perfect
              visuals into performant user interfaces.
            </h1>
            <p className="flex items-center justify-center gap-2 text-base text-[#8a8691]">
              <MoreCircle className="size-4 fill-green-500" />
              Available for Freelancing
            </p>
            <Button className="cursor-pointer bg-[#00a988] text-white hover:bg-[#007e64]">
              Download CV
              <DocumentDownload
                className="size-6 fill-white"
                variant={"Bulk"}
              />
            </Button>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl bg-white/8 p-10">
            <h1 className="mx-auto mb-5 flex w-full items-center justify-center text-lg font-semibold text-pretty text-white/80 lg:pl-6 lg:text-2xl">
              Company I worked With
            </h1>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black/50 to-transparent" />

            <div
              className="animate-scroll-left relative flex items-center gap-10 whitespace-nowrap"
              data-animation-repeat="true"
            >
              <span className="text-3xl font-bold text-white/40">
                DigiMark Developers
              </span>
              <span className="text-3xl font-bold text-white/40">
                CodeV Digital
              </span>
              <span className="text-3xl font-bold text-white/40">
                PentaSquard
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[118%] md:mt-10 p-2">
        <WorkProject />
      </div>
      <div className="mt-3 lg:mt-10 p-2">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
