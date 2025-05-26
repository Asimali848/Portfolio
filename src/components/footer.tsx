import { DirectboxReceive } from "iconsax-react";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-6 rounded-3xl bg-white/8 p-32">
        <h1 className="text-center text-5xl leading-[57px] text-pretty text-white/80">
          Are You Ready to kickstart your project with a touch of magic?
        </h1>
        <p className="px-24 text-center text-lg text-pretty text-[#8a8691]">
          Reach out and let's make it happen ✨. I'm also available for
          full-time or Part-time opportunities to push the boundaries of design
          and deliver exceptional work.
        </p>
        <Button className="cursor-pointer rounded-xl bg-[#00a988] p-6 text-lg hover:bg-[#007e64]">
          Let's Talk{" "}
          <DirectboxReceive
            className="size-6 fill-white text-black"
            variant={"Bulk"}
          />
        </Button>
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between p-5 py-10">
        <span className="text-base font-semibold text-[#8a8691]">
          Copyright @2025, All Rights Reserved.
        </span>
        <span className="text-base font-semibold text-[#8a8691]">
          Crafted with ❤️ Asim Ali
        </span>
      </div>
    </>
  );
};

export default Footer;
