import {
  DocumentDownload,
  Facebook,
  Instagram,
  MoreCircle,
  Youtube,
} from "iconsax-react";

import Hand from "@/assets/icons/code_hand.png";
import Footer from "@/components/footer";
import Nav from "@/components/header";
import { Button } from "@/components/ui/button";
import WorkProject from "@/components/work-project";

const Home = () => {
  return (
    <div className="relative mx-auto h-screen w-full overflow-auto bg-black text-white">
      <Nav />
      <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-3 items-center justify-center p-2">
        <div className="col-span-1 rounded-3xl bg-white/8 p-5">
          <img
            src={Hand}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-semibold"> Asim Ali</h1>
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
        <div className="col-span-2 flex flex-col items-start justify-center gap-10 p-6">
          <div className="flex flex-col items-start justify-center gap-5 rounded-3xl bg-white/8 p-10">
            <span className="text-base text-[#8a8691]">Hello There!</span>
            <h1 className="max-w-prose text-4xl text-pretty">
              I'm Asim Ali, a Frontend Developer bringing designs to life with
              clean, responsive code. I specialize in translating Figma-perfect
              visuals into performant user interfaces.
            </h1>
            <p className="flex items-center justify-center gap-2 text-base text-[#8a8691]">
              <MoreCircle className="size-4 fill-green-500" />
              Available for Freelancing
            </p>
            <Button className="cursor-pointer bg-[#00a988] hover:bg-[#007e64]">
              Download CV
              <DocumentDownload
                className="size-6 fill-white"
                variant={"Bulk"}
              />
            </Button>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl bg-white/8 p-10">
            <h1 className="mb-5 pl-6 text-2xl font-semibold text-pretty">
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
      <WorkProject />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
