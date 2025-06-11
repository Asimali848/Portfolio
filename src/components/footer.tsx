import { DirectboxReceive } from "iconsax-react";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-6 rounded-3xl bg-white/8 px-5 py-10 lg:p-32">
        <h1 className="w-full text-center text-4xl text-pretty text-white/80 lg:text-5xl lg:leading-[57px]">
          Are You Ready to kickstart your project with a touch of magic?
        </h1>
        <p className="w-full text-center text-lg text-pretty text-[#8a8691] lg:px-24">
          Reach out and let's make it happen ✨. I'm also available for
          full-time or Part-time opportunities to push the boundaries of design
          and deliver exceptional work.
        </p>
        <Button className="cursor-pointer rounded-xl bg-[#00a988] p-6 text-lg text-white hover:bg-[#007e64]">
          Let's Talk{" "}
          <DirectboxReceive className="size-6 fill-white" variant={"Bulk"} />
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
